import { User } from "../models/userInterface";

export const theDate = new Date().toLocaleDateString();

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
