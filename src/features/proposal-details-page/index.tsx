import React from 'react';
import { PageMaxWidth } from '@/components/page-max-width';

const ProposalDetailsPage = () => {
  return (
    <PageMaxWidth>
      <div className="mt-10 w-full font-inter h-full flex flex-col justify-center items-center">
        <div className="mt-[60px] ml:mt-20 w-full md:w-[1026px] h-[240px] rounded-[12px] p-[15px] md:p-[30px] border-[1px] border-white bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623266/Ellipse_3_cpmbt5.png')] bg-cover bg-center">
          <div className="flex items-center text-[#E8F9FF80]">
            <h1 className="text-sm">Governance</h1>
            <p className="ml-2">
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744636481/SVG_kqi79j.png"
                alt="Governance icon"
                className="h-[20px] w-[20px]"
              />
            </p>
            <p className="ml-2 text-sm">Proposal</p>
          </div>
          <div className="w-full mt-2 font-bold text-18 md:text-[22px] text-white">
            J4J #1: Supply Reduction Proposal
          </div>
          <div className="w-full text-[13px] md:text-[15px] text-white mt-3">
            Lorem ipsum dolor sit amet consectetur. Eu facilisi vel auctor diam. Hac condimentum eu
            cursus rhoncus tristique urna malesuada sit. Est donec in non massa ultricies pharetra.
            Nec risus urna odio massa aliquam.
          </div>
          <div className="flex justify-end mt-3">
            <button className="p-[10px] w-full md:w-[15%] rounded-lg bg-[#C5EE4F] text-sm text-[#00484F] font-semibold">
              Proceed to vote
            </button>
          </div>
        </div>
        {/* Cards section*/}
        <div className="mt-5 md:mt-5 w-full h-auto flex flex-col md:flex-row justify-center items-center gap-5">
          {/* Results */}
          <div className="w-full md:w-[326px] h-[250px] border-[0.5px] border-[#8E8E93] rounded-lg bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623317/Ellipse_4_bz10oa.png')] bg-cover bg-center">
            <div className="flex flex-col w-full text-[#E8F9FFF2] p-5">
              <div className="flex gap-24">
                <h1 className="text-[18px] font-bold">Results</h1>
                <p className="text-sm">274,033,926 votes</p>
              </div>

              <div className="mt-5">
                <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full flex animate-pulse">
                    <div
                      className="bg-green-500 transition-all duration-1000"
                      style={{ width: '95%' }}
                    ></div>
                    <div className="bg-gray-400" style={{ width: '3%' }}></div>
                    <div className="bg-red-500" style={{ width: '2%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between">
                  <div className="bg-[#48B748] h-5 w-5 rounded-full">
                    <h1 className="ml-8 ">Approved</h1>
                  </div>
                  <p>260,131,475 (95%)</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className=" h-5 w-5 rounded-full bg-[#AEAEB2] ">
                    <h1 className="ml-8 ">Maybe</h1>
                  </div>
                  <p>9,382,737 (3%)</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="bg-[#FF3B30] h-5 w-5 rounded-full">
                    <h1 className="ml-8 ">Denied</h1>
                  </div>
                  <p>4,519,713 (2%)</p>
                </div>
              </div>
            </div>
          </div>

          {/* progress card */}
          <div className="w-full md:w-[326px] h-[250px] border-[0.5px] border-[#8E8E93] rounded-lg bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623317/Ellipse_4_bz10oa.png')] bg-cover bg-center">
            <div className="flex flex-col w-full text-[#E8F9FFF2] p-5">
              {/*created */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="bg-[#C7F284] w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold">
                    ✓
                  </div>
                  <div className="mt-1 w-0.5 h-6 bg-[#C7F284] rounded-md"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm">Created</h1>
                  <p className="text-[11px] text-[#AEAEB2]">01 August 2024, 03:44:11 PM</p>
                </div>
              </div>
              {/* In progress */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="bg-[#C7F284] w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold">
                    ✓
                  </div>
                  <div className="mt-1 w-0.5 h-6 bg-[#C7F284] rounded-md"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm">In Progress</h1>
                  <p className="text-[11px] text-[#AEAEB2]">01 August 2024, 04:16:01 PM</p>
                </div>
              </div>
              {/* Ended */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="relative w-5 h-5 rounded-full bg-[#23C1AA4D] border-2 border-[#C7F284] flex items-center justify-center">
                    {/* Small inner circle */}
                    <div className="w-2 h-2 rounded-full bg-[#C7F284]"></div>
                  </div>
                  <div className="mt-1 w-0.5 h-5 bg-[#D1D5DB] rounded-md"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm">Ended</h1>
                  <p className="text-[11px] text-[#AEAEB2]">04 August 2024, 04:16:01 PM</p>
                </div>
              </div>
              {/* Queued */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="relative w-5 h-5 rounded-full border-2 border-[D1D5DB]"></div>
                  <div className="mt-1 w-0.5 h-1 bg-[#D1D5DB] rounded-md"></div>
                </div>
                <h1 className="text-sm">Queued</h1>
              </div>
              {/* Executed */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="relative w-5 h-5 rounded-full border-2 border-[D1D5DB]"></div>
                </div>
                <h1 className="text-sm">Executed</h1>
              </div>
            </div>
          </div>
          {/* Status card */}
          <div className="w-full md:w-[326px] h-[250px] border-[0.5px] border-[#8E8E93] rounded-lg bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623317/Ellipse_4_bz10oa.png')] bg-cover bg-center">
            <div className="flex flex-col w-full text-[#E8F9FFF2] p-5">
              <div className="flex gap-3 justify-start items-center">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849335/Vector_4_n9y3zy.png"
                  alt="status"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">Status: </p>
                <div className="border-[1px] border-[#75E0A74D] rounded-full w-[100px] h-auto text-[#75E0A7] text-bold text-center">
                  Approved
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849312/Vector_1_jgfxn9.png"
                  alt="created"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">
                  Created by: <span className="text-white">DLvz...qcWL</span>
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849312/Vector_2_s0rpcx.png"
                  alt="start"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">
                  Start: <span className="text-white">01 August 2024, 16.16 PM </span>
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849312/Vector_3_hxownb.png"
                  alt="end"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">
                  End:<span className="text-white"> 04 August 2024, 16.16 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageMaxWidth>
  );
};

export default ProposalDetailsPage;
