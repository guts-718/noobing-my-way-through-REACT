import "./style.css"
import {useEffect, useState} from "react";
import useLocalStroage from "./useLocalStorage";

export default function LightDarkMode(){
    const [state,setState]=useState('dark');
     const [theme, setTheme] = useLocalStroage("theme", "dark");

     useEffect(()=>{
        setTheme(state);
     },[state])

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Theme Switcher</p>
            <button onClick={()=>setState((theme)=>(theme==='light'?'dark':'light'))}>
{state==='light'?'Light Theme':'Dark Theme'}</button>
        </div>


    </div>
}