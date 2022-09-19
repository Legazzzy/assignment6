import React from "react";

import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory";
import { useUser } from "../context/UserContext";


const Profile = () => {

    const { user } = useUser();

    const logout = () => {
        //storageSave(STORAGE_KEY_USER, null);
        //setUser(null);
    }

    return (
        <div>
          <h1>Profile</h1>
          <ProfileHeader username={ user.username }/>
          <ProfileActions logout={ logout }/>
          <ProfileTranslateHistory translations={ user.translations }/>
        </div>
    )
}

export default withAuth(Profile);