import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  //   return NextResponse.redirect(new URL('/', request.url));
  const response = NextResponse.next();
  const themePreference = response.cookies.get('theme');
  if (!themePreference) {
    response.cookies.set('theme', 'light');
  }

  response.headers.set('custom-header', 'custom-value');

  return response;

  //   if (request.nextUrl.pathname === '/profile') {
  //     return NextResponse.rewrite(new URL('/hello', request.nextUrl));
  //   }
};

// export const config = {
//   matcher: '/profile',
// };
