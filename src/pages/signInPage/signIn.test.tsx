import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signin from "./signIn";

describe("SignIn", () => {
  it("SignIn renders with slack button", () => {
    render(<Signin />);
    const img = screen.getByTestId("img");
    expect(img).toHaveAttribute("src", "sign_in_with_slack.png");
  });
  it("SignIn renders with text", () => {
    render(<Signin />);
    expect(screen.getAllByText("Welcome back!")).toBeDefined();
    expect(screen.getAllByText("Don't have an account yet?")).toBeDefined();
  });
});
