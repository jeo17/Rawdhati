import React from "react";
import "./KinChat.css";
import MainList from "./chat/Main-List";
import { db } from "../../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState } from "react";

const KinChat = () => {
  let { kinId } = useParams();

  const [TheName, setTheName] = useState("null");


  const [value, loading, error] = useCollection(
    query(
      collection(db, "Can Chat With"),
      where("kindergarten_Id", "==", kinId)
    )
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

  return (
    <div id="KinChat-container">
      <aside>
        <header>
          <input type="text" placeholder="search"/>
        </header>

        <ul>
          {value.docs !== undefined ? (
            value.docs.map((item) => {
              return (
                <li
                  key={item.data().Parents_User_Name}
                  data-name={item.data().Parents_Id}
                  onClick={(eo) => {
                    setTheName(eo.target.getAttribute("data-name"));
                  }}
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                    alt=""
                    data-name={item.data().Parents_Id}
                  />
                  <div data-name={item.data().Parents_Id}>
                    <h2 data-name={item.data().Parents_Id}>
                      {item.data().Parents_User_Name}
                    </h2>
                    <h3 data-name={item.data().Parents_Id}>
                      <span
                        className="status green"
                        data-name={item.data().Parents_Id}
                      />
                      <span data-name={item.data().Parents_Id}>
                        Parents of{" "}
                        {item.data().Child_Name.map((item2,index) => {
                          return (
                            <span
                             key={index}
                              data-name={item.data().Parents_Id}
                              className="parents-of"
                            >
                              {item2}
                            </span>
                          );
                        })}
                      </span>
                    </h3>
                  </div>
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </aside>
      <MainList  UserName={TheName}/>
    </div>
  );
};

export default KinChat;
