'use client';

import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useState } from 'react';


interface StateSelectProps {
  value: string;
  onChange: (value: string) => void;
  states: string[];
  loading?: boolean;
}

export default function StateSelect({
  value,
  onChange,
  states,
  loading = false,
}: StateSelectProps) {
  const [query, setQuery] = useState('');

  const filteredStates =
    query === ''
      ? states
      : states.filter((state) => state.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-full z-10 relative">
      <Combobox value={value} onChange={onChange}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg  border border-gray-300 text-left sm:text-sm">
            <Combobox.Input
              className="w-full border-[0.5px]  border-[#49454F] py-2 pl-3 pr-10 leading-5  outline-none bg-[#24252D] focus:ring-1 focus:ring-[#C5EE4F] text-white"
              displayValue={(state: string) => state}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Select a state"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronsUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>

          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm bg-[#24252D]">
            {loading && (
              <div className="relative cursor-default select-none px-4 py-2 text-white">
                Loading states...
              </div>
            )}
            {!loading && filteredStates.length === 0 && (
              <div className="relative cursor-default select-none px-4 py-2 text-white">
                No state found.
              </div>
            )}
            {filteredStates.map((state) => (
              <Combobox.Option
                key={state}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4  text-white ${
                    active ? 'bg-blue-600 ' : ''
                  }`
                }
                value={state}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {state}
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
