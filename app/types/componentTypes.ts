export type ClientLink = {
  text: string;
  href: string;
  title: string;
  activeClass: string;
  defaultClass?: string;
};

export type ClientCanvasProps = {
  setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
};

export type HomeInfoProps = {
  currentStage: number;
};

export type AlertProps = {
  type: string;
  text: string;
};

export type InfoBoxProps = {
  text: string;
  link: string;
  btnText: string;
  linkTitle: string;
};

export type LoaderProps = {
  className?: string;
};
