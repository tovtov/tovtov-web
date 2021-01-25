import { User } from "../models/userInterface";

//this file is dummy code until I have actual data to replcae it
export const theDate = new Date().toLocaleDateString();

export const UserData: Array<User> = [
  {
    userImg: "https://bulma.io/images/placeholders/128x128.png",
    userName: "@testName",
    fullName: "test name",
    kudosGiven: [
      {
        date: theDate,
        givenToUserName: "@BorisVeltman",
        givenToName: "Boris Veltman",
        kudo: "What a weirdo this dude is",
      },
    ],
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
