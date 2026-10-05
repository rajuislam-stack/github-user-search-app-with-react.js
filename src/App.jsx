import { use, useEffect, useReducer, useRef, useState } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import SearchBar from "./components/SearchBar";
import { UserContext } from "./contexts/userDataContext";
import { initializeTheme } from "./utils";

export default function App() {
  const [userData, setUserData] = useState({});
  const [isFailedToFetch,setIsFailedToFetch] = useState(false);
  const [search,setSearch] = useState('octocat');
  const [isSearching,setIsSearching] = useState(false);
  const [theme,setTheme] = useState(initializeTheme());
  let ref = useRef(null);


  //Feathing data from GitHub API

  useEffect(()=>{
   let ignore = false;

   async function fetchData() {

     try{
     let response = await fetch(`https://api.github.com/users/${search}`);

     if(!response.ok){
      throw new Error('User not found');
     }

     let data =await response.json();
     if(!ignore){
       setUserData(data);
       setIsFailedToFetch(false);
       setIsSearching(false);
     }
     }
     catch(err){
     setIsFailedToFetch(true)
     setIsSearching(false);
     }
   }

   fetchData()
  
   return ()=>{
    ignore = true;
   }
  },[search]);


  //Syncronizing with theme

  useEffect(()=>{
    let htmlElement = document.documentElement;

     if(theme == 'dark'){
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
     }
     else{
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
     }
 

     localStorage.setItem('theme', theme);

  },[theme])




  function handleSearch(text){

     if(text == search){
      setIsSearching(true);
      
     clearTimeout(ref.current);
     ref.current =  setTimeout(()=>{
       setIsSearching(false);
      },500)

       return ;
     }

     setSearch(text);
     setIsSearching(true);
  }


  function handleThemeChange(){
     setTheme(theme => theme == 'dark' ? 'light': 'dark');
  }




  let displayUserInfo;


   if(isSearching){
      displayUserInfo = <p>Searching...</p>
 }
  else if(isFailedToFetch){
     displayUserInfo = (<>
     <div>
       <p className="text-lg font-bold text-center">No results found!</p>
       <p>We could'nt find any GitHub users mathing your search.Plase double-check the username and try again.</p>
     </div>
     </>)
  }
  else{
    displayUserInfo =  (<>
       <UserContext value = {userData}>
        <ProfileSection/>
       </UserContext>
    </>)
  }

  


  return (
    <div className="app-container">
      <Header theme={theme} onHandleThemeChange = {handleThemeChange}/>
      <SearchBar onHandleSearch = {handleSearch} isFailedToFetch = {isFailedToFetch} isSearching={isSearching}/>
      
      {displayUserInfo}
    </div>
  )
}
