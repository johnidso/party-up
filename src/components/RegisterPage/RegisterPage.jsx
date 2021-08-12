import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';
import viking from '../images/vikingr.jpg';

function RegisterPage() {
  return (
    <section className="contentWrapper">
      <section className="nes-container" id="registerContainer">
        <RegisterForm />
      </section>
    
        <section className="message-list">
          <section className="message -left">
            <img id="partyUpHelper" className="nes-avatar is-rounded is-large" src={viking} />
            <div className="nes-balloon from-left greeting">
              <p>Need help finding your Steam ID? Try using <a href="https://steamid.xyz/">Steam ID Finder</a></p>
            </div>
          </section>
        </section>
      </section>

  );
}

export default RegisterPage;
