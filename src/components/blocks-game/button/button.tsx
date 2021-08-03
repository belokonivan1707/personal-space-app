import style from './styles.module.css';

interface Props {
  id: number;
  children: string;
  handleClick: (id: number) => void;
}

const Button = ({ id, children, handleClick }: Props) => {
  return (
    <button type="button" className={style.button} onClick={() => handleClick(id)}>
      {children}
    </button>
  );
};

export default Button;
