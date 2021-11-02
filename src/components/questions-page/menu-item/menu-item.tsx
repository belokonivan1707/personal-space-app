import style from './styles.module.css';

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick: (topic: any) => void;
}

const MenuItem = ({ handleClick, title }: Props) => {
  return (
    <li className={style.li}>
      <button type="button" className={style.button} onClick={() => handleClick(title)}>
        {title}
      </button>
    </li>
  );
};

export default MenuItem;
