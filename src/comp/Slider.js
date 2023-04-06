import "./Slider.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase/config";
import Page404 from "../Page_404";
import Profile from "./Profile";

function Slider() {
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

  const [value, loading, error] = useCollection(
    collection(db, "kindergarten Information")
  );

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
  let i = 0;
  value.docs.map((item, index) => {
    if (index < 9) {
      return sliderCard.push(
        <>
          <Profile id={item.data().kindergarten_id}>
            <div className="top-container">
              <img
                src={require("../comp/assets/avatar.jpg")}
                className="img-fluid profile-image"
                width={70}
                alt="sorry"
              />
            </div>
            <div className="bot-container" style={{ marginTop: "0" }}>
              <div style={{ marginLeft: "11px" }}>
                {item.data().kindergarten_Name !== undefined ? (
                  <h5 className="name"> {item.data().kindergarten_Name}</h5>
                ) : (
                  <h5 className="name"> welcome</h5>
                )}
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Address: </span>
                <span className="wishlist">
                  
                  {item.data().kindergarten_Address !== undefined ? (
                    item.data().kindergarten_Address
                  ) : (
                    <></>
                  )}
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Activites: </span>
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

              <div className="recent-border mt-4">
                <span className="recent-orders">Price: </span>
                <span className="wishlist">
                  
                  {item.data().kindergarten_Price !== undefined ? (
                    item.data().kindergarten_Price
                  ) : (
                    <></>
                  )}
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Bio: </span>
                <span className="wishlist"> {item.data().kindergarten_Bio} </span>
              </div>
            </div>
          </Profile>

          <div
            className="swiper-slide slider-card"
            key={item.data().kindergarten_Name}
          >
            <div className="card-content">
              <div className="slider-image"></div>
              <div className="media-icons">
                <i className="fab fa-facebook" />
                <i className="fab fa-instagram" />
                <i className="fab fa-google" />
              </div>
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
                  {item.data().kindergarten_Price}
                </span>

                {/*  <span className="profession">
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Activites:
                </span>
                {item.data().kindergarten_Activites.map((item) => {
                  return <span style={{ marginLeft: "5px" }} key={item}>{item},</span>;
                })}
              </span>  */}
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
                  className="aboutMe"
                  onClick={(eo) => {
                    const Kprofile = document.getElementById(
                      `${item.data().kindergarten_id}`
                    );
                    Kprofile.showModal();
                  }}
                >
                  About Me
                </button>
                <button className="hireMe">
                  <Link
                    to={`/kindergarten_form/${item.data().kindergarten_id}`}
                    style={{ all: "unset" }}
                  >
                    Registration
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  });

  if (value) {
    return (
      <>
        <section>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">{sliderCard}</div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
        </section>
      </>
    );
  }
}

export default Slider;
