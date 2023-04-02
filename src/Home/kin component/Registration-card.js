import React from "react";
import { db } from "../../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./Registration-card.css";
import IosDialog from "./Ios-dialog";

const RegistrationCard = () => {
  let { kinId } = useParams();

  const [value, loading, error] = useCollection(
    query(
      collection(db, "Registration Requests"),
      where("kindergarten_id", "==", kinId)
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

  if (value) {
    return (
      <li className="cards_item">
        <div className="card card4">
          <div className="card_content">
            <h2 className="card_title">
              Registration Requests
              <span className="material-symbols-outlined">person_add</span>
            </h2>
            <div className="card_text">
              <ol
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  marginBottom: "20px",
                }}
              >
                {value.docs !== undefined ? (
                  value.docs.map((item) => {
                    return (
                      <>
                        <IosDialog id={item.data().User_name}>
                          <span
                            className="material-symbols-outlined"
                            style={{
                              float: "right",
                              color: "orange",
                              position: "absolute",
                              top: "5px",
                              right: "14px",
                              fontWeight: "900",
                              transform: "scale(1.2)",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              const profile = document.getElementById(
                                item.data().User_name
                              );
                              profile.close();
                            }}
                          >
                            close
                          </span>
                          <h1>{item.data().User_name}</h1>
                          <div className="child-content">
                            <div>  <label>Child Name:</label>  {item.data().Child_Name}</div> 
                            <di>  </di>

                          </div>
                          <button>Decline </button>
                          <button autoFocus="">Accept </button>
                        </IosDialog>
                        <li
                          className="Registration-list-item"
                          key={item.User_name}
                          onClick={(eo) => {
                            const ios = document.getElementById(
                              `${item.data().User_name}`
                            );
                            ios.showModal();
                          }}
                        >
                          {item.data().User_name}
                        </li>
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </ol>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default RegistrationCard;
