import { SingleKudoReceived, SingleKudoGiven } from "./singleKudoInterface";
export interface User {
  id: number;
  userImg: string;
  userName: string;
  fullName: string;
}

export interface UserData {
  id: number;
  kudosReceived: SingleKudoReceived[] | undefined;
  kudosGiven: SingleKudoGiven[] | undefined;
}
