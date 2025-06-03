import classNames from 'classnames';
import Link from 'next/link';

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

export function NavItemDesktop({ label, link = '#', subItems, isActive }: Props) {
  return (
    <div className="flex flex-col gap-2 group">
      <Link
        href={link}
        className={classNames(
          `font-[350] text-base leading-[26.67px] font-avenir hover:text-white transition-colors duration-300`,
          isActive ? 'text-white' : 'text-[#f1f1f1]',
          'h-20 flex items-center justify-center',
        )}
      >
        {label}
      </Link>
      {subItems && (
        <div
          className={classNames(
            `hidden group-hover:grid grid-cols-${subItems.length} gap-4 absolute top-full left-0 p-4`,
            'w-fit self-center left-1/2 -translate-x-1/2 bg-[#292A2D]',
            'rounded-[24px]',
          )}
          style={{ gridTemplateColumns: `repeat(${subItems.length}, 1fr)` }}
        >
          {subItems.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              className={classNames(
                'flex flex-col gap-1 hover:bg-[#46464A] rounded-lg',
                'p-4 text-white transition-colors duration-300 max-w-[252px]',
              )}
            >
              <h4 className="font-avenir text-white font-[400] text-[20px] leading-[26.67px]">
                {item.label}
              </h4>
              <p className="font-avenir text-[#ABABAF] font-[400] text-base leading-[26.67px]">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
