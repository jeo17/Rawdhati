import React from "react";
import { useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useParams } from "react-router-dom";

const Main = (kindergarten_Id) => {

  let { prId } = useParams();

  const [value, loading, error] = useDocument(doc(db, "Messages", prId));

  const [MsgContant, setMsgContant] = useState(null);

  const [MsgNumber, setMsgNumber] = useState(null);

  let arr = [];

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
      <>
        <ul id="chat">
        {arr.map((item) => {
              if (item[0][3] === "parents") {
                return (
                  <li className="me">
                    <div className="entete">
                      <span className="status green" />
                      <h2>Vincent</h2>
                      <h3>10:12AM, Today</h3>
                    </div>
                    <div className="triangle" />

                    <div className="message">{item[0][1]}</div>
                  </li>
                );
              } else {
                return (
                  <li className="you">
                    <div className="entete">
                      <span className="status green" />
                      <h2>Vincent</h2>
                      <h3>10:12AM, Today</h3>
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

              await updateDoc(doc(db, "Messages", prId), {
                [`Message${MsgNumber + 1}`]: [
                  kindergarten_Id.kindergarten_Id,
                  MsgContant,
                  time,
                  "parents",
                ],
              });


              setMsgContant("");
            }}
          >
            Send
          </button>
        </footer>
      </>
    );
  }
};

export default Main;
