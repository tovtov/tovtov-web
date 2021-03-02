import React, { FunctionComponent, useState } from "react";
import ProfileHeader from "../../components/profileHeader/profileHeader";
import Kudo from "../../components/kudo/kudo";
import Pagination from "../../components/pagination/pagination";
import { KudoReceived } from "../../models/kudosReceivedInterface";
import { LoginUser, UserInfo, CountersData } from "../../database/userData";
import "./profilePage.scss";

const ProfilePage: FunctionComponent = () => {
  const itemsPerPage = 3; //how many kudos displayed per page
  const [kudoReceived] = useState<Array<KudoReceived>>(UserInfo);
  const [user] = useState(LoginUser);
  const [counters] = useState(CountersData);
  const { image, name } = user[1];
  const { received, given } = counters[0];
  const [page, setPage] = useState(1);
  const [totalPages] = useState(UserInfo.length / itemsPerPage);
  const [lastKudoDisplayed, setLastKudosDisplayed] = useState(0);

  const kudosToDisplay = (received: number) => {
    if (received === 0) {
      return false;
      //<div> Looks like there is nothing here yet! </div>;
    } else {
      return true;
      // let kudoIndex = lastKudoDisplayed + 1;
      // for (let i = 0; i < itemsPerPage; i++) {
      //   console.log("i:", i, itemsPerPage, kudoIndex);
      //   <div key={kudoIndex} className="">
      //     <Kudo {...kudoReceived[kudoIndex]} />
      //   </div>;
      //   kudoIndex++;
    }
  };

  return (
    <div>
      <ProfileHeader
        kudosReceivedCounter={received}
        userImg={image}
        fullName={name}
        kudosGivenCounter={given}
      />
      <section className="section">
        <div className="container">
          <p className="title is-4 is-align-items-flex-end kudosTitle">Kudos</p>
        </div>
        {kudosToDisplay(received) === true ? <div></div> : <div></div>}
        <Pagination
          lastKudoDisplayed={lastKudoDisplayed}
          currentPage={page}
          totalPages={totalPages}
          setCurrentPage={setPage}
          setLastKudosDisplayed={setLastKudosDisplayed}
          itemsPerPage={itemsPerPage}
        />
      </section>
    </div>
  );
};

export default ProfilePage;
