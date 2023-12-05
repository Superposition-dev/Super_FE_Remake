export type MainProduct = {
  productId: string;
  picture: string;
  tags: string[];
  title: string;
  artist: string;
};

export type ProductProps = MainProduct & {
  productNum: number;
  pictureInfo: {
    type: string;
    size: string;
    year: number;
  };
  description: string;
  price: number;
};

export type ProductDetailProps = {
  productId: number;
  picture: string;
  tags: string[];
  title: string;
  pictureInfo: {
    type: string;
    size: string;
    year: number;
  };
  artistInfo: {
    profile: string;
    artistName: string;
    instagramId: string;
  };
  description: string;
  price: number;
};
