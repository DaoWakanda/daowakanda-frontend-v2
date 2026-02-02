'use client';

import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useState } from 'react';
import { LocationOption } from '@/utils/location';

interface StateSelectProps {
  value: string;
  onChange: (value: string | null) => void;
  options: LocationOption[];
  loading?: boolean;
}

export default function StateSelect({
  value,
  onChange,
  options,
  loading = false,
}: StateSelectProps) {
  const [query, setQuery] = useState('');

  const filteredStates =
    query === ''
      ? options
      : options.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()));

  const selectedState = options.find((s) => s.value === value);

  return (
    <div className="w-full relative z-10">
      <Combobox value={value} onChange={onChange}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-[#24252D] border border-[#49454F] text-left sm:text-sm">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 leading-5 outline-none bg-[#24252D] focus:ring-1 focus:ring-[#C5EE4F] text-white"
              displayValue={() => selectedState?.label ?? ''}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Select a state"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronsUpDownIcon className="h-5 w-5 text-gray-400" />
            </Combobox.Button>
          </div>

          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#24252D] py-1 shadow-lg ring-1 ring-black ring-opacity-5">
            {loading && (
              <div className="cursor-default select-none px-4 py-2 text-white">
                Loading states...
              </div>
            )}

            {!loading && filteredStates.length === 0 && (
              <div className="cursor-default select-none px-4 py-2 text-white">No state found.</div>
            )}

            {filteredStates.map((state) => (
              <Combobox.Option
                key={state.value}
                value={state.value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 text-white ${
                    active ? 'bg-blue-600' : ''
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {state.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                        <CheckIcon className="h-5 w-5" />
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
