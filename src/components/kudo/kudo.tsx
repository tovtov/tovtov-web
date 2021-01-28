import React, { FunctionComponent } from "react";
import "./kudo.scss";
import { SingleKudoReceived } from "../../models/singleKudoInterface";
import { theDate } from "../../database/userData";

const Kudo: FunctionComponent<SingleKudoReceived> = (SingleKudoReceived) => {
  const kudo = SingleKudoReceived;
  return (
    <div
      data-testid="kudoContainer"
      className="kudoContainer notification box tile "
    >
      <div className="tile is-parent is-1 media-left">
        <div className="image is-64x64">
          <img src={kudo.giverImg} alt="kudo giver img" />
        </div>
      </div>
      <div className="tile is-11 is-vertical is-parent">
        <div className="tile">
          <div className="kudoDetails">
            <div className="tile">
              <span className="has-text-weight-light">
                <strong> {kudo.giversName}</strong>
                <span>{kudo.giversUserName}</span>
                <span> • </span>
                <span> {theDate(kudo.date)}</span>
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
