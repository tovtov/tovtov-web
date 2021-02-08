import React, { FunctionComponent } from "react";
import { toReadableDate } from "../../database/userData";
import { KudoReceived } from "../../models/kudosReceivedInterface";
import "./kudo.scss";

const Kudo: FunctionComponent<KudoReceived> = (Kudo) => {
  const { giver, date, text } = Kudo;
  const image = giver.image;
  const name = giver.name;

  return (
    <div
      data-testid="kudoContainer"
      className="kudoContainer notification box tile "
    >
      <div className="">
        <div className="tile is-parent kudoDetails">
          <div className="media-left">
            <div className=" tile image is-64x64">
              <img className="img" src={image} alt="kudo giver img" />
            </div>
          </div>
          <div className="">
            <div className="">
              <span className="tile nameAndDate">
                <span className=""> {name} </span>
                <span className="date"> {toReadableDate(date)}</span>
              </span>
            </div>
            <div className="tile kudoParagraph">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kudo;
