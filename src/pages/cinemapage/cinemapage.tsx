import { useSelector } from 'react-redux';
import { filmsType } from '../../store/cinema/data';
import CinemaCart from '../../components/cards/cinema-cart/cinema-cart';
import style from './styles.module.css';

interface CinemaStore {
  cinemaStore: { cinema: filmsType[] };
}

const Cinemapage = () => {
  const cinema: filmsType[] = useSelector<CinemaStore, filmsType[]>(store => store.cinemaStore.cinema);

  return (
    <div>
      <div>Cinema Page</div>
      <div className={style.cartContainer}>
        {cinema.map((film: filmsType) => {
          return <CinemaCart key={film.id} props={film} />;
        })}
      </div>
    </div>
  );
};

export default Cinemapage;
