import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import SearchBar from "./components/SearchBar";
import { UserContext } from "./contexts/userDataContext";

export default function App() {
  const [userData, setUserData] = useState({});
  const [isFailedToFetch,setIsFailedToFetch] = useState(false);

  useEffect(()=>{
   let ignore = false;

   async function fetchData() {

     try{
     let response = await fetch("https://api.github.com/users/rajuislam-stack");

     if(!response.ok){
      throw new Error('User not found');
     }

     let data =await response.json();
     if(!ignore){
       setUserData(data);
       setIsFailedToFetch(false);
     }
     }
     catch(err){
     setIsFailedToFetch(true)
     }
   }

   fetchData()
  
   return ()=>{
    ignore = true;
   }
  },[]);


  let displayUserInfo;

  if(isFailedToFetch){
     displayUserInfo = (<>
     <div>
       <p>No results found!</p>
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
    <div >
      <Header/>
      <SearchBar/>
      
      {displayUserInfo};
    </div>
  )
}
