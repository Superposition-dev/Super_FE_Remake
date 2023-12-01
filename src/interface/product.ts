export type MainProduct = {
  picture: string;
  tag: string[];
  title: string;
  artist: string;
};

export type ProductProps = MainProduct & {
  productId: string;
  productNum: number;
  pictureInfo: {
    type: string;
    size: string;
    year: number;
  };
  description: string;
  price: number;
};
