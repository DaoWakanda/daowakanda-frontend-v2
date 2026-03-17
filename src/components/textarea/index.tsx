import * as React from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = ({ className, label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {!!label && <p className="font-degular font-medium text-[14px] text-[#939393]">{label}</p>}
      <textarea
        className={cn(
          'flex w-full text-[#939393] rounded-lg border border-[#E4E4E4] bg-white px-4 py-[15px] text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
};
TextArea.displayName = 'TextArea';

export { TextArea };
