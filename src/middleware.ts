import createMiddleware from 'next-intl/middleware';

const currentDate = new Date().getDate();
const isEvenDay = currentDate % 2 === 0;

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['vi', 'en'],

  // Used when no locale matches
  defaultLocale: isEvenDay?'vi':'en', alternateLinks: false, localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(en|vi)/:path*`, '/((?!api|_next|_vercel|.*\\..*).*)']
};
