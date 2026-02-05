'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Search, ChevronDown, FilePlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMobile } from '@/hooks/use-mobile';
import { ProposalCard } from '../proposal-card';
import { DeleteModal } from '@/components/ui/delete-modal';
// import LeadershipBoard from '../leadership-board'; // unused import, commented for eslint
import ProposalsuccessModal from '../success-modal-proposal';
import FailureProposalModal from '../failure-modal-proposal';
import { PageMaxWidth } from '@/components/page-max-width';
import { Pagination } from '@/components/pagination';
import { useProposalActions } from '@/actions/proposals';
import type { ProposalApi, ProposalStatus } from '@/interface/proposal.interface';
import type { Pagination as PaginationType } from '@/interface/pagination.interface';
import { filterProposals, type ProposalTab } from '../../utils/proposal-filters';
import { CreateProposalModal } from '../create-proposal';
import { useRouter, useSearchParams } from 'next/navigation';

interface ProposalsState {
  proposals: ProposalApi[];
  pagination: PaginationType | null;
  loading: boolean;
}

const tabLabels = {
  all: 'All',
  IN_PROGRESS: 'In progress',
  APPROVED: 'Approved',
  DENIED: 'Denied',
  denied: 'Denied',
};

const ProposalsContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsState, setProposalsState] = useState<ProposalsState>({
    proposals: [],
    pagination: null,
    loading: false,
  });
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const router = useRouter();

  // Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<ProposalApi | null>(null);
  const [showCreateProposalModal, setShowCreateProposalModal] = useState(false);

  const isMobile = useMobile();
  const { getAllProposals } = useProposalActions();

  const onTabChange = (value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('status', value);
    setCurrentPage(1);
    router.push(`${url.toString()}`);
  }

  // Fetch proposals from API
  const fetchProposals = useCallback(async (page: number) => {
    setProposalsState(prev => ({ ...prev, loading: true }));

    try {
      const response = await getAllProposals({ page, status: status === 'all' ? undefined : status as ProposalStatus, order: 'desc' });

      if (response) {
        setProposalsState({
          proposals: response.data || [],
          pagination: response.pagination || null,
          loading: false,
        });
      } else {
        setProposalsState(prev => ({ ...prev, loading: false }));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch proposals:', error);
      setProposalsState(prev => ({ ...prev, loading: false }));
    }
  }, [status]);

  // Fetch proposals whenever currentPage changes
  useEffect(() => {
    fetchProposals(currentPage);
  }, [currentPage, status]);

  // Handlers
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleDeleteClick = useCallback((appId: string) => {
    const proposal = proposalsState.proposals.find((p) => p.appId === appId);
    if (proposal) {
      setSelectedProposal(proposal);
      setShowDeleteModal(true);
    }
  }, [proposalsState.proposals]);

  const handleDelete = useCallback(() => {
    if (selectedProposal) {
      // TODO: Implement delete functionality
      setShowDeleteModal(false);
      setSelectedProposal(null);
    }
  }, [selectedProposal]);

  const handleClaimFunding = useCallback(() => {
    setShowSuccessModal(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-black font-roboto">
      <PageMaxWidth>
        {/* Tabs & Search */}
        <div className="lg:w-full">
          {!isMobile && (
            <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 h-full">
              <Tabs
                defaultValue={status || 'all'}
                className="w-full md:w-[30%]"
                onValueChange={onTabChange}
                value={status || 'all'}
              >
                <TabsList className="bg-transparent w-full flex justify-evenly">
                  <TabsTrigger
                    value="all"
                    className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="IN_PROGRESS"
                    className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                  >
                    In progress
                  </TabsTrigger>
                  <TabsTrigger
                    value="APPROVED"
                    className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                  >
                    Approved
                  </TabsTrigger>
                  <TabsTrigger
                    value="DENIED"
                    className="text-[#46464A] rounded-none data-[state=active]:!text-[#C5EE4F] data-[state=active]:border-b-2 data-[state=active]:border-lime-500 data-[state=active]:bg-transparent transition-colors duration-200"
                  >
                    Denied
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex w-full md:w-auto gap-2">
                <div className="relative flex-grow w-[422px] rounded-[32px] bg-[#1B1B1F] overflow-hidden">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#46464A] h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search proposals"
                    className="pl-10 bg-[#1B1B1F] border-none outline-none w-full text-[#46464A] placeholder:text-[#46464A]"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  className="bg-[#C7C6CA] hover:bg-gray-700 text-black !rounded-[32px]"
                  onClick={() => setShowCreateProposalModal(true)}
                  type="button"
                >
                  <FilePlus className="h-8 w-7 text-black" /> Create Proposal
                </Button>
              </div>
            </div>
          )}

          {/* Mobile Filter UI */}
          {isMobile && (
            <div className="flex items-center justify-between gap-4 mb-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="!bg-[#1B1B1F] text-[#46464A] border-gray-700 rounded-full px-2 py-2 h-auto flex justify-between items-center text-[10px]"
                    type="button"
                  >
                    <span>{tabLabels[status as ProposalStatus]}</span>
                    <ChevronDown className="h-5 w-5 text-[#46464A]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1B1B1F] border-gray-700 text-[#46464A] text-xs">
                  <DropdownMenuItem onClick={() => onTabChange('all')}>All</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onTabChange('IN_PROGRESS')}>
                    In progress
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onTabChange('APPROVED')}>
                    Approved
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onTabChange('DENIED')}>Denied</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#46464A] h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search proposals"
                  className="pl-12 pr-12 py-6 h-auto bg-[#1B1B1F] placeholder:text-[#46464A] border-none rounded-full"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                className="cursor-pointer p-0 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden"
                onClick={() => setShowCreateProposalModal(true)}
                type="button"
              >
                <FilePlus className="h-6 w-6 text-black" />
              </Button>
            </div>
          )}
        </div>

        {/* Proposals Grid */}
        <div className="flex relative gap-3 flex-col md:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-[32px] bg-[#19191BCC]">
              {proposalsState.proposals.length > 0 ? (
                proposalsState.proposals.map((proposal) => (
                  <ProposalCard
                    key={proposal.appId}
                    proposal={proposal}
                    onDelete={handleDeleteClick}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400 py-8">
                  {proposalsState.loading ? 'Loading proposals...' : 'No proposals found'}
                </div>
              )}
            </div>

            {/* Pagination */}
            {proposalsState.pagination && (
              <Pagination
                pagination={proposalsState.pagination}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          {/* 
          <div className="sticky top-[100px] gap-3 md:w-[25%] h-[550px] flex flex-col">
            <LeadershipBoard />
          </div>
          */}
        </div>

        {/* Modals */}
        <DeleteModal
          open={showDeleteModal}
          onOpenChange={setShowDeleteModal}
          onDelete={handleDelete}
        />
        <ProposalsuccessModal
          open={showSuccessModal}
          onOpenChange={setShowSuccessModal}
          handleClaimFunding={handleClaimFunding}
        />
        <FailureProposalModal open={showFailureModal} onOpenChange={setShowFailureModal} />
        {showCreateProposalModal && (
          <CreateProposalModal
            isActive={showCreateProposalModal}
            onClose={() => setShowCreateProposalModal(false)}
            getAllProposals={() => fetchProposals(currentPage)}
          />
        )}
      </PageMaxWidth>
    </div>
  );
};

export default ProposalsContent;
