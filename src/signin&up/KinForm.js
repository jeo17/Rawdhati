import React from "react";
import "./KinForm.css";
import Page404 from "../Page_404";
import { useState } from "react"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth,db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";







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
          <h1> Information form</h1>
        </header>
        <form>
          <div className="info">
            <h2> child information </h2>
            <i className="gg-chevron-down-r"></i>
          </div>
          <div className="nth1">
            <label>Child's Name</label>
            <div className="nth1-1">
              <div>
                <input type="text" placeholder="First Name" onChange={ (eo) => {
                   setfirstName(eo.target.value)
                }}/>
              </div>
              <div>
                <input type="text" placeholder="Middle Name" onChange={(eo) => {
                  setmiddleName(eo.target.value)
                }}/>
              </div>
              <div>
                <input type="text" placeholder="Last Name" onChange={(eo) => {
                  setlastName(eo.target.value)
                }}/>
              </div>
            </div>
          </div>

          <div className="nth2">
            <div>
              <label>Date of Birth</label>
              <input type="date" onChange={(eo) => {
                setdate(eo.target.value)
              }}/>
            </div>

            <div>
              <label>Home Phone </label>
              <input type="tel" placeholder="+213" onChange={(eo) => {
                sethomePhone(eo.target.value)
              }}/>
            </div>
          </div>

          <div className="nth3">
            <label>Address</label>
            <input type="text" onChange={(eo) => {
                setkidAddress(eo.target.value)
              }}/>
          </div>

          <div className="nth4">
            <label>Gender</label>
            <div className="nth4-1">
              <input type="radio" name="gender" onClick={(eo) => {
                setgender("Male")
              }} />
              <label>Male</label>
              <input type="radio" name="gender" onClick={(eo) => {
                setgender("Female")
              }} />
              <label>Female</label>
            </div>
          </div>


          <div className="nth2">
            <div className="nth2-1">
              <label>Number Of Brothers</label>
              <input type="number" min="0"  onClick={(eo) => {
                setNumberOfBrothers(eo.target.value)
              }} />
            </div>

            <div className="nth2-1">
              <label>Rank Of Brothers </label>
              <input type="number" min="1" onClick={(eo) => {
                setRankOfBrothers(eo.target.value)
              }} />
            </div>
          </div>

          <div className="nth8 nth8-1">
            <label>Is (s)He Suffering From Any Diseases ?</label>
            <textarea placeholder="Type here..." onChange={(eo) => {
              setDisease(eo.target.value)
            }}></textarea>
          </div>
          <div className="nth8 nth8-1">
            <label>What Foods Does (s)He Not Like ?</label>
            <textarea placeholder="Type here..." onChange={(eo) => {
              setUnlikeFood(eo.target.value)
            }}></textarea>
          </div>


          <div className="info">
            <h2> kindergarten Attendance Information </h2>
            <i className="gg-chevron-down-r"></i>
          </div>

          <div className="nth5">
            <label>Expected Start Date</label>
            <input type="date" onChange={(eo) => {
              setStartDate(eo.target.value)
            }}/>
          </div>

          <div className="nth6">
            <p>Attendance Days</p>
            <div className="nth6-1">
              <div className="nth6-2">
                <input type="checkbox" id="Sunday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Sunday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" id="Monday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Monday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" id="Tuesday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Tuesday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" id="Wednesday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Wednesday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" id="Thursday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Thursday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" id="Friday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Friday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" id="Saturday"  onClick={(eo) => {
                  AttDays(eo,AttendanceDays)
                }}/>
                <label>Saturday</label>
              </div>
            </div>
          </div>

          <div className="nth7">
            <div className="nth7-1">
              <label>From</label>
              <input type="time" onChange={(eo) => {
                setTimeFrom(eo.target.value)
              }}/>
            </div>
            <div className="nth7-1">
              <label>to</label>
              <input type="time" onChange={(eo) => {
                setTimeTo(eo.target.value)
              }}/>
            </div>
          </div>

          <div className="nth8">
            <label>Any Additional Information regarding Attendance?</label>
            <textarea placeholder="Type here..."  onChange={(eo) => {
                setAttendanceInfo(eo.target.value)
              }}></textarea>
          </div>

          <div className="info">
            <h2> Guardian & Emergency Contact Information </h2>
            <i className="gg-chevron-down-r"></i>
          </div>

          <div className="nth9">
            <label>Name</label>
            <div className="nth9-1">
              <div>
                <input type="text" placeholder="First Name" onChange={(eo) => {
                  setGuardianFirstName(eo.target.value)
                }}/>
              </div>
              <div>
                <input type="text" placeholder="Last Name" onChange={(eo) => {
                  setGuardianLastName(eo.target.value)
                }}/>
              </div>
            </div>
          </div>

          <div className="nth10">
            <div>
              <label>Email</label>
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
            <label>Name</label>
            <div className="nth9-1">
              <div>
                <input type="text" placeholder="First Name" onChange={(eo) => {
                  setGuardian_2_FirstName(eo.target.value)
                }}/>
              </div>
              <div>
                <input type="text" placeholder="Last Name" onChange={(eo) => {
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
              Request_State:"waitting"
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
