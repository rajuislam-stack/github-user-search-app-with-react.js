import { useContext } from "react"
import { UserContext } from "../contexts/userDataContext";
import iconCompany from "../assets/icon-company.svg";
import iconLocation from "../assets/icon-location.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconWebsite from "../assets/icon-website.svg";
import { createWebsiteUrl,formatDate } from "../utils";

export default function ProfileInfo() {
  let userData = useContext(UserContext);

  return (
    <div className="min-w-0 flex-1">

      <div className="flex items-center gap-4 sm:items-start">

        <div className="profile-avatar">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

          <div className="min-w-0">
            <h1 className="truncate text-lg sm:text-2xl">
              {userData.name || userData.login}
            </h1>
            <a href={`https://github.com/${userData.login}`} target="_blank" rel="noreferrer" className = "text-blue-800">
              @{userData.login}
            </a>
          </div>
          <p className="shrink-0 text-xs opacity-70 sm:text-sm">
            Joined {formatDate(userData.created_at)}
          </p>
        </div>
      </div>

      <p className="my-5 text-sm leading-6">
        {userData.bio || "This profile has no bio"}
      </p>

      <div className="profile-stats">
        <div className="min-w-0 text-left md:text-center">
          <p className="text-[10px] leading-4 sm:text-sm">Repos</p>
          <p className="mt-1 text-base font-bold sm:text-2xl">{userData.public_repos}</p>
        </div>
        <div className="min-w-0 text-left md:text-center">
          <p className="text-[10px] leading-4 sm:text-sm">Followers</p>
          <p className="mt-1 text-base font-bold sm:text-2xl">{userData.followers}</p>
        </div>
        <div className="min-w-0 text-left md:text-center">
          <p className="text-[10px] leading-4 sm:text-sm">Following</p>
          <p className="mt-1 text-base font-bold sm:text-2xl">{userData.following}</p>
        </div>
      </div>

      <div className="profile-links text-sm">
        <div className="flex min-w-0 items-center gap-3">
          <img className="h-5 w-5 shrink-0" src={iconLocation} alt="iconLocation" />
          <span className="wrap-break-word">{userData.location || "Not available"}</span>
        </div>

        <a
          className="flex min-w-0 items-center gap-3"
          href={userData.twitter_username ? `https://x.com/${userData.twitter_username}` : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <img className="h-5 w-5 shrink-0" src={iconTwitter} alt="iconTwitter" />
          <span className="wrap-break-word">{userData.twitter_username || "Not available"}</span>
        </a>

        <a
          className="flex min-w-0 items-center gap-3"
          href={userData.blog ? createWebsiteUrl(userData.blog) : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <img className="h-5 w-5 shrink-0" src={iconWebsite} alt="website-icon" />
          <span className="break-all">{userData.blog || "Not available"}</span>
        </a>
    
     
        <a href={userData.company ? `${createWebsiteUrl(userData.company)}.com`:null} target="_blank" rel="norefferer" className="flex min-w-0 items-center gap-3">
          <img className="h-5 w-5 shrink-0" src={iconCompany} alt="company-icon" />
          <span className="wrap-break-word">{userData.company || "Not available"}</span>
        </a>
      </div>
    </div>
  )
}
