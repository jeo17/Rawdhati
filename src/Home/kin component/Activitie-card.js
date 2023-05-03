import React from "react";
import { useParams } from "react-router-dom";
import { arrayRemove, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ActivitieCard = () => {
  const { t, i18n } = useTranslation();
  let { kinId } = useParams();
  const [value, loading, error] = useDocument(
    doc(db, "kindergarten Information", kinId)
  );
  const [Activitie, setActivitie] = useState("");

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
        <div className="card card2">
          <div className="card_content">
            <h2 className="card_title">
              {i18n.language === "en" && "Activities"}
              {i18n.language === "ar" && "أنشطة"}
              {i18n.language === "fr" && "Activités"}
              <span className="material-symbols-outlined">extension</span>
            </h2>
            <div className="card_text">
              <ol
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  marginBottom: "20px",
                }}
              >
                {value.data().kindergarten_Activites !== undefined ? (
                  value.data().kindergarten_Activites.map((item) => {
                    return (
                      <li className="class-list-item" key={item}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3712/3712259.png"
                          alt=""
                        />
                        {item}

                        <span
                          className="material-symbols-outlined"
                          onClick={async (eo) => {
                            await updateDoc(
                              doc(db, "kindergarten Information", kinId),
                              {
                                kindergarten_Activites: arrayRemove(item),
                              }
                            );
                          }}
                        >
                          {" "}
                          delete{" "}
                        </span>
                      </li>
                    );
                  })
                ) : (
                  <li></li>
                )}
              </ol>
              <div className="add-act">
                <span
                  className="material-symbols-outlined add-act-icon"
                  onClick={async (eo) => {
                    await updateDoc(
                      doc(db, "kindergarten Information", kinId),
                      {
                        kindergarten_Activites: arrayUnion(
                          Activitie === "" ? undefined : Activitie
                        ),
                      }
                    );
                    setActivitie("");
                  }}
                >
                  add_circle
                </span>
                {i18n.language === "en" && (
                  <input
                    value={Activitie}
                    type="text"
                    placeholder="Add more activities"
                    onChange={(eo) => {
                      setActivitie(eo.target.value);
                    }}
                  />
                )}
                {i18n.language === "ar" && (
                  <input
                  dir="rtl"
                    value={Activitie}
                    type="text"
                    placeholder="أضف المزيد من الأنشطة"
                    onChange={(eo) => {
                      setActivitie(eo.target.value);
                    }}
                  />
                )}
                {i18n.language === "fr" && (
                  <input
                    value={Activitie}
                    type="text"
                    placeholder="Ajouter plus d'activités"
                    onChange={(eo) => {
                      setActivitie(eo.target.value);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default ActivitieCard;
