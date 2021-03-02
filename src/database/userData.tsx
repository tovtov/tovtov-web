import { User } from "../models/userInterface";
import { KudoReceived } from "../models/kudosReceivedInterface";
import borisAvatar from "../media/avatars/avatar4.jpeg";
import tyannaAvatar from "../media/avatars/avatar1.png";
import lucyAvatar from "../media/avatars/avatar3.png";
import melAvatar from "../media/avatars/avatar6.jpg";
import tiaAvatar from "../media/avatars/avatar5.jpg";
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
    image: tyannaAvatar,
    name: "Tyanna Veltman",
    username: "@tyannaVeltman",
    email: "tyanna@gmail.com",
  },
  {
    id: "2",
    image: borisAvatar,
    username: "@borisVeltman",
    name: "Boris Veltman",
    email: "boris@gmail.com",
  },
  {
    id: "3",
    image: lucyAvatar,
    username: "@coolChick",
    name: "Lucy Stapleton",
    email: "lstapleton@gmail.com",
  },
  {
    id: "4",
    image: melAvatar,
    username: "@melDude",
    name: "Mel James",
    email: "mel@gmail.com",
  },
  {
    id: "5",
    image: tiaAvatar,
    username: "@tia",
    name: "Tia Miller",
    email: "tia@gmail.com",
  },
];

export const UserInfo: Array<KudoReceived> = [
  {
    id: "",
    giver: {
      id: "2",
      image: borisAvatar,
      username: "@baveltman",
      name: "Boris Veltman",
      email: "baveltman@gmail.com",
    },
    text: "Thank you for being so cool!",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "1",
      image: tyannaAvatar,
      username: "@trveltman",
      name: "Tyanna  Veltman",
      email: "tveltman@gmail.com",
    },
    text: "Woah you are so rad.",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "3",
      image: lucyAvatar,
      username: "@coolChick",
      name: "Lucy Stapleton",
      email: "lstapleton@gmail.com",
    },
    text: "You did another great thing at work today!",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "2",
      image: borisAvatar,
      username: "@baveltman",
      name: "Boris Veltman",
      email: "baveltman@gmail.com",
    },
    text: "its okay to think your the coolest human ever",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "1",
      image: tyannaAvatar,
      username: "@trveltman",
      name: "Tyanna  Veltman",
      email: "tveltman@gmail.com",
    },
    text: "Just wanted to say hello.",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "3",
      image: lucyAvatar,
      username: "@coolChick",
      name: "Lucy Stapleton",
      email: "lstapleton@gmail.com",
    },
    text: "Crushing it at work today!",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "3",
      image: lucyAvatar,
      username: "@coolChick",
      name: "Lucy Stapleton",
      email: "lstapleton@gmail.com",
    },
    text: "Spamming you because your so rad!",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "1",
      image: tyannaAvatar,
      username: "@trveltman",
      name: "Tyanna  Veltman",
      email: "tveltman@gmail.com",
    },
    text: "Woah you are so rad.",
    date: 1546108200,
  },
  {
    id: "",
    giver: {
      id: "3",
      image: lucyAvatar,
      username: "@coolChick",
      name: "Lucy Stapleton",
      email: "lstapleton@gmail.com",
    },
    text: "WOOHOO WE DID IT!",
    date: 1546108200,
  },
];
