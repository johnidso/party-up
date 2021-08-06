import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import {useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

function Nav() {
  const user = useSelector((store) => store.user);
  const [menu, setMenu] = useState(false);

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
      {(menu) ? (
        <section className="nes-container with-title menu">
          <p className="title">Main Menu</p>
          <Link to="/playlist">
            <button className="nes-btn is-primary" onClick={() => setMenu(!menu)}>My Playlist</button>
          </Link>
          <Link to="/party">
            <button className="nes-btn is-primary" onClick={() => setMenu(!menu)}>My Party</button>
          </Link>
          <button className="nes-btn is-primary" onClick={() => setMenu(!menu)}>Schedule</button>
          <LogOutButton onClick={() => setMenu(!menu)} className="nes-btn is-warning" />
          <button className="nes-btn" onClick={() => setMenu(!menu)}>Close Menu</button>
        </section>
      )
       : (
       user.id &&
        <>
          <button className="nes-btn" onClick={() => setMenu(!menu)}>Menu</button>
          <Link to="/playlist">
            <h2 className="nav-title">PartyUp!</h2>
          </Link>
          <Link to="/profile">
            <img className="nes-avatar is-rounded is-large" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b2/b20ab773280225b221a909a73bbe5aeb1613ade6_full.jpg"></img>
          </Link>
        </>
      
       )
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
