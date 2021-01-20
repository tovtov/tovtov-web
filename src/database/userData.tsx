export interface kudo {
  giverImg: string;
  giversName: string;
  giversUserName: string;
  kudo: string;
  date: Date;
}
export interface User {
  userImg: string;
  userName: string;
  fullName: string;
  kudos: Array<kudo>;
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
        date: new Date(),
      },
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giversName: "giver2",
        giversUserName: "@giver2",
        kudo: "making things happen!",
        date: new Date(),
      },
    ],
  },
];
