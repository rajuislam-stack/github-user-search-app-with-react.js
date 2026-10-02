import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import { useState } from "react"


export default function Header() {
  const [isDark,setIsDark] = useState(false);

  let displayTheme;

  if(isDark){
    displayTheme = (<> <p>Light </p> <img src={sunIcon} alt="light-theme" /> </>)
  }
  else{
    displayTheme = (<> <p>Dark </p> <img src={moonIcon} alt="dark-theme" /> </>)
  }
  return (
    <div>
      <h1>devfinder</h1>

      <div className="flex bg-indigo-200">
        {displayTheme}
      </div>
    </div>
  )
}
