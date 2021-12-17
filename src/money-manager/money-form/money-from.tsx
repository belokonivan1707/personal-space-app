import style from './styles.module.css';

const MoneyForm = () => {
  return (
    <div className={style.box}>
      <form>
        <h3>35</h3>
        <div className={style.input_box}>
          <label>
            <input type="number" placeholder="0.00" />
            <span>enter sum</span>
          </label>
        </div>
      </form>

      <div>
        <div className={style.categories_title_box}>
          <h5>Categories</h5>
          <button type="button">Create New</button>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default MoneyForm;
