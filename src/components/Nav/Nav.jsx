import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import {useSelector, useDispatch} from 'react-redux';
import partyUpLogo from '../images/PartyUpLogo.png';

function Nav() {
  const user = useSelector((store) => store.user);
  const avatar = useSelector(store=> store.avatar);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:'GET_AVATAR'});
}, [user]);
  
  const logOut= () => {
    dispatch({ type: 'LOGOUT' });
    setMenu(!menu);
  }

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
          <Link to="/schedule">
            <button className="nes-btn is-primary" onClick={() => setMenu(!menu)}>Schedule</button>
          </Link>
          <button onClick={logOut} className="nes-btn is-warning">Log Out</button>
          <button className="nes-btn" onClick={() => setMenu(!menu)}>Close Menu</button>
        </section>
      )
       : (
       user.id &&
        <>
          <button className="nes-btn" onClick={() => setMenu(!menu)}>Menu</button>
          <Link to="/playlist">
            <img src={partyUpLogo} />
          </Link>
          <Link to="/profile">
            <img className="nes-avatar is-rounded is-large" src={avatar} onError={(e)=>{e.target.onerror = null; e.target.src=partyUpLogo}}></img>
          </Link>
        </>
      
       )
    } 
        
      {!user.id &&
        <>
          
            <Link to="/login">
              <img src={partyUpLogo} />
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
