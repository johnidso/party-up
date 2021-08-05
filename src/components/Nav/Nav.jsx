import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  // let loginLinkData = {
  //   path: '/login',
  //   text: 'Login / Register',
  // };

  // if (user.id != null) {
  //   loginLinkData.path = '/profile';
  //   loginLinkData.text = 'Home';
  // }

  return (
    <div className="nav">
      {user.id &&
        <>
          <button className="nes-btn">Menu</button>
          <Link to="/playlist">
            <h2 className="nav-title">PartyUp!</h2>
          </Link>
          <Link to="/profile">
            <img className="nes-avatar is-rounded is-large" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b2/b20ab773280225b221a909a73bbe5aeb1613ade6_full.jpg"></img>
          </Link>
        </>
      }
      {!user.id &&
        <>
          <Link to="/login">
          <h2 className="nav-title">PartyUp!</h2>
          </Link>
          <Link className="nes-btn navLink" to="/about">
            About
          </Link>
        </>
      }
      

      
    </div>
  );
}

export default Nav;
