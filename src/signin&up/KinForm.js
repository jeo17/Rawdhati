import React from "react";
import "./KinForm.css";
import Page404 from "../Page_404";
import { useState } from "react"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth,db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";







const AttDays = (eo, attendancedays) => {

  if (eo.target.checked) {

    attendancedays.push(`${eo.target.id}`)
  } else {
    const index = attendancedays.indexOf(eo.target.id);
    attendancedays.splice(index, 1);
  }

};




const SignKin = () => {

  const navigate = useNavigate();

  let { kinId } = useParams();

  const { i18n } = useTranslation();

  const [user, loading, error] = useAuthState(auth);
  
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  let name = [firstName,middleName ,lastName ]

  const [date, setdate] = useState("");

  const [homePhone, sethomePhone] = useState("");

  const [kidAddress, setkidAddress] = useState("");

  const [gender, setgender] = useState("");

  const [NumberOfBrothers, setNumberOfBrothers] = useState("");

  const [RankOfBrothers, setRankOfBrothers] = useState("");

  const [Diseases , setDisease ] = useState("well health");

 const [UnlikeFood , setUnlikeFood ] = useState("none");

 const [StartDate , setStartDate ] = useState("");

 let [AttendanceDays , setAttendanceDays ] = useState([""]);

 const [TimeFrom , setTimeFrom ] = useState("");
  
 const[TimeTo , setTimeTo ] = useState("");

 const[AttendanceInfo , setAttendanceInfo ] = useState("none");

 const [GuardianFirstName, setGuardianFirstName] = useState("");
 const [GuardianlastName, setGuardianLastName] = useState("");
 let GuardianName = [GuardianFirstName ,GuardianlastName ]

 const [GuardianEmail, setGuardianEmail] = useState("");

 const [GuardianRelationship, setGuardianRelationship] = useState("");

 const [GuardianPhone, setGuardianPhone] = useState("");

 const [GuardianWorkPhone, setGuardianWorkPhone] = useState("");

 const [GuardianAddress, setGuardianAddress] = useState("Same as the child");


 const [Guardian_2_FirstName, setGuardian_2_FirstName] = useState("");
 const [Guardian_2_lastName, setGuardian_2_LastName] = useState("");
 let Guardian_2_Name = [Guardian_2_FirstName ,Guardian_2_lastName ]

 const [Guardian_2_Email, setGuardian_2_Email] = useState("");

 const [Guardian_2_Relationship, setGuardian_2_Relationship] = useState("");

 const [Guardian_2_Phone, setGuardian_2_Phone] = useState("");

 const [Guardian_2_Work_Phone, setGuardian_2_WorkPhone] = useState("");

 const [Guardian_2_Address, setGuardian_2_Address] = useState("Same as the child");


 const [AddSomeThing, setAddSomeThing] = useState("none");

  /********************************************************/
  const [dis, setDis] = useState();
  const [dis2, setDis2] = useState();
  const address1 =document.getElementById("address1")
  const address2 =document.getElementById("address2")

  /********************************************************/




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



if (user) {
  return (
    <>

   <div className="full-screen">

    <div className="succ-msg">Child's information has been saved successfully ✔️</div>
    <div className="information">
        <header>
          <h1 style={{fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Information form"}{i18n.language ==="ar" && "استمارة التسجيل"}{i18n.language ==="fr" && "Formulaire d'inscription"}</h1>
        </header>
        <form>
          <div className="info" style={{flexDirection:i18n.language ==="ar"?"row-reverse":null}}>
            <h2  style={{fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}> {i18n.language ==="en" && "child information"}{i18n.language ==="ar" && "معلومات الطفل"}{i18n.language ==="fr" && "informations sur l'enfant"} </h2>
            <i className="gg-chevron-down-r"></i>
          </div>
          <div className="nth1">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Child's Name"}{i18n.language ==="ar" && "اسم الطفل"}{i18n.language ==="fr" && "Nom de l'enfant"}</label>
            <div className="nth1-1" style={{flexDirection: i18n.language ==="ar"?"row-reverse":null}}>
              <div>
                <input dir={i18n.language ==="ar"?"rtl":null} type="text" placeholder={i18n.language ==="en"?"First Name":i18n.language ==="ar"?"الاسم الأول":"Prénom"} onChange={ (eo) => {
                   setfirstName(eo.target.value)
                }}/>
              </div>
              <div>
                <input dir={i18n.language ==="ar"?"rtl":null} type="text" placeholder={i18n.language ==="en"?"Middle Name":i18n.language ==="ar"?"الاسم الأوسط":"Deuxième nom"} onChange={(eo) => {
                  setmiddleName(eo.target.value)
                }}/>
              </div>
              <div>
                <input dir={i18n.language ==="ar"?"rtl":null} type="text" placeholder={i18n.language ==="en"?"Last Name":i18n.language ==="ar"?" اللقب":"Nom"} onChange={(eo) => {
                  setlastName(eo.target.value)
                }}/>
              </div>
            </div>
          </div>

          <div className="nth2">
            <div>
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"Date of Birth":i18n.language ==="ar"?"تاريخ الميلاد":"Date de naissance"}</label>
              <input type="date" onChange={(eo) => {
                setdate(eo.target.value)
              }}/>
            </div>

            <div>
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"Home Phone":i18n.language ==="ar"?"هاتف المنزل":"Téléphone fixe"}</label>
              <input type="tel" placeholder="+213" onChange={(eo) => {
                sethomePhone(eo.target.value)
              }}/>
            </div>
          </div>

          <div className="nth3">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Address"}{i18n.language ==="ar" && "العنوان"}{i18n.language ==="fr" && "Adresse"}</label>
            <input type="text" onChange={(eo) => {
                setkidAddress(eo.target.value)
              }}/>
          </div>

          <div className="nth4">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Gender"}{i18n.language ==="ar" && "الجنس"}{i18n.language ==="fr" && "Genre"}</label>
            <div className="nth4-1" style={{justifyContent:  i18n.language ==="ar"?"flex-end":null}}>
              <input type="radio" name="gender" onClick={(eo) => {
                setgender("Male")
              }} />
              <label>{i18n.language ==="en" &&"Male"}{i18n.language ==="ar" &&"أنثى"}{i18n.language ==="fr" &&"Mâle"}</label>
              <input type="radio" name="gender" onClick={(eo) => {
                setgender("Female")
              }} />
              <label>{i18n.language ==="en" &&"Female"}{i18n.language ==="ar" &&"ذكر"}{i18n.language ==="fr" &&"femelle"}</label>
            </div>
          </div>


          <div className="nth2">
            <div className="nth2-1">
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"Number Of Brothers":i18n.language ==="ar"?"عدد الاخوة":"Nombre de frères"}</label>
              <input type="number" min="0"  onClick={(eo) => {
                setNumberOfBrothers(eo.target.value)
              }} />
            </div>

            <div className="nth2-1">
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"Rank Of Brothers":i18n.language ==="ar"?"رتبة الاخوة":"Rang des frères"} </label>
              <input type="number" min="1" onClick={(eo) => {
                setRankOfBrothers(eo.target.value)
              }} />
            </div>
          </div>

          <div className="nth8 nth8-1">
            <label  style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Is (s)He Suffering From Any Diseases ?"}{i18n.language ==="ar" && "هل يعاني من أي مرض؟"}{i18n.language ==="fr" && "Souffre-t-il de maladies ?"}</label>
            <textarea  dir={i18n.language ==="ar"?"rtl":null} placeholder={i18n.language ==="en"?"Type here...":i18n.language ==="ar"?"أكتب هنا... ":" Écrivez ici..."} onChange={(eo) => {
              setDisease(eo.target.value)
            }}></textarea>
          </div>
          <div className="nth8 nth8-1">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "What Foods Does (s)He Not Like ?"}{i18n.language ==="ar" && "ما الأطعمة التي لا يحبها؟"}{i18n.language ==="fr" && "Quels aliments n'aime-t-il pas ?"}</label>
            <textarea dir={i18n.language ==="ar"?"rtl":null} placeholder={i18n.language ==="en"?"Type here...":i18n.language ==="ar"?"أكتب هنا... ":" Écrivez ici..."} onChange={(eo) => {
              setUnlikeFood(eo.target.value)
            }}></textarea>
          </div>


          <div className="info" style={{flexDirection:i18n.language ==="ar"?"row-reverse":null}}>
            <h2 style={{fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}> {i18n.language ==="en" && "kindergarten Attendance Information"}{i18n.language ==="ar" && "معلومات الحضور في رياض الأطفال"}{i18n.language ==="fr" && "informations sur la fréquentation de la maternelle"} </h2>
            <i className="gg-chevron-down-r"></i>
          </div>

          <div className="nth5" style={{ marginLeft:i18n.language ==="ar"?"42%":null,marginRight:i18n.language ==="ar"?"0":null }}>
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"Expected Start Date":i18n.language ==="ar"?"التاريخ المتوقع للبدء":"Date de début prévue"}</label>
            <input type="date" onChange={(eo) => {
              setStartDate(eo.target.value)
            }}/>
          </div>

          <div className="nth6">
            <p style={{display:i18n.language ==="ar"?"flex":null ,justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Attendance Days"}{i18n.language ==="ar" && "أيام الحضور"}{i18n.language ==="fr" && "Jours de présence"}</p>
            <div className="nth6-1" style={{display: i18n.language==="ar"?"flex":null,flexDirection:i18n.language==="ar"?"row-reverse":null}}>
              <div className="nth6-2" style={{marginLeft:i18n.language ==="ar"?"200px":null,marginRight:i18n.language ==="ar"?"0":null }}>
                <input type="checkbox" id="Sunday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Sunday"}{i18n.language==="ar" &&"الأحد"}{i18n.language==="fr" &&"Dimanche"}</label>
              </div>
              <div className="nth6-2" style={{marginRight:i18n.language ==="ar"?"0":null ,marginLeft:i18n.language ==="ar"?"200px":null}}>
                <input type="checkbox" id="Monday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Monday"}{i18n.language==="ar" &&"الاثنين"}{i18n.language==="fr" &&"Lundi"}</label>
              </div>
              <div className="nth6-2" style={{marginLeft:i18n.language ==="ar"?"200px":null,marginRight:i18n.language ==="ar"?"0":null }}>
                <input type="checkbox" id="Tuesday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Tuesday"}{i18n.language==="ar" &&"الثلاثاء"}{i18n.language==="fr" &&"Mardi"}</label>
              </div>
              <div className="nth6-2" style={{marginLeft:i18n.language ==="ar"?"200px":null,marginRight:i18n.language ==="ar"?"0":null }}>
                <input type="checkbox" id="Wednesday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Wednesday"}{i18n.language==="ar" &&"الأربعاء"}{i18n.language==="fr" &&"Mercredi"}</label>
              </div>
              <div className="nth6-2" style={{marginLeft:i18n.language ==="ar"?"200px":null,marginRight:i18n.language ==="ar"?"0":null }}>
                <input type="checkbox" id="Thursday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Thursday"}{i18n.language==="ar" &&"الخميس"}{i18n.language==="fr" &&"Jeudi"}</label>
              </div>
              <div className="nth6-2" style={{marginLeft:i18n.language ==="ar"?"200px":null,marginRight:i18n.language ==="ar"?"0":null }}>
                <input type="checkbox" id="Friday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Friday"}{i18n.language==="ar" &&"جمعة"}{i18n.language==="fr" &&"Vendredi"}</label>
              </div>
              <div className="nth6-2" style={{marginLeft:i18n.language ==="ar"?"200px":null,marginRight:i18n.language ==="ar"?"0":null }}>
                <input type="checkbox" id="Saturday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>{i18n.language==="en" &&"Saturday"}{i18n.language==="ar" &&"السبت"}{i18n.language==="fr" &&"Samedi"}</label>
              </div>
            </div>
          </div>

          <div className="nth7" style={{flexDirection: i18n.language==="ar"?"row-reverse":null}}>
            <div className="nth7-1">
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"From":i18n.language ==="ar"?" من":"Depuis"}</label>
              <input type="time" onChange={(eo) => {
                setTimeFrom(eo.target.value)
              }}/>
            </div>
            <div className="nth7-1">
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"To":i18n.language ==="ar"?" الى":"À"}</label>
              <input type="time" onChange={(eo) => {
                setTimeTo(eo.target.value)
              }}/>
            </div>
          </div>

          <div className="nth8">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Any Additional Information regarding Attendance?"}{i18n.language ==="ar" && "أي معلومات إضافية بخصوص الحضور؟"}{i18n.language ==="fr" && "Des informations supplémentaires concernant la participation ?"}</label>
            <textarea dir={i18n.language ==="ar"?"rtl":null} placeholder={i18n.language ==="en"?"Type here...":i18n.language ==="ar"?"أكتب هنا... ":" Écrivez ici..."}  onChange={(eo) => {
                setAttendanceInfo(eo.target.value)
              }}></textarea>
          </div>

          <div className="info" style={{flexDirection:i18n.language ==="ar"?"row-reverse":null}}>
            <h2 style={{fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}> {i18n.language ==="en" && "Guardian & Emergency Contact Information"}{i18n.language ==="ar" && "معلومات اتصال الوصي والطوارئ"}{i18n.language ==="fr" && "Coordonnées du tuteur et des contacts d'urgence"} </h2>
            <i className="gg-chevron-down-r"></i>
          </div>

          <div className="nth9">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Name"}{i18n.language ==="ar" && "الاسم"}{i18n.language ==="fr" && "Nom"}</label>
            <div className="nth9-1">
              <div>
                <input dir={i18n.language ==="ar"?"rtl":null} type="text" placeholder={i18n.language ==="en"?"First Name":i18n.language ==="ar"?"الاسم":"Prénom"} onChange={(eo) => {
                  setGuardianFirstName(eo.target.value)
                }}/>
              </div>
              <div>
                <input type="text" dir={i18n.language ==="ar"?"rtl":null} placeholder={i18n.language ==="en"?"Last Name":i18n.language ==="ar"?" اللقب":"Nom"} onChange={(eo) => {
                  setGuardianLastName(eo.target.value)
                }}/>
              </div>
            </div>
          </div>

          <div className="nth10">
            <div>
              <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en"?"E-mail":i18n.language ==="ar"?"بريد إلكتروني":"E-mail"}</label>
              <input type="email" placeholder="example@example.com" onChange={(eo) => {
                  setGuardianEmail(eo.target.value)
                }}/>
            </div>
            <div>
              <label>Relationship</label>
              <input type="text" placeholder="Mother, Father, etc" onChange={(eo) => {
                  setGuardianRelationship(eo.target.value)
                }}/>
            </div>
          </div>

          <div className="nth10">
            <div className="nth10-1">
              <label>Mobile Phone Number</label>
              <input type="tel" placeholder="+213" onChange={(eo) => {
                  setGuardianPhone(eo.target.value)
                }}/>
            </div>
            <div className="nth10-1">
              <label>Work Phone Number</label>
              <input type="tel" placeholder="+213" onChange={(eo) => {
                  setGuardianWorkPhone(eo.target.value)
                }}/>
            </div>
          </div>

          <div className="nth4">
            <label>Address</label>
            <div className="nth4-2">
              <input type="radio" name="address" onChange={() => {  setDis(false) ; address1.disabled= dis;   }}/>
              <label>Same with the child</label>
              <input type="radio" name="address" onChange={() => { setDis(true); address1.disabled= dis;          }}/>
              <label>Different Address</label>
            </div>
          </div>
          <div className="nth3">
            <label>Address</label>
            <input type="text" id="address1" disabled onChange={(eo) => {
              setGuardianAddress(eo.target.value)
            }}/>
          </div>


          <div className="cut"></div>

          <div className="nth9">
            <label style={{justifyContent:  i18n.language ==="ar"?"flex-end":null,fontFamily: i18n.language ==="ar"?"'Noto Sans Arabic', sans-serif":null}}>{i18n.language ==="en" && "Name"}{i18n.language ==="ar" && "الاسم"}{i18n.language ==="fr" && "Nom"}</label>
            <div className="nth9-1">
              <div>
                <input dir={i18n.language ==="ar"?"rtl":null} type="text" placeholder={i18n.language ==="en"?"First Name":i18n.language ==="ar"?"الاسم":"Prénom"} onChange={(eo) => {
                  setGuardian_2_FirstName(eo.target.value)
                }}/>
              </div>
              <div>
                <input type="text" dir={i18n.language ==="ar"?"rtl":null}  placeholder={i18n.language ==="en"?"Last Name":i18n.language ==="ar"?" اللقب":"Nom"} onChange={(eo) => {
                  setGuardian_2_LastName(eo.target.value)
                }}/>
              </div>
            </div>
          </div>

          <div className="nth10">
            <div>
              <label>Email</label>
              <input type="email" placeholder="example@example.com" onChange={(eo) => {
                setGuardian_2_Email(eo.target.value)
              }}/>
            </div>
            <div>
              <label>Relationship</label>
              <input type="text" placeholder="Mother, Father, etc" onChange={(eo) => {
                setGuardian_2_Relationship(eo.target.value)
              }}/>
            </div>
          </div>

          <div className="nth10">
            <div className="nth10-1">
              <label>Mobile Phone Number</label>
              <input type="tel" placeholder="+213" onChange={(eo) => {
                setGuardian_2_Phone(eo.target.value)
              }}/>
            </div>
            <div className="nth10-1">
              <label>Work Phone Number</label>
              <input type="tel" placeholder="+213" onChange={(eo) => {
                setGuardian_2_WorkPhone(eo.target.value)
              }}/>
            </div>
          </div>

          <div className="nth4">
            <label>Address</label>
            <div className="nth4-2">
              <input type="radio" name="address2"  onChange={() => { setDis2(false) ; address2.disabled= dis2;   }}/>
              <label>Same with the child</label>
              <input type="radio" name="address2" onChange={() => { setDis2(true) ; address2.disabled= dis2;   }}/>
              <label>Different Address</label>
            </div>
          </div>

        <div className="nth3">
            <label>Address</label>
            <input type="text" id="address2" disabled  onChange={(eo) => {
              setGuardian_2_Address(eo.target.value)
            }}/>
          </div>


          <div className="cut"></div>

          <div className="nth8 nth8-1">
            <label>Do you want to add something?</label>
            <textarea placeholder="Type here..."  onChange={(eo) => {
              setAddSomeThing(eo.target.value)
            }}></textarea>
            <p style={{color:"#00708D",marginLeft:"15px",transform:"translate(0px,-15px)"}}>Marital status of parents, medical information, people who the child cannot be  released, etc</p>
          </div>
          <div className="cut2"></div>

          <button type="submit" onClick={async (eo) => {
            eo.preventDefault();

console.log("wait")



              await setDoc(doc(db, "Registration Requests" ,user.uid ), {
              Child_Name: name,
              Date_of_Birth: date,
              Home_Phone: homePhone,
              Child_Address: kidAddress,
              Gender: gender,
              Number_Of_Brothers: NumberOfBrothers,
              Rank_Of_Brothers: RankOfBrothers,
              Diseases: Diseases,
              Unlike_Food: UnlikeFood,
              Start_Date: StartDate,
              Attendance_Days: AttendanceDays,
              From: TimeFrom,
              To: TimeTo,
              Attendance_Informations: AttendanceInfo,
              Guardian_Name: GuardianName,
              Guardian_Email: GuardianEmail,
              Guardian_Relationship: GuardianRelationship,
              Guardian_Phone: GuardianPhone,
              Guardian_Work_Phone: GuardianWorkPhone,
              Guardian_Address: GuardianAddress,
              Guardian_2_Name: Guardian_2_Name,
              Guardian_2_Email: Guardian_2_Email,
              Guardian_2_Relationship: Guardian_2_Relationship,
              Guardian_2_Phone: Guardian_2_Phone,
              Guardian_2_Work_Phone: Guardian_2_Work_Phone,
              Guardian_2_Address: Guardian_2_Address,
              Add_SomeThing:AddSomeThing,
              kindergarten_id: kinId, 
              User_name: user.displayName,
              User_id: user.uid,
              Request_State:"waitting",

            });
            
            const popupMsg = document.querySelector(".succ-msg")
            popupMsg.style.animation = "msgPop 1s 1";
            popupMsg.style.right = "10px"

             setTimeout(() => {
              popupMsg.style.right = "-440px";
              popupMsg.style.animation = "none";
              navigate(`/pr_home/${user.uid}`);
              
            }, 3000);
            

          }}>Submit</button>

        </form>
      </div>

    </div>
      
    </>
  );
}


  
  
};
export default SignKin;
