import React from 'react';
import { useDispatch } from 'react-redux';
import { actionChangeFilmRating } from 'store/cinema/action';
import RatingStar from '../../stars/stars';
import { FilmsType } from '../../../store/cinema/data';
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
  const { id, title, director, image, year, rating, faivorite } = props;

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
      <div className={style.like} style={{ backgroundImage: `url(${faivorite ? BlackLike : EmptyLike})` }} />
      <div className={style.description}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.directed}>Directed by: </p>
        <p className={style.author}>{director}</p>

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

export default React.memo(CinemaCard);
