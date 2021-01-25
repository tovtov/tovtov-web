import React, { FunctionComponent } from "react";
import "./gravatar.scss";

export interface gravatarProps {
  userImg: string;
}
const Gravatar: FunctionComponent<gravatarProps> = (gravatarProps) => {
  return (
    <figure className="userImg image is-128x128 is-child is-vertical">
      <img
        data-testid="userImg"
        className="is-rounded is-primary"
        src={gravatarProps.userImg}
        alt="userPhoto"
      />
    </figure>
  );
};

export default Gravatar;
