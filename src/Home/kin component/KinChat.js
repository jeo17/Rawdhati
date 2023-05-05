import React from "react";
import "./KinChat.css";
import ChatList from "./chat/Chat-List";
import { db } from "../../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState } from "react";

const KinChat = () => {
  let { kinId } = useParams();

  const [TheName, setTheName] = useState("");

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
          <input type="text" placeholder="search" />
        </header>

        <ul>
          {value.docs !== undefined ? (
            value.docs.map((item) => {
              return (
                <li
                  key={item.data().Parents_User_Name}
                  data-name={item.data().Parents_User_Name}
                  onClick={(eo) => {
                    setTheName(eo.target.getAttribute("data-name"));
                  }}
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                    alt=""
                    data-name={item.data().Parents_User_Name}
                  />
                  <div data-name={item.data().Parents_User_Name}>
                    <h2 data-name={item.data().Parents_User_Name}>
                      {item.data().Parents_User_Name}
                    </h2>
                    <h3>
                      <span
                        className="status green"
                        data-name={item.data().Parents_User_Name}
                      />
                      <span data-name={item.data().Parents_User_Name}>
                        Parents of{" "}
                        {item.data().Child_Name.map((item2) => {
                          return (
                            <span
                              data-name={item.data().Parents_User_Name}
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
      <main>
        <header>
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
            alt=""
          />
          <div>
            <h2>{TheName}</h2>
          </div>
        </header>
        <ul id="chat">
          <li className="you">
            <div className="entete">
              <span className="status green" />
              <h2>Vincent</h2>
              <h3>10:12AM, Today</h3>
            </div>
            <div className="triangle" />
            <div className="message">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </div>
          </li>
          <li className="me">
            <div className="entete">
              <h3>10:12AM, Today</h3>
              <h2>Vincent</h2>
              <span className="status blue" />
            </div>
            <div className="message">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </div>
          </li>
          <li className="me">
            <div className="entete">
              <h3>10:12AM, Today</h3>
              <h2>Vincent</h2>
              <span className="status blue" />
            </div>

            <div className="message">OK</div>
          </li>
          <li className="you">
            <div className="entete">
              <span className="status green" />
              <h2>Vincent</h2>
              <h3>10:12AM, Today</h3>
            </div>
            <div className="triangle" />
            <div className="message">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </div>
          </li>
          <li className="me">
            <div className="entete">
              <h3>10:12AM, Today</h3>
              <h2>Vincent</h2>
              <span className="status blue" />
            </div>

            <div className="message">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </div>
          </li>
          <li className="me">
            <div className="entete">
              <h3>10:12AM, Today</h3>
              <h2>Vincent</h2>
              <span className="status blue" />
            </div>

            <div className="message">OK</div>
          </li>
        </ul>
        <footer>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
            alt=""
          />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
            alt=""
          />
          <textarea placeholder="Type your message" defaultValue={""} />
          <a href="#">Send</a>
        </footer>
      </main>
    </div>
  );
};

export default KinChat;
