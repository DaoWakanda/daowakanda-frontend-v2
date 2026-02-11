import React from 'react';
import { CircleCheckBig, Check, X, ChevronDown } from 'lucide-react';

const DelegationForm = () => {
  return (
    <div className="text-[24px] font-degular text-[#000] bg-white rounded-2xl p-4 shadow-md border border-[#C6C5C5] h-full flex flex-col">
      <h2 className="text-2xl text-black font-normal mb-3">Delegate to this Validator</h2>

      <div className="mb-4">
        <div className="relative text-[#C6C5C5]">
          <input
            type="number"
            placeholder="Enter amount..."
            className="w-full px-4 py-2 pr-24 border border-[#C6C5C5] rounded-lg focus:outline-none "
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <Check className="w-5 h-5" />
            </button>
            <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Your available balance: 50,000 ALGO</p>
      </div>

      <div className="flex items-start gap-2 p-4 bg-green-50 rounded-lg border border-green-100">
        <div className="flex-shrink-0 mt-0.5">
          <CircleCheckBig className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-sm text-[#919094]">
          By delegating, you'll earn approximately 7.2% APY. Delegated tokens can be withdrawn after
          a 7-day unbonding period.
        </p>
      </div>
    </div>
  );
};

export default DelegationForm;
