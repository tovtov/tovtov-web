import React, { FunctionComponent } from "react";
import "./gravatar.scss";

export interface GravatarProps {
  userImg: string;
}

const Gravatar: FunctionComponent<GravatarProps> = (GravatarProps) => {
  const { userImg } = GravatarProps;
  return (
    <figure className="userImg image is-128x128 is-child is-vertical">
      <img
        data-testid="userImg"
        className="is-rounded is-primary"
        src={userImg}
        alt="userPhoto"
      />
    </figure>
  );
};

export default Gravatar;
