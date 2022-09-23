import React from "react";
import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslateHistory";
import { useUser } from "../context/UserContext";
import NavBar from '../components/NavBar/Navbar';
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/Logo.png"
import '../css/profile.css';


const Profile = () => {
    //Initialize variables
    const { user, setUser } = useUser();
    const nav = useNavigate();

    //Sets userstate to null
    const logout = () => {
        setUser(null);
        nav('/');
    }

    //Updates user with empty translationlist
    const updateUser = () => {
        setUser({...user,
            translations: []})
    }

    //Returns content
    return (
        <div>
          <NavBar/>
          <div class="profilecontent">
          <h1>Profile</h1>
          <ProfileHeader username={ user.username }/>
          <ProfileActions logout={ logout } userId={user.id} updateUser={ updateUser }/>
          <ProfileTranslationHistory translations={user.translations}/>
          </div>
        </div>
    )
}

export default withAuth(Profile);