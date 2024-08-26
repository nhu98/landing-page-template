import './global.css';
import Header from './components/header';
import Footer from './components/footer';
import { Inter } from 'next/font/google';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';

// Can be imported from a shared config
const locales = ['vi', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


const inter = Inter({
  subsets: ['latin'], variable: '--font-inter'
});


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'API Software Outsourcing',
    description: 'Cung cấp dịch vụ phát triển phần mềm outsource và AI. Kết hợp AI và con người để tạo ra các giải pháp phần mềm hiệu quả và chất lượng.',
    openGraph: {
      title: 'API Software Outsourcing',
      description: 'Cung cấp dịch vụ phát triển phần mềm outsource và AI. Kết hợp AI và con người để tạo ra các giải pháp phần mềm hiệu quả và chất lượng.',
      type: 'website',
      images: ['https://github.com/trungnguyenite/public/blob/main/logo-meta.png?raw=true']
    },
    alternates: {
      canonical: 'https://apisoftware.net/'
    }
  };
}

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

  <head>
    <script>
      alert('')
    </script>
  </head>
  
  <body className={`${inter.variable}  `}>
  <NextIntlClientProvider messages={messages}>
    <Header />
    {children}
    <Footer />
  </NextIntlClientProvider>
  </body>
  </html>);
}
