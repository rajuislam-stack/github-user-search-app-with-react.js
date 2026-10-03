import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import { useState } from "react"


export default function Header({isDark,setIsDark}) {
  

  let displayTheme;

  if(isDark){
    displayTheme = (<> <p>Light </p> <img src={sunIcon} alt="light-theme" /> </>)
  }
  else{
    displayTheme = (<> <p>Dark </p> <img src={moonIcon} alt="dark-theme" /> </>)
  }
  return (
    <div className="flex justify-around">
      <h1>devfinder</h1>

      <button 
      className="flex bg-indigo-200"
       onClick={()=>setIsDark(!isDark)}
      >
        {displayTheme}
      </button>
    </div>
  )
}
