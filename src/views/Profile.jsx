import React from "react";
import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslateHistory";
import { useUser } from "../context/UserContext";
import NavBar from '../components/NavBar/Navbar';
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const { user, setUser } = useUser();
    const nav = useNavigate();

    const logout = () => {
        setUser(null);
        nav('/');
    }

    return (
        <div>
          <NavBar/>
          <h1>Profile</h1>
          <ProfileHeader username={ user.username }/>
          <ProfileActions logout={ logout }/>
          <ProfileTranslationHistory translations={user.translations}/>
          
        </div>
    )
}

export default withAuth(Profile);