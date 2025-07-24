'use client';

import { useParams } from 'next/navigation';

const Error = ({ error }: { error: Error }) => {
  const params = useParams();
  return (
    <h1>
      Error in reviewId {params.reviewId}
      <br />
      {error.message}
    </h1>
  );
};

export default Error;
