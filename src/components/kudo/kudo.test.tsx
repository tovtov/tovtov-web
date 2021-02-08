import React from "react";
import { render, screen } from "@testing-library/react";
import Kudo from "./kudo";

const SingleKudo = {
  id: "id",
  giver: {
    id: "id",
    image: "",
    name: "testName",
    username: "@testUserName",
    email: "",
  },
  text: "some string of words",
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
