import React from "react";
import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { useUser } from "../context/UserContext";
import NavBar from '../components/NavBar/Navbar';
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const { user } = useUser();
    const nav = useNavigate();

    const logout = () => {
        nav('/');
    }

    return (
        <div>
          <NavBar/>
          <h1>Profile</h1>
          <ProfileHeader username={ user.username }/>
          <ProfileActions logout={ logout }/>
          
        </div>
    )
}

export default Profile;
//export default withAuth(Profile);