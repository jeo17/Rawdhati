import React from "react";
import "./Ios-dialog.css"

const IosDialog = ({id,children}) => {
  return (

    <dialog id={id === undefined? "profile":id} style={{height:"100vh",width:"100vw"}}>
    <div className="confirm">
    {children}
      </div>
    </dialog>
      
  );
};

export default IosDialog;
