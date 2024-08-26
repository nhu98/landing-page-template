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
  
  <body className={`${inter.variable}  `}>
  <NextIntlClientProvider messages={messages}>
    <Header />
    {children}
    <Footer />
  </NextIntlClientProvider>

    <script>
    {`
            window.__lc = window.__lc || {};
            window.__lc.license = 18457389;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
          `}
        </script>
        
          <a href="https://www.livechat.com/chat-with/18457389/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
        

  </body>
  </html>);
}
