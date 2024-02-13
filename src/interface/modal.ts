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
