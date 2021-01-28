import { SingleKudoReceived, SingleKudoGiven } from "./singleKudoInterface";
export interface User {
  userImg: string;
  userName: string;
  fullName: string;
  kudosReceived: SingleKudoReceived[];
  kudosGiven: SingleKudoGiven[];
}
