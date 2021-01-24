import { SingleKudo } from "./singleKudoInterface";
export interface User {
  userImg: string;
  userName: string;
  fullName: string;
  kudos: SingleKudo[];
}
