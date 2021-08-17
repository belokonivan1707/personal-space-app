import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { validateEmail, validatePassword } from './utils';
import { Credentials, Errors } from './types';
import style from './styles.module.css';
import { useAuth } from '../../hooks/use-auth';

const SignUpForm = () => {
  const auth = useAuth();

  const history = useHistory();
  const [emailError, setEmailError] = useState<Errors>({ status: '', messadge: '', border: '' });
  const [passwordError, setPasswordError] = useState<Errors>({ status: '', messadge: '', border: '' });
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const postCredentials = async () => {
    const result = await auth.signup(credentials.email, credentials.password);

    if (result === 'success') {
      history.push({
        pathname: '/welcome',
        state: { email: credentials.email },
      });
    }
    if (result === 'email') {
      setEmailError({
        status: 'not valid',
        messadge: 'The email address is already in use',
        border: '1px solid #ff6666',
      });
    }
    if (!result) {
      setEmailError({
        status: '',
        messadge: 'Something was wrong',
        border: '',
      });
    }
  };

  useEffect(() => {
    if (emailError.status === 'valid' && passwordError.status === 'valid') {
      postCredentials();
    }
  }, [credentials, passwordError]);

  const validateCredentials = () => {
    const emailMessadge = validateEmail(credentials.email.trim());
    if (emailMessadge !== 'valid-email') {
      setEmailError({
        status: 'not valid',
        messadge: emailMessadge,
        border: '1px solid #ff6666',
      });
    } else {
      setEmailError({ status: 'valid', messadge: '', border: '' });
    }

    const passwordMessadge = validatePassword(credentials.password.trim(), credentials.repeatPassword.trim());
    if (passwordMessadge === 'valid-password') {
      setPasswordError({ status: 'valid', messadge: '', border: '' });
    } else {
      setPasswordError({ status: 'not valid', messadge: passwordMessadge, border: '1px solid #ff6666' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    validateCredentials();
  };

  return (
    <div className={style.container}>
      <div className={style.formbox}>
        <div className={style.titlebox}>
          <h3 className={style.title}>Sign Up</h3>
        </div>
        <form>
          <div
            className={style.inputwrap}
            style={{ borderBottom: `${emailError.messadge !== '' ? emailError.border : ''}` }}
          >
            <input className={style.input} onChange={handleChange} name="email" type="text" value={credentials.email} />
            <label className={`${style.label} ${credentials.email !== '' ? style.active : ''}`} htmlFor="email">
              Email
            </label>
            <span className={style.error}>{emailError.messadge}</span>
          </div>

          <div
            className={style.inputwrap}
            style={{ borderBottom: `${passwordError.messadge !== '' ? passwordError.border : ''}` }}
          >
            <input
              className={style.input}
              onChange={handleChange}
              name="password"
              type="password"
              value={credentials.password}
            />
            <label className={`${style.label} ${credentials.password !== '' ? style.active : ''}`} htmlFor="Password">
              Password
            </label>
            <span className={style.error}>{passwordError.messadge}</span>
          </div>

          <div
            className={style.inputwrap}
            style={{ borderBottom: `${passwordError.messadge !== '' ? passwordError.border : ''}` }}
          >
            <input
              className={style.input}
              onChange={handleChange}
              name="repeatPassword"
              type="password"
              value={credentials.repeatPassword}
            />
            <label
              className={`${style.label} ${credentials.repeatPassword !== '' ? style.active : ''}`}
              htmlFor="repeatPassword"
            >
              Repeat Password
            </label>
          </div>
          <div className={style.buttonbox}>
            <button className={style.button} type="submit" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
