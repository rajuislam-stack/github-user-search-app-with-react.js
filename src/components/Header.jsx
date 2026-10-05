import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
export default function Header({theme,onHandleThemeChange}) {
  

  let displayTheme;

  if(theme == 'dark'){
    displayTheme = (<> <p>Light </p> <img src={sunIcon} alt="light-theme" /> </>)
  }
  else{
    displayTheme = (<> <p>Dark </p> <img src={moonIcon} alt="dark-theme" /> </>)
  }
  return (
    <div className="header">
      <h1>Devfinder</h1>

      <button 
      className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
       onClick={onHandleThemeChange}
      >
        {displayTheme}
      </button>
    </div>
  )
}
