import MoneyForm from 'money-manager/money-form/money-from';

import style from './styles.module.css';

const MoneyManager = () => {
  return (
    <div className={style.container}>
      <MoneyForm />
    </div>
  );
};

export default MoneyManager;
