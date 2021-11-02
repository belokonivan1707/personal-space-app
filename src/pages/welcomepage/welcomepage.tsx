import { TestUseContextStore } from 'App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

export interface LocationSatate {
  email: string;
}

const Welcomepage = () => {
  const location = useLocation<LocationSatate>();
  const test = useContext<string>(TestUseContextStore);
  const { email } = location.state;

  return (
    <div className={styles.container}>
      <div className={styles.greeting_box}>
        <h1>
          <span>Hello, user: </span>
          {email}
        </h1>
        <p className={styles.message}>{test}</p>
      </div>
    </div>
  );
};

export default Welcomepage;
