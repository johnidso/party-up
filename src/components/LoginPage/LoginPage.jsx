import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <>
      <section class="nes-container">
        <LoginForm />
      </section>
      <button class="nes-btn" onClick={()=>history.push('/registration')}>Register</button>
    </>
    
  );
}

export default LoginPage;
