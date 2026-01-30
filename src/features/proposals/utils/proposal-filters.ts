import { ProposalApi } from '@/interface/proposal.interface';

export type ProposalTab = 'all' | 'in-progress' | 'approved' | 'denied';

export const filterProposalsByTab = (proposals: ProposalApi[], tab: ProposalTab): ProposalApi[] => {
  if (tab === 'all') return proposals;
  if (tab === 'in-progress') return proposals.filter((proposal) => proposal.ongoing);
  if (tab === 'approved')
    return proposals.filter(
      (proposal) => !proposal.ongoing && proposal.yesVotes.length > proposal.noVotes.length,
    );
  if (tab === 'denied')
    return proposals.filter(
      (proposal) => !proposal.ongoing && proposal.noVotes.length >= proposal.yesVotes.length,
    );

  return proposals;
};

export const filterProposalsBySearch = (
  proposals: ProposalApi[],
  searchQuery: string,
): ProposalApi[] => {
  if (!searchQuery.trim()) return proposals;

  const query = searchQuery.toLowerCase();
  return proposals.filter(
    (proposal) =>
      proposal.title.toLowerCase().includes(query) ||
      proposal.description.toLowerCase().includes(query),
  );
};

export const filterProposals = (
  proposals: ProposalApi[],
  tab: ProposalTab,
  searchQuery: string,
): ProposalApi[] => {
  const filteredByTab = filterProposalsByTab(proposals, tab);
  return filterProposalsBySearch(filteredByTab, searchQuery);
};
