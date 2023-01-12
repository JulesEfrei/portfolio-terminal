export type command =
  | "clear"
  | "banner"
  | "links"
  | "contact"
  | "projects"
  | "about"
  | "skills"
  | "clasic"
  | "help"
  | "credit"
  | "secret"
  | "error"
  | "download";

export interface commandComposant {
  banner?: JSX.Element;
  links?: JSX.Element;
  contact?: JSX.Element;
  about?: JSX.Element;
  help?: JSX.Element;
  projects?: JSX.Element;
  error?: JSX.Element;
  skills?: JSX.Element;
  clasic?: JSX.Element; //To-do
  credit?: JSX.Element; //To-do
  secret?: JSX.Element; //To-do
  download?: JSX.Element; //To-do
  sendMsg?: JSX.Element; //To-do
  [key: string]: any;
}
