import React from 'react';
import {db} from "../../../firebase/config"
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState } from "react";



const ChatList = () => {

    let { kinId } = useParams();

    const [setUserName, UserName] = useState("Select User");

 

    const [value, loading, error] = useCollection(
        query(collection(db, "Can Chat With"), where("kindergarten_Id","==", kinId))
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
        return (

            <ul>
            {value.docs !== undefined ? value.docs.map((item) => {
              return (
                            <li key={item.data().Parents_User_Name}
                             onClick={(eo) => {
                                setUserName(eo.key)
                            }}>
                            <img
                              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                              alt=""
                            />
                            <div>
                              <h2>{item.data().Parents_User_Name}</h2>
                              <h3>
                                <span className="status green" />
                                Parents of {item.data().Child_Name.map((item) => {
                                  return(
                                      <span className='parents-of'>{item}</span>
                                  )
                                })}
                              </h3>
                            </div>
                          </li>
                          )
            }):<></>}
      
          </ul>
    
        );
     }

    
}

export default ChatList;
