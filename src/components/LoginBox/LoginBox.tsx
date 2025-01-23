import React, { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '@/store/auth';
import { alertActions } from '@/store/alert';
import { AlertType } from '@/UI/Alert';
import Card from '@/UI/Card';
import './LoginBox.css';
import { authByPassword } from '@/services/auth.service';

export default function LoginBox() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const loginHandler = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = await authByPassword(
        emailRef.current?.value!,
        passwordRef.current?.value!
      );
      dispatch(authActions.login(data));
    } catch (error: any) {
      console.error(error.message);
      dispatch(
        alertActions.setAlert({
          title: 'Login Failed',
          body: '' + error.message,
          type: AlertType.danger,
          show: true,
        })
      );
    }
  };

  return (
    <Card>
      <header className='form-header'>
        <h1>Welcome!</h1>
      </header>
      <div className='form-container'>
        <form onSubmit={loginHandler}>
          <div className='input-container'>
            <label htmlFor='usernameInput'>Email </label>
            <input
              type='email'
              id='usernameInput'
              data-testid='usernameInput'
              placeholder='Insert your email'
              ref={emailRef}
              required
            />
          </div>
          <div className='input-container'>
            <label htmlFor='passwordInput'>Password </label>
            <input
              type='password'
              id='passwordInput'
              data-testid='passwordInput'
              placeholder='Insert your password'
              ref={passwordRef}
              minLength={5}
              required
            />
          </div>
          <div className='submit-container'>
            <button type='submit' data-testid='submitButton'>
              Log In
            </button>
          </div>
          <div className='login-footer'>
            <Link to='/signin'>Sign In</Link>
          </div>
        </form>
      </div>
    </Card>
  );
}
