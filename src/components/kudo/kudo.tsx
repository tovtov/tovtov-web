import React, { FunctionComponent } from "react";
import { toReadableDate } from "../../database/userData";
import { KudoReceived } from "../../models/kudosReceivedInterface";
import "./kudo.scss";

const Kudo: FunctionComponent<KudoReceived> = (Kudo) => {
  const { giver, date, text } = Kudo;
  const image = giver.image;
  const username = giver.username;
  const name = giver.name;

  return (
    <div
      data-testid="kudoContainer"
      className="kudoContainer notification box tile "
    >
      <div className=" is-1 media-left">
        <div className="image is-64x64">
          <img className="img" src={image} alt="kudo giver img" />
        </div>
      </div>
      <div className="tile is-11 is-vertical is-parent">
        <div className="tile">
          <div className="kudoDetails">
            <div className="tile ">
              <span className="has-text-weight-light">
                <strong> {name} </strong>
                <span className="date"> {toReadableDate(date)}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="tile kudoParagraph">{text}</div>
      </div>
    </div>
  );
};

export default Kudo;
