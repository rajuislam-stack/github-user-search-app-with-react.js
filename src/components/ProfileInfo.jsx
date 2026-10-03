import { use, useContext } from "react"
import { UserContext } from "../contexts/userDataContext";
import iconCompany from "../assets/icon-company.svg";
import iconLocation from "../assets/icon-location.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconWebsite from "../assets/icon-website.svg";
import { createWebsiteUrl,formatDate } from "../utils";

export default function ProfileInfo() {
  let userData = useContext(UserContext);
  return (
    <div>
      <div className="flex justify-between">
         <div>
          <h1>{userData.name ? (<span>{userData.name}</span>): (<span>{userData.login}</span>)}</h1>
          <a href={`https://github.com/${userData.login}`} target="_blank" rel="norefferer">@{userData.login}</a>
         </div>

         <p>Joined {formatDate(userData.created_at)}</p>
      </div>

      <p>{userData.bio ? (<span>{userData.bio}</span>):"This profile has no bio"}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p>Repos</p>
            <p>{userData.public_repos}</p>
          </div>

          <div>
            <p>Followers</p>
            <p>{userData.followers}</p>
          </div>

          <div>
            <p>Following</p>
            <p>{userData.following}</p>
          </div>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2">
        
         <div> 
          <img src={iconLocation} alt="icon-location" />
          <p>{userData.location ? <span>{userData.location}</span>: "Not available"}</p>
         </div>
        
         <div> 
          <a href={`https://x.com/${userData.twitter_username}`} target="_blank" rel="norefferer">
             <img src={iconTwitter} alt="icon-twitter" />
          <p>{userData.twitter_username && <span>{userData.twitter_username}</span>}</p>
          </a>

          <p>{!userData.twitter_username && "Not Available"}</p>
        </div>

        <div> 
           <a href={createWebsiteUrl(userData.blog)}  target="_blank" rel="norefferer">
             <img src={iconWebsite} alt="icon-website" />
             <p>{userData.blog && <span>{userData.blog}</span>}</p>
          </a>

          <p>{!userData.blog && "Not Available"}</p>
         </div>

         <div> 
            <a href={`https://${userData.company}.com`} target="_blank" rel='norefferer'>
             <p>{userData.company && (<><img src={iconCompany} alt="icon-company" /> <span>{userData.company}</span></>)}</p>
          </a>

          <p>{!userData.company && (<><img src={iconCompany} alt="icon-company" /> <span>Not Available</span> </>)}</p>
          </div>

      </div>

    </div>
  )
}
