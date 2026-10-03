import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";

export default function SearchBar({onHandleSearch}) {
  const [text,setText] = useState('');

  return (
    <div className="flex justify-around">
       <label className="flex">

        <img src={searchIcon} alt="icon-search" />

        <input 
        type="text" 
        placeholder="Search GitHub username..."
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
       </label>

       <button onClick={()=> onHandleSearch(text.trim())}>
        Search
       </button>
    </div>
  )
}
