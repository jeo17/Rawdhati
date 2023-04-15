import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Profile from "../comp/Profile";
import Slider from "../comp/Slider";
import Page404 from "../Page_404";
import MyKindergarten from "./Pr component/My-Kindergarten";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, sendEmailVerification } from "firebase/auth";
import { doc, updateDoc, collection, query, where } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";

const PrHome = () => {
  const onScroll = (event) => {
    if (document.getElementById("banner2") != null) {
      const banner2 = document.getElementById("banner2");
      const h1 = document.getElementById("h1");
      const button = document.querySelector(".search-container");

      const scrollPosition = event.target.scrollingElement.scrollTop;
      if (scrollPosition > 150) {
        banner2.style.backgroundSize = "130%";
        h1.style.opacity = 0;
        h1.style.translate = "0 -50px";
        h1.style.scale = "0.9";
        button.style.opacity = 0;
        button.style.translate = "0 -50px";
        button.style.scale = "0.8";
      } else {
        banner2.style.backgroundSize = "100%";
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

  let { prId } = useParams();

  const [value, loadingdata, errordata] = useDocument(
    doc(db, "Parents Informations", prId)
  );

  const [user, loading, error] = useAuthState(auth);

  const [Bio, setBio] = useState(undefined);
  let [UpdateBio, setUpdateBio] = useState("none");

  const [SearchBy, setSearchBy] = useState("Search for a kindergarten");
  const [Collection, setcollection] = useState(
    collection(db, "kindergarten Information")
  );

  const navigate = useNavigate();

  useEffect((eo) => {
    if (!user && !loading) {
      navigate("/Visitor");
    }
  });

  if (loading) {
    //if he is in the loading state do this block of code ... and when he done read the rest of the code.
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

  if (loadingdata) {
    return (
      <div>
        <p>Initialising data...</p>
      </div>
    );
  }

  if (errordata) {
    return (
      <>
        <p>data error...</p>
      </>
    );
  }

  if (!user) {
    navigate("/Visitor");
  }

  if (user.displayName === null) {
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
                      navigate("/kindergarten_sign");
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
  } else {
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
                <h5 className="name">
                  {user.displayName === null
                    ? "el rawda"
                    : `${user.displayName}`}
                </h5>
                <p className="mail">{user.email}</p>
              </div>
            </div>
            <div className="bot-container">
              <div className="recent-border mt-4">
                <span className="recent-orders">My Kindergarten:</span>
                <span className="wishlist">
                  <label>
                    {value.data().User_Kindergarten !== undefined
                      ? value.data().User_Kindergarten[0]
                      : ""}
                  </label>
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Bio:</span>
                <span className="wishlist">
                  <textarea
                    defaultValue={value.data().Bio}
                    onChange={(eo) => {
                      setBio(eo.target.value);
                      setUpdateBio("block");
                    }}
                  />
                  <span
                    className="material-symbols-outlined"
                    style={{ display: `${UpdateBio}` }}
                    onClick={async (eo) => {
                      await updateDoc(doc(db, "Parents Informations", prId), {
                        Bio: Bio,
                      });
                      setUpdateBio("none");
                    }}
                  >
                    download
                  </span>
                </span>
              </div>
            </div>
          </Profile>
          <div className="main appmain">
            <div id="banner2" className="banner2">
              <h1 className="mint" id="h1">
                welcome {user.displayName}
              </h1>

              <div className="search-container">
                <input className="search-main" placeholder={SearchBy} onKeyDown={(eo) => {
                  if (eo.key === "Enter") {
                    
                    if (SearchBy === "Search for a kindergarten") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Name", "==", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Price 💸 ..") {
                      const value = Number(
                        document.querySelector(".search-main").value
                      );
                      if (value !== 0) {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Price", "<=", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Activite 🎮 ..") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where(
                              "kindergarten_Activites",
                              "array-contains-any",
                              [value]
                            )
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Place 🌐 ..") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Address", "==", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Name 🅰 ..") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Name", "==", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    document.documentElement.scrollTop = 500;

                  }
                }}/>



                <span
                  className="searchicon"
                  onClick={(eo) => {
                    if (SearchBy === "Search for a kindergarten") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Name", "==", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Price 💸 ..") {
                      const value = Number(
                        document.querySelector(".search-main").value
                      );
                      if (value !== 0) {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Price", "<=", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Activite 🎮 ..") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where(
                              "kindergarten_Activites",
                              "array-contains-any",
                              [value]
                            )
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Place 🌐 ..") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Address", "==", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    if (SearchBy === "Type The Name 🅰 ..") {
                      const value =
                        document.querySelector(".search-main").value;
                      if (value !== "") {
                        setcollection(
                          query(
                            collection(db, "kindergarten Information"),
                            where("kindergarten_Name", "==", value)
                          )
                        );
                      } else {
                        setcollection(
                          collection(db, "kindergarten Information")
                        );
                      }
                    }
                    document.documentElement.scrollTop = 500;
                  }}
                />

                <div
                  className="microphone"
                  onClick={(eo) => {
                    const holder = document.querySelector(".icon-holder");
                    const icons = document.querySelectorAll(".icon");

                    if (holder.style.visibility === "visible") {
                      holder.style.visibility = "hidden";
                      icons.forEach((icon) => {
                        icon.style.animation = "";
                      });
                    } else {
                      holder.style.visibility = "visible";
                      icons.forEach((icon) => {
                        icon.style.animation = "ani 2.2s ease-out infinite";
                      });
                    }
                  }}
                >
                  <label style={{ cursor: "pointer" }}> search by</label>
                  <span className="material-symbols-outlined">filter_list</span>
                </div>

                <div className="icon-holder">
                  <div
                    className="icon"
                    id="Trending"
                    onClick={(eo) => {
                        setSearchBy("Type The Name 🅰 ..");
                        document.querySelector(".search-main").value = ""
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      spellcheck
                    </span>
                    <div className="tooltip">Name</div>
                  </div>
                  <div
                    className="icon"
                    id="Price"
                    onClick={(eo) => {
                      setSearchBy("Type The Price 💸 ..");
                      document.querySelector(".search-main").value = ""
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      attach_money
                    </span>
                    <div className="tooltip">Price</div>
                  </div>
                  <div
                    className="icon"
                    id="Place"
                    onClick={(eo) => {
                      setSearchBy("Type The Place 🌐 ..");
                      document.querySelector(".search-main").value = ""
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      location_on
                    </span>
                    <div className="tooltip">Place</div>
                  </div>
                  <div
                    className="icon"
                    id="Activ"
                    onClick={(eo) => {
                      setSearchBy("Type The Activite 🎮 ..");
                      document.querySelector(".search-main").value = ""
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      extension
                    </span>
                    <div className="tooltip">Activite</div>
                  </div>

                  <div
                    className="icon"
                    id="All"
                    onClick={(eo) => {
                      setSearchBy("Search for a kindergarten");
                      document.querySelector(".search-main").value = ""
                    }}
                  >
                    <div className="dots" />
                    <div className="tooltip">All</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pr-card">
              {value.data().User_Kindergarten !== undefined && (
                <MyKindergarten
                  MyKindergarten_info={value.data().User_Kindergarten}
                  MyKindergarten_activites={
                    value.data().User_kindergarten_Activites
                  }
                  MyKindergarten_media={value.data().User_kindergarten_Media}
                />
              )}
              {value.data().User_Kindergarten === undefined && (
                <Slider Collection={Collection} />
              )}

              <h2 className="card-title">Advertisements:</h2>

              <div className="annonces"></div>
            </div>
          </div>
          <Botcloud />
        </>
      );
    } else {
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
                <h5 className="name">
                  {user.displayName === null
                    ? "el rawda"
                    : `${user.displayName}`}
                </h5>
                <p className="mail">{user.email}</p>
              </div>
            </div>
            <div className="bot-container">
              <div className="recent-border mt-4">
                <span className="wishlist">
                  <label>You need to verify yor email first...</label>
                </span>
              </div>
            </div>
          </Profile>
          <div className="main appmain">
            <div className="errorMsg">
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textAlign: "center",
                }}
              >
                ◘ welcome {user.displayName} ◘<br />
                please verify your email and refesh the page to continue ...
              </h2>
              <button
                onClick={() => {
                  sendEmailVerification(auth.currentUser).then(() => {
                    console.log("verification sended!!");
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
  }
};

export default PrHome;
