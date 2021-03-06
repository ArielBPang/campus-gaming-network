// Libraries
import React from "react";
import { Router } from "@reach/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box } from "@chakra-ui/core";

// Other
import { firebaseAuth } from "./firebase";

// Pages
import Home from "./pages";
import School from "./pages/school";
import User from "./pages/user";
import Event from "./pages/event";
import NotFound from "./pages/not-found";
import Signup from "./pages/signup";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import PasswordReset from "./pages/password-reset";

// Components
import UnauthenticatedNav from "./components/UnauthenticatedNav";
import ScrollToTop from "./components/ScrollToTop";
import NavSilhouette from "./components/NavSilhouette";
import UserSilhouette from "./components/UserSilhouette";
import SchoolSilhouette from "./components/SchoolSilhouette";
import EventSilhouette from "./components/EventSilhouette";
import Empty from "./components/Empty";

const UnauthenticatedApp = () => {
  const [authenticatedUser, isAuthenticating] = useAuthState(firebaseAuth);
  const [isLoading, setIsLoading] = React.useState(true);
  const [nav, setNav] = React.useState(<NavSilhouette />);
  const [routes, setRoutes] = React.useState(<SilhouetteRoutes />);

  React.useEffect(() => {
    const _isLoading = isAuthenticating;

    if (isLoading !== _isLoading) {
      setIsLoading(_isLoading);
    }
  }, [isAuthenticating, isLoading]);

  React.useEffect(() => {
    if (!isLoading && !authenticatedUser) {
      setNav(<UnauthenticatedNav />);
      setRoutes(<Routes />);
    }
  }, [isLoading, authenticatedUser]);

  return (
    <React.Fragment>
      {nav}
      <Box as="main" pb={12}>
        {routes}
      </Box>
    </React.Fragment>
  );
};

const SilhouetteRoutes = () => {
  return (
    <Router>
      <ScrollToTop default>
        <Home path="/" />
        <Empty path="edit-user" />
        <UserSilhouette path="user/:id" />
        <SchoolSilhouette path="school/:id" />
        <Empty path="school/:id/edit" />
        <Empty path="create-event" />
        <EventSilhouette path="event/:id" />
        <Empty path="event/:id/edit" />
        <Empty path="register" />
        <Empty path="login" />
        <Empty path="forgot-password" />
        <Empty path="password-reset" />
        <NotFound default />
      </ScrollToTop>
    </Router>
  );
};

const Routes = () => {
  return (
    <Router>
      <ScrollToTop default>
        <Home path="/" />
        <User path="user/:id" />
        <School path="school/:id" />
        <Event path="event/:id" />
        <Signup path="register" />
        <Login path="login" />
        <ForgotPassword path="forgot-password" />
        <PasswordReset path="password-reset" />
        <NotFound default />
      </ScrollToTop>
    </Router>
  );
};

export default UnauthenticatedApp;
