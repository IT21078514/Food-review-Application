import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
//imported screens
import LandingPage from "./screens/LandingPage";
import Home from "./screens/Home";
import UserProfileScreen from "./screens/UserProfileScreen";

const App = () => {
  return (
    <BRouter>
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/userProfile" component={UserProfileScreen} />
        </Switch>
      </main>
    </BRouter>
  );
};

export default App;
