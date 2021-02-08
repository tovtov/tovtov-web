import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gravatar from "./gravatar";

describe("Gravatar", () => {
  it("Renders with user image", () => {
    const { getByTestId } = render(
      <Gravatar userImg={"https://bulma.io/images/placeholders/128x128.png"} />
    );
    const img = getByTestId("userImg");
    expect(img).toHaveAttribute(
      "src",
      "https://bulma.io/images/placeholders/128x128.png"
    );
  });
});
