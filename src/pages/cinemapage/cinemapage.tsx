import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSortByProperty } from 'store/cinema/action';
import { FilmsType } from '../../store/cinema/data';
import CinemaCard from '../../components/cards/cinema-card/cinema-card';
import style from './styles.module.css';

interface CinemaStore {
  cinemaStore: { cinemaToShow: FilmsType[] };
}

const Cinemapage = () => {
  const dispatch = useDispatch();
  const cinemaToShow: FilmsType[] = useSelector<CinemaStore, FilmsType[]>(store => store.cinemaStore.cinemaToShow);

  const [filterSettings, setFilterSetting] = useState('all');

  useEffect(() => {
    dispatch(actionSortByProperty(filterSettings));
  }, [filterSettings]);

  return (
    <div className="container">
      <div className={style.sortingmenu}>
        <button className={style.button} onClick={() => setFilterSetting('all')} type="button">
          All
        </button>
        <button className={style.button} onClick={() => setFilterSetting('favorite')} type="button">
          Top Rated
        </button>
      </div>
      <div className={style.cardsbox}>
        {cinemaToShow.map((film: FilmsType) => {
          return <CinemaCard key={film.id} props={film} />;
        })}
      </div>
    </div>
  );
};

export default Cinemapage;
