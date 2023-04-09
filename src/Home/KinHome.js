import React from "react";
import "./home.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Page404 from "../Page_404";
import RegistrationCard from "./kin component/Registration-card";
import ClassCard from "./kin component/Class-card";
import ActivitieCard from "./kin component/Activitie-card";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../comp/Profile";
import { signOut, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";

//import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
    if (amount.length < 2 || amount.length > 5) {
      eo.target.disabled = true;
    } else {
      Next();
      setTimeout(() => {
        document.getElementById("kin-dialog").close();
      }, 3300);
    }
  };

  const handlIMG = (eo) => {
    if (eo.target.files[0]) {
      setimg(eo.target.files[0]);
    }
  };

  /*const storeIMG = () => {
   const imageref = ref(db, "Kindergarten Image");
   uploadBytes(imageref, img).then(() => {
    getDownloadURL(imageref).then((url) => {
      seturl(url);
    })
    .catch((error) => {
      console.log(error.message, "error getting the image url");
    });
    setimg(null)
   })
   .catch(() => {
    console.log(error.message)
   });
 }*/

  let [name, setname] = useState("");
  let [address, setaddress] = useState("");
  let [img, setimg] = useState(null);
  let [amount, setamount] = useState("");
  /* let [url, seturl] = useState(null);*/
  let [act, setact] = useState([]);

  let { kinId } = useParams();

  let [SaveAddress, setSaveAddress] = useState("none");
  let [SavePrice, setSavePrice] = useState("none");
  let [SaveBio, setSaveBio] = useState("none");

  let [Bio, setBio] = useState(undefined);

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
            <div className="top-container">
              <img
                src={require("../comp/assets/avatar.jpg")}
                className="img-fluid profile-image"
                width={70}
                alt="sorry"
              />
              <div style={{ marginLeft: "11px" }}>
                {value.data() !== undefined ? (
                  <h5 className="name"> {value.data().kindergarten_Name}</h5>
                ) : (
                  <h5 className="name"> welcome</h5>
                )}
                <p className="mail">{user.email}</p>
              </div>
            </div>
            <div className="bot-container">
              <div className="recent-border mt-4">
                <span className="recent-orders">Address: </span>
                <span className="wishlist">
                  <span
                    style={{ display: `${SaveAddress}` }}
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
                      value.data() !== undefined ? (
                        value.data().kindergarten_Address
                      ) : (
                        <></>
                      )
                    }
                    onChange={async (eo) => {
                      setaddress(eo.target.value);
                      setSaveAddress("block");
                    }}
                  />
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Price: </span>
                <span className="wishlist">
                  <input
                    defaultValue={
                      value.data() !== undefined ? (
                        value.data().kindergarten_Price
                      ) : (
                        <></>
                      )
                    }
                    onChange={(eo) => {
                      setamount(eo.target.value);
                      setSavePrice("block");
                    }}
                  />
                  <span
                    style={{ display: `${SavePrice}` }}
                    className="material-symbols-outlined"
                    onClick={async (eo) => {
                      await updateDoc(
                        doc(db, "kindergarten Information", kinId),
                        {
                          kindergarten_Price: `${amount}.00 DA`,
                        }
                      );
                      setSavePrice("none");
                    }}
                  >
                    download
                  </span>
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Bio: </span>
                <span className="wishlist">
                  <span
                    style={{ display: `${SaveBio}` }}
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
                      value.data() !== undefined ? (
                        value.data().kindergarten_Bio
                      ) : (
                        <></>
                      )
                    }
                    onChange={(eo) => {
                      setBio(eo.target.value);
                      setSaveBio("block");
                    }}
                  />
                </span>
              </div>
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
                            <h2>
                              One last step and we will open a space for you
                            </h2>
                            <h3>Please put your information down</h3>
                          </div>

                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Next();
                            }}
                          >
                            Next
                          </button>
                        </fieldset>

                        <fieldset className="step" id="1">
                          <label>
                            Kindergarten Name <p>*</p>
                          </label>
                          <br />
                          <br />
                          <input
                            type="text"
                            placeholder="Rawdhat:"
                            required
                            onChange={(eo) => {
                              setname(eo.target.value);
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
                            Next
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
                            Prev
                          </button>
                          <label>
                            Kindergarten Address <p>*</p>
                          </label>
                          <br />
                          <br />
                          <input
                            type="text"
                            required
                            placeholder="Address"
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
                            Next
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
                            Prev
                          </button>
                          <label>
                            Kindergarten Picture
                            <p style={{ fontSize: "15px" }}>(Not Obligatory)</p>
                          </label>
                          <br />
                          <br />
                          <input
                            type="file"
                            placeholder="add picture"
                            onChange={(eo) => {
                              handlIMG(eo);
                            }}
                          />
                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              eo.preventDefault();
                              Next();
                              //   storeIMG();
                            }}
                          >
                            Next
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
                            Prev
                          </button>
                          <div className="kin-form-header">
                            <label>
                              Kindergarten Activites <p>*</p>
                            </label>
                            <br /> <br />
                            <p>
                              Choose the activites that your kindergarten do :
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
                              <p htmlFor="Travel">Travel</p>
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
                              <p htmlFor="Language Learning">
                                Language Learning
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
                              <p htmlFor="Sports">Sports</p>
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
                              <p htmlFor="Painting ">Painting </p>
                            </div>

                            <div className="activite">
                              <input
                                type="checkbox"
                                id="Quran "
                                onChange={(eo) => {
                                  countBOX(eo, act);
                                }}
                                onKeyDown={(eo) => {
                                  keyEvent(eo);
                                }}
                              />
                              <p htmlFor="Quran ">Quran </p>
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
                              <p htmlFor="Reading ">Reading </p>
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
                              <p htmlFor="Other Things ">Other Things </p>
                            </div>
                          </div>
                          <button
                            className="nextStep"
                            onClick={(eo) => {
                              validButton2(eo, act);
                            }}
                          >
                            Next
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
                            Prev
                          </button>
                          <label>
                            kindergarten monthly payment amount <p>*</p>
                          </label>
                          <br /> <br />
                          <div className="amount">
                            <input
                              type="number"
                              placeholder="Price"
                              min="500"
                              max="10000"
                              step="50"
                              maxLength="5"
                              size="5"
                              style={{ width: "215px" }}
                              onChange={(eo) => {
                                setamount(eo.target.value);
                                amount.length < 2
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
                              validButton3(eo, amount);

                              await setDoc(
                                doc(db, "kindergarten Information", user.uid),
                                {
                                  kindergarten_Name: name,
                                  kindergarten_Address: address,
                                  kindergarten_Activites: act,
                                  kindergarten_Price: `${amount}.00 DA`,
                                  kindergarten_id: kinId,
                                }
                              );
                            }}
                          >
                            Next
                          </button>
                        </fieldset>

                        <fieldset className="step" id="6">
                          <div className="kin-form-footer">
                            <h1>Thank You </h1>
                            <h3>
                              Those information will help people reached your
                              kindergarten
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
                <h1 id="h1"> Welcome to {value.data().kindergarten_Name} </h1>
              ) : (
                <h1 id="h1">welcome</h1>
              )}

              <button
                id="button"
                onClick={(eo) => {
                  onScroll(eo);
                }}
              >
                Get Started
              </button>
            </div>

            <div className="kin-card">
              <ul className="cards">
                <ClassCard />

                <ActivitieCard />

                <li className="cards_item">
                  <div className="indicator">
                    <div className="noti_count">0</div>
                  </div>
                  <div className="card card3">
                    <div className="card_content">
                      <h2 className="card_title">
                        Chat
                        <span className="material-symbols-outlined">chat</span>
                      </h2>
                      <div className="card_text">
                        <p>.................</p>
                      </div>
                    </div>
                  </div>
                </li>

                <RegistrationCard
                  kindergarten_Name={value.data().kindergarten_Name}
                  kindergarten_Bio={value.data().kindergarten_Bio}
                  kindergarten_Address={value.data().kindergarten_Address}
                  kindergarten_Activites={value.data().kindergarten_Activites}
                  kindergarten_Price={value.data().kindergarten_Price}
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
              <h2
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
