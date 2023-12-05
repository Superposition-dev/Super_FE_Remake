import { getAuthor, getAuthors } from '@/api/authors';
import AuthorsDetail from '@/components/AuthorsDetail';
import { AuthorDetailProps, AuthorsProps } from '@/interface/authors';
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
  return <AuthorsDetail data={data} />;
}

export default AuthorsDetailPage;
