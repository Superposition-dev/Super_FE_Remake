import { getAuthor, getAuthors } from '@/api/author';
import AuthorsDetail from '@/components/AuthorsDetail';
import { AuthorDetailProps, AuthorsProps } from '@/interface/authors';
import { useRouter } from 'next/router';
import React from 'react';

export async function getStaticPaths() {
  const data = await getAuthors();
  const paths = data.map((author: AuthorsProps) => {
    return {
      params: { id: author.instagramId },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await getAuthor(params.id);
  return {
    props: {
      data,
    },
  };
}

function AuthorsDetailPage({ data }: { data: AuthorDetailProps }) {
  const { query } = useRouter();

  return <AuthorsDetail data={data} id={query.id as string} />;
}

export default AuthorsDetailPage;
