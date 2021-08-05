import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import PlaylistPage from '../PlaylistPage/PlaylistPage';
import './App.css';
import MyPartyPage from '../MyPartyPage/MyPartyPage';
import UserPage from '../UserPage/UserPage';
import CreateEvent from '../CreateEvent/CreateEvent';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          
          <Redirect exact from="/" to="/playlist" />

          <ProtectedRoute
            exact
            path="/playlist"
          >
            <PlaylistPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/party"
          >
            <MyPartyPage />
          </ProtectedRoute>

          <ProtectedRoute
            path="/user/:id"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            path="/event/new/:attendeeId/:attendeeName/:gameId/:gameName"
          >
            <CreateEvent />
          </ProtectedRoute>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          
          
          
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/profile"
          >
            <MyProfilePage />
          </ProtectedRoute>

          

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/playlist"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/playlist"
          >
            <RegisterPage />
          </ProtectedRoute>

          {/* <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/home" => "/playlist"
            // - else shows LoginPage at "/home"
            exact
            path="/home"
            authRedirect="/playlist"
          >
            <LoginPage />
          </ProtectedRoute> */}

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
