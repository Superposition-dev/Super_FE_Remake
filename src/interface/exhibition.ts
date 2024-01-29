export enum FilterType {
  all = 'all',
  progress = 'progress',
  end = 'end',
}

export interface ExhibitionListProps {
  type: FilterType;
}

export interface ExhibitionProps {
  exhibition: ExhibitionType;
}

export interface ExhibitionType {
  exhibitionId: number;
  title: string;
  subheading: string;
  location: string;
  startDate: string;
  endDate: string;
  status: string;
  poster: string;
}
