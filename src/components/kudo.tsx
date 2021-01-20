import React, { FunctionComponent } from "react";
import "../styles/kudo.scss";
import { User } from "../database/userData";

export interface KudoProps {
  kudo: User;
}

const Kudo = () => {
  return (
    <div className="box tile is-ancestor">
      <div className="tile is-parent is-1 media-left">
        <div className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </div>
      </div>
      <div className="tile is-11 is-vertical is-parent">
        <div className="tile">
          <div className="content">
            <div className="tile">
              <span className="has-text-weight-light">
                <strong> John Smith</strong> @johnsmith • September 20th, 2019
              </span>
            </div>
          </div>
        </div>
        <div className="tile kudoParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </div>
      </div>
    </div>
  );
};

export default Kudo;
