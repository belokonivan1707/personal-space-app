/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Credentials } from './types';
import { regularForEmail } from '../../constant/regular';
import { useAuth } from '../../hooks/use-auth';
import style from './styles.module.css';

export default function App() {
  const auth = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Credentials) => setCredentials({ email: data.email, password: data.password });

  const postCredentials = async () => {
    const result = await auth.signin(credentials.email, credentials.password);

    if (result === 'success') {
      history.push({
        pathname: '/welcome',
        state: { email: credentials.email },
      });
    }
    if (result === 'wrong password') {
      setError('Wrong Password');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
    if (result === 'many request') {
      setError('Too many request, try later');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  useEffect(() => {
    if (credentials.email !== '' && credentials.password !== '') {
      postCredentials();
    }
  }, [credentials]);

  return (
    <div className={style.container}>
      <div className={style.formbox}>
        <div className={style.titlebox}>
          <h3 className={style.title}>Sign In</h3>
        </div>

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputwrap}>
            <input
              className={style.input}
              {...register('email', {
                pattern: {
                  value: regularForEmail,
                  message: 'Wrong email address',
                },
                required: 'Enter the Email',
              })}
            />
            {errors.email && <span className={style.error}>{errors?.email?.message}</span>}
            <label className={`${style.label} ${watch('email') !== '' ? style.active : ''}`} htmlFor="email">
              Email
            </label>
          </div>
          <div className={style.inputwrap}>
            <input
              className={style.input}
              {...register('password', {
                required: 'Enter the Password',
              })}
            />
            {errors.password && <span className={style.error}>{errors?.password?.message}</span>}
            {error && <span className={style.posterror}>{error}</span>}
            <label className={`${style.label} ${watch('password') !== '' ? style.active : ''}`} htmlFor="password">
              Password
            </label>
          </div>
          <div className={style.buttonbox}>
            <input className={style.button} type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
