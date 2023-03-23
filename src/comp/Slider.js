import './Slider.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { useEffect } from "react";





function Slider() {




  
  useEffect(() => {
     new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
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
          <div className="slider-image">
            <img src="images/img1.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img2.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img3.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img4.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img5.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img6.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img7.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img8.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="swiper-slide slider-card">
        <div className="card-content">
          <div className="slider-image">
            <img src="images/img9.jpg" alt="" />
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-github" />
          </div>
          <div className="name-profession">
            <span className="slider-name">Someone Name</span>
            <span className="profession">Web Developer</span>
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
            <button className="hireMe">Hire Me</button>
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
