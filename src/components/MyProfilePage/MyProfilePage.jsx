import React, { useState } from 'react';
import './MyProfilePage.css';
import {useDispatch, useSelector} from 'react-redux';

function MyProfilePage() {
  const [editing, setEditing] = useState(false);
  const user = useSelector((store) => store.user);
  const profile = {username: user.username, email: user.email, steam_id: user.steam_id, discord_id: user.discord_id};
  const [profileEdits, setProfileEdits] = useState(profile);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setProfileEdits({
      ...profileEdits, [event.target.name]: value
    });
  }

  const saveChanges = () => {
    dispatch({type:'UPDATE_USER', payload: profileEdits})
  }

  return (
    <section className="contentWrapper">
      <h1>{user.username}'s Profile</h1>
      { (editing) ? (
        <section id="editingView">
          <section className="nes-container with-title profileItem">
            <p className="title">Username</p>
            <input type="text" className="nes-input is-success" name="username" value={profileEdits.username} onChange={handleChange}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Email</p>
            <input type="text" className="nes-input is-success" name="email" value={profileEdits.email} onChange={handleChange}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Steam ID</p>
            <input type="text" className="nes-input is-success" name="steam_id" value={profileEdits.steam_id} onChange={handleChange}></input>
          </section>
          <section className="nes-container with-title profileItem">
            <p className="title">Discord ID</p>
            <input type="text" className="nes-input is-success" name="discord_id" value={profileEdits.discord_id} onChange={handleChange}></input>
          </section>
          <button className="nes-btn" id="cancelBtn" onClick={() => setEditing(false)}>Cancel</button>
          <button className="nes-btn is-success" id="saveBtn" onClick={saveChanges}>Save Changes</button>
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
