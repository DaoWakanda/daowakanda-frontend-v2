'use client';

import { ICreateProfile } from '@/interface/profile.interface';
import { useWallet } from '@txnlab/use-wallet';
import CountrySelect from './country-select';
import StateSelect from './state-select';
import { useCountriesStates } from '@/hooks/useCountriesStates';
import { Loader2 } from 'lucide-react';

interface FormProp {
  handleSubmit: (e: React.FormEvent) => void;
  formData: ICreateProfile;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  loading: boolean;
  allFieldsFilled: boolean;
  setFormData: React.Dispatch<React.SetStateAction<ICreateProfile>>;
}

const FormField = ({
  handleSubmit,
  formData,
  handleChange,
  loading,
  allFieldsFilled,
  setFormData,
}: FormProp) => {
  const { activeAddress } = useWallet();
  const { states, fetchStates, loadingStates } = useCountriesStates();
  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-roboto">
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm text-gray-300 mb-1">
            Full name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-lg bg-[#24252D] text-sm text-white outline-none border-[0.5px]  border-[#49454F] focus:ring-1 focus:ring-[#C5EE4F]"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-gray-300 mb-1">
            Last name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-lg bg-[#24252D] text-sm text-white outline-none focus:ring-1 focus:ring-[#C5EE4F]  border-[0.5px]  border-[#49454F]"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 relative z-50 gap-2">
        <CountrySelect
          value={formData.country}
          onChange={(country) => {
            setFormData((prev) => ({ ...prev, country }));
            fetchStates(country);
          }}
        />

        <StateSelect
          value={formData.stateOfResidence}
          onChange={(state) => setFormData((prev) => ({ ...prev, stateOfResidence: state }))}
          states={states}
          loading={loadingStates}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-lg text-sm bg-[#24252D]  text-white outline-none focus:ring-1 focus:ring-[#C5EE4F]  border-[0.5px]  border-[#49454F]"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="github" className="block text-sm text-gray-300 mb-1">
          Github Link:
        </label>
        <input
          type="text"
          id="github"
          name="githubLink"
          placeholder="Github link"
          className="w-full px-4 py-3 rounded-lg text-sm bg-[#24252D] text-white outline-none focus:ring-1 focus:ring-[#C5EE4F]  border-[0.5px]  border-[#49454F]"
          value={formData.githubLink}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="wallet" className="block text-sm text-gray-300 mb-1">
          Wallet Address:
        </label>
        <input
          type="text"
          id="wallet"
          name="wallet"
          placeholder="0x3f5f3b5bf6fb8f3ef6d9f6f65f6f"
          className="w-full px-4 py-3 text-sm rounded-lg bg-[#24252D] text-white outline-none focus:ring-1 focus:ring-[#C5EE4F]  border-[0.5px]  border-[#49454F]"
          value={activeAddress}
          disabled
        />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 text-[16px]">
        <button
          type="button"
          className="bg-[#A9A9A9] bg-opacity-30 text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-40"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!allFieldsFilled || loading}
          className={`w-full flex items-center justify-center gap-2 text-black font-medium py-3 px-6 rounded-lg transition-all
          ${allFieldsFilled ? 'bg-[#C5EE4F] hover:bg-opacity-90' : 'bg-gray-300 cursor-not-allowed'}
        `}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              Submitting
            </>
          ) : (
            'Proceed'
          )}
        </button>
      </div>
    </form>
  );
};

export default FormField;
