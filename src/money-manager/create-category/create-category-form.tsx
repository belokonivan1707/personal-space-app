import { LegacyRef } from 'react';
import style from './styles.module.css';

interface Props {
  flag: boolean;
  refer: LegacyRef<HTMLDivElement> | undefined;
}

const CreateCategoryForm = ({ refer, flag }: Props) => {
  return (
    <div ref={refer} className={`${flag ? style.active : ''} `}>
      <div>
        <div>
          <p>Create Category</p>
          <button type="button">Create Category</button>
        </div>
        <div className={style.create_category_box}>
          <input type="text" placeholder="Category Name" />
        </div>
      </div>

      <div>
        <p>Create subcategory</p>
        <div>
          <button type="button">Create sub-category</button>
          {/* <span>You can not create sub-category until you do not have any general category.</span> // warning */}
        </div>
        <div className={style.create_subcategory_box}>
          <input type="text" placeholder="Sub Category Name" />
        </div>
      </div>
      <div className={style.colors_box}>
        <input type="checkbox" />
        <span>green</span>
        <input type="checkbox" />
        <span>yellow</span>
        <input type="checkbox" />
        <span>orange</span>
        <input type="checkbox" />
        <span>red</span>
      </div>
    </div>
  );
};

export default CreateCategoryForm;
