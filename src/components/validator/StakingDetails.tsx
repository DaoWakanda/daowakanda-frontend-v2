import React from 'react';
import DonutChart from './DonutChart';
import StakersList from './StakersList';

interface DetailItemProps {
  label: string;
  value: string;
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="flex justify-between items-start py-2">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-black text-sm font-semibold text-right">{value}</span>
    </div>
  );
}

const StakingDetails = () => {
  return (
    <div className="font-degular bg-white rounded-2xl p-6 shadow-sm border border-[#C6C5C5] h-full">
      <h2 className="text-[24px] font-degular text-[#000] mb-6">Staking Details</h2>

      {/* Chart + Details */}
      <div className="flex items-center gap-5 mb-6">
        <DonutChart />

        <div className="font-degular flex-1 space-y-2">
          <DetailItem label="Address" value="644QQ6...GSDNTY" />
          <DetailItem label="Node Number" value="1" />
          <DetailItem label="Manager" value="4.4.1 rel/stable [7b607ce4] : v1.4.0 [903fd17]" />
          <DetailItem label="Stakers" value="312" />
          <DetailItem label="Epoch Length" value="3,888 blocks" />
        </div>
      </div>

      {/* Stakers List */}
      <StakersList />
    </div>
  );
};

export default StakingDetails;
