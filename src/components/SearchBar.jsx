import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";

export default function SearchBar({onHandleSearch,isFailedToFetch,isSearching}) {
  const [text,setText] = useState('');
  
  let searchResult;
  if(isSearching){
    alert = null;
  }
  else if(isFailedToFetch){
    searchResult= "No results";
  }
  else {
    searchResult = null;
  }


  return (
    <div className="searchbar">

       <label className="flex min-w-0 flex-1 items-center h-full">

        <img src={searchIcon} alt="" className="h-5 w-5 shrink-0" />

        <input 
        type="text" 
        placeholder="Search GitHub username..."
        value={text}
        className="ml-2 h-full min-w-0 w-full border-none bg-transparent focus:outline-none"
        onChange={(e)=> setText(e.target.value)}
        />
       </label>

       <p className="text-sm text-red-500">
         {searchResult}
       </p>

       <button
        onClick={()=> onHandleSearch(text.trim())}
        className="h-full shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:px-4"
        >
        Search
       </button>
    </div>
  )
}
