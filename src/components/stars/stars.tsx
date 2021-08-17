import style from './styles.module.css';

interface Props {
  id: number;
  star: string;

  handleClick: (id: number) => void;
}

const RatingStar = ({ id, star, handleClick }: Props) => {
  return (
    <div
      className={style.star}
      role="button"
      tabIndex={0}
      onClick={() => handleClick(id)}
      onKeyDown={() => handleClick(id)}
      style={{ backgroundImage: `url(${star})` }}
    />
  );
};

export default RatingStar;
