import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getExpensesData, updateExistingExpensesCategory } from 'store/money/actions';
import { CategoryTypes, MoneyManagerStore, SubCategoryTypes, ExpansesTypes } from 'store/money/types';
import CategoryItems from 'money-manager/category-items/category-items';
import CreateCategoryForm from 'money-manager/create-category/create-category-form';
import Loader from 'components/loader/loader';
import style from './styles.module.css';

const sections: any = [
  { title: 'Menu', url: 'menu' },
  { title: 'Create Category', url: 'create-category' },
];

const MoneyForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { categories, error, loading } = useSelector<MoneyManagerStore, ExpansesTypes>(
    state => state.moneyStore.money.expenses
  );
  const ref = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryTypes | SubCategoryTypes | null>(null);
  const [genCategoryID, setGenCategorylID] = useState('');
  const [purchaseSum, setPurchaseSum] = useState('');
  const [createNewCategory, setCreateNewCategory] = useState(false);

  useEffect(() => {
    dispatch(getExpensesData());
  }, []);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setCreateNewCategory(false);
      history.push(sections[0].url);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const renderPurchase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPurchaseSum(() => value.replace(/\./g, ''));
  };

  const addNewPurchase = () => {
    const value = {
      generalID: genCategoryID,
      id: selectedCategory?.id,
      type: selectedCategory?.type,
      sum: parseInt(purchaseSum, 10),
    };

    dispatch(updateExistingExpensesCategory(value));
    setGenCategorylID('');
    setPurchaseSum('');
    setSelectedCategory(null);
  };

  const createCategory = () => {
    history.push(sections[1].url);
    // history.push('sdasdads');
    setCreateNewCategory(true);
  };

  const selectCategory = (category: CategoryTypes | SubCategoryTypes, genID: string) => {
    setSelectedCategory(category);
    setGenCategorylID(genID);
  };

  return (
    <div className={`${style.form_wrapper}`}>
      <div className={`${style.form_container} ${createNewCategory ? style.new_category_active : ''}`}>
        <div className={style.display}>
          <h3 className={style.disaply_title}>{selectedCategory ? selectedCategory?.title : 'Select Category'}</h3>
        </div>

        <div className={style.form}>
          <div className={style.form_top_panel}>
            <div className={style.display_sum_box}>
              <input
                className={style.input_enter_sum}
                onChange={e => renderPurchase(e)}
                value={purchaseSum}
                type="number"
                placeholder="0.00"
              />
            </div>

            <div className={style.input_box}>
              <button
                className={style.categories_button_add_purchase}
                type="button"
                onClick={addNewPurchase}
                disabled={!(!!selectedCategory && !!purchaseSum)}
              >
                Add Purchase
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={style.categories_title_box}>
            <h5 className={style.categories_title}>Categories:</h5>
            <button type="button" className={style.categories_button} onClick={createCategory}>
              Create New
            </button>
          </div>

          <div>
            <ul className={style.category_list}>
              {loading ? <Loader /> : null}
              {!error &&
                categories.length > 0 &&
                categories.map(category => (
                  <CategoryItems key={category.id} category={category} handleClick={selectCategory} />
                ))}
            </ul>
          </div>
        </div>
      </div>
      {createNewCategory && <CreateCategoryForm refer={ref} flag={createNewCategory} />}
    </div>
  );
};

export default MoneyForm;
