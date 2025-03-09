import classNames from 'classnames';
import { PageMaxWidth } from '../page-max-width';
import Link from 'next/link';
import { FooterIcons } from '@/assets/footer-icons.icon';

export function Footer() {
  const links = [
    {
      title: 'Useful links',
      links: [
        {
          label: 'Governance',
          href: '/',
        },
        {
          label: 'Communities',
          href: '/',
        },
        {
          label: 'Developers',
          href: '/',
        },
        {
          label: 'Research Forum',
          href: '/',
        },
      ],
    },
    {
      title: 'About Us',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'FAQs',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/',
        },
        {
          label: 'Help Center',
          href: '/',
        },
      ],
    },
  ];
  return (
    <footer className={classNames('mt-auto pt-[60px] pb-[45px] lg:pt-[89px] lg:pb-[76px]')}>
      <PageMaxWidth>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-[350] text-[20px] leading-[100%] tracking-[-0.37px] font-avenir">
              DaoWakanda Communities
            </h4>
            <div className="flex flex-col gap-2">
              <Link className="flex items-center gap-2 h-[22px]" href="/">
                <FooterIcons.XIcon />
                <h4 className="text-[#ABABAF] font-[400] text-[16px] leading-[100%] tracking-[-0.37px] font-avenir">
                  Twitter
                </h4>
              </Link>
              <Link className="flex items-center gap-2 h-[22px]" href="/">
                <FooterIcons.GitHubIcon />
                <h4 className="text-[#ABABAF] font-[400] text-[16px] leading-[100%] tracking-[-0.37px] font-avenir">
                  GitHub
                </h4>
              </Link>
              <Link className="flex items-center gap-2 h-[22px]" href="/">
                <FooterIcons.TelegramIcon />
                <h4 className="text-[#ABABAF] font-[400] text-[16px] leading-[100%] tracking-[-0.37px] font-avenir">
                  Telegram
                </h4>
              </Link>
              <Link className="flex items-center gap-2 h-[22px]" href="/">
                <FooterIcons.BlogIcon />
                <h4 className="text-[#ABABAF] font-[400] text-[16px] leading-[100%] tracking-[-0.37px] font-avenir">
                  Blog
                </h4>
              </Link>
            </div>
          </div>
          {links.map((link) => (
            <div className="flex flex-col gap-8" key={link.title}>
              <h4 className="text-white font-[350] text-[20px] leading-[100%] tracking-[-0.37px] font-avenir">
                {link.title}
              </h4>
              <div className="flex flex-col gap-2">
                {link.links.map((link) => (
                  <Link className="flex items-center gap-2 h-[22px]" href={link.href}>
                    <h4 className="text-[#ABABAF] font-[400] text-[16px] leading-[100%] tracking-[-0.37px] font-avenir">
                      {link.label}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageMaxWidth>
    </footer>
  );
}
