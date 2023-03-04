import React from "react";
import "./KinForm.css";
import { useState } from "react"; 



const SignKin = () => {
  const [dis, setDis] = useState();
  const [dis2, setDis2] = useState();
  const address1 =document.getElementById("address1")
  const address2 =document.getElementById("address2")

  
  
  return (
    <>
      <div className="information">
        <header>
          <h1> Information form</h1>
        </header>
        <form>
          <div className="info">
            <h2> child information </h2>
            <i class="gg-chevron-down-r"></i>
          </div>
          <div className="nth1">
            <label>Child's Name</label>
            <div className="nth1-1">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Middle Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="nth2">
            <div>
              <label>Date of Birth</label>
              <input type="date" />
            </div>

            <div>
              <label>Home Phone </label>
              <input type="tel" placeholder="+213" />
            </div>
          </div>

          <div className="nth3">
            <label>Address</label>
            <input type="text" />
          </div>

          <div className="nth4">
            <label>Gender</label>
            <div className="nth4-1">
              <input type="radio" name="gender" />
              <label>Male</label>
              <input type="radio" name="gender" />
              <label>Female</label>
            </div>
          </div>


          <div className="nth2">
            <div className="nth2-1">
              <label>Number Of Brothers</label>
              <input type="number" />
            </div>

            <div className="nth2-1">
              <label>Rank Of Brothers </label>
              <input type="number" />
            </div>
          </div>

          <div className="nth8 nth8-1">
            <label>Is (s)He Suffering From Any Disease ?</label>
            <textarea placeholder="Type here..."></textarea>
          </div>
          <div className="nth8 nth8-1">
            <label>What Foods Does (s)He Not Like ?</label>
            <textarea placeholder="Type here..."></textarea>
          </div>


          <div className="info">
            <h2> kindergarten Attendance Information </h2>
            <i class="gg-chevron-down-r"></i>
          </div>

          <div className="nth5">
            <label>Expected Start Date</label>
            <input type="date" />
          </div>

          <div className="nth6">
            <p>Attendance Days</p>
            <div className="nth6-1">
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Sunday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Monday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Tuesday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Wednesday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Thursday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Friday</label>
              </div>
              <div className="nth6-2">
                <input type="checkbox" />
                <label>Saturday</label>
              </div>
            </div>
          </div>

          <div className="nth7">
            <div className="nth7-1">
              <label>From</label>
              <input type="time" />
            </div>
            <div className="nth7-1">
              <label>to</label>
              <input type="time" />
            </div>
          </div>

          <div className="nth8">
            <label>Any Additional Information regarding Attendance?</label>
            <textarea placeholder="Type here..."></textarea>
          </div>

          <div className="info">
            <h2> Guardian & Emergency Contact Information </h2>
            <i class="gg-chevron-down-r"></i>
          </div>

          <div className="nth9">
            <label>Name</label>
            <div className="nth9-1">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="nth10">
            <div>
              <label>Email</label>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div>
              <label>Relationship</label>
              <input type="text" placeholder="Mother, Father, etc" />
            </div>
          </div>

          <div className="nth10">
            <div className="nth10-1">
              <label>Mobile Phone Number</label>
              <input type="tel" placeholder="+213" />
            </div>
            <div className="nth10-1">
              <label>Work Phone Number</label>
              <input type="tel" placeholder="+213" />
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
            <input type="text" id="address1" disabled />
          </div>


          <div className="cut"></div>

          <div className="nth9">
            <label>Name</label>
            <div className="nth9-1">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="nth10">
            <div>
              <label>Email</label>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div>
              <label>Relationship</label>
              <input type="text" placeholder="Mother, Father, etc" />
            </div>
          </div>

          <div className="nth10">
            <div className="nth10-1">
              <label>Mobile Phone Number</label>
              <input type="tel" placeholder="+213" />
            </div>
            <div className="nth10-1">
              <label>Work Phone Number</label>
              <input type="tel" placeholder="+213" />
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
            <input type="text" id="address2" disabled/>
          </div>


          <div className="cut"></div>
        </form>
      </div>
    </>
  );
};
export default SignKin;
