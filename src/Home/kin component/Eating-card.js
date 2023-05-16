import React from "react";
import { useTranslation } from "react-i18next";

const EatingCard = () => {
  const { t, i18n } = useTranslation();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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
                       <input  type="text"/>
                </li>
                )
              })}







            </ol>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EatingCard;
