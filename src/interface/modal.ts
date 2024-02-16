import { UserType } from './user';

export interface InduceLoginModalProps {
  desc: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RequestModalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  cancel: string;
  accept: string;
  handler: (() => void) | void;
}

export interface ResponseModalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  cancel: string;
  handler: (() => void) | void;
}

export interface ResignModalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  data: UserType | undefined;
  handler: (() => void) | void;
}

export interface ImageModalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  onChanger: () => void;
  onOriginChanger: () => void;
}
