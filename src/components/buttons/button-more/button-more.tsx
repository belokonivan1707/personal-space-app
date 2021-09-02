import style from './styles.module.css';

interface Props {
  children: string;
  handleClick: () => void;
}

const ButtonMore = ({ children, handleClick }: Props) => {
  return (
    <button type="button" className={style.button} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

export default ButtonMore;
