import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const MainHeader = (UserName) => {
  const [value, loading, error] = useDocument(
    doc(db, "Can Chat With", UserName.UserName.UserName)
  );

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (error) {
    return <>error loading the data ...</>;
  }

  if (value) {
  }

  return (
    <header>
      <img
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
        alt=""
      />
      <div>
        <h2>{value.data().Parents_User_Name}</h2>
      </div>
    </header>
  );
};

export default MainHeader;
