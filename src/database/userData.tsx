import { User, UserData } from "../models/userInterface";

//this file is dummy code until I have actual data to replcae it
export const toReadableDate = (date: number) => {
  return new Date(date * 1000).toLocaleDateString();
};

export const LoginUser: Array<User> = [
  {
    id: 1,
    userImg: "https://bulma.io/images/placeholders/128x128.png",
    userName: "@tyannarae",
    fullName: "Tyanna Veltman",
  },
  {
    id: 2,
    userImg: "https://bulma.io/images/placeholders/128x128.png",
    userName: "@baveltman",
    fullName: "Boris Veltman",
  },
  {
    id: 3,
    userImg: "https://bulma.io/images/placeholders/128x128.png",
    userName: "@thirduser",
    fullName: "third user",
  },
];

export const UserInfo: Array<UserData> = [
  {
    id: 1,
    kudosGiven: [
      {
        date: 1546108200,
        givenToUserName: "@baveltman",
        givenToName: "Boris Veltman",
        kudo: "kudos given to you!",
      },
    ],
    kudosReceived: [
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giverName: "giver",
        giverUserName: "@baveltman",
        kudo: "heres some props!",
        date: 1546108200,
      },
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giverName: "giver2",
        giverUserName: "@snowveltman",
        kudo: "wow food on the table!",
        date: 1546108200,
      },
    ],
  },
  {
    id: 2,
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
        giverUserName: "@pickleveltman",
        kudo: "bark!",
        date: 1546108200,
      },
      {
        giverImg: "https://bulma.io/images/placeholders/128x128.png",
        giverName: "giver2",
        giverUserName: "@dollyveltman",
        kudo: "cat giving kudos",
        date: 1546108200,
      },
    ],
  },
];
