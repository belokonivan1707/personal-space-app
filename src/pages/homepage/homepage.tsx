import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CinemaCard from 'components/cards/cinema-card/cinema-card';
import PhotoCard from 'components/cards/photo-card/photo-card';
import Profile from 'containers/profile/profile';
import { PhotosType } from 'store/photos/data/data';
import { PhotosStore } from 'pages/photopage/photopage';
import WriterCard from '../../components/cards/writer-card/writer-card';
import { WritersType } from '../../store/writers/data';
import { FilmsType } from '../../store/cinema/data/data';
import style from './styles.module.css';

interface CinemaStore {
  cinemaStore: { cinema: FilmsType[] };
}

interface WritersStore {
  writersStore: { writers: WritersType[] };
}

const Homepage = () => {
  const cinema: FilmsType[] = useSelector<CinemaStore, FilmsType[]>(store => store.cinemaStore.cinema);
  const writersToShow = useSelector<WritersStore, WritersType[]>(state => state.writersStore.writers);
  const photos = useSelector<PhotosStore, PhotosType[]>(state => state.photosStore.photosToShow);

  const [width, setWidth] = useState(window.innerWidth);
  const [countCinemaCards, setCountCinemaCards] = useState(4);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    if (width < 1180) {
      setCountCinemaCards(3);
    }

    if (width >= 1180) {
      setCountCinemaCards(4);
    }

    if (width <= 885) {
      setCountCinemaCards(4);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const test = () => {
    setCountCinemaCards(4);
  };

  return (
    <div className={style.container}>
      <div className={style.homepage}>
        <div className={style.titlebox}>
          <h1 className={style.title}>It is time to meet!</h1>
          <h1 className={style.title}>On this website, I share :</h1>
        </div>

        <div className={style.presentation}>
          <h2 className={style.subtitle}>My favorit movies</h2>
          <div className={style.contentbox}>
            {cinema.slice(0, countCinemaCards).map((item: FilmsType) => (
              <CinemaCard key={item.id} props={item} />
            ))}
          </div>
          <h2 className={style.subtitle}>Literature and quotes</h2>
          <div className={style.contentbox}>
            {writersToShow.slice(0, 1).map((item: WritersType) => (
              <WriterCard key={item.id} props={item} />
            ))}
          </div>
          <h2 className={style.subtitle}>Photographies</h2>
          <div className={style.contentbox}>
            {photos.slice(0, 3).map((item: PhotosType) => {
              return <PhotoCard key={item.id} handleClick={test} item={item} />;
            })}
          </div>
          <h2 className={style.subtitle}>Art</h2>
          <h2>i so tired </h2>
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
