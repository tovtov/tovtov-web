export const theDate = new Date().toLocaleDateString();
export interface SingleKudo {
  giverImg: string;
  giversName: string;
  giversUserName: string;
  kudo: string;
  date: string;
}
export interface User {
  userImg: string;
  userName: string;
  fullName: string;
  kudos: SingleKudo[];
}

export const UserData: Array<User> = [
  {
    userImg: "https://bulma.io/images/placeholders/128x128.png",
    userName: "@testName",
    fullName: "test name",
    kudos: [
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giversName: "giver",
        giversUserName: "@giver",
        kudo: "heres some props!",
        date: theDate,
      },
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giversName: "giver2",
        giversUserName: "@giver2",
        kudo: "making things happen!",
        date: theDate,
      },
    ],
  },
];
export interface User {
  userImg: string;
}
