/* eslint-disable jsx-a11y/no-static-element-interactions */
import style from './styles.module.css';

interface Props {
  id: number;
  star: string;
  handleClick: (id: number) => void;
}

const RatingStar = ({ id, star, handleClick }: Props) => {
  console.log(id);
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div className={style.star} onClick={() => handleClick(id)} style={{ backgroundImage: `url(${star})` }} />;
};

export default RatingStar;
