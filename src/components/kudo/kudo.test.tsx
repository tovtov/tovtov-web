import React from "react";
import { render, screen } from "@testing-library/react";
import Kudo from "./kudo";
import { theDate } from "../../database/userData";

const SingleKudo = {
  giverImg: "https://bulma.io/images/placeholders/128x128.png",
  giversName: "testName",
  giversUserName: "@testUserName",
  kudo: "some string of words",
  date: theDate,
};
describe("Kudo", () => {
  it("Renders with kudo details", () => {
    render(<Kudo kudo={SingleKudo} />);
    expect(screen.getAllByText("testName")).toBeDefined();
    expect(screen.getAllByText("@testUserName")).toBeDefined();
    expect(screen.getAllByText("some string of words")).toBeDefined();
    expect(screen.getAllByText(theDate)).toBeDefined();
  });
});
