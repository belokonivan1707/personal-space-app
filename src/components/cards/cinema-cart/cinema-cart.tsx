import React from 'react';
import { useDispatch } from 'react-redux';
import { actionChangeFilmRating } from 'store/cinema/action';
import { filmsType } from '../../../store/cinema/data';
import RatingStar from '../../stars/stars';
import BlackStar from '../../../assets/stars/black-star.svg';
import Star from '../../../assets/stars/star.svg';
import style from './styles.module.css';

const CinemaCart = ({ props }: any) => {
  const dispatch = useDispatch();

  const { id, title, director, image, year, rating }: filmsType = props;

  console.log('render CinemaCart');

  const array = [1, 2, 3, 4, 5];

  const changeStar = (starId: number) => {
    dispatch(actionChangeFilmRating({ starId, id }));
  };

  return (
    <div className={style.cart}>
      <div
        className={style.image}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={style.description}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.directed}>Directed by: </p>
        <p className={style.author}>{director}</p>
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
  );
};

export default React.memo(CinemaCart);
