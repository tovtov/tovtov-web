export interface SingleKudo {
  giverImg: string;
  giversName: string;
  giversUserName: string;
  kudo: string;
  date: number;
}

export interface SingleKudoGiven {
  date: number;
  givenToUserName: string;
  givenToName: string;
  kudo: string;
}
