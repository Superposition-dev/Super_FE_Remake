import { AuthorType } from './authors';
import { ProductType } from './product';

export enum FilterType {
  all = 'all',
  progress = 'progress',
  end = 'end',
}

export interface ExhibitionsProps {
  type: FilterType;
}

export interface ExhibitionProps {
  exhibition: ExhibitionType;
}

export interface ExhibitionType {
  exhibitionId: number;
  title: string;
  subHeading: string;
  location: string;
  startDate: string;
  endDate: string;
  status: string;
  poster: string;
}

export interface ExhibitionDetailProps {
  exhibitionId: number;
  title: string;
  subHeading: string;
  productInfo: ProductType[];
  artistInfo: AuthorType[];
}
