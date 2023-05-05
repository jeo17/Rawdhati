import React from 'react';
import MainHeader from './Main-Header';

const MainList = (UserName) => {

    if (UserName.UserName !=="") {



        return (

            <main>
           <MainHeader UserName={UserName}/> 

            <ul id="chat">
              <li className="you">
                <div className="entete">
                  <span className="status green" />
                  <h2>Vincent</h2>
                  <h3>10:12AM, Today</h3>
                </div>
                <div className="triangle" />
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.
                </div>
              </li>
              <li className="me">
                <div className="entete">
                  <h3>10:12AM, Today</h3>
                  <h2>Vincent</h2>
                  <span className="status blue" />
                </div>
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.
                </div>
              </li>
              <li className="me">
                <div className="entete">
                  <h3>10:12AM, Today</h3>
                  <h2>Vincent</h2>
                  <span className="status blue" />
                </div>
        
                <div className="message">OK</div>
              </li>
              <li className="you">
                <div className="entete">
                  <span className="status green" />
                  <h2>Vincent</h2>
                  <h3>10:12AM, Today</h3>
                </div>
                <div className="triangle" />
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.
                </div>
              </li>
              <li className="me">
                <div className="entete">
                  <h3>10:12AM, Today</h3>
                  <h2>Vincent</h2>
                  <span className="status blue" />
                </div>
        
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.
                </div>
              </li>
              <li className="me">
                <div className="entete">
                  <h3>10:12AM, Today</h3>
                  <h2>Vincent</h2>
                  <span className="status blue" />
                </div>
        
                <div className="message">OK</div>
              </li>
            </ul>
            <footer>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
                alt=""
              />
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
                alt=""
              />
              <textarea placeholder="Type your message" defaultValue={""} />
              <a href="#">Send</a>
            </footer>
          </main>
        );
    
    }else{
        return(
         <main >
            <h2 style={{textAlign:"center",position:"absolute",bottom:"50%",left:"50%"}}>
                select a user to chat with ..
            </h2>
         </main>

        )
    }

   
}

export default MainList;
