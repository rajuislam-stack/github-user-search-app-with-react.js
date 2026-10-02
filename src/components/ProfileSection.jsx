import { useContext } from "react";
import ProfileInfo from "./ProfileInfo";
import { UserContext } from "../contexts/userDataContext";

export default function ProfileSection() {
   let userData = useContext(UserContext);

   console.log(userData);

  return (
    <div className="flex gap-8">
      <div className="w-40 rounded-4xl">
        <img src={userData.avatar_url} alt={userData.name} />
      </div>

      <ProfileInfo/>
    </div>
  )
}
