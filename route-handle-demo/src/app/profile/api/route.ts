import { headers } from 'next/headers';

export const GET = async () => {
  const headerList = await headers();
  console.log('Authorization: ', headerList.get('Authorization'));
  return new Response('<h1>Profile API data</h1>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
};
