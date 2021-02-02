import { User } from "../models/userInterface";

//this file is dummy code until I have actual data to replcae it
export const toReadableDate = (date: number) => {
  return new Date(date * 1000).toLocaleDateString();
};

export const UserData: Array<User> = [
  {
    userImg: "https://bulma.io/images/placeholders/128x128.png",
    userName: "@testName",
    fullName: "test name",
    kudosGiven: [
      {
        date: 1546108200,
        givenToUserName: "@BorisVeltman",
        givenToName: "Boris Veltman",
        kudo: "What a weirdo this dude is",
      },
    ],
    kudosReceived: [
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giverName: "giver",
        giverUserName: "@giver",
        kudo: "heres some props!",
        date: 1546108200,
      },
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giverName: "giver2",
        giverUserName: "@giver2",
        kudo: "making things happen!",
        date: 1546108200,
      },
    ],
  },
];
