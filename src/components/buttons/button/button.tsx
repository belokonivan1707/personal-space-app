import style from './styles.module.css';

interface Props {
  id: number;
  children: string;
  disable: boolean;
  handleClick: (id: number) => void;
}

const Button = ({ id, children, handleClick, disable }: Props) => {
  return (
    <button type="button" className={style.button} onClick={() => handleClick(id)} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
