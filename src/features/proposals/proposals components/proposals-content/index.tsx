"use client"

import { useState } from "react"
import { Check, X, Trash2, Search, FileText, ChevronDown, Plus } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProposals } from "@/hooks/use-proposal"
import { useMobile } from "@/hooks/use-mobile"




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
      deleteProposal(selectedProposal.id)
      setShowDeleteModal(false)
    }
  }

  const handleClaimFunding = () => {
    console.log("Claiming funding")
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
  // / Status badge component
  const StatusBadge = ({ status, timestamp, endsIn }: { status: string; timestamp?: string; endsIn?: string }) => {
    if (status === "active") {
      return (
        <div className="flex justify-between items-center">
          <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded">Active</span>
          {endsIn && <span className="text-yellow-500 text-xs">Ends in {endsIn}</span>}
        </div>
      )
    } else if (status === "approved") {
      return (
        <div className="flex justify-between items-center">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Approved</span>
          {timestamp && <span className="text-green-500 text-xs">{timestamp}</span>}
        </div>
      )
    } else {
      return (
        <div className="flex justify-between items-center">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">Denied</span>
          {timestamp && <span className="text-red-500 text-xs">{timestamp}</span>}
        </div>
      )
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
          
    </div>
  )
}

export default ProposalsContent