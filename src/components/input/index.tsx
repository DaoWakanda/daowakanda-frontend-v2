import * as React from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ className, label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {!!label && <p className="font-degular font-medium text-[14px] text-[#939393]">{label}</p>}
      <input
        className={cn(
          'flex h-[50px] w-full text-[#939393] rounded-lg border border-[#E4E4E4] bg-white px-4 py-[15px] text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
};
Input.displayName = 'Input';

export { Input };
