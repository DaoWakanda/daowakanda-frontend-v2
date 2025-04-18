"use client"

import { useState } from "react"
import {  Search, ChevronDown, FilePlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProposals } from "@/hooks/use-proposal"
import { useMobile } from "@/hooks/use-mobile"
import { ProposalCard } from "../proposal-card"
import { DeleteModal } from "@/components/ui/delete-modal"
import LeadershipBoard from "../leadership-board"
import ProposalsuccessModal from "../success-modal-proposal"
import FailureProposalModal from "../failure-modal-proposal"




const ProposalsContent = () => {

  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showFailureModal, setShowFailureModal] = useState(false)
  const [selectedProposal, setSelectedProposal] = useState<any | null>(null)
  const isMobile = useMobile()

  const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage, deleteProposal, voteOnProposal } =
  useProposals()

  const filteredProposals = currentItems
  .filter((proposal) => {
    if (activeTab === "all") return true
    if (activeTab === "in-progress") return proposal.status === "active"
    return proposal.status === activeTab
  })
  .filter(
    (proposal) =>
      proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposal.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  // Handlers
  const handleVote = (proposalId: number, vote: "yes" | "no") => {
    voteOnProposal(proposalId, vote)
  }
  const handleDeleteClick = (proposal: any) => {
    setSelectedProposal(proposal)
    setShowDeleteModal(true)
  }

  const handleDelete = () => {
    if (selectedProposal) {
      deleteProposal(selectedProposal)
      setShowDeleteModal(false)
    }
  }

  const handleClaimFunding = () => {
    setShowSuccessModal(false)
  }
  // Generate pagination items
  const getPaginationItems = () => {
    const items = []

    // Always show first page
    items.push(1)

    // Show dots before middle pages if needed
    if (currentPage > 3) {
      items.push("...")
    }

    // Show one or two pages before current page
    if (currentPage > 2) {
      items.push(currentPage - 1)
    }

    // Show current page if not first or last
    if (currentPage !== 1 && currentPage !== totalPages) {
      items.push(currentPage)
    }

    // Show one page after current page
    if (currentPage < totalPages - 1) {
      items.push(currentPage + 1)
    }

    // Show dots after middle pages if needed
    if (currentPage < totalPages - 2) {
      items.push("...")
    }

    // Always show last page if more than one page
    if (totalPages > 1) {
      items.push(totalPages)
    }

    return items
  }


  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-black font-roboto">
      <div className="lg:w-full ">
            {/* Tabs and Search */}
            {!isMobile && (
              <div className=" hidden md:flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4  h-full">
                <Tabs defaultValue="all" className="w-full md:w-[30%]  " onValueChange={setActiveTab}>
                  <TabsList className="bg-transparent  w-full  flex justify-evenly">
                    <TabsTrigger
                      value="all"
                      className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="in-progress"
                     className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                    >
                      In progress
                    </TabsTrigger>
                    <TabsTrigger
                      value="approved"
                     className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                    >
                      Approved
                    </TabsTrigger>
                    <TabsTrigger
                      value="denied"
                     className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                    >
                      Denied
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex w-full md:w-auto gap-2  ">
                  <div className="relative flex-grow w-[422px] rounded-[32px] bg-[#1B1B1F] overflow-hidden">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#46464A] h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search proposals"
                      className="pl-10 bg-[#1B1B1F] border-none outline-none w-full text-[#46464A] placeholder:text-[#46464A]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button className="bg-[#C7C6CA] hover:bg-gray-700 text-black !rounded-[32px]">
                    <FilePlus  className="h-8 w-7 text-black"/>
                    Create Proposal
                  </Button>
                </div>
              </div>
            )}

            {/* Mobile Filter UI */}
            {isMobile && (
              <div className="flex items-center justify-between gap-4 mb-6  ">
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="!bg-[#1B1B1F] text-[#46464A] border-gray-700 rounded-full px-6 py-6 h-auto  flex justify-between items-center text-xs "
                    >
                      <span>
                        {activeTab === "all"
                          ? "All"
                          : activeTab === "in-progress"
                            ? "In progress"
                            : activeTab === "approved"
                              ? "Approved"
                              : "Denied"}
                      </span>
                      <ChevronDown className="h-5 w-5 ml-2 text-[#46464A]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#1B1B1F] border-gray-700 text-[#46464A] text-xs">
                    <DropdownMenuItem onClick={() => setActiveTab("all")}>All</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveTab("in-progress")}>In progress</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveTab("approved")}>Approved</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveTab("denied")}>Denied</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="relative flex-1  ">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#46464A] h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search proposals"
                    className="pl-12 pr-12 py-6 h-auto bg-[#1B1B1F] placeholder:text-[#46464A] border-none rounded-full "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Button className=" cursor-pointer  p-0 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden">
                  <FilePlus  className="h-6 w-6 text-black"/>
                </Button>
              </div>
            )}
        </div>
             {/* Proposals Grid */}
             <div className="flex relative gap-3 flex-col md:flex-row ">
              <div className=" flex-1  ">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-auto rounded-[32px]  bg-[#19191BCC] p-4  overflow-y-auto backdrop-blur-[20px]">
             {filteredProposals.map((proposal)=>(
              <ProposalCard 
                 id={proposal.id}
                 title={proposal.title}
                 description={proposal.description}
                 status={proposal.status}
                 votingTag={proposal.votingTag}
                 yesPercentage={proposal.yesPercentage}
                 noPercentage={proposal.noPercentage}
                 totalVotes={proposal.totalVotes}
                 createdBy={proposal.createdBy}
                 creatorAvatar={proposal.creatorAvatar}
                 onDelete={handleDeleteClick}
                 timestamp={proposal.timestamp}
                 endsIn={proposal.endsIn}
              />
             ))}
              </div>

              <div className="flex justify-center mt-8">
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 border-gray-700"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {getPaginationItems().map((page, index) => (
                  <Button
                    key={index}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    className={page === currentPage ? "bg-gray-700" : "text-gray-400 border-gray-700"}
                    onClick={() => (typeof page === "number" ? goToPage(page) : null)}
                    disabled={typeof page !== "number"}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 border-gray-700"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
              </div>
              <div className="sticky top-[100px] gap-3 md:w-[25%] h-[550px] flex flex-col">
                  <LeadershipBoard />
              </div>
             </div>

                   {/* Delete Confirmation Modal */}
                   <div>
                   <DeleteModal 
                   onOpenChange={setShowDeleteModal}
                   open={showDeleteModal}
                   onDelete={handleDelete}
                  />
                   </div>


                      {/* Success Modal */}
                      <div>
                        <ProposalsuccessModal 
                        open={showSuccessModal} onOpenChange={setShowSuccessModal}
                        handleClaimFunding={handleClaimFunding}
                        />
                      </div>

                        {/* Failure Modal */}
                        <div>
                          < FailureProposalModal 
                          open={showFailureModal} onOpenChange={setShowFailureModal}
                         
                          />
                        </div>
    

    </div>
  )
}

export default ProposalsContent