import React from "react";
import MainHeader from "./Main-Header";
import { useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useParams } from "react-router-dom";

const MainList = (UserName) => {
  const [value, loading, error] = useDocument(
    doc(db, "Messages", UserName.UserName)
  );

  let arr = [];
  let arr2 = [];

  let { kinId } = useParams();
  const [MsgContant, setMsgContant] = useState("");

  const [MsgNumber, setMsgNumber] = useState(null);

  if (UserName.UserName !== "null") {
    if (value) {
      Object.entries(value.data()).map((item) => {
        item.map((item2, index) => {
          if (index === 1) {
            if (arr.includes(item2) === false) {
              arr.push([item2]);
            }
          }
        });
      });

      for (let index = 0; index < arr.length; index++) {
        let temp;
        let min = arr[index][0][2];
        let minIndex = arr[index][0];

        for (let j = index + 1; j < arr.length; j++) {
          if (arr[j][0][2] < min) {
            min = arr[j][0][2];
            if (min !== arr[index][0][2]) {
              temp = arr[index][0];
              arr[index][0] = arr[j][0];
              arr[j][0] = temp;
            }
          }
        }
      }

      return (
        <main>
          <MainHeader UserName={UserName} />

          <ul id="chat">
            {arr.map((item) => {
              if (item[0][3] === "parents") {
                return (
                  <li className="you">
                    <div className="entete">
                      <span className="status green" />
                      <h2>{UserName.HisName}</h2>
                      <h3>{new Date(item[0][2]).getHours().toString().padStart(2, '0')}:{new Date(item[0][2]).getUTCMinutes().toString().padStart(2, '0')}, {new Date(item[0][2]).getFullYear()}/{Number(new Date(item[0][2]).getMonth().toString().padStart(2, '0'))+1}/{new Date(item[0][2]).getDate().toString().padStart(2, '0')}</h3>
                    </div>
                    <div className="triangle" />

                    <div className="message">{item[0][1]}</div>
                  </li>
                );
              } else {
                return (
                  <li className="me">
                    <div className="entete">
                      <span className="status green" />
                      <h2>El Rawdha</h2>
                      <h3>{new Date(item[0][2]).getHours().toString().padStart(2, '0')}:{new Date(item[0][2]).getUTCMinutes().toString().padStart(2, '0')}, {new Date(item[0][2]).getFullYear()}/{Number(new Date(item[0][2]).getMonth().toString().padStart(2, '0'))+1}/{new Date(item[0][2]).getDate().toString().padStart(2, '0')}</h3>
                    </div>
                    <div className="triangle" />

                    <div className="message">{item[0][1]}</div>
                  </li>
                );
              }
            })}
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
            <textarea
              placeholder="Type your message"
              value={MsgContant}
              onClick={(eo) => {
                setMsgNumber(Object.keys(value.data()).length);
              }}
              onChange={(eo) => {
                setMsgContant(eo.target.value);
              }}
            />
            <button
              className="chat-send-button"
              onClick={async (eo) => {
                const d = new Date();
                let time = d.getTime();

                await updateDoc(doc(db, "Messages", UserName.UserName), {
                  [`Message${MsgNumber + 1}`]: [
                    kinId,
                    MsgContant,
                    time,
                    "Rawdha",
                  ],
                });

                setMsgContant("");
              }}
            >
              Send
            </button>
          </footer>
        </main>
      );
    }
  } else {
    return (
      <main>
        <h2
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: "50%",
            left: "50%",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          select a user to chat with ..
        </h2>
      </main>
    );
  }
};

export default MainList;
