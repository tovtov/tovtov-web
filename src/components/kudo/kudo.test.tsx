import React from "react";
import { render, screen } from "@testing-library/react";
import Kudo from "./kudo";

const SingleKudo = {
  giverImg: "https://bulma.io/images/placeholders/128x128.png",
  giversName: "testName",
  giversUserName: "@testUserName",
  kudo: "some string of words",
  date: 1546108200,
};
describe("Kudo", () => {
  it("Renders with kudo details", () => {
    render(<Kudo {...SingleKudo} />);
    expect(screen.getAllByText("testName")).toBeDefined();
    expect(screen.getAllByText("@testUserName")).toBeDefined();
    expect(screen.getAllByText("some string of words")).toBeDefined();
    expect(screen.getAllByText("12/29/2018")).toBeDefined();
  });
});
