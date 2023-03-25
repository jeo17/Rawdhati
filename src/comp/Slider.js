import "./Slider.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

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

  return (
    <>
      <section>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>


                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
            <div className="swiper-slide slider-card">
              <div className="card-content">
                <div className="slider-image"></div>
                <div className="media-icons">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-google" />
                </div>
                <div className="name-profession">
                  <span className="slider-name">Name</span>
                  <span className="profession">Address</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <div className="slider-button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe"><Link to="/pr_home/kindergarten_form" style={{all:"unset"}}> Registration </Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
      </section>
    </>
  );
}

export default Slider;
