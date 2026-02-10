import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const BecomeValidator = () => {
  return (
    <div className="font-degular bg-black rounded-2xl p-8 text-white">
      <h2 className="text-2xl font-normal mb-3">Become a Validator</h2>
      <p className="text-gray-300 mb-6">
        Join our trusted validator pool and earn rewards while securing the network
      </p>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3">
          <CircleCheckBig className="w-5 h-5 text-green-400" />
          <span className="text-sm">Active governance participation</span>
        </div>
        <div className="flex items-center gap-3">
          <CircleCheckBig className="w-5 h-5 text-green-400" />
          <span className="text-sm">Minimum 10,000 ALGO staked</span>
        </div>
        <div className="flex items-center gap-3">
          <CircleCheckBig className="w-5 h-5 text-green-400" />
          <span className="text-sm">Technical infrastructure requirements met</span>
        </div>
      </div>

      <button className="w-full py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors">
        Connect Wallet
      </button>
    </div>
  );
};

export default BecomeValidator;
