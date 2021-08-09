import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router';

function LoginPage() {
  const history = useHistory();
  return (
    <>
      <section className="nes-container">
        <LoginForm />
      </section>
    </>
    
  );
}

export default LoginPage;
