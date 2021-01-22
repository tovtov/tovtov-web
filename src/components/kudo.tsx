import React, { FunctionComponent } from "react";
import "../styles/kudo.scss";
import { SingleKudo } from "../database/userData";

export interface KudoProps {
  kudo: SingleKudo;
}

const Kudo: FunctionComponent<KudoProps> = (KudoProps) => {
  const kudo = KudoProps.kudo;
  return (
    <div data-testid="kudoContainer" className=" box tile is-ancestor">
      <div className="tile is-parent is-1 media-left">
        <div className="image is-64x64">
          <img src={kudo.giverImg} alt="kudo giver img" />
        </div>
      </div>
      <div className="tile is-11 is-vertical is-parent">
        <div className="tile">
          <div className="content">
            <div className="tile">
              <span className="has-text-weight-light">
                <strong> {kudo.giversName}</strong>{" "}
                <span>{kudo.giversUserName}</span>
                <span> •</span>
                <span> {kudo.date}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="tile kudoParagraph">{kudo.kudo}</div>
      </div>
    </div>
  );
};

export default Kudo;
