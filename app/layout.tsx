import type { Metadata } from 'next';
import { Inter, Libre_Baskerville, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/modules/UI/Header/HeaderContent';
import { cn } from '@/lib/utils';
import MotionLayout from '@/components/modules/UI/MotionLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['200', '300', '400', '500', '600', '700'],
});
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-libre',
});

export const metadata: Metadata = {
  title: 'Photographer Portfolio',
  description: 'This is a photographer portfolio website, built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth antialiased" lang="en">
      <body className={cn('bg-neutral-100', montserrat.variable, libreBaskerville.variable)}>
        <h1 className="sr-only">
          Welcome to the Photographer Portfolio - a template built to showcase how to structure a portfolio
          for a photographer.
        </h1>
        <MotionLayout>{children}</MotionLayout>
      </body>
    </html>
  );
}
