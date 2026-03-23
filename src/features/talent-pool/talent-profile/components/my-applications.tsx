import classNames from 'classnames';

export const MyApplications = () => {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white border border-[#C6C5C5] rounded-2xl">
      <h4 className="text-2xl font-degularDisplay font-medium text-[#231E15]">My Applications</h4>

      <div className="flex flex-col gap-2">
        <ApplicationCard
          title="Cross-chain Bridge Frontend"
          date="Feb 20, 2026"
          status="UNDER_REVIEW"
        />
        <ApplicationCard title="Smart Contract Audit" date="Feb 15, 2026" status="APPROVED" />
        <ApplicationCard title="Tokenomics Dashboard" date="Feb 18, 2026" status="INTERVIEW" />
      </div>
    </div>
  );
};

interface Props {
  title: string;
  date: string;
  status: 'UNDER_REVIEW' | 'INTERVIEW' | 'APPROVED';
}

const ApplicationCard = (props: Props) => {
  const getColors = () => {
    switch (props.status) {
      case 'APPROVED':
        return {
          secondaryColor: '#13C26433',
          primaryColor: '#13C264',
        };
      case 'INTERVIEW':
        return {
          secondaryColor: '#4827FF33',
          primaryColor: '#4827FF',
        };
      default:
        return {
          secondaryColor: '#FFAD0833',
          primaryColor: '#FFAD08',
        };
    }
  };

  const { secondaryColor, primaryColor } = getColors();
  return (
    <div className="p-2 flex items-center justify-between rounded bg-[#F6F6F9]">
      <div className="flex flex-col">
        <h4 className="text-[#231E15] font-degularDisplay text-sm">{props.title}</h4>
        <p className="text-xs font-degularDisplay text-[#ABABAF]">{props.date}</p>
      </div>

      <div
        className={classNames(
          'border flex items-center justify-center px-2 h-[19px] rounded-[50px]',
          'font-degularDisplay text-sm capitalize',
        )}
        style={{
          color: primaryColor,
          borderColor: primaryColor,
          backgroundColor: secondaryColor,
        }}
      >
        <span>{props.status.split('_').join(' ').toLowerCase()}</span>
      </div>
    </div>
  );
};
