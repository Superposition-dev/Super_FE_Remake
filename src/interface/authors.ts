export interface AuthorsProps {
  name: string;
  profile: string;
  instagramId: string;
  introduce: string;
  display: boolean;
}

export interface AuthorDetailProps extends AuthorsProps {
  description: string;
  products: AuthorProductsProps[];
}

export type AuthorProductsProps = {
  productId: number;
  picture: string;
};

export interface AuthorType {
  name: string;
  profile: string;
  instagramId: string;
  introduce: string;
  description: string;
  display: true;
}
