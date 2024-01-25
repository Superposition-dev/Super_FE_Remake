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
  exbihitionNum: number;
  title: string;
  subtitle: string;
  picture: string;
  location: string;
  startDate: string;
  endDate: string;
  isDisplay: boolean;
}
