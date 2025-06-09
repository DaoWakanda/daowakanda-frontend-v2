'use client';

import { Combobox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useCountriesStates } from '@/hooks/useCountriesStates';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';


interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const { countries, loadingCountries } = useCountriesStates();
  const [query, setQuery] = useState('');

  const filteredCountries =
    query === ''
      ? countries
      : countries.filter((country) => country.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-full ">
      <Combobox value={value} onChange={onChange}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-[#24252D]  border border-gray-300 text-left sm:text-sm">
            <Combobox.Input
              className="w-full border-[0.5px]  border-[#49454F] py-2 pl-3 pr-10 leading-5  outline-none bg-[#24252D] focus:ring-1 focus:ring-[#C5EE4F] text-white"
              displayValue={(country: string) => country}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Select a country"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 ">
              <ChevronsUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>

          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#24252D]  py-1 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {loadingCountries && (
              <div className="relative cursor-default select-none px-4 py-2 text-white">
                Loading countries...
              </div>
            )}
            {!loadingCountries && filteredCountries.length === 0 && (
              <div className="relative cursor-default select-none px-4 py-2 text-white">
                No country found.
              </div>
            )}
            {filteredCountries.map((country) => (
              <Combobox.Option
                key={country}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-blue-600 text-white' : ''
                  }`
                }
                value={country}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {country}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}
