import React from 'react';
import './RegisterPage.css';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <section className="wrapper">
      <section className="nes-container">
        <RegisterForm />
      </section>
    </section>
  );
}

export default RegisterPage;
