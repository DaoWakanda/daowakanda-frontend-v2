'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

interface Props {
  label: string;
  link?: string;
  isActive?: boolean;
  subItems?: {
    label: string;
    description?: string;
    link: string;
  }[];
}

export function NavItemMobile({ label, link = '#', subItems, isActive }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 h-10 justify-between">
        <Link
          href={link}
          className={classNames(
            'font-avenir font-[400] text-[20px] leading-[26.67px] text-center hover:text-white transition-colors duration-300',
            isActive ? 'text-white' : 'text-white',
          )}
        >
          {label}
        </Link>
        {subItems && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={classNames(
              'transition-transform duration-300',
              isOpen ? 'rotate-180' : 'rotate-0',
            )}
          >
            <FaAngleDown className="text-white" />
          </button>
        )}
      </div>
      {subItems && (
        <div
          className={classNames(
            'flex flex-col gap-1 overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          {subItems.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              className="font-avenir p-2 font-[400] text-base leading-[26.67px] text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
