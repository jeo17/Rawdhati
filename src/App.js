import "./app.css"
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";


function App() {
  return (
    <div className="App">
   
       <Topcloud/>
       <div className="main appmain">
          <div className="kenside">
            <h1>Kendegarten Space</h1>
          </div>
          <div className="parside">
            <h1>Parents Space</h1>
          </div>
        </div>        
      <Botcloud/>

    </div>
  );
}

export default App;
