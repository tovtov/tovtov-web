import React from "react";
import Kudo from "../components/kudo";

const KudosContainer = () => {
  return (
    <section className=" section ">
      <div className="notification is-light">
        <p className="title is-4 is-align-items-flex-end kudosTitle">Kudos</p>
        <Kudo />
      </div>
    </section>
  );
};

export default KudosContainer;
