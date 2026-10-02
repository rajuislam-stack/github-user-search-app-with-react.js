import searchIcon from "../assets/icon-search.svg";

export default function SearchBar() {
  return (
    <div>
       <label>

        <img src={searchIcon} alt="icon-search" />

        <input 
        type="text" 
        placeholder="Search GitHub username..."
        />
       </label>

       <button>
        Search
       </button>
    </div>
  )
}
