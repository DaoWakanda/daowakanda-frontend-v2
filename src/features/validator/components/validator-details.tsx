import React from 'react';
interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-black font-semibold text-sm ">{value}</span>
    </div>
  );
}

const ValidatorDetails = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#C6C5C5]">
      <h2 className="text-[24px] font-degular text-[#000] font-normal mb-6">Validator Details</h2>
      <div className="font-degular space-y-0">
        <DetailRow label="Validator ID" value="124" />
        <DetailRow label="Owner" value="IWOME3...Q3X5T4" />
        <DetailRow label="Manager" value="XJOYL2...4EGBEU" />
        <DetailRow label="Commission Account" value="IWOME3...Q3X5T4" />
        <DetailRow label="Minimum Entry Stake" value="100 Algo" />
        <DetailRow label="Max Stake Per Pool" value="70,000,000 Algo" />
        <DetailRow label="Epoch Length" value="3,888 blocks" />
        <DetailRow label="Epoch Length" value="3,888 blocks" />
      </div>
    </div>
  );
};

export default ValidatorDetails;
