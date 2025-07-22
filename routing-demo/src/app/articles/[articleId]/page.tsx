'use client';

import Link from 'next/link';
import './styles.css';
import { use } from 'react';

const ArticleDetail = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}) => {
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <>
      <h1>New article {articleId}</h1>
      <p>Reading in language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`} className="mr-4">
          Read in English
        </Link>
        <Link href={`/articles/${articleId}?lang=es`} className="mr-4">
          Read in Spanish
        </Link>
        <Link href={`/articles/${articleId}?lang=fr`} className="mr-4">
          Read in French
        </Link>
      </div>
    </>
  );
};

export default ArticleDetail;
