import { cookies, headers } from 'next/headers';

export const GET = async () => {
  const headerList = await headers();
  const cookieList = await cookies();

  cookieList.set('page', '1');
  cookieList.set('limit', '100');
  cookieList.delete('theme');

  console.log('Authorization: ', headerList.get('Authorization'));
  console.log('Theme: ', cookieList.get('theme'));
  return new Response('<h1>Profile API data</h1>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
};
