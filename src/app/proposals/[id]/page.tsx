import React from 'react';
import ProposalDetailsPage from '@/features/proposal-details-page';

interface ProposalPageProps {
  params: {
    id: string;
  };
}

const ProposalPage = ({ params }: ProposalPageProps) => {
  return <ProposalDetailsPage proposalId={params.id} />;
};

export default ProposalPage;
