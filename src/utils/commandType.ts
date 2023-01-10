export type command =
  | "clear"
  | "banner"
  | "links"
  | "contact"
  | "projects"
  | "about"
  | "experience"
  | "skills"
  | "clasic"
  | "help"
  | "credit"
  | "secret"
  | "download";

export interface commandComposant {
  banner?: JSX.Element;
  links?: JSX.Element;
  contact?: JSX.Element;
  about?: JSX.Element;
  help?: JSX.Element;
  projects?: JSX.Element; //To-do
  experience?: JSX.Element; //To-do
  skills?: JSX.Element; //To-do
  clasic?: JSX.Element; //To-do
  credit?: JSX.Element; //To-do
  secret?: JSX.Element; //To-do
  download?: JSX.Element; //To-do
  [key: string]: any;
}
