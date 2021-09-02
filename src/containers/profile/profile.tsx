import { UserStore } from 'pages/cinemapage/cinemapage';
import { useSelector } from 'react-redux';
import { PhotosType } from 'store/photos/data/data';
import { UserType } from 'store/user/data/data';
import style from './style.module.css';

export interface PhotosStore {
  photosStore: { photosToShow: PhotosType[] };
}

const Profile = () => {
  const user: UserType = useSelector<UserStore, UserType>(store => store.userStore.user);

  const { name, photo, website, interests } = user;

  return (
    <div className={style.container}>
      <div className={style.photobox}>
        <div className={style.photo} style={{ backgroundImage: `url(${photo})` }} />
      </div>
      <div className={style.information}>
        <h4 className={style.name}>{name}</h4>
        <a className={style.website} href={website}>
          {website}
        </a>
        <div className={style.interestsBlock}>
          <h5 className={style.interestsTitle}>Interests:</h5>
          <div className={style.tagbox}>
            {interests.map(el => (
              <span className={style.tag} key={el}>
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
