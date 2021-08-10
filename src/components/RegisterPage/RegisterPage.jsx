import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <section className="wrapper">
      <section className="nes-container" id="registerContainer">
        <RegisterForm />
      </section>
    </section>
  );
}

export default RegisterPage;
