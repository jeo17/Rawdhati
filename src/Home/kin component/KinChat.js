import React from 'react';
import "./KinChat.css";
import ChatList from './chat/Chat-List';


const KinChat = () => {

 
        
    return (
        <div id="KinChat-container">
          <aside>
            <header>
              <input type="text" placeholder="search" />
            </header>
        
        <ChatList />

          </aside>
          <main>
            <header>
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                alt=""
              />
              <div>
                <h2>Chat with Vincent Porter</h2>
              </div>
            </header>
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
        </div>
        
            );





}

export default KinChat;
