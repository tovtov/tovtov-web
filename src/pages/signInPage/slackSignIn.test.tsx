import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "./slackSignIn";

describe("SignIn", () => {
  it("SignIn renders with slack button", () => {
    render(<Signin onClick={() => {}} />);
    const img = screen.getByTestId("img");
    expect(img).toHaveAttribute("src", "sign_in_with_slack.png");
  });
});
