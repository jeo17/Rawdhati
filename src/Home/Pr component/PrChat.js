import React from "react";
import "./PrChat.css";
import { useDocument } from "react-firebase-hooks/firestore";
 import { doc } from "firebase/firestore";
 import { db } from "../../firebase/config";
 import { useParams } from "react-router-dom";
 import Main from "./chat/main";


const PrChat = () => {

  let { prId } = useParams();
  const [value, loading, error] = useDocument(doc(db, "Can Chat With",prId));



  if (value) {
    if (value.data() !== undefined) {
          return (
      <div id="PrChat-container">
      <main>
        <header>
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
            alt=""
          />
          <div>
            <h2>{value.data().kindergarten_Name}</h2>
          </div>
        </header>
       <Main  kindergarten_Id={value.data().kindergarten_Id} kindergarten_Name={value.data().kindergarten_Name}/>

      </main>
      </div>
  
    );
    }else{
      return(
            <div id="PrChat-container">
     <main>
      <h2  style={{textAlign:"center",position:"absolute",bottom:"50%",left:"30%",color:"rgba(255, 255, 255, 0.9)"}}>
      You are not registered in any kindergarten..
      </h2>
     </main>
    </div>
      )

  }

  }

};

export default PrChat;
