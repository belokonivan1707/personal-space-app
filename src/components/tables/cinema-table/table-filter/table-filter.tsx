import style from './styles.module.css';

interface Props {
  title: string;
  handleClick: (option: keyof typeof Object | string) => void;
}

const TableFilter = ({ title, handleClick }: Props) => {
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => handleClick(title)}
      onKeyDown={() => handleClick(title)}
      className={`${style.item}`}
    >
      {title}
    </div>
  );
};

export default TableFilter;
