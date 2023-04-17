import React from 'react';
import { useTranslation } from 'react-i18next';

const MessagesCard = () => {
    const { t, i18n } = useTranslation();

    return (
        <li className="cards_item">
        <div className="indicator">
          <div className="noti_count">0</div>
        </div>
        <div className="card card3">
          <div className="card_content">
            <h2 className="card_title">
                {i18n.language ==="en" && "Messages"}
                {i18n.language ==="ar" && "رسائل"}
                {i18n.language ==="fr" && "Messages"}
              <span className="material-symbols-outlined">chat</span>
            </h2>
            <div className="card_text">
              <p>.................</p>
            </div>
          </div>
        </div>
      </li>
    );
}

export default MessagesCard;
