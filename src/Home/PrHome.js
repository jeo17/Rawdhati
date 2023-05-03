import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Profile from "../comp/Profile";
import Slider from "../comp/Slider";
import Page404 from "../Page_404";
import MyKindergarten from "./Pr component/My-Kindergarten";
import { auth, db, storage } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, sendEmailVerification } from "firebase/auth";
import { doc, updateDoc, collection, query, where } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";

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

  const { i18n } = useTranslation();

  let { prId } = useParams();

  const [value, loadingdata, errordata] = useDocument(
    doc(db, "Parents Informations", prId)
  );


  let [Url, seturl] = useState(    
    value
    ?  value.data().HasAnImg === true 
    ? getDownloadURL(ref(storage, `/Parents Images/${prId}`))
  .then((url) => {
    seturl(url)
  })
  .catch((error) => {
  console.log(error.message)
  }) : null : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" );

  const [SaveProfilePic, setSaveProfilePic] = useState("Save 📥");
  let [img, setimg] = useState(null);

  const storeIMG = async () => {
   const imageref = ref(storage, `/Parents Images/${prId}`);
   console.log("wait")
   setSaveProfilePic(<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
  await uploadBytes(imageref, img).then(() => {
    document.querySelector(".save-profile-pic").style.display="none"
    setSaveProfilePic("Save 📥")

    updateDoc(doc(db, "Parents Informations", user.uid), {
      HasAnImg: true,
    });
   })
   .catch((error) => {
    console.log(error.message)
   });
 }









  


  const [user, loading, error] = useAuthState(auth);

  const [Bio, setBio] = useState(undefined);
  let [UpdateBio, setUpdateBio] = useState("none");

  let [SearchTitle, setSearchTitle] = useState(true);
  let [SearchVal, setSearchVal] = useState("");

  const [SearchBy, setSearchBy] = useState(i18n.language==="en"?"Search for a kindergarten":i18n.language==="ar"?"ابحث عن روضة أطفال":"Rechercher une crèche");
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
          <Topcloud PrID={prId} HasAnImg={value.data().HasAnImg}/>

          <Profile>
            <div className="top-container" dir={i18n.language === "ar"? "rtl":null}>
            <div className="profile-pic-pr">
            <label className="-label" htmlFor="file">
                 <span className="material-symbols-outlined">photo_camera</span>
                  <span>Change Image</span>
                </label>
                <input id="file" type="file" onChange={(eo) => {
                  setimg(eo.target.files[0])
                  document.querySelector(".save-profile-pic").style.display = "block";
                  let url =URL.createObjectURL(eo.target.files[0])
                  document.getElementById("profile-pic").src = url
                }} />
              <img
                id="profile-pic"
                src={Url}
                className="img-fluid profile-image"
                width={70}
                alt="sorry"
                
              />
               <button className="save-profile-pic"  onClick={ (eo) => {        
                storeIMG();
              }}>{SaveProfilePic}
              </button>
              </div>
              <div style={{ margin: "0 11px" }}>
                <h5 className="name">
                  {user.displayName === null
                    ? "el rawda"
                    : `${user.displayName}`}
                </h5>
                <p className="mail">{user.email}</p>
              </div>
            </div>
            <div className="bot-container" dir={i18n.language === "ar"? "rtl":null}>
              <div className="recent-border mt-4" style={{borderLeft:i18n.language === "ar"?"none":null,borderRight:i18n.language === "ar"?"2px solid #5957f9":null}}>
                <span className="recent-orders">{i18n.language === "en" && "My Kindergarten:"}{i18n.language === "ar" && "روضتي:"}{i18n.language === "fr" && "Ma maternelle:"}</span>
                <span className="wishlist">
                  <label>
                    {value.data().User_Kindergarten !== undefined
                      ? value.data().User_Kindergarten[0]
                      : ""}
                  </label>
                </span>
              </div>

              <div className="recent-border mt-4" style={{borderLeft:i18n.language === "ar"?"none":null,borderRight:i18n.language === "ar"?"2px solid #5957f9":null}}>
                <span className="recent-orders">
                {i18n.language === "en" && "Bio:"}
                  {i18n.language === "ar" && "السيرة:"}
                  {i18n.language === "fr" && "Bio:"}
                </span>
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
                    style={{ display: `${UpdateBio}` ,left: i18n.language === "ar"? "0":null}}
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
                <input
                  className="search-main"
                  placeholder={SearchBy}
                  onKeyDown={(eo) => {

                    if (eo.key === "Enter") {
                      setSearchVal(eo.target.value)
                      const val = document.querySelector(".search-main").value;
                      if (val !== ""){
                       setSearchTitle(false)
                      }
                      else{
                       setSearchTitle(true)
                      }
 
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
                      if (SearchBy === "Type The Activity 🎮 ..") {
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
                  }}
                />

                <span
                  className="searchicon"
                  onClick={(eo) => {
                    const val = document.querySelector(".search-main").value;
                    setSearchVal(val)
                     if (val !== ""){
                      setSearchTitle(false)
                     }
                     else{
                      setSearchTitle(true)
                     }

                    if (SearchBy === "Search for a kindergarten") {
                      const value = document.querySelector(".search-main").value;
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
                    if (SearchBy === "Type The Activity 🎮 ..") {
                      const value = document.querySelector(".search-main").value;
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
                      const value = document.querySelector(".search-main").value;
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
                      const value = document.querySelector(".search-main").value;
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
                  <label style={{ cursor: "pointer",fontFamily:i18n.language === "ar" ? "'Noto Sans Arabic', sans-serif":null}}>{i18n.language === "en" && "filter"}{i18n.language === "ar" && "فلتر"}{i18n.language === "fr" && "filtre"}</label>
                  <span className="material-symbols-outlined">filter_list</span>
                </div>

                <div className="icon-holder">
                  <div
                    className="icon"
                    id="Trending"
                    onClick={(eo) => {
                      setSearchBy(i18n.language==="en"?"Type The Name 🅰 ..":i18n.language==="ar"?"اكتب الاسم 🅰 ..":"Tapez le nom 🅰 ..");
                      document.querySelector(".search-main").value = "";
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      spellcheck
                    </span>
                    <div className="tooltip">{i18n.language === "en" && "Name"}{i18n.language === "ar" && "الاسم"}{i18n.language === "fr" && "Nom"}</div>
                  </div>
                  <div
                    className="icon"
                    id="Price"
                    onClick={(eo) => {
                      setSearchBy(i18n.language==="en"?"Type The Price 💸 ..":i18n.language==="ar"?"اكتب السعر 💸 ..":"Tapez Le Prix 💸 ..");
                      document.querySelector(".search-main").value = "";
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      attach_money
                    </span>
                    <div className="tooltip">{i18n.language === "en" && "Price"}{i18n.language === "ar" && "سعر"}{i18n.language === "fr" && "Prix"}</div>
                  </div>
                  <div
                    className="icon"
                    id="Place"
                    onClick={(eo) => {
                      setSearchBy(i18n.language==="en"?"Type The Place 🌐 ..":i18n.language==="ar"?"اكتب المكان 🌐 ..":"Tapez Le Lieu 🌐 ..");
                      document.querySelector(".search-main").value = "";
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      location_on
                    </span>
                    <div className="tooltip">{i18n.language === "en" && "Place"}{i18n.language === "ar" && "مكان"}{i18n.language === "fr" && "Lieu"}</div>
                  </div>
                  <div
                    className="icon"
                    id="Activ"
                    onClick={(eo) => {
                      setSearchBy(i18n.language==="en"?"Type The Activity 🎮 ..":i18n.language==="ar"?"اكتب النشاط 🎮 ..":"Tapez l'activité 🎮 ..");
                      document.querySelector(".search-main").value = "";
                    }}
                  >
                    <span className="material-symbols-outlined circ">
                      extension
                    </span>
                    <div className="tooltip">{i18n.language === "en" && "Activity"}{i18n.language === "ar" && "نشاط"}{i18n.language === "fr" && "Activité"}</div>
                  </div>

                  <div
                    className="icon"
                    id="All"
                    onClick={(eo) => {
                      setSearchBy(i18n.language==="en"?"Search for a kindergarten":i18n.language==="ar"?"ابحث عن روضة أطفال":"Rechercher une crèche");
                      document.querySelector(".search-main").value = "";
                    }}
                  >
                    <div className="dots" />
                    <div className="tooltip">{i18n.language === "en" && "All"}{i18n.language === "ar" && "الكل"}{i18n.language === "fr" && "tout"}</div>
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
                <>
                <h2 className="card-title">{i18n.language === "en" && SearchTitle && "Kindergartens may you like it:"}{i18n.language === "ar" && SearchTitle  && "رياض أطفال قد يعجبك"}{i18n.language === "fr" && SearchTitle && "Les jardins d'enfants peuvent vous l'aimer:"}
                                           {i18n.language === "en" && !SearchTitle && `Searching for "${SearchVal}"`}{i18n.language === "ar" && !SearchTitle  && ` "${SearchVal}" البحث عن`}{i18n.language === "fr" && !SearchTitle && `À la recherche de "${SearchVal}"`}
                </h2>
                <Slider Collection={Collection} />
                </>

              )}

              <h2 className="card-title">{i18n.language === "en" &&"Advertisements:"}{i18n.language === "ar" &&":الإعلانات"}{i18n.language === "fr" &&"Annonces:"}</h2>

              <div className="annonces"></div>
            </div>
          </div>
          <Botcloud />
        </>
      );
    } else {
      return (
        <>
          <Topcloud PrID={prId}  HasAnImg={value.data().HasAnImg}/>

          <Profile>
            <div className="top-container" dir={i18n.language === "ar"? "rtl":null}>
              <img
                src={Url}
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
            <div className="bot-container" dir={i18n.language === "ar"? "rtl":null}>
              <div className="recent-border mt-4">
                <span className="wishlist">
                  <label>You need to verify yor email first...</label>
                </span>
              </div>
            </div>
          </Profile>
          <div className="main appmain">
            <div className="errorMsg">
              <h2 className="wait-for-ver"
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
