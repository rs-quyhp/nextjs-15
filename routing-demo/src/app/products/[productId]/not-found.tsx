'use client';

import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathName = usePathname();

  return <h1>Product Not Found - {pathName.split('/').pop()}</h1>;
};

export default NotFound;
