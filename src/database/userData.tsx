import { User } from "../models/userInterface";
import { KudoReceived } from "../models/kudosReceivedInterface";

//this file is dummy code until I have actual data to replcae it
export const toReadableDate = (date: number) => {
  return new Date(date * 1000).toLocaleDateString();
};
export const CountersData = [
  {
    given: 0,
    received: 2,
  },
];

export const LoginUser: Array<User> = [
  {
    id: "1",
    image: "https://bulma.io/images/placeholders/128x128.png",
    name: "@tyannarae",
    username: "@Tyanna Veltman",
    email: "",
  },
  {
    id: "2",
    image: "https://bulma.io/images/placeholders/128x128.png",
    username: "@baveltman",
    name: "Boris Veltman",
    email: "blllaaah@gmail.com",
  },
  {
    id: "3",
    image: "https://bulma.io/images/placeholders/128x128.png",
    username: "@baveltman",
    name: "Boris Veltman",
    email: "blllaaah@gmail.com",
  },
];

export const UserInfo: Array<KudoReceived> = [
  {
    id: "",
    giver: {
      id: "3",
      image: "https://bulma.io/images/placeholders/128x128.png",
      username: "@baveltman",
      name: "Boris Veltman",
      email: "blllaaah@gmail.com",
    },
    text: "some text here",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "3",
      image: "https://bulma.io/images/placeholders/128x128.png",
      username: "@trveltman",
      name: "Tyanna  Veltman",
      email: "blllaaah@gmail.com",
    },
    text: "some text there",
    date: 1546108200,
  },
];
