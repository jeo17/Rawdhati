import React from 'react';
import MainHeader from './Main-Header';
import { useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc,updateDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';
import { useParams } from "react-router-dom";


const MainList = (UserName) => {




 const [value, loading, error] = useDocument(doc(db,"Messages", UserName.UserName));







    let { kinId } = useParams();
    const [MsgContant, setMsgContant] = useState(null);


    const [MsgNumber, setMsgNumber] = useState(null);







    if (UserName.UserName !=="null") {

      if (value) {
            



        return (

            <main>
           <MainHeader UserName={UserName}/> 

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
              <textarea placeholder="Type your message" value={MsgContant} onClick={(eo) => {
                setMsgNumber(Object.keys(value.data()).length)
              }}   onChange={(eo) => {
            setMsgContant(eo.target.value)
          }}/>
              <button  className="chat-send-button" onClick={async (eo) => {


                              const d = new Date();
                              let time = d.getTime();

                              await updateDoc(doc(db, "Messages", UserName.UserName), {
                                [`Message ${MsgNumber+1}`]:[kinId,MsgContant,time,"Rawdha"],
                              });


                          /*  await setDoc(doc(db, "Messages" , UserName.UserName), {
                                contant: MsgContant, 
                                createdAt:time,
                                sender: "Rawdha",
                                RawdhaID: kinId, 
                            });*/
                            setMsgContant("")
              
              }}>Send</button>
            </footer>
          </main>
        );
      }
    }else{
        return(
         <main >
            <h2 style={{textAlign:"center",position:"absolute",bottom:"50%",left:"50%",color:"rgba(255, 255, 255, 0.9)"}}>
                select a user to chat with ..
            </h2>
         </main>

        )
    }

   
}

export default MainList;
