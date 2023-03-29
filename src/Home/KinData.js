import React from 'react';
import { db } from "../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import Page404 from '../Page_404';


const KinData = ({user}) => {
    const [value, loadingg, errorr] = useCollection(collection(db, user.uid));



    if (loadingg) {
        return (
          <div>
            <p>Initialising User...</p>
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





 if (value) {
    if (value.docs[0] !== undefined ) {
    return (
        <>{value.docs[0].data().kindergarten_Name}</>
    );

 }
}
    
}

export default KinData;
