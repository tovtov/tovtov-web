import {User} from './userInterface'
export interface KudoReceived {
    id: string;
    giver: User;
    text: string;
    date: number;
  }