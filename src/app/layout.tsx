import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/global.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import RecoilContextProvider from '@/providers/recoil-provider';
import { WalletConnectProvider } from '@/providers';
import { PageLayout } from '@/components/page-layout';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const avenir = localFont({
  src: './fonts/avenir-font/AvenirLTStd-Medium.otf',
  variable: '--font-avenir',
  weight: '100 900',
});
const avenirLtsd = localFont({
  src: './fonts/avenir-font/AvenirLTStd-Light.otf',
  variable: '--font-avenirLtsd',
  weight: '100 900',
});


export const metadata: Metadata = {
  title: 'Wakanda DAO',
  description:
    'This is a decentralized autonomous organization to revolutionize community engagement and participation starting with Algorand Nigeria',
  keywords: [
    'DaoWakanda',
    'Wakanda',
    'Community DAO',
    'DAO',
    'DAO Voting System',
    'Coding Challenges',
    'Decentralized',
    'Autonomous',
    'Organization',
    'Algorand',
  ],
  openGraph: {
    title: 'DaoWakanda',
    description:
      'This is a decentralized autonomous organization to revolutionize community engagement and participation starting with Algorand Nigeria',
    url: 'https://www.daowakanda.org',
    siteName: 'DaoWakanda',
    images: [
      {
        url: 'https://res.cloudinary.com/dlinprg6k/image/upload/v1710183598/Group_5_nlkqfr.png',
        width: 1200,
        height: 630,
        alt: 'DaoWakanda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dlinprg6k/image/upload/v1710183598/Group_5_nlkqfr.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/dlinprg6k/image/upload/v1710183598/Group_5_nlkqfr.png',
        type: 'image/png',
      },
    ],
    shortcut: 'https://res.cloudinary.com/dlinprg6k/image/upload/v1710183598/Group_5_nlkqfr.png',
  },
  metadataBase: new URL('https://www.daowakanda.org'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&family=Noto+Sans&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${avenir.variable} ${avenirLtsd.variable} antialiased`}
      >
        <Toaster />
        <RecoilContextProvider>
          <WalletConnectProvider>
            <PageLayout>{children}</PageLayout>
          </WalletConnectProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
