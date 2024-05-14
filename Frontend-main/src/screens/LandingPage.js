import React from "react";
import Landing from "../components/member1/Landing";
import Header from "../components/member1/Header";

import LoginModal from "../components/member1/LoginModal";
import RegistaionModal from "../components/member1/RegistaionModal";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Landing />
      <LoginModal />
      <RegistaionModal />
    </div>
  );
};

export default LandingPage;
