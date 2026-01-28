'use client';

import { Button } from '@/components/button';
import { ICreateProfile } from '@/interface/profile.interface';
import { getCountryOptions, getStateOptions } from '@/utils/location';
import { useWallet } from '@txnlab/use-wallet';
import { useMemo } from 'react';

interface FormProp {
  handleSubmit: (e: React.FormEvent) => void;
  formData: ICreateProfile;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  loading: boolean;
}

const FormField = ({ handleSubmit, formData, handleChange, loading }: FormProp) => {
  const { activeAddress } = useWallet();
  const countryOptions = useMemo(() => getCountryOptions(), []);
  const stateOptions = useMemo(() => getStateOptions(formData.country), [formData.country]);

  const canSubmit = useMemo(() => {
    return formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.country.trim() !== '' &&
      formData.stateOfResidence.trim() !== '' &&
      formData.email.trim() !== '';
  }, [formData]);

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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm text-gray-300 mb-1">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="w-full px-4 py-3 rounded-lg text-sm bg-[#24252D] text-white outline-none focus:ring-1 focus:ring-[#C5EE4F] bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E')] bg-no-repeat bg-right pr-4 bg-[length:1em]  border-[0.5px]  border-[#49454F]"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select country
            </option>
            {countryOptions.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="state" className="block text-sm text-gray-300 mb-1">
            State of Residence
          </label>
          <select
            id="state"
            name="stateOfResidence"
            className="w-full px-4 py-3 rounded-lg text-sm bg-[#24252D] text-white outline-none focus:ring-1 focus:ring-[#C5EE4F] bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E')] bg-no-repeat bg-right pr-4 bg-[length:1em]  border-[0.5px]  border-[#49454F]"
            value={formData.stateOfResidence}
            onChange={handleChange}
            disabled={!formData.country}
          >
            <option value="" disabled>
              {formData.country ? 'Select state' : 'Select a country first'}
            </option>
            {formData.country && stateOptions.length === 0 ? (
              <option value="" disabled>
                No states/regions available
              </option>
            ) : (
              stateOptions.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))
            )}
          </select>
        </div>
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
          disabled={loading}
          className="bg-[#A9A9A9] bg-opacity-30 text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-40 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <Button disabled={!canSubmit} loading={loading} type="submit">
          Proceed
        </Button>
      </div>
    </form>
  );
};

export default FormField;
