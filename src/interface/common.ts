export interface CommonTitleProps {
  TITLE: string;
  SUBTITLE: string;
}

export interface CommonWrapperProps {
  children: React.ReactNode;
}

export interface CommonFloatingProps {
  title: string;
  src: string;
  handler?: () => void;
}
