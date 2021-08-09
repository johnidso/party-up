import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <section>
      <section className="nes-container">
        <RegisterForm />
      </section>
    </section>
  );
}

export default RegisterPage;
