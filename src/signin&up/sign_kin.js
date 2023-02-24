import React from 'react';
import './sign_kin.css'

const SignKin = () => {
    return (
        <>
            <div className="information">
                <header>
                  <h1> Information form</h1>
                </header>
                <form>

       <div className='info'>
         <h2>  child information </h2> 
         <i class="gg-chevron-down-r"></i>       
       </div>
                <div className='nth1'>

                  <label>Child's Name</label>
                  <div className="nth1-1">
                       <div>
                           <input type="text" placeholder='First Name'/>
                       </div> 
                       <div>                 
                          <input type="text" placeholder='Middle Name'/> 
                       </div>
                       <div>  
                          <input type="text" placeholder='Last Name'/> 
                        </div>
                  </div>
 
                </div >

            <div className='nth2'>

               <div>
                  <label>Date of Birth</label>
                  <input type="date"/>
                </div>
                
                <div>
                  <label>Home Phone </label>
                  <input type="tel" placeholder='+213'/>
                </div>
            </div>


            <div className='nth3'>
            <label>Address</label>
            <input type="text"/>
            </div>


            <div className='nth4'>
              <label>Gender</label>
               <div className='nth4-1'>
                <input type="radio" />
                <label>Male</label>
                <input type="radio" />
                <label>Female</label>
               </div>
            </div>


        <div className='info'>
                <h2>  kindergarten Attendance Information </h2> 
                <i class="gg-chevron-down-r"></i>       
         </div>
            
                <div className='nth5'>
                  <label>Expected Start Date</label>
                  <input type="date"/>
                </div>
                

                <div className='nth6'>
                  <p>Attendance Days</p>
                  <div className='nth6-1'>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Sunday</label>  
                   </div>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Monday</label>  
                   </div>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Tuesday</label>  
                   </div>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Wednesday</label>  
                   </div>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Thursday</label>  
                   </div>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Friday</label>  
                   </div>
                   <div className="nth6-2">
                   <input type="checkbox"/>
                   <label>Saturday</label>
                   </div>
                  </div>

                </div>
              
              
                  
                </form>
                
                
                
             </div>
        </>
    );
}

export default SignKin;
