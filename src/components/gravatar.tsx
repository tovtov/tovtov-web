import React, { FunctionComponent } from "react";
import "../styles/gravatar.scss";

export interface gravatarProps {
  userImg: string; //the users chosen plants interface
}
const Gravatar: FunctionComponent<gravatarProps> = (gravatarProps) => {
  return (
    <figure className="userImg image is-128x128 is-child is-vertical">
      <img
        className="is-rounded is-primary"
        src={gravatarProps.userImg}
        alt="userPhoto"
      />
    </figure>
  );
};

export default Gravatar;
