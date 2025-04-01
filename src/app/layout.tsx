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
  title: 'Daowakanda Admin',
  description: 'Daowakanda Admin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
