'use client';

import { useParams, useRouter } from 'next/navigation';
import { startTransition } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const params = useParams();
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <h1>
      Error in reviewId {params.reviewId}
      <br />
      {error.message}
      <div>
        <button onClick={reload}>Try again</button>
      </div>
    </h1>
  );
};

export default Error;
