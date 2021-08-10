import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router';
import './LoginPage.css';

function LoginPage() {
  return (
    <>
      <section className="nes-container" id="loginContainer">
        <LoginForm />
      </section>
    </>
    
  );
}

export default LoginPage;
