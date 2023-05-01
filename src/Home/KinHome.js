import React from "react";
import "./home.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Page404 from "../Page_404";
import RegistrationCard from "./kin component/Registration-card";
import ClassCard from "./kin component/Class-card";
import ActivitieCard from "./kin component/Activitie-card";
import MessagesCard from "./kin component/Messages-card";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import { storage } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../comp/Profile";
import { signOut, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";

const KinHome = () => {
  const onScroll = (event) => {
    if (document.getElementById("banner") != null) {
      const h1 = document.getElementById("h1"),
        banner = document.getElementById("banner"),
        button = document.getElementById("button");
      const scrollPosition = event.target.scrollingElement.scrollTop;
      if (scrollPosition > 150) {
        banner.style.backgroundSize = "140%";
        h1.style.opacity = 0;
        h1.style.translate = "0 -50px";
        h1.style.scale = "0.9";
        button.style.opacity = 0;
        button.style.translate = "0 -50px";
        button.style.scale = "0.8";
      } else {
        banner.style.backgroundSize = "100%";
        h1.style.opacity = 1;
        h1.style.translate = 0;
        h1.style.scale = 1;
        button.style.opacity = 1;
        button.style.translate = 0;
        button.style.scale = 1;
      }
    }
  };

  document.addEventListener("scroll", onScroll);

  const Next = () => {
    let i = document.querySelector(".activated_feild");

    let current_fs = i;
    let next_fs = document.getElementById(Number(i.id) + 1);

    current_fs.style.display = "none";
    next_fs.style.display = "block";

    current_fs.classList.remove("activated_feild");
    next_fs.classList.add("activated_feild");

    if (current_fs.id === "1") {
      document
        .querySelector(".progress_holder:nth-child(1)")
        .classList.add("activated_step");
    }
    if (current_fs.id === "2") {
      document
        .querySelector(".progress_holder:nth-child(2)")
        .classList.add("activated_step");
    }
    if (current_fs.id === "3") {
      document
        .querySelector(".progress_holder:nth-child(3)")
        .classList.add("activated_step");
    }
    if (current_fs.id === "4") {
      document
        .querySelector(".progress_holder:nth-child(4)")
        .classList.add("activated_step");
    }
    if (current_fs.id === "5") {
      document
        .querySelector(".progress_holder:nth-child(5)")
        .classList.add("activated_step");
    }
  };

  const Prev = (e) => {
    let i = document.querySelector(".activated_feild");

    let current_fs = i;
    let prev_fs = document.getElementById(Number(i.id) - 1);

    current_fs.style.display = "none";
    prev_fs.style.display = "block";

    current_fs.classList.remove("activated_feild");
    prev_fs.classList.add("activated_feild");

    if (current_fs.id === "2") {
      document
        .querySelector(".progress_holder:nth-child(1)")
        .classList.remove("activated_step");
    }
    if (current_fs.id === "3") {
      document
        .querySelector(".progress_holder:nth-child(2)")
        .classList.remove("activated_step");
    }
    if (current_fs.id === "4") {
      document
        .querySelector(".progress_holder:nth-child(3)")
        .classList.remove("activated_step");
    }
    if (current_fs.id === "5") {
      document
        .querySelector(".progress_holder:nth-child(4)")
        .classList.remove("activated_step");
    }
  };
  //invalid enter key:
  const keyEvent = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const validButton = (eo, name) => {
    eo.preventDefault();
    name.length <= 3 ? (eo.target.disabled = true) : Next();
  };

  const countBOX = (eo, act) => {
    if (eo.target.checked) {
      act.push(`${eo.target.id}`);
    } else {
      const index = act.indexOf(eo.target.id);
      act.splice(index, 1);
    }
    act.length <= 0
      ? (document.querySelectorAll(".nextStep")[4].disabled = true)
      : (document.querySelectorAll(".nextStep")[4].disabled = false);
  };

  const validButton2 = (eo, act) => {
    eo.preventDefault();
    act.length <= 0 ? (eo.target.disabled = true) : Next();
  };

  const validButton3 = (eo, amount) => {
    eo.preventDefault();
    if (amount < 1000) {
      eo.target.disabled = true;
      console.log("aaaa")
    } else {
      console.log("bbbb")
      Next();
      setTimeout(async () => {
        await setDoc(
          doc(db, "kindergarten Information", user.uid),
          {
            kindergarten_Name: name,
            kindergarten_Address: address,
            kindergarten_Activites: act,
            kindergarten_Price: amount,
            kindergarten_id: kinId,
            kindergarten_Bio: null,
            kindergarten_facebook: null,
            kindergarten_Instagram: null,
            kindergarten_Google: null,
          }
        );
        document.getElementById("kin-dialog").close();
      }, 3300);
    }
  };

  let { kinId } = useParams();
  

  let [Url, seturl] = useState(    getDownloadURL(ref(storage, `/Kindergartens Images/${kinId}`))
  .then((url) => {
    seturl(url)
  })
  .catch((error) => {
  console.log(error.message)
  seturl("https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
  })  );

 
  let [img, setimg] = useState(null);

  const storeIMG = () => {
   const imageref = ref(storage, `/Kindergartens Images/${kinId}`);
   uploadBytes(imageref, img).then(() => {
   })
   .catch((error) => {
    console.log(error.message)
   });
 }




  const { i18n } = useTranslation();

  let [name, setname] = useState("");
  let [address, setaddress] = useState("");
  let [amount, setamount] = useState(0);
  let [Media, setMedia] = useState("");

  let [act, setact] = useState([]);



  let [SaveAddress, setSaveAddress] = useState("none");
  let [SavePrice, setSavePrice] = useState("none");
  let [SaveBio, setSaveBio] = useState("none");
  let [SaveMedia, setSaveMedia] = useState("none");

  let [Bio, setBio] = useState(undefined);

  let [WhichMedia, setWhichMedia] = useState(undefined);

  const [user, loading, error] = useAuthState(auth);
  const [value, loadingg, errorr] = useDocument(
    doc(db, "kindergarten Information", kinId)
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/Visitor");
    }
  });

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
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

  if (!user) {
    navigate("/Visitor");
  }

  if (loadingg) {
    return (
      <div>
        <p>Initialising storage...</p>
      </div>
    );
  }

  if (errorr) {
    return (
      <>
        <Page404 />
      </>
    );
  }

  if (user.displayName === null) {
    if (user.emailVerified) {
      return (
        <>
          <Topcloud />

          <Profile>
            <div className="top-container" dir={i18n.language === "ar" ? "rtl" : null}>
              
            <div class="profile-pic">
                 <label class="-label" for="file">
                  <span class="glyphicon glyphicon-camera"></span>
                  <span>Change Image</span>
                </label>
                <input id="file" type="file" onchange="loadFile(event)"/>
              <img
                src={Url}
                className="img-fluid profile-image"
                width="130px"
                height="130px"
                alt="sorry"
              />
              </div>




              <div style={{ marginLeft: i18n.language === "ar"? null:"11px",marginRight: i18n.language === "ar"?"11px":null}}>
                {value.data() !== undefined ? (
                  <h5 className="name"> {value.data().kindergarten_Name}</h5>
                ) : (
                  <h5 className="name"> welcome</h5>
                )}
                <p className="mail">{user.email}</p>
              </div>
            </div>
            <div
              className="bot-container"
              dir={i18n.language === "ar" ? "rtl" : null}
            >
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
                  {i18n.language === "fr" && "Adresse:"}
                </span>
                <span className="wishlist">
                  <span
                    style={{ display: `${SaveAddress}`,left: i18n.language === "ar"? "0":null }}
                    className="material-symbols-outlined"
                    onClick={async (eo) => {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_Address: address,
                        }
                      );
                      setSaveAddress("none");
                    }}
                  >
                    download
                  </span>

                  <input
                    defaultValue={
                      value.data() !== undefined
                        ? value.data().kindergarten_Address
                        : ""
                    }
                    onChange={async (eo) => {
                      setaddress(eo.target.value);
                      setSaveAddress("block");
                    }}
                  />
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
                  {i18n.language === "en" && "Price:"}
                  {i18n.language === "ar" && "السعر:"}
                  {i18n.language === "fr" && "Prix:"}
                </span>
                <span className="wishlist">
                  <input
                    defaultValue={
                      value.data() !== undefined
                        ? `${value.data().kindergarten_Price}.00 DA`
                        : ""
                    }
                    onChange={(eo) => {
                      setamount(Number(eo.target.value));
                      setSavePrice("block");
                    }}
                  />
                  <span
                    style={{ display: `${SavePrice}` ,left: i18n.language === "ar"? "0":null }}
                    className="material-symbols-outlined"
                    onClick={async (eo) => {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_Price: amount,
                        }
                      );
                      setSavePrice("none");
                    }}
                  >
                    download
                  </span>
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
                  <span
                    style={{ display: `${SaveBio}` ,left: i18n.language === "ar"? "0":null}}
                    className="material-symbols-outlined"
                    onClick={async (eo) => {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_Bio: Bio,
                        }
                      );
                      setSaveBio("none");
                    }}
                  >
                    download
                  </span>

                  <textarea
                    defaultValue={
                      value.data() !== undefined
                        ? value.data().kindergarten_Bio
                        : ""
                    }
                    onChange={(eo) => {
                      setBio(eo.target.value);
                      setSaveBio("block");
                    }}
                  />
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
                  {" "}
                  {i18n.language === "en" && "Link your media:"}
                  {i18n.language === "ar" &&
                    " أربط وسائل التواصل الاجتماعي الخاصة بك:"}
                  {i18n.language === "fr" && "Liez vos médias:"}{" "}
                </span>
                <span className="wishlist wishlist-media">
                  <div className="kin-media-icons">
                    <i
                      className="gg-facebook"
                      onClick={(eo) => {
                        if (eo.target.style.opacity === "0.6") {
                          setSaveMedia("none");
                          document.querySelector(".media-input").value = "";
                        }

                        eo.target.style.opacity = "1";
                        document.querySelector(".gg-instagram").style.opacity =
                          "0.6";
                        document.querySelector(".gg-google").style.opacity =
                          "0.6";
                        setWhichMedia("facebook");
                        document.querySelector(".media-input").style.display =
                          "block";
                      }}
                    />
                    <i
                      className="gg-instagram"
                      onClick={(eo) => {
                        if (eo.target.style.opacity === "0.6") {
                          setSaveMedia("none");
                          document.querySelector(".media-input").value = "";
                        }
                        eo.target.style.opacity = "1";
                        document.querySelector(".gg-facebook").style.opacity =
                          "0.6";
                        document.querySelector(".gg-google").style.opacity =
                          "0.6";
                        setWhichMedia("instagram");
                        document.querySelector(".media-input").style.display =
                          "block";
                      }}
                    />
                    <i
                      className="gg-google"
                      onClick={(eo) => {
                        if (eo.target.style.opacity === "0.6") {
                          setSaveMedia("none");
                          document.querySelector(".media-input").value = "";
                        }
                        eo.target.style.opacity = "1";
                        document.querySelector(".gg-instagram").style.opacity =
                          "0.6";
                        document.querySelector(".gg-facebook").style.opacity =
                          "0.6";
                        setWhichMedia("google");
                        document.querySelector(".media-input").style.display =
                          "block";
                      }}
                    />
                  </div>
                </span>
              </div>
              <span className="wishlist2">
                <input
                  className="media-input"
                  placeholder={`Paste the ${WhichMedia} URL `}
                  style={{ display: "none" }}
                  onChange={(eo) => {
                    setSaveMedia("block");
                    setMedia(eo.target.value);
                  }}
                />
                <span
                  style={{ display: `${SaveMedia}`, right: "-8px" ,left: i18n.language === "ar"? "0":null}}
                  className="material-symbols-outlined"
                  onClick={async (eo) => {
                    if (
                      document.querySelector(".gg-facebook").style.opacity ===
                      "1"
                    ) {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_facebook: Media,
                        }
                      );
                      setSaveMedia("none");
                      document.querySelector(".media-input").value = "";
                    }

                    if (
                      document.querySelector(".gg-instagram").style.opacity ===
                      "1"
                    ) {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_Instagram: Media,
                        }
                      );
                      setSaveMedia("none");
                      document.querySelector(".media-input").value = "";
                    }
                    if (
                      document.querySelector(".gg-google").style.opacity === "1"
                    ) {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_Google: Media,
                        }
                      );
                      setSaveMedia("none");
                      document.querySelector(".media-input").value = "";
                    }
                  }}
                >
                  download
                </span>
              </span>
            </div>
          </Profile>

          <div className="main appmain">
            {value.data() === undefined && (
              <dialog id="kin-dialog" open>
                <form className="kin-form ">
                  <div id="multi_step_form">
                    <div className="container-kin flex">
                      <div id="multistep_nav">
                        <div className="progress_holder">Kindergarten Name</div>
                        <div className="progress_holder">
                          Kindergarten Address
                        </div>
                        <div className="progress_holder">
                          Kindergarten Picture
                        </div>
                        <div className="progress_holder">
                          Kindergarten Activites
                        </div>
                        <div className="progress_holder">
                          kindergarten monthly payment
                        </div>
                      </div>

                      <div className="content-kin-form">
                        <fieldset className="step activated_feild" id="0">
                          <div className="open-kin-dialog-form">
                            <h2 style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "One last step and we will open a space for you"}
                              {i18n.language === "ar" && "خطوة أخيرة وسنفتح لك مساحة"}
                              {i18n.language === "fr" && "Un dernier pas et nous vous ouvrirons un espace"}
                            </h2>
                            <h3 style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Please put your information down"}
                              {i18n.language === "ar" && "الرجاء وضع المعلومات الخاصة بك أسفل"}
                              {i18n.language === "fr" && "Merci de mettre vos informations"}
                            </h3>
                          </div>

                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Next();
                            }}
                          >
                              {i18n.language === "en" && "Next"}
                              {i18n.language === "ar" && "التالي"}
                              {i18n.language === "fr" && "Suivant"} 
                          </button>
                        </fieldset>

                        <fieldset className="step" id="1">
                          <label style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Kindergarten Name"}
                              {i18n.language === "ar" && "اسم الروضة"}
                              {i18n.language === "fr" && "Nom de la maternelle"}  <p>*</p>
                          </label>
                          <br />
                          <br />
                          <input
                            type="text"
                            dir={i18n.language ==="ar"? "rtl":null}
                            placeholder={i18n.language ==="ar"? "روضة:":"Rawdhat:"}
                            required
                            onChange={(eo) => {
                              setname(eo.target.value);
                              +
                              name.length <= 3
                                ? (document.querySelectorAll(
                                    ".nextStep"
                                  )[1].disabled = true)
                                : (document.querySelectorAll(
                                    ".nextStep"
                                  )[1].disabled = false);
                            }}
                            onKeyDown={(eo) => {
                              keyEvent(eo);
                            }}
                          />
                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              validButton(eo, name);
                            }}
                          >
                              {i18n.language === "en" && "Next"}
                              {i18n.language === "ar" && "التالي"}
                              {i18n.language === "fr" && "Suivant"} 
                          </button>
                        </fieldset>
                        <fieldset className="step" id="2">
                          <button
                            className="prevStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Prev();
                            }}
                          >
                              {i18n.language === "en" && "Prev"}
                              {i18n.language === "ar" && "السابق"}
                              {i18n.language === "fr" && "Précédente"} 
                          </button>
                          <label style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Kindergarten Address"}
                              {i18n.language === "ar" && "عنوان الروضة"}
                              {i18n.language === "fr" && "Adresse de la maternelle"} <p>*</p>
                          </label>
                          <br />
                          <br />
                          <input
                            type="text"
                            required
                            dir={i18n.language ==="ar"? "rtl":null}
                            placeholder={i18n.language ==="ar"? "عنوان:":"Address:"}
                            onChange={(eo) => {
                              setaddress(eo.target.value);
                              address.length <= 3
                                ? (document.querySelectorAll(
                                    ".nextStep"
                                  )[2].disabled = true)
                                : (document.querySelectorAll(
                                    ".nextStep"
                                  )[2].disabled = false);
                            }}
                            onKeyDown={(eo) => {
                              keyEvent(eo);
                            }}
                          />
                          <button
                            className="nextStep"
                            onClick={async (eo) => {
                              validButton(eo, address);
                            }}
                          >
                              {i18n.language === "en" && "Next"}
                              {i18n.language === "ar" && "التالي"}
                              {i18n.language === "fr" && "Suivant"} 
                          </button>
                        </fieldset>
                        <fieldset className="step" id="3">
                          <button
                            className="prevStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Prev();
                            }}
                          >
                              {i18n.language === "en" && "Prev"}
                              {i18n.language === "ar" && "السابق"}
                              {i18n.language === "fr" && "Précédente"} 
                          </button>
                          <label style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Kindergarten Picture"}
                              {i18n.language === "ar" && "صورة الروضة"}
                              {i18n.language === "fr" && "Image de la maternelle"}
                            <p style={{ fontSize: "15px" }}>({i18n.language==="en" && "Not Obligatory"}{i18n.language==="ar" && "ليس إلزاميا"}{i18n.language==="fr" && "Pas obligatoire"})</p>
                          </label>
                          <br />
                          <br />
                          <input
                            type="file"
                            placeholder="add picture"
                            onChange={(eo) => {
                              setimg(eo.target.files[0])
                            }}
                          />
                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              storeIMG();
                              Next();

                            }}
                          >
                              {i18n.language === "en" && "Next"}
                              {i18n.language === "ar" && "التالي"}
                              {i18n.language === "fr" && "Suivant"} 
                          </button>
                        </fieldset>
                        <fieldset className="step" id="4">
                          <button
                            className="prevStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Prev();
                            }}
                          >
                              {i18n.language === "en" && "Prev"}
                              {i18n.language === "ar" && "السابق"}
                              {i18n.language === "fr" && "Précédente"} 
                          </button>
                          <div className="kin-form-header">
                            <label style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                            {i18n.language === "en" && "Kindergarten Activities"}
                              {i18n.language === "ar" && "أنشطة رياض الأطفال"}
                              {i18n.language === "fr" && "Activités maternelles"} <p>*</p>
                            </label>
                            <br /> <br />
                            <p style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null,marginBottom:i18n.language ==="ar"?"35px":null}}>
                            {i18n.language === "en" && "Choose the activities that your kindergarten do :"}
                              {i18n.language === "ar" && ":اختر الأنشطة التي تقوم بها روضة أطفالك"}
                              {i18n.language === "fr" && "Choisissez les activités que votre jardin d'enfants propose :"}
                            </p>
                          </div>

                          <div className="activites">
                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Travel"
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Travel" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Travel"}
                              {i18n.language === "ar" && "سفر"}
                              {i18n.language === "fr" && "Voyage"} 
                              </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Language Learning"
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Language Learning" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Languages Learning"}
                              {i18n.language === "ar" && "تعلم اللغات"}
                              {i18n.language === "fr" && "Apprendre une langues"} 
                              </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Sports"
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Sports" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Sports"}
                              {i18n.language === "ar" && "رياضات"}
                              {i18n.language === "fr" && "Des sports"} 
                              </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Painting "
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Painting" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Painting"}
                              {i18n.language === "ar" && "فن الرسم"}
                              {i18n.language === "fr" && "Peinture"} 
                              </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Quran"
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Quran" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Quran"}
                              {i18n.language === "ar" && "القرآن"}
                              {i18n.language === "fr" && "Coran"} 
                              </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Reading "
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Reading" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Reading"}
                              {i18n.language === "ar" && "قراءة"}
                              {i18n.language === "fr" && "Lecture"} 
                              </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Other Things "
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Other Things" style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>                 
                              {i18n.language === "en" && "Other Things"}
                              {i18n.language === "ar" && "اشياء اخرى"}
                              {i18n.language === "fr" && "Autres choses"} </p>
                            </div>
                          </div>
                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              validButton2(eo, act);
                            }}
                          >
                              {i18n.language === "en" && "Next"}
                              {i18n.language === "ar" && "التالي"}
                              {i18n.language === "fr" && "Suivant"} 
                          </button>
                        </fieldset>

                        <fieldset className="step" id="5">
                          <button
                            className="prevStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Prev();
                            }}
                          >
                              {i18n.language === "en" && "Prev"}
                              {i18n.language === "ar" && "السابق"}
                              {i18n.language === "fr" && "Précédente"} 
                          </button>
                          <label style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Kindergarten monthly payment amount"}
                              {i18n.language === "ar" && "مبلغ الدفعة الشهرية لرياض الأطفال"}
                              {i18n.language === "fr" && "Montant du paiement mensuel de la maternelle"} <p>*</p>
                          </label>
                          <br /> <br />
                          <div className="amount">
                            <input
                              type="number"
                              placeholder={i18n.language ==="ar"? "الثمن":"Price:"}
                              min="500"
                              max="10000"
                              step="50"
                              maxLength="5"
                              size="5"
                              style={{ width: "215px" }}
                              onChange={(eo) => {
                                setamount(Number(eo.target.value));
                                amount < 100
                                  ? (document.querySelectorAll(
                                      ".nextStep"
                                    )[5].disabled = true)
                                  : (document.querySelectorAll(
                                      ".nextStep"
                                    )[5].disabled = false);
                              }}
                              onKeyDown={(eo) => {
                                keyEvent(eo);
                              }}
                            />
                            <span className="unit">.00 DA</span>
                          </div>
                          <button
                            className="nextStep"
                            onClick={async (eo) => {

                              validButton3(eo,amount);

                            }}
                          >
                              {i18n.language === "en" && "Next"}
                              {i18n.language === "ar" && "التالي"}
                              {i18n.language === "fr" && "Suivant"} 
                          </button>
                        </fieldset>

                        <fieldset className="step" id="6">
                          <div className="kin-form-footer">
                            <h1 style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                            {i18n.language === "en" && "Thank You"}
                              {i18n.language === "ar" && "شكرًا لك"}
                              {i18n.language === "fr" && "Merci"}
                               </h1>
                            <h3 style={{fontFamily:i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>
                              {i18n.language === "en" && "Those information will help people reached your kindergarten"}
                              {i18n.language === "ar" && "هذه المعلومات ستساعد الناس على الوصول إلى روضة أطفالك"}
                              {i18n.language === "fr" && "Ces informations aideront les personnes à atteindre votre jardin d'enfants"}
                            </h3>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </form>
              </dialog>
            )}

            <div id="banner" className="banner">
              {value.data() !== undefined ? (
                <h1 id="h1" className="mint">
                  Welcome to {value.data().kindergarten_Name}
                </h1>
              ) : (
                <h1 id="h1">welcome</h1>
              )}

              <button
                style={{
                  fontFamily:
                    i18n.language === "ar"
                      ? "'Noto Sans Arabic', sans-serif"
                      : null,
                }}
                id="button"
                onClick={(eo) => {
                  document.documentElement.scrollTop = 470;
                }}
              >
                {i18n.language === "en" && "Scroll Down"}
                {i18n.language === "ar" && "انتقل للأسفل"}
                {i18n.language === "fr" && "défiler vers le bas"}
              </button>
            </div>

            <div className="kin-card">
              <ul className="cards">
                <ClassCard />

                <ActivitieCard />

                <MessagesCard />

                <RegistrationCard
                  kindergarten_Name={
                    value.data() !== undefined
                      ? value.data().kindergarten_Name
                      : null
                  }
                  kindergarten_Bio={
                    value.data() !== undefined
                      ? value.data().kindergarten_Bio
                      : null
                  }
                  kindergarten_Address={
                    value.data() !== undefined
                      ? value.data().kindergarten_Address
                      : null
                  }
                  kindergarten_Activites={
                    value.data() !== undefined
                      ? value.data().kindergarten_Activites
                      : null
                  }
                  kindergarten_Price={
                    value.data() !== undefined
                      ? value.data().kindergarten_Price
                      : null
                  }
                  kindergarten_facebook={
                    value.data() !== undefined
                      ? value.data().kindergarten_facebook
                      : null
                  }
                  kindergarten_Instagram={
                    value.data() !== undefined
                      ? value.data().kindergarten_Instagram
                      : null
                  }
                  kindergarten_Google={
                    value.data() !== undefined
                      ? value.data().kindergarten_Google
                      : null
                  }
                />
              </ul>
            </div>
          </div>
          <Botcloud />
        </>
      );
    } else {
      return (
        <>
          <Topcloud />

          <Profile />
          <div className="main appmain">
            <div className="errorMsg">
              <h2 className="wait-for-vers"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textAlign: "center",
                }}
              >
                ◘ welcome {user.displayName} el-rawda ◘<br />
                please verify your email and refesh the page to continue ...
              </h2>
              <button
                onClick={() => {
                  sendEmailVerification(auth.currentUser).then(() => {
                    alert("verification sended!!");
                  });
                }}
              >
                send again
              </button>
            </div>
          </div>
          <Botcloud />
        </>
      );
    }
  } else {
    return (
      <>
        <TopcloudErr />
        <div className="main appmain">
          <div
            style={{
              margin: "20vh 27vw",
              fontFamily: "'Fredoka One', cursive",
            }}
          >
            <h2>you did signed in on the wrong space ...</h2>
            <h2>
              click here to signin again in the right space 👉
              <span
                className="material-symbols-outlined refresh"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      navigate("/parent_sign");
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                refresh
              </span>
            </h2>
          </div>
        </div>
        <Botcloud />
      </>
    );
  }
};

export default KinHome;
