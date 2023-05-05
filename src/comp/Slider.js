import "./Slider.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import Page404 from "../Page_404";
import Profile from "./Profile";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { storage } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Slider({ Collection }) {
  useEffect(() => {
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  const { i18n } = useTranslation();

  const [value, loading, error] = useCollection(Collection);

  let Url;

  if (loading) {
    return (
      <div>
        <p>Initialising storage...</p>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <Page404 />
      </>
    );
  }



  let sliderCard = [];
  value.docs.map(async (item, index) => {
    if (index < 9) {
      if (item.data().HasAnImg === false) {
        Url ="https://scontent.fqfd1-1.fna.fbcdn.net/v/t1.6435-9/82261670_1485070874965030_3627461333034729472_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=uJctqSN0-rIAX9AthOq&_nc_ht=scontent.fqfd1-1.fna&oh=00_AfAujafa_CFOOXNy3XOEUfvw1VQcDt13sG2h6vpMdzKSgA&oe=6458F6D2";

      } /*else {

      await  getDownloadURL(
          ref(storage, `/Kindergartens Images/${item.data().kindergarten_id}`)
        )
          .then((url) => {
            Url = "url";

          })
          .catch((error) => {
            console.log(error.message);
          });

      }*/



      return sliderCard.push(
        <div
          className="swiper-slide slider-card"
          key={item.data().kindergarten_Name}
        >
          <div className="card-content">
            <img
              loading="lazy"
              className="slider-image"
              src="https://scontent.fqfd1-1.fna.fbcdn.net/v/t1.6435-9/82261670_1485070874965030_3627461333034729472_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=uJctqSN0-rIAX9AthOq&_nc_ht=scontent.fqfd1-1.fna&oh=00_AfAujafa_CFOOXNy3XOEUfvw1VQcDt13sG2h6vpMdzKSgA&oe=6458F6D2"
              alt="error"
            ></img>
            <div className="bottom-card-content">
              <div className="name-profession">
                <span className="slider-name">
                  {item.data().kindergarten_Name}
                </span>
                <span
                  className="profession"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  {item.data().kindergarten_Address}
                </span>
                <span
                  className="profession"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  {`${item.data().kindergarten_Price}.00 DA`}
                </span>
              </div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="slider-button">
                <button
                  style={{
                    fontFamily:
                      i18n.language === "ar"
                        ? "'Noto Sans Arabic', sans-serif"
                        : null,
                  }}
                  className="aboutMe"
                  onClick={(eo) => {
                    const Kprofile = document.getElementById(
                      `${item.data().kindergarten_id}`
                    );
                    if (Kprofile.open) {
                      Kprofile.close();
                    } else {
                      Kprofile.showModal();
                    }
                  }}
                >
                  {i18n.language === "en" && "About Me"}
                  {i18n.language === "ar" && "معلومات عني"}
                  {i18n.language === "fr" && "Sur moi"}
                </button>
                <button className="hireMe">
                  <Link
                    to={`/kindergarten_form/${item.data().kindergarten_id}`}
                    style={{
                      all: "unset",
                      fontFamily:
                        i18n.language === "ar"
                          ? "'Noto Sans Arabic', sans-serif"
                          : null,
                    }}
                    onClick={(eo) => {
                      document.documentElement.scrollTop = 0;
                    }}
                  >
                    {i18n.language === "en" && "Registration"}
                    {i18n.language === "ar" && "تسجيل"}
                    {i18n.language === "fr" && "Inscription"}
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <Profile id={item.data().kindergarten_id}>
            <div className="top-container">
              <img
                style={{ width: "300px", height: "90px" }}
                src={Url}
                className="img-fluid profile-image"
                width={70}
                alt="sorry"
              />
            </div>
            <div
              className="bot-container"
              style={{ marginTop: "0" }}
              dir={i18n.language === "ar" ? "rtl" : null}
            >
              <div style={{ marginLeft: "11px" }}>
                {item.data().kindergarten_Name !== undefined ? (
                  <h5 className="name"> {item.data().kindergarten_Name}</h5>
                ) : (
                  <h5 className="name"> welcome</h5>
                )}
              </div>

              <div
                className="recent-border mt-4"
                style={{
                  borderLeft: i18n.language === "ar" ? "none" : null,
                  borderRight:
                    i18n.language === "ar" ? "2px solid #5957f9" : null,
                }}
              >
                <span className="recent-orders">
                  {i18n.language === "en" && "Address:"}
                  {i18n.language === "ar" && "العنوان:"}
                  {i18n.language === "fr" && "Adresse:"}{" "}
                </span>
                <span className="wishlist">
                  {item.data().kindergarten_Address !== undefined ? (
                    item.data().kindergarten_Address
                  ) : (
                    <></>
                  )}
                </span>
              </div>

              <div
                className="recent-border mt-4"
                style={{
                  borderLeft: i18n.language === "ar" ? "none" : null,
                  borderRight:
                    i18n.language === "ar" ? "2px solid #5957f9" : null,
                }}
              >
                <span className="recent-orders">
                  {i18n.language === "en" && "Activities:"}
                  {i18n.language === "ar" && "الأنشطة:"}
                  {i18n.language === "fr" && "Activités:"}{" "}
                </span>
                <span className="wishlist">
                  {item.data().kindergarten_Activites.map((item) => {
                    return (
                      <span style={{ marginLeft: "5px" }} key={item}>
                        {item},
                      </span>
                    );
                  })}
                </span>
              </div>

              <div
                className="recent-border mt-4"
                style={{
                  borderLeft: i18n.language === "ar" ? "none" : null,
                  borderRight:
                    i18n.language === "ar" ? "2px solid #5957f9" : null,
                }}
              >
                <span className="recent-orders">
                  {i18n.language === "en" && "Price"}
                  {i18n.language === "ar" && "السعر:"}
                  {i18n.language === "fr" && "Prix:"}{" "}
                </span>
                <span className="wishlist">
                  {item.data().kindergarten_Price !== undefined ? (
                    `${item.data().kindergarten_Price}.00 DA`
                  ) : (
                    <></>
                  )}
                </span>
              </div>

              <div
                className="recent-border mt-4"
                style={{
                  borderLeft: i18n.language === "ar" ? "none" : null,
                  borderRight:
                    i18n.language === "ar" ? "2px solid #5957f9" : null,
                }}
              >
                <span className="recent-orders">
                  {i18n.language === "en" && "Bio:"}
                  {i18n.language === "ar" && "السيرة:"}
                  {i18n.language === "fr" && "Bio:"}
                </span>
                <span className="wishlist">
                  {" "}
                  {item.data().kindergarten_Bio}{" "}
                </span>
              </div>

              <div
                className="recent-border mt-4 media-area"
                style={{
                  borderLeft: i18n.language === "ar" ? "none" : null,
                  borderRight:
                    i18n.language === "ar" ? "2px solid #5957f9" : null,
                }}
              >
                <span className="recent-orders">
                  {i18n.language === "en" && "Media:"}
                  {i18n.language === "ar" && "وسائط التواصل:"}
                  {i18n.language === "fr" && "Médias:"}
                </span>
                <span className="wishlist wishlist-media">
                  <div className="kin-media-icons">
                    {item.data().kindergarten_facebook !== null && (
                      <a
                        href={item.data().kindergarten_facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="gg-facebook" />{" "}
                      </a>
                    )}

                    {item.data().kindergarten_Instagram !== null && (
                      <a
                        href={item.data().kindergarten_Instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="gg-instagram" />
                      </a>
                    )}

                    {item.data().kindergarten_Google !== null && (
                      <a
                        href={item.data().kindergarten_Google}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="gg-google" />
                      </a>
                    )}
                  </div>
                </span>
              </div>
            </div>
          </Profile>
        </div>
      );
    }
  });
  
    if (value) {
    
      return (
        <section>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">{sliderCard}</div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
        </section>
      );
    }

}

export default Slider;
