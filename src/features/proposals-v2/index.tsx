'use client';
import { PageMaxWidth } from '@/components/page-max-width';
import { Plus, Search } from 'lucide-react';
import Image from 'next/image';
import { ProposalCard } from './components/proposal-card';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProposalApi, ProposalStatus } from '@/interface/proposal.interface';
import type { Pagination as PaginationType } from '@/interface/pagination.interface';
import { useProposalActions } from '@/actions/proposals';
import ProposalCardSkeleton from './components/proposal-card-skeleton';
import { Pagination } from '@/components/pagination';
import { DeleteModal } from '@/components/ui/delete-modal';
import ProposalsuccessModal from '../proposals/proposals components/success-modal-proposal';
import FailureProposalModal from '../proposals/proposals components/failure-modal-proposal';
import { CreateProposalModal } from '../proposals/proposals components/create-proposal';

interface ProposalsState {
  proposals: ProposalApi[];
  pagination: PaginationType | null;
  loading: boolean;
}

interface ProposalsOverviewProps {
  title: string;
  text: string;
  imgUrl: string;
}

const proposalsOverview: ProposalsOverviewProps[] = [
  {
    title: 'Total Proposals',
    text: '247',
    imgUrl:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1770708375/Frame_1000002795_4_v9wf2k.png',
  },
  {
    title: 'Active Proposals',
    text: '6',
    imgUrl:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1770708258/Frame_1000002795_lwvicm.png',
  },
  {
    title: 'Total Votes Counts',
    text: '12,458',
    imgUrl:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1770708258/Frame_1000002795_2_ah8kvi.png',
  },
  {
    title: 'Participation Rate',
    text: '67.36%',
    imgUrl:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1770708258/Frame_1000002795_3_dzui2y.png',
  },
];

export const ProposalsV2 = () => {
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

  const { getAllProposals, deleteProposal } = useProposalActions();

  // Fetch proposals from API
  const fetchProposals = useCallback(
    async (page: number) => {
      setProposalsState((prev) => ({ ...prev, loading: true }));

      try {
        const response = await getAllProposals({
          page,
          status: status === 'all' ? undefined : (status as ProposalStatus),
          order: 'desc',
        });

        if (response) {
          setProposalsState({
            proposals: response.data || [],
            pagination: response.pagination || null,
            loading: false,
          });
        } else {
          setProposalsState((prev) => ({ ...prev, loading: false }));
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch proposals:', error);
        setProposalsState((prev) => ({ ...prev, loading: false }));
      }
    },
    [status],
  );

  // Fetch proposals whenever currentPage changes
  useEffect(() => {
    fetchProposals(currentPage);
  }, [currentPage, status]);

  // Handlers
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleDeleteClick = useCallback(
    (appId: string) => {
      const proposal = proposalsState.proposals.find((p) => p.appId === appId);
      if (proposal) {
        setSelectedProposal(proposal);
        setShowDeleteModal(true);
      }
    },
    [proposalsState.proposals],
  );

  const handleDelete = useCallback(async () => {
    if (!selectedProposal) return;

    try {
      await deleteProposal(selectedProposal.appId);

      setProposalsState((prev) => ({
        ...prev,
        proposals: prev.proposals.filter((p) => p.appId !== selectedProposal.appId),
      }));

      setShowDeleteModal(false);
      setSelectedProposal(null);
    } catch {
      setShowDeleteModal(false);
      setShowFailureModal(true);
    }
  }, [selectedProposal, deleteProposal]);

  const handleClaimFunding = useCallback(() => {
    setShowSuccessModal(false);
  }, []);

  const handleVoteUpdate = useCallback((updatedProposal: ProposalApi) => {
    setProposalsState((prev) => ({
      ...prev,
      proposals: prev.proposals.map((p) =>
        p.appId === updatedProposal.appId ? updatedProposal : p,
      ),
    }));
  }, []);

  // This avoids filtering on every keystroke while searching.

  function useDebounce<T>(value: T, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredProposals = useMemo(() => {
    if (!debouncedSearch) return proposalsState.proposals;

    const query = debouncedSearch.toLowerCase();

    return proposalsState.proposals.filter(
      (proposal) =>
        proposal.title.toLowerCase().includes(query) ||
        proposal.description?.toLowerCase().includes(query),
    );
  }, [debouncedSearch, proposalsState.proposals]);

  // to check if user is searching
  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen pb-[90px] w-full bg-[#FAFAFA] font-degularDisplay">
      <PageMaxWidth>
        <div className=" mt-[118px]">
          {/* stats-card */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-[60px]">
            {proposalsOverview.map((data, i) => (
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100" key={i}>
                <div className="flex items-center gap-4">
                  <Image
                    src={data.imgUrl}
                    alt={data.title}
                    className="object-cover w-[61px] h-[61px]"
                    width={61}
                    height={61}
                  />
                  <div>
                    <p className="text-sm  mb-1 md:text-[20px]">{data.title}</p>
                    <p className="text-3xl md:text-[32px] font-meduim text-gray-900">{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* main dashboard */}

          <div>
            {/* header section */}
            <div className="mb-8  flex justify-between md:items-center flex-col md:flex-row">
              <h2 className="text-2xl  md:text-[28px] font-semibold  leading-[100%] mb-6">
                Daowakanda proposals
              </h2>

              <div className="flex flex-col min-h-[45px] sm:flex-row gap-4 items-stretch sm:items-center">
                <div className="flex-1 relative w-full lg:w-[536px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F3640] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-[#C6C5C5] rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#C6C5C5] bg-transparent text-[16px] leading-[100%]"
                  />
                </div>
                <button
                  className="bg-gray-900  hover:bg-gray-800 text-white px-6 py-3 rounded-[50px] font-semibold text-[16px] flex items-center justify-center space-x-2 whitespace-nowrap font-degular  "
                  onClick={() => setShowCreateProposalModal(true)}
                  type="button"
                >
                  <Plus className="w-4 h-4" />
                  <span className="leading-[100%]">Create New Proposal</span>
                </button>
              </div>
            </div>

            {/* proposals cards board */}
            <div className="">
              <div className="space-y-4">
                {proposalsState.loading ? (
                  // 1️⃣ LOADING
                  Array.from({ length: 4 }).map((_, index) => <ProposalCardSkeleton key={index} />)
                ) : proposalsState.proposals.length === 0 ? (
                  // 2️⃣ NO DATA AT ALL
                  <div className="text-center text-gray-400 py-12">
                    <p className="text-lg font-medium">No proposals yet</p>
                    <p className="text-sm mt-1">Proposals created in this DAO will appear here.</p>
                  </div>
                ) : filteredProposals.length > 0 ? (
                  // 3️⃣ DATA EXISTS + RESULTS FOUND
                  filteredProposals.map((proposal) => (
                    <ProposalCard
                      key={proposal.appId}
                      proposal={proposal}
                      onDelete={handleDeleteClick}
                      updateProposal={handleVoteUpdate}
                    />
                  ))
                ) : isSearching ? (
                  // 4️⃣ SEARCH ACTIVE BUT NO MATCHES
                  <div className="text-center text-gray-400 py-8">
                    <p className="text-sm">
                      No proposals match <span className="font-medium">"{searchQuery}"</span>
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Pagination */}
          {proposalsState.pagination && filteredProposals.length > 0 && (
            <Pagination
              pagination={proposalsState.pagination}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}

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
        </div>
      </PageMaxWidth>
    </div>
  );
};
