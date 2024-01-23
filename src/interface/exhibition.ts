export enum FilterType {
  all = 'all',
  progress = 'progress',
  complete = 'complete',
}

export interface ListProps {
  type: FilterType;
}
