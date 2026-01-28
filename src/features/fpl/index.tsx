'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const fplData = [
  {
    id: 1,
    position: '🥇1st Position',
    amount: 1000,
  },
  {
    id: 2,
    position: '🥈2nd Position',
    amount: 500,
    span: 'border-r-4 border-l-4 border-white',
  },
  {
    id: 3,
    position: '🥉3nd Position',
    amount: 300,
  },
];
export default function FPLPage() {
  return (
    <div className="main">
      {/* Main Content */}
      <div className="relative z-0 min-h-screen flex items-center justify-center p-4 mx-5">
        <div className="w-[559px] font-avenir  min-h-[643px]  bg-[#37003C] shadow-2xl rounded-2xl border-[5px] border-[#05FA8540]">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="text-[16px] md:text-[20px] font-black text-green-400 border-r-4 mb-4 leading-tight">
                Join our FPL League and turn your passion into profits every week.
              </h1>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            </div>

            {/* Steps */}
            <div className="mb-4">
              <h2 className="text-white font-semibold mb-4 text-lg">Steps:</h2>
              <ol className="text-white/90 space-y-2 text-sm md:text-base">
                <li>1. Pick your FPL Squad.</li>
                <li>2. Fund your Pera wallet.</li>
                <li>
                  3. Pay a little token of{' '}
                  <span className="text-green-400 font-semibold">10 Algos</span> to be part of the
                  tournament.
                </li>
                <li>
                  4. Join the Telegram Group that would be sent to you after making payment for
                  further information.
                </li>
                <li>5. Use the League Code that will be provided to join the tournament.</li>
              </ol>
            </div>

            {/* Prize Structure */}
            <div className="mb-4 relative  ">
              <div className="bg-white rounded-lg p-1  flex justify-center items-center  h-[32px] mb-4 w-[224px] top-[-17px] absolute left-[30%] ">
                <p className="text-center text-[#37003C] font-semibold py-2 text-sm ">
                  End of The Season Grand Prize:
                </p>
              </div>

              <div className="grid grid-cols-3 mt-5 rounded-lg gap-4 w-[495px] h-[124px] bg-[#64256A]">
                {fplData.map((data) => (
                  <>
                    <div className={` p-4 text-center  flex flex-col justify-center ${data.span}`} key={data.id}>
                      <div className="text-yellow-400 text-[10px] md:text-sm mb-2">
                        {data.position}
                      </div>
                      <div className="text-white font-bold text-[15px] md:text-2xl">
                        {data.amount}
                      </div>
                      <div className="text-white/70 text-xs md:text-sm">(OG NFT include)</div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mb-4">
              <p className="text-white/80 text-sm">
                <span className="font-semibold">Note:</span> 4th to 10th position will share from a
                pool of 200 Algo. Best Manager of the week will receive weekly rewards
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1 bg-white text-purple-900 hover:bg-gray-100 font-semibold py-3 text-base"
                size="lg"
              >
                Make Payment
              </Button>
              <Button
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 text-base"
                size="lg"
              >
                Proceed to Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
