import React from 'react';
import "./botcloud.css"

const Botcloud = ({margintop,height}) => {
    return (
        <>
             <div className="botcloud" style={{marginTop:`${margintop}`, height:`${height}`}}>
              </div>
        </>
    );
}

export default Botcloud;
