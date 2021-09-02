import { useDispatch } from 'react-redux';
import { actionChangeFilmRating } from 'store/cinema/action';
import { FilmsType } from 'store/cinema/data/data';
import RatingStar from 'components/stars/stars';
import BlackStar from '../../../assets/stars/black-star.svg';
import Star from '../../../assets/stars/star.svg';
import style from './styles.module.css';

interface Props {
  info: FilmsType;
}

const TableLine = ({ info }: Props) => {
  const { id, title, year, director, country, rating } = info;

  const dispatch = useDispatch();

  const changeStar = (starId: number) => {
    dispatch(actionChangeFilmRating({ starId, id }));
  };

  const array = [1, 2, 3, 4, 5];

  return (
    <div className={style.line}>
      <div className={`${style.item} ${style.id}`}>{id}</div>
      <div className={`${style.item} ${style.title}`}>{title}</div>
      <div className={`${style.item} ${style.year}`}>{year}</div>
      <div className={`${style.item} ${style.director}`}>{director}</div>
      <div className={`${style.item} ${style.country}`}>{country}</div>
      <div className={`${style.item} ${style.ratingbox}`}>
        {array.map(el =>
          el > rating ? (
            <RatingStar key={el} id={el} handleClick={changeStar} star={Star} />
          ) : (
            <RatingStar key={el} id={el} handleClick={changeStar} star={BlackStar} />
          )
        )}
      </div>
    </div>
  );
};

export default TableLine;
