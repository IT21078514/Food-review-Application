import React from "react";
import LogingHeader from "../components/member1/LogingHeader";
import UserProfile from "../components/member1/UserProfile";
import EditUserProfileModal from "../components/member1/EditUserProfileModal";

const UserProfileScreen = () => {
  return (
    <div>
      <LogingHeader />
      <UserProfile />
      <EditUserProfileModal />
    </div>
  );
};

export default UserProfileScreen;
