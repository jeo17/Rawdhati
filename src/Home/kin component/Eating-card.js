import React from "react";
import { useTranslation } from "react-i18next";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { useState } from "react";


const EatingCard = (EatingTable) => {
  const { t, i18n } = useTranslation();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const food = EatingTable;
  let { kinId } = useParams();

  const [SaveEatingTable, setSaveEatingTable] = useState("Save Changes 📥");

  return (
    <li className="cards_item">
      <div className="indicator">
        <div className="noti_count">0</div>
      </div>
      <div className="card card3">
        <div className="card_content">
          <h2 className="card_title">
            {i18n.language === "en" && "Eating Schedule"}
            {i18n.language === "ar" && "جدول الأكل"}
            {i18n.language === "fr" && "Horaire Des Repas"}
            <span className="material-symbols-outlined">calendar_month</span>
          </h2>
          <div className="card_text">
            <ol
              style={{
                fontFamily: "'Fredoka One', cursive",
                marginBottom: "20px",
              }}
            >

              {days.map((item) => {
                return(
                  <li className="class-list-item" key={item}>
                  <img
                    src="https://d29fhpw069ctt2.cloudfront.net/icon/image/59528/preview.svg"
                    alt=""
                  />
                  {item}:
                       <input  type="text" name={item} onChange={(eo) => {
                        document.querySelector(".save-menu button").style.display = "block";
                        if (eo.target.name === "Sunday") {
                          food.EatingTable[0]=eo.target.value;
                        }
                        if (eo.target.name === "Monday") {
                          food.EatingTable[1]=eo.target.value;
                        }
                        if (eo.target.name === "Tuesday") {
                          food.EatingTable[2]=eo.target.value;
                        }
                        if (eo.target.name === "Wednesday") {
                          food.EatingTable[3]=eo.target.value;
                        }
                        if (eo.target.name === "Thursday") {
                          food.EatingTable[4]=eo.target.value;
                        }
                        if (eo.target.name === "Friday") {
                          food.EatingTable[5]=eo.target.value;
                        }
                        if (eo.target.name === "Saturday") {
                          food.EatingTable[6]=eo.target.value;
                        }
                       }}/>
                </li>
                )
              })}
            </ol>
            <div className="save-menu">
              <button  onClick={ async(eo) => {

                      setSaveEatingTable(
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                    );

                await updateDoc(doc(db, "kindergarten Information",kinId), {
                  kindergarten_Eating_Table: food.EatingTable,
                });
                setSaveEatingTable("Done ✓");
                setTimeout(() => {
                  document.querySelector(".save-menu button").style.display = "none";
                  setSaveEatingTable("Save Changes 📥 ");
                }, 1000);
                
              }}>{SaveEatingTable}</button>
            </div>

          </div>
        </div>
      </div>
    </li>
  );
};

export default EatingCard;
