import { createContext, useReducer } from "react";
  const ThemeContexttt = createContext();
  let lastTheme = localStorage.getItem("lastTheme") ==="lightmode"?"darkmode":"lightmode";
 
 const initialData = { theme: `${lastTheme}`,
                       switched: lastTheme==="darkmode"?"switched":"" ,
                       bird:lastTheme==="darkmode"?"hoo":"piyo",
                       face2:lastTheme==="darkmode"?"charactor__face2":"",
                       body:lastTheme==="darkmode"?"charactor__body":"",
                      };

 const reducer = (firstState, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return { ...firstState, theme: action.newValue };
        case "SWITCH_BUTTON":
        return { ...firstState, switched: action.newValue };
        case "CHANGE_BIRD":
        return { ...firstState, bird: action.newValue };
        case "CHANGE_FACE":
          return { ...firstState, face2: action.newValue };
          case "CHANGE_BODY":
            return { ...firstState, body: action.newValue };
      default:
        return firstState;
    }}
  
  export function ThemeProvider({ children }) {
    const [firstState, dispatch] = useReducer(reducer, initialData);
  
    const Theme = () => {
        dispatch({ type: "CHANGE_THEME", newValue: firstState.theme === "lightmode"? "darkmode": "lightmode" });
      };
      const Switched = () => {
        dispatch({ type: "SWITCH_BUTTON", newValue: firstState.theme === "lightmode"? "switched": "" });
      };
      const Bird = () => {
        dispatch({ type: "CHANGE_BIRD", newValue: firstState.theme === "lightmode"? "hoo": "piyo" });
      };
      const Face = () => {
        dispatch({ type: "CHANGE_FACE", newValue: firstState.theme === "lightmode"? "charactor__face2": "" });
      };
      const Body = () => {
        dispatch({ type: "CHANGE_BODY", newValue: firstState.theme === "lightmode"? "charactor__body": "" });
      };
     
    return (
       <ThemeContexttt.Provider value={{ ...firstState,Theme,Switched,Bird,Face,Body}}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;