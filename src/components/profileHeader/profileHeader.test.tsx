import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileHeader from "./profileHeader";

const userImg = "https://bulma.io/images/placeholders/128x128.png";
const kudosCounter = 5;
const kudosGivenCounter = 2;
describe("ProfileHeader", () => {
  it("Renders with Gravatar component nested", () => {
    render(
      <ProfileHeader
        userImg={userImg}
        kudosReceivedCounter={kudosCounter}
        kudosGivenCounter={kudosGivenCounter}
      />
    );
    expect(screen.getByTestId("userImg")).toBeDefined();
    const img = screen.getByTestId("userImg");
    expect(img).toHaveAttribute(
      "src",
      "https://bulma.io/images/placeholders/128x128.png"
    );
  });
  it("Renders with total kudos", () => {
    render(
      <ProfileHeader
        userImg={userImg}
        kudosReceivedCounter={kudosCounter}
        kudosGivenCounter={kudosGivenCounter}
      />
    );
    expect(screen.getAllByText("5")).toBeDefined();
    expect(screen.getAllByText("2")).toBeDefined();
  });
});
