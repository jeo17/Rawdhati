import { createContext, useReducer } from "react";
  const ThemeContexttt = createContext();
 
 const initialData = { theme: "lightmode" };
 const reducer = (firstState, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return { ...firstState, theme: action.newValue };
      default:
        return firstState;
    }}
  
  export function ThemeProvider({ children }) {
    const [firstState, dispatch] = useReducer(reducer, initialData);
  
    const Theme = () => {
        dispatch({ type: "CHANGE_THEME", newValue: firstState.theme === "lightmode"? "darkmode": "lightmode" });
      };
  
    return (
       <ThemeContexttt.Provider value={{ ...firstState,Theme}}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;