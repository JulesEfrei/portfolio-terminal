export type command = "clear" | "banner" | "links";

export interface commandComposant {
  banner?: JSX.Element;
  links?: JSX.Element;
  projects?: JSX.Element;
  about?: JSX.Element;
  experience?: JSX.Element;
  skills?: JSX.Element;
  clasic?: JSX.Element;
  help?: JSX.Element;
  credit?: JSX.Element;
  secret?: JSX.Element;
  download?: JSX.Element;
  contact?: JSX.Element;
  [key: string]: any;
}
