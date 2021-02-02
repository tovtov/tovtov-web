import React, { FunctionComponent } from "react";
import "./kudo.scss";
import { SingleKudoReceived } from "../../models/singleKudoInterface";
import { toReadableDate } from "../../database/userData";

const Kudo: FunctionComponent<SingleKudoReceived> = (SingleKudoReceived) => {
  const { kudo, date, giverUserName, giverName, giverImg } = SingleKudoReceived;

  return (
    <div
      data-testid="kudoContainer"
      className="kudoContainer notification box tile "
    >
      <div className="tile is-parent is-1 media-left">
        <div className="image is-64x64">
          <img src={giverImg} alt="kudo giver img" />
        </div>
      </div>
      <div className="tile is-11 is-vertical is-parent">
        <div className="tile">
          <div className="kudoDetails">
            <div className="tile">
              <span className="has-text-weight-light">
                <strong> {giverName}</strong>
                <span>{giverUserName}</span>
                <span> • </span>
                <span> {toReadableDate(date)}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="tile kudoParagraph">{kudo}</div>
      </div>
    </div>
  );
};

export default Kudo;
