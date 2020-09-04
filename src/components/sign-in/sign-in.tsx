import * as React from 'react';

import Footer from '../footer/footer';
import Logo from '../logo/logo';

interface Props {
  logIn: string;
  onLoginChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onPasswordChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  isBadEmail: boolean;
  onSendForm: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const SignIn = (props: Props) => {
  const {logIn, onLoginChange, password, onPasswordChange, isBadEmail = false, onSendForm} = props;
  const classFailName = isBadEmail ? `sign-in__field--error` : ``;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form"
          onSubmit={onSendForm}
        >
          {isBadEmail && <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${classFailName}`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
                onChange={onLoginChange}
                value={logIn}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
                onChange={onPasswordChange}
                value={password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
};

export default SignIn;
