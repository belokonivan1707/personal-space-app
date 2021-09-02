import { useSelector } from 'react-redux';
import Profile from 'containers/profile/profile';
import WriterCard from '../../components/cards/writer-card/writer-card';
import { WritersType } from '../../store/writers/data';
import style from './styles.module.css';

export interface WritersStore {
  writersStore: { writersToShow: WritersType[] };
}

const WritersPage = () => {
  const writersToShow = useSelector<WritersStore, WritersType[]>(state => state.writersStore.writersToShow);

  return (
    <div className={style.container}>
      <div>
        <Profile />
      </div>
      <div className={style.writersCardbox}>
        {writersToShow.map((el: WritersType) => (
          <WriterCard key={el.id} props={el} />
        ))}
      </div>
    </div>
  );
};

export default WritersPage;
