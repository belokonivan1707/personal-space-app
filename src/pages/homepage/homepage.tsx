import { useSelector } from 'react-redux';
import CinemaCard from 'components/cards/cinema-card/cinema-card';
import WriterCard from '../../components/cards/writer-card/writer-card';
import style from './styles.module.css';
import { WritersType } from '../../store/writers/data';
import { FilmsType } from '../../store/cinema/data';

interface CinemaStore {
  cinemaStore: { cinema: FilmsType[] };
}

interface WritersStore {
  writersStore: { writers: WritersType[] };
}

const Homepage = () => {
  const cinema: FilmsType[] = useSelector<CinemaStore, FilmsType[]>(store => store.cinemaStore.cinema);
  const writersToShow = useSelector<WritersStore, WritersType[]>(state => state.writersStore.writers);

  return (
    <div className="container">
      <div className={style.homepage}>
        <div className={style.titlebox}>
          <h1 className={style.title}>It is time for a new kind of information about you for the internet.</h1>
        </div>

        <div className={style.presentation}>
          <h2 className={style.subtitle}>Share your taste in cinema</h2>
          <div className={style.contentbox}>
            {cinema.slice(0, 4).map((item: FilmsType) => (
              <CinemaCard key={item.id} props={item} />
            ))}
          </div>
          <h2 className={style.subtitle}>Literature</h2>
          <div className={style.contentbox}>
            {writersToShow.slice(0, 1).map((item: WritersType) => (
              <WriterCard key={item.id} props={item} />
            ))}
          </div>
          <h2 className={style.subtitle}>Music</h2>
          <h2 className={style.subtitle}>Art</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
