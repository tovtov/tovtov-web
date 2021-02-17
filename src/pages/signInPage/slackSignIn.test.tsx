import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signin from "./slackSignIn";

describe("SignIn", () => {
  it("SignIn renders with slack button", () => {
    render(<Signin onClick={() => {}} />);
    const img = screen.getByTestId("img");
    expect(img).toHaveAttribute("src", "sign_in_with_slack.png");
  });
  it("SignIn renders with text", () => {
    render(<Signin onClick={() => {}} />);
    expect(screen.getAllByText("Welcome back!")).toBeDefined();
    expect(screen.getAllByText("Don't have an account yet?")).toBeDefined();
  });
});
