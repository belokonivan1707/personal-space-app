import { CategoryTypes, SubCategoryTypes } from 'store/money/data';
import style from './styles.module.css';

interface Props {
  category: CategoryTypes;
  handleClick: (category: CategoryTypes | SubCategoryTypes) => void;
}

const CategoryItems = ({ category, handleClick }: Props) => {
  const { title, subcategories, mainPurchases } = category;

  if (subcategories.length > 0 && mainPurchases.length > 0) {
    return (
      <>
        {subcategories.map(sub => (
          <li key={sub.id} className={style.category_item}>
            <button type="button" className={style.category_button} onClick={() => handleClick(sub)}>
              {sub.title}
            </button>
          </li>
        ))}
        <li className={style.category_item}>
          <button type="button" className={style.category_button} onClick={() => handleClick(category)}>
            {title}
          </button>
        </li>
      </>
    );
  }

  if (subcategories.length > 0) {
    return (
      <>
        {subcategories.map(sub => (
          <li key={sub.id} className={style.category_item}>
            <button type="button" className={style.category_button} onClick={() => handleClick(sub)}>
              {sub.title}
            </button>
          </li>
        ))}
      </>
    );
  }

  if (mainPurchases.length > 0) {
    return (
      <li className={style.category_item}>
        <button type="button" className={style.category_button} onClick={() => handleClick(category)}>
          {title}
        </button>
      </li>
    );
  }

  return <h1>hello</h1>;
};

export default CategoryItems;
