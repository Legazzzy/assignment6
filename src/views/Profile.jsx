import React from "react";
import HelloLogo from "../components/Translations/HelloLogoComponent";
import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory";
import { useUser } from "../context/UserContext";
import NavBar from '../components/NavBar/Navbar';


const Profile = () => {

    //const { user } = useUser();

    const logout = () => {
        //storageSave(STORAGE_KEY_USER, null);
        //setUser(null);
    }

    return (
        <div>
          <NavBar/>
          <h1>Profile</h1>

          <ProfileHeader username={ user }/>
          <ProfileActions logout={ logout }/>
          <ProfileTranslateHistory translations={ "user.username" }/>
          
        </div>
    )
}

export default Profile;
//export default withAuth(Profile);