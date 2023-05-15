import React from 'react';
import { useTranslation } from 'react-i18next';

const EatingCard = () => {
    const { t, i18n } = useTranslation();

    return (
        <li className="cards_item">
        <div className="indicator">
          <div className="noti_count">0</div>
        </div>
        <div className="card card3">
          <div className="card_content">
            <h2 className="card_title">
                {i18n.language ==="en" && "Eating Schedule"}
                {i18n.language ==="ar" && "جدول الأكل"}
                {i18n.language ==="fr" && "Horaire Des Repas"}
              <span className="material-symbols-outlined">calendar_month</span>
            </h2>
            <div className="card_text">
              <p>.................</p>
            </div>
          </div>
        </div>
      </li>
    );
}

export default EatingCard;
