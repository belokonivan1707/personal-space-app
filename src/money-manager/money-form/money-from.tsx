import { useState } from 'react';
import CategoryItems from 'money-manager/category-items/category-items';
import { CATEGORIES, CategoryTypes, SubCategoryTypes } from 'store/money/data';
import style from './styles.module.css';

const MoneyForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryTypes | SubCategoryTypes | null>(null);
  const [purchaseSum, setPurchaseSum] = useState<string>('');

  const renderPurchase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPurchaseSum(value.replace(/\./g, ''));
  };

  const addNewPurchase = () => {
    console.log('selected category', selectedCategory);
    console.log('amount sum', parseInt(purchaseSum, 10));
  };

  const createCategory = () => {
    console.log('selected category', selectedCategory);
  };

  const selectCategory = (category: CategoryTypes | SubCategoryTypes) => {
    setSelectedCategory(category);
  };

  return (
    <div className={style.form_container}>
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
          <h5 className={style.categories_title}>Categories :</h5>
          <button type="button" className={style.categories_button} onClick={createCategory}>
            Create New
          </button>
        </div>

        <div>
          <ul className={style.category_list}>
            {CATEGORIES.map(category => (
              <CategoryItems key={category.id} category={category} handleClick={selectCategory} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoneyForm;
