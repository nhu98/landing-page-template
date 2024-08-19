import './global.css';
import Header from './components/header';
import Footer from './components/footer';
import { Inter } from 'next/font/google';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// Can be imported from a shared config
const locales = ['vi', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


const inter = Inter({
  subsets: ['latin'], variable: '--font-inter'
});

export const metadata = {
  title: 'API Software Outsourcing | Artificial People Intelligence',
  description: 'Cung cấp dịch vụ phát triển phần mềm outsource và AI. Kết hợp AI và con người để tạo ra các giải pháp phần mềm hiệu quả và chất lượng.'
};

export default async function LocaleLayout({
                                             children, params: { locale }
                                           }: {
  children: React.ReactNode; params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (<html lang={locale}>
  <body className={`${inter.variable}  `}>
  <NextIntlClientProvider messages={messages}>
    <Header />
    {children}
    <Footer />
  </NextIntlClientProvider>
  </body>
  </html>);
}
