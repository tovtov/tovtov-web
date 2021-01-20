import React, { FunctionComponent } from "react";
import "./gravatar.scss";
import { User } from "../database/userData";

const Gravatar: FunctionComponent<User> = ({ userImg }) => {
  return (
    <figure className="image is-128x128 is-child is-vertical">
      <img className="is-rounded is-primary" src={userImg} />
    </figure>
  );
};

export default Gravatar;
