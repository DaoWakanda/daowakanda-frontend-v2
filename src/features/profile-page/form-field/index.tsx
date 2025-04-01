'use client';

import { ICreateProfile } from '@/interface/profile.interface';

interface FormProp {
  handleSubmit: (e: React.FormEvent) => void;
  formData: ICreateProfile;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormField = ({ handleSubmit, formData, handleChange }: FormProp) => {
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
            <option value="" disabled selected>
              Select country
            </option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="state" className="block text-sm text-gray-300 mb-1">
            State of Residence
          </label>
          <select
            id="state"
            name="state"
            className="w-full px-4 py-3 rounded-lg text-sm bg-[#24252D] text-white outline-none focus:ring-1 focus:ring-[#C5EE4F] bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E')] bg-no-repeat bg-right pr-4 bg-[length:1em]  border-[0.5px]  border-[#49454F]"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Select state
            </option>
            <option value="ny">New York</option>
            <option value="ca">California</option>
            <option value="tx">Texas</option>
            <option value="fl">Florida</option>
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
          name="github"
          placeholder="Github link"
          className="w-full px-4 py-3 rounded-lg text-sm bg-[#24252D] text-white outline-none focus:ring-1 focus:ring-[#C5EE4F]  border-[0.5px]  border-[#49454F]"
          value={formData.github}
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
          value={formData.wallet}
          onChange={handleChange}
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
          className="bg-[#C5EE4F] text-black font-medium py-3 px-6 rounded-lg hover:bg-opacity-90"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default FormField;
