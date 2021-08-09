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
      <h2>Register User</h2>
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
        <input className="nes-btn is-primary" id="registerBtn" type="submit" name="submit" value="Register" />
      
    </form>
  );
}

export default RegisterForm;
