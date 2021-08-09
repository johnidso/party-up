import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './MyProfilePage.css';
import {useSelector} from 'react-redux';

function MyProfilePage() {
  const [editing, setEditing] = useState(false);
  const user = useSelector((store) => store.user);

  let username = user.username;
  let email = user.email;
  let steam_id = user.steam_id;
  let discord_id = user.discord_id; 
  let password;

  return (
    <section className="container">
      <h1>{user.username}'s Profile</h1>
      { (editing) ? (
        <section id="editingView">
          <section className="nes-container with-title profileItem">
            <p className="title">Username</p>
            <input type="text" className="nes-input is-success" value={username}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Password</p>
            <input type="text" className="nes-input is-success" value={password}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Email</p>
            <input type="text" className="nes-input is-success" value={email}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Steam ID</p>
            <input type="text" className="nes-input is-success" value={steam_id}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Discord ID</p>
            <input type="text" className="nes-input is-success" value={discord_id}></input>
          </section>
          <button className="nes-btn" id="cancelBtn" onClick={() => setEditing(false)}>Cancel</button>
          <button className="nes-btn is-success" id="saveBtn">Save Changes</button>
        </section>
      ) : (
        <section id="displayView">
          
          <section className="nes-container with-title profileItem">
            <p className="title">Username</p>
            <span className="nes-text is-primary">{user.username}</span>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Email</p>
            <span className="nes-text is-primary">{user.email}</span>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Steam ID</p>
            <span className="nes-text is-primary">{user.steam_id}</span>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Discord ID</p>
            <span className="nes-text is-primary">{user.discord_id}</span>
          </section>
          <button className="nes-btn" id="editBtn" onClick={() => setEditing(true)}>Edit Profile</button>
        </section>
      )}
      
    </section>
  );
}

export default MyProfilePage;
