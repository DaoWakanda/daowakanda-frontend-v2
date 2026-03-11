'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

export type TabTogglerOption = {
  label: string;
  value: string;
};

interface TabTogglerProps {
  options: string[] | TabTogglerOption[];
  selectedOption: string;
  onSelect: (option: string) => void;
  randomId?: string;
}

export function TabToggler({
  options,
  selectedOption,
  onSelect,
  randomId = 'tab-toggler-1',
}: TabTogglerProps) {
  const [values, setValues] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  });

  const isOptionString = typeof options[0] === 'string';
  const indexOfSelectedOption = isOptionString
    ? (options as string[]).indexOf(selectedOption)
    : (options as TabTogglerOption[]).findIndex((option) => option.value === selectedOption);

  const resizeElement = () => {
    const element = document.getElementById(
      `${randomId}-${selectedOption}-${indexOfSelectedOption}`,
    );
    if (element) {
      setValues({
        left: element.offsetLeft,
        width: element.offsetWidth,
        top: element.offsetTop,
        height: element.offsetHeight,
      });
    }
  };

  useEffect(() => {
    resizeElement();
  }, [selectedOption, options]);

  useEffect(() => {
    window.addEventListener('resize', resizeElement);

    return () => {
      window.removeEventListener('resize', resizeElement);
    };
  }, []);

  return (
    <div
      className={classNames(
        'flex items-center bg-[#F6F6F9] overflow-hidden rounded-[8px]',
        'transition-all duration-300 relative p-1.5 gap-2',
      )}
      style={{
        boxShadow: '0px 4px 4px 0px #6060600A inset',
      }}
    >
      <div
        className={classNames(
          'absolute bottom-[0] left-0 h-full z-1 transition-all duration-300 rounded',
        )}
        style={{
          left: `${values.left}px`,
          width: `${values.width}px`,
          top: `${values.top}px`,
          height: `${values.height}px`,
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 1px 4px 0px #BABABA40',
        }}
      />

      {options.map((option, index) => {
        return (
          <button
            key={typeof option === 'string' ? option : option.value}
            onClick={() => onSelect(typeof option === 'string' ? option : option.value)}
            className={classNames(
              'min-w-[100px] justify-center items-center py-[7px] px-3 relative z-2 transition-all duration-300',
              'font-degularDisplay text-[14px] font-semibold text-[#000000] whitespace-nowrap',
            )}
            id={`${randomId}-${typeof option === 'string' ? option : option.value}-${index}`}
          >
            {typeof option === 'string' ? option : option.label}
          </button>
        );
      })}
    </div>
  );
}
