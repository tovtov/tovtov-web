import React from "react";
import { render, screen } from "@testing-library/react";
import { theDate } from "../../database/userData";
import PageProfile from "./profilePage";

//Once context is set up will this to test data is being passed.
// const UserData = [
//   {
//     userImg: "https://bulma.io/images/placeholders/128x128.png",
//     userName: "@testUserName",
//     fullName: "testUserName",
//     kudos: [
//       {
//         giverImg: "https://bulma.io/images/placeholders/128x128.png",
//         giversName: "test giver",
//         giversUserName: "@testGiver",
//         kudo: "1234!",
//         date: theDate,
//       },
//     ],
//   },
// ];

describe("PageProfile", () => {
  it("PageProfile renders with Kudo component", () => {
    render(<PageProfile />);
    expect(screen.getAllByTestId("kudoContainer")).toBeDefined();
  });
  it("PageProfile renders with ProfileHeader component", () => {
    render(<PageProfile />);
    expect(screen.getByTestId("profileHeaderComp")).toBeDefined();
  });
  it("PageProfile renders with text", () => {
    render(<PageProfile />);
    expect(screen.getAllByText("Kudos")).toBeDefined();
  });
});
