import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const BecomeValidator = () => {
  return (
    <div className=" bg-black rounded-2xl py-5 px-4 text-[#919094] gap-10">
      <h2 className="text-2xl text-white font-normal mb-3">Become a Validator</h2>
      <p className="text-gray-300 mb-2 text-[14px]">
        Join our trusted validator pool and earn rewards while securing the network
      </p>

      <div className="space-y-2 mb-2">
        <div className="flex items-center gap-1">
          <CircleCheckBig className="w-3 h-3 text-green-400" />
          <span className="text-[14px]">Active governance participation</span>
        </div>
        <div className="flex items-center gap-1">
          <CircleCheckBig className="w-3 h-3 text-green-500" />
          <span className="text-[14px]">Minimum 10,000 ALGO staked</span>
        </div>
        <div className="flex items-center gap-1">
          <CircleCheckBig className="w-3 h-3 text-green-400" />
          <span className="text-[14px]">Technical infrastructure requirements met</span>
        </div>
      </div>

      <button className="w-full py-3 bg-[#4F5552] text-[#ADADAD] hover:bg-gray-600 rounded-lg font-semibold transition-colors">
        Connect Wallet
      </button>
    </div>
  );
};

export default BecomeValidator;
