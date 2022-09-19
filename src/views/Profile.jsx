import React from "react";

import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory";
import { useUser } from "../context/UserContext";


const Profile = () => {

    const { user } = useUser();

    return (
        <div>
          <h1>Profile</h1>
          <ProfileHeader username={ user.username }/>
          <ProfileActions />
          <ProfileTranslateHistory translations={ user.translations }/>
        </div>
    )
}

export default withAuth(Profile);