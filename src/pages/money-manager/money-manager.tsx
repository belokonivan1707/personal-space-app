import MoneyForm from 'money-manager/money-form/money-from';

import style from './styles.module.css';

const MoneyManager = () => {
  return (
    <div className={style.container}>
      <h3>money manager page</h3>
      <MoneyForm />
    </div>
  );
};

export default MoneyManager;
