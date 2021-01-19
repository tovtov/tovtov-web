import React from "react";
import "../styles/gravatar.scss";

const Gravatar = () => {
  return (
    <figure className="userImg image is-128x128 is-child is-vertical">
      <img
        className="is-rounded is-primary"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </figure>
  );
};

export default Gravatar;
