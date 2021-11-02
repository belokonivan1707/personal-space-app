import { useDispatch } from 'react-redux';
// import { useFuckingData } from 'pages/homepage/test-use-context';
import { actionChangeFilmRating, actionChangeFavoriteProperty } from 'store/cinema/action';
import RatingStar from '../../stars/stars';
import { FilmsType } from '../../../store/cinema/data/data';
import BlackStar from '../../../assets/stars/black-star.svg';
import Star from '../../../assets/stars/star.svg';
import BlackLike from '../../../assets/black-like/like.svg';
import EmptyLike from '../../../assets/black-like/empty-like.svg';
import style from './styles.module.css';

export interface Props {
  props: FilmsType;
}

const CinemaCard = ({ props }: Props) => {
  const dispatch = useDispatch();

  // const data = useFuckingData();

  const { id, title, director, country, image, year, rating, favorite } = props;

  const array = [1, 2, 3, 4, 5];

  const changeStar = (starId: number) => {
    dispatch(actionChangeFilmRating({ starId, id }));
  };

  return (
    <div className={style.card}>
      <div
        className={style.image}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div
        tabIndex={0}
        role="button"
        className={style.like}
        onClick={() => dispatch(actionChangeFavoriteProperty(id))}
        onKeyPress={() => dispatch(actionChangeFavoriteProperty(id))}
        style={{ backgroundImage: `url(${favorite ? BlackLike : EmptyLike})` }}
      />
      <div className={style.description}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.directed}>Directed by: </p>
        <p className={style.author}>{director}</p>
        <p className={style.country}>{country}</p>

        <div className={style.yearRatingBox}>
          <p className={style.year}>{year}</p>
          <div className={style.ratingBox}>
            {array.map((el: number) => {
              return el <= rating ? (
                <RatingStar key={el} id={el} star={BlackStar} handleClick={changeStar} />
              ) : (
                <RatingStar key={el} id={el} star={Star} handleClick={changeStar} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaCard;
