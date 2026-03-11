import classNames from 'classnames';
import { FiSearch } from 'react-icons/fi';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder }: Props) {
  return (
    <div
      className={classNames(
        'flex flex-1 items-center gap-6 py-[9.5px] px-[17px] rounded-[8px] border border-[#EFEFEF]',
        'bg-[#F8F8F8]',
      )}
    >
      <FiSearch className="text-[16px] text-[#2F3640]" />
      <input
        value={value}
        onChange={(evt) => onChange?.(evt.target.value)}
        placeholder={placeholder || 'Search'}
        className="bg-[transparent] text-[#2F3640] font-degularDisplay text-base"
      />
    </div>
  );
}
