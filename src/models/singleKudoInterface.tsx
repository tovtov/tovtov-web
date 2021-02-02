export interface SingleKudoReceived {
  giverImg: string;
  giverName: string;
  giverUserName: string;
  kudo: string;
  date: number;
}

export interface SingleKudoGiven {
  date: number;
  givenToUserName: string;
  givenToName: string;
  kudo: string;
}
