import React from 'react';

interface Staker {
  address: string;
  amount: string;
}

const stakers: Staker[] = [
  { address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY', amount: '22M Algos' },
  { address: 'WT3VFYZ4T4I5JUNCC93OPRIRWPLGYXTT24AVGMBAVQXFQR2MYIXRKLCOFNQ', amount: '13M Algos' },
  { address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY', amount: '9M Algos' },
  { address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY', amount: '7.2M Algos' },
  { address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY', amount: '5.1M Algos' },
  {
    address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY',
    amount: '943.3K Algos',
  },
  { address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY', amount: '705K Algos' },
  { address: 'UEWIFZXF7V714YG6IHK7WQUTV5K7BEIPLCMGZX2Y57ALZZ1QL2NHJ32B5RXY', amount: '321K Algos' },
];

const StakersList = () => {
  return (
    <div className="font-degular bg-white rounded-2xl p-6 shadow-sm border border-[#C6C5C5]">
      <h2 className="text-[24px] font-normal text-[#000] mb-6">Stakers</h2>
      <div className="space-y-3">
        {stakers.map((staker, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span className="text-sm text-gray-600 font-mono">{staker.address}</span>
            <span className="text-sm font-medium text-gray-400">{staker.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakersList;
