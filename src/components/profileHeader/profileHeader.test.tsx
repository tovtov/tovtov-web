import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileHeader from "./profileHeader";

const userImg = "https://bulma.io/images/placeholders/128x128.png";
const kudosCounter = 5;
describe("ProfileHeader", () => {
  it("Renders with Gravatar component nested", () => {
    render(<ProfileHeader userImg={userImg} kudosCounter={kudosCounter} />);
    expect(screen.getByTestId("userImg")).toBeDefined();
    const img = screen.getByTestId("userImg");
    expect(img).toHaveAttribute(
      "src",
      "https://bulma.io/images/placeholders/128x128.png"
    );
  });
  it("Renders with total kudos", () => {
    render(<ProfileHeader userImg={userImg} kudosCounter={kudosCounter} />);
    expect(screen.getAllByText("5")).toBeDefined();
  });
});
