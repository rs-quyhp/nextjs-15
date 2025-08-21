import { addProduct } from '@/prisma-db';

export const POST = async (request: Request) => {
  const { title, price, description } = await request.json();
  const product = await addProduct(title, Number(price), description);
  return new Response(JSON.stringify(product), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
