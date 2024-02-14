export type AuthorsProps = {
  name: string;
  profile: string;
  instagramId: string;
  introduce: string;
  display: boolean;
};

export type AuthorDetailProps = AuthorsProps & {
  description: string;
  products: AuthorProductsProps[];
};

export type AuthorProductsProps = {
  productId: number;
  picture: string;
};

export interface AuthorType {
  artistId: number;
  name: string;
  profile: string;
  instagramId: string;
  introduce: string;
}
