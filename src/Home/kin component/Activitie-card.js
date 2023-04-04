import React from 'react';
import { useParams } from 'react-router-dom';
import { doc } from "firebase/firestore"; 
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from '../../firebase/config';

const ActivitieCard = () => {

    let { kinId } = useParams();
    const [value, loading, error] = useDocument(doc(db, "kindergarten Information", kinId))


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
                  <div className="card card2">
                    <div className="card_content">
                      <h2 className="card_title">
                        
                        Activities
                        <span className="material-symbols-outlined">
                          
                          extension
                        </span>
                      </h2>
                      <div className="card_text">
                          <ol style={{fontFamily:"'Fredoka One', cursive", marginBottom:"20px"}}>

                            {value.data() !== undefined? value.data().kindergarten_Activites.map((item) => {
                                return(   <li className="class-list-item" key={item}> <img src="https://cdn-icons-png.flaticon.com/512/3712/3712259.png" alt=""/>  {item}  <span class="material-symbols-outlined"> delete  </span> </li>   )
                               }) : <li ></li>}
                          </ol>       
                            <div className='add-act'>
                            <span class="material-symbols-outlined add-act-icon">add_circle</span>  
                          <input type='text' placeholder='Add more activities'/> 
                            </div>
                                   
                      </div>
                    </div>
                  </div>
                </li>
    );
}

    
}

export default ActivitieCard;
