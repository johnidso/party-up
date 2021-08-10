import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './RegisterForm.css';

function RegisterForm() {
  const emptyUser = {username:'', password:'', email:'', steamId:'', discordId:''};
  const [newUser, setNewUser] = useState(emptyUser);
  const errors = useSelector((store) => store.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: newUser
    });
  }; // end registerUser

  // Handle changes to state from several inputs 
  const handleChange = event => {
    const value = event.target.value;
    setNewUser({
        ...newUser, [event.target.name]: value
    });
}

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>New Account</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      
        <label htmlFor="username">
          Username:
          <input
            className="nes-input"
            type="text"
            name="username"
            value={newUser.username}
            required
            onChange={handleChange}
          />
        </label>
      
        <label htmlFor="password">
          Password:
          <input
            className="nes-input"
            type="password"
            name="password"
            value={newUser.password}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            className="nes-input"
            type="text"
            name="email"
            value={newUser.email}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="steam id">
          Steam ID:
          <input
            className="nes-input"
            type="text"
            name="steamId"
            placeholder="e.g. 76560197963574882"
            value={newUser.steamId}
            required
            onChange={handleChange}
          />
        </label>     

        <label htmlFor="discord id">
          Discord ID:
          <input
            className="nes-input"
            type="text"
            name="discordId"
            placeholder="e.g. PartyUp#4321"
            value={newUser.discordId}
            required
            onChange={handleChange}
          />
        </label>  
        <button
          type="button"
          className="nes-btn"
          onClick={() => {
            history.push('/login');
          }}
        >
          Back
        </button>
        <button className="nes-btn is-primary" id="registerBtn" type="submit" name="submit" value="Register">Submit</button>
      
    </form>
  );
}

export default RegisterForm;
