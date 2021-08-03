import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <>
      <section className="nes-container">
        <LoginForm />
      </section>
      <button className="nes-btn" onClick={()=>history.push('/registration')}>Register</button>
    </>
    
  );
}

export default LoginPage;
