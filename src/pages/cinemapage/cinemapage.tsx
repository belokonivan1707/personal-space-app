import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSortByProperty } from 'store/cinema/action';
import { UserType } from 'store/user/data/data';
import ButtonMore from 'components/buttons/button-more/button-more';
import CinemaTable from 'components/tables/cinema-table/cinema-table';
import Profile from 'containers/profile/profile';
import CinemaCard from '../../components/cards/cinema-card/cinema-card';
import { FilmsType } from '../../store/cinema/data/data';
import style from './styles.module.css';

export interface CinemaStore {
  cinemaStore: { cinema: FilmsType[] };
}
export interface UserStore {
  userStore: { user: UserType };
}

const Cinemapage = () => {
  const dispatch = useDispatch();
  const cinema: FilmsType[] = useSelector<CinemaStore, FilmsType[]>(store => store.cinemaStore.cinema);
  const [hiddenTable, setHiddenTable] = useState(false);

  const [filterSettings, setFilterSetting] = useState('all');
  const [cardsCounter, setCardsCounter] = useState(4);

  useEffect(() => {
    dispatch(actionSortByProperty(filterSettings));
  }, [filterSettings]);

  const loadMoreCards = () => {
    setCardsCounter(prev => prev + 4);
  };

  const openTable = () => {
    setHiddenTable(prev => !prev);
  };

  return (
    <div className={style.container}>
      <div>
        <Profile />
      </div>
      <div className={style.sortingmenu}>
        <div>
          <button className={style.button} onClick={() => setFilterSetting('all')} type="button">
            All
          </button>
          <button className={style.button} onClick={() => setFilterSetting('favorite')} type="button">
            Top Rated
          </button>
        </div>
        <div>
          <button onClick={openTable} type="button">
            {hiddenTable ? 'display as a card' : 'display as a table'}
          </button>
        </div>
      </div>
      {hiddenTable || (
        <div>
          <div className={style.cardsbox}>
            {cinema.slice(0, cardsCounter).map((film: FilmsType) => {
              return <CinemaCard key={film.id} props={film} />;
            })}
          </div>
          <div className={style.buttonMoreBox}>
            <ButtonMore handleClick={loadMoreCards}>more</ButtonMore>
          </div>
        </div>
      )}
      {hiddenTable ? <CinemaTable props={cinema} /> : null}
    </div>
  );
};

export default Cinemapage;
