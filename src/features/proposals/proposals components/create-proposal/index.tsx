import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BackgroundOverlay } from '@/components/background-overlay';
import { useNotify } from '@/hooks/useNotify';
import { ThreeDots } from 'react-loader-spinner';
import { useWallet } from '@txnlab/use-wallet';
import { useProposalContract } from '@/actions/proposals/proposal.contract';
import { useProposalActions } from '@/actions/proposals';
import { ICreateProposalContract } from '@/interface/proposal.interface';
import toast from 'react-hot-toast';

interface Props {
  isActive: boolean;
  onClose: () => void;
  getAllProposals: () => void;
}

export function CreateProposalModal({
  onClose,
  getAllProposals,
}: Props) {
  const [loading, setLoading] = useState(false);
  const { createProposal, createProposalASA } = useProposalContract();
  const {
    createProposal: create,
    bootstrapProposal,
    validateWalletAddress,
  } = useProposalActions();
  const { notify } = useNotify();
  const { activeAddress } = useWallet();
  const now = Date.now();

  const [data, setData] = useState<ICreateProposalContract>({
    title: '',
    description: '',
    endDate: 0,
  });

  const submit = async () => {
    if (!activeAddress) {
      notify.error('Please connect to a wallet to create a proposal.');
      return;
    }

    setLoading(true);

    toast.loading('Checking if address is eligible to create proposal...', {
      id: 'loader',
    });
    const validationRes = await validateWalletAddress();
    toast.dismiss('loader');

    if (!validationRes?.valid) {
      setLoading(false);
      return;
    }

    toast.loading('Creating proposal...', { id: 'loader' });
    const response = await createProposal(data);
    toast.dismiss('loader');

    if (!response) {
      setLoading(false);
      return;
    }

    notify.success('Proposal created successfully');
    toast.loading('Uploading proposal info...', { id: 'loader' });
    const uploadRes = await create(response);
    toast.dismiss('loader');

    if (!uploadRes) {
      setLoading(false);
      return;
    }

    notify.success('Proposal info uploaded successfully');

    toast.loading('Creating proposal ASA...', { id: 'loader' });
    const createAssetRes = await createProposalASA(uploadRes.appId);
    toast.dismiss('loader');

    if (!createAssetRes) {
      setLoading(false);
      return;
    }

    notify.success('Proposal asset created successfully');

    toast.loading('Uploading updaed proposal info...', { id: 'loader' });

    const uploadAssetRes = await bootstrapProposal({
      appId: uploadRes.appId,
      asaId: createAssetRes.asaId,
    });

    toast.dismiss('loader');

    if (uploadAssetRes) {
      notify.success('Updated proposal info uploaded successfully');
    }

    setLoading(false);
    getAllProposals?.();

    onClose();
  };

  return (
    <>
      <BackgroundOverlay visible onClose={onClose}>
        <div className="flex flex-col justify-start items-start bg-[#101010] text-white rounded-[32px] border border-white w-[90%] md:w-[780px] min-h-[536px] md:min-h-[355px] py-[50px] px-4 md:py-[20px] md:px-[50px] gap-2.5 bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1727834390/Ellipse_3_4_ac08lo.png')] bg-no-repeat bg-cover bg-[70%]">
          <div className="flex items-center justify-end w-full">
            <IoMdClose
              className="bg-white w-6 h-6 rounded-[50px] p-[3px] text-[#5e5e62] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="font-['Space_Grotesk'] text-[22px] md:text-[32px] font-bold">
            Create Proposal
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#919094] font-['Roboto'] text-xs md:text-sm font-normal">
                Proposal Title
              </label>
              <input
                type="text"
                placeholder="Enter Proposal Title..."
                value={data.title}
                onChange={(evt) =>
                  setData((data) => ({
                    ...data,
                    title: evt.target.value,
                  }))
                }
                className="w-full bg-[#2f3033] py-[10px] px-2 rounded-lg outline-none text-[#919094] font-['Roboto'] text-xs md:text-sm font-normal border-none min-h-[36px]"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#919094] font-['Roboto'] text-xs md:text-sm font-normal">
                Proposal Description
              </label>
              <textarea
                name="Proposal Description"
                placeholder="Say something about the proposal..."
                value={data.description}
                onChange={(evt) =>
                  setData((data) => ({
                    ...data,
                    description: evt.target.value,
                  }))
                }
                className="w-full bg-[#2f3033] py-[10px] px-2 rounded-lg outline-none text-[#919094] font-['Roboto'] text-xs md:text-sm font-normal border-none min-h-[200px]"
                required
              ></textarea>
            </div>

            <div className="flex justify-between gap-2 w-full">
              <div className="flex justify-between w-full gap-2">
                <div className="flex flex-col gap-2 text-[#919094] font-['Roboto'] text-xs md:text-sm font-normal w-full">
                  <label>End Date</label>
                  <input
                    type="datetime-local"
                    onChange={(evt) => {
                      const date = new Date(evt.target.value);
                      const dateUnix = date.valueOf();

                      if (dateUnix < now) {
                        notify.error('End date cannot be in the past');
                        return;
                      }

                      setData((data) => ({
                        ...data,
                        endDate: dateUnix,
                      }));
                    }}
                    className="bg-[#2f3033] min-h-[36px] py-[10px] px-2 rounded-lg border-none outline-none w-full text-[#919094]"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              className="flex items-center justify-center mt-2.5 bg-[#c5ee4f] min-h-[56px] rounded-[50px] py-4 text-center cursor-pointer text-[#002201] font-['Space_Grotesk'] text-base font-bold w-full outline-none border-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!data.title || !data.description || data.endDate < now}
              onClick={submit}
            >
              {loading && (
                <ThreeDots
                  visible={true}
                  height="30"
                  width="80"
                  color="#fff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )}
              {loading ? `Submitting Proposal...` : `Submit Proposal`}
            </button>
          </div>
        </div>
      </BackgroundOverlay>
    </>
  );
}
