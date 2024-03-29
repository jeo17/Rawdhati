import React from 'react';
import IosDialog from './Ios-dialog';
import { db } from "../../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where ,doc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const ClassCard = () => {

    let { kinId } = useParams();

    const [value, loading, error] = useCollection(
        query(
          collection(db, "Registration Requests"),
          where("kindergarten_id", "==", kinId),where("Request_State", "==", "accept")
        )
      );

      const { t, i18n } = useTranslation();

      if (loading) {
        return (
          <div>
            <p>Initialising User...</p>
          </div>
        );
      }
    
      if (error) {
        return <>error loading the data ...</>;
      }




      if (value) {
        return (
            <li className="cards_item">
                      <div className="card card1">
                        <div className="card_content">
                          <h2 className="card_title">
                            
                {i18n.language ==="en" && "My Class"}
                {i18n.language ==="ar" && "صفي"}
                {i18n.language ==="fr" && "Ma classe"}
                            <span className="material-symbols-outlined">
                              
                              school
                            </span>
                          </h2>
                          <div className="card_text">
                            


                         <ol
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  marginBottom: "20px",
                }}
              >
                {value.docs !== undefined ? (
                  value.docs.map((item) => {
                    return (
                      <div key={item.Child_Name}>
                        
                        <li
                          className="Registration-list-item"
                          onClick={(eo) => {
                            if (eo.target.className !=="note-img") {
                              const ios = document.getElementById(
                                `${item.data().User_id}`
                              );
                              ios.showModal();
                            }

                          }}
                        >
                          <img src="https://cdn-icons-png.flaticon.com/512/1717/1717992.png" alt=""/>
                          {item.data().Child_Name.map((item,index) => {
                            return(
                              <>
                              
                              <span style={{marginRight:"4px"}}key={index}>{item} </span>
                              </>
                              
                            )
                          })}
                          <img className='note-img' src={require('../note.png')} alt="*" onClick={(eo) => {
                            document.getElementById("wr-note").showModal()
                          }}/>
                        </li>



                        <IosDialog id={item.data().User_id}>
                          <span
                            className="material-symbols-outlined"
                            style={{
                              float: "right",
                              color: "orange",
                              position: "absolute",
                              top: "5px",
                              right: "14px",
                              fontWeight: "900",
                              transform: "scale(1.2)",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              const profile = document.getElementById(
                                item.data().User_id
                              );
                              profile.close();
                            }}
                          >
                            close
                          </span>
                          <h1>{item.data().User_name}</h1>


                          <div className="Registration-child-info">
                          <div className="child-content">
                            <div> <label>Child Name:</label>   {item.data().Child_Name.map((item,index) => {
                               return(
                                <span key={index}>{item} </span>
                              )
                            })}</div> 
                            <div><label>Date of Birth:</label> {item.data().Date_of_Birth} </div>
                            <div><label>Gender:</label> {item.data().Gender} </div>
                            <div> <label>Number Of Brothers:</label>   {item.data().Number_Of_Brothers}  <label style={{marginLeft:"30px"}}>Rank_Of_Brothers:</label>   {item.data().Rank_Of_Brothers} </div> 
                            <div><label>Diseases:</label> {item.data().Diseases} </div>
                            <div><label>Unlike Food:</label> {item.data().Unlike_Food} </div>
                            <div className="cut3"></div>
                            <div><label>Start Date:</label> {item.data().Start_Date} </div>
                            <div><label>Attendance_Days:</label> {item.data().Attendance_Days.map((item,index) => {
                              return(
                                <span key={index}>{item} </span>
                              )
                            })} </div>
                            <div><label>Start From:</label> {item.data().From} </div>
                            <div><label>To:</label> {item.data().To} </div>
                            <div><label>Any Attendance Informations:</label> {item.data().Attendance_Informations} </div>
                            <div className="cut3"></div>
                            <div><label>Guardian Name:</label> {item.data().Guardian_Name.map((item, index) => {
                              return(
                                <span key={index}>{item} </span>
                              )
                            })} </div>
                            <div><label>Guardian Email:</label> {item.data().Guardian_Email} </div>
                            <div><label>Guardian Relationship:</label> {item.data().Guardian_Relationship} </div>
                            <div><label>Guardian Phone:</label> {item.data().Guardian_Phone} </div>
                            <div><label>Guardian Work Phone:</label> {item.data().Guardian_Work_Phone} </div>
                            <div><label>Guardian Address:</label> {item.data().Guardian_Address} </div>
                            <div className="cut3"></div>
                            <div><label>Second Guardian Name:</label> {item.data().Guardian_2_Name.map((item,index) => {
                              return(
                                <span key={index}>{item} </span>
                              )
                            })} </div>                     
                            <div><label>Second Guardian Email:</label> {item.data().Guardian_2_Email} </div>
                            <div><label>Second Guardian Relationship:</label> {item.data().Guardian_2_Relationship} </div>
                            <div><label>Second Guardian Phone:</label> {item.data().Guardian_2_Phone} </div>
                            <div><label>Second Guardian Work Phone:</label> {item.data().Guardian_2_Work_Phone} </div>
                            <div><label>Second Guardian Address:</label> {item.data().Guardian_2_Address} </div>
                            <div className="cut3"></div>
                            <div><label>Added Informations:</label> {item.data().Add_SomeThing} </div>
                            
                          </div>
                          </div>
                          
                        </IosDialog>





                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </ol>



                          </div>
                        </div>
                      </div>
                    </li>
        );
      }
    
}

export default ClassCard;
