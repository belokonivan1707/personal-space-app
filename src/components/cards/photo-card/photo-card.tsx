import { PhotosType } from 'store/photos/data/data';
import style from './styles.module.css';

interface Props {
  item: PhotosType;
  handleClick: (item: PhotosType) => void;
}

const PhotoCard = ({ item, handleClick }: Props) => {
  const { title, mobileImg } = item;

  return (
    <div
      className={style.photoBox}
      tabIndex={0}
      role="button"
      onClick={() => handleClick(item)}
      onKeyPress={() => handleClick(item)}
    >
      <div className={style.photo} style={{ backgroundImage: `url(${mobileImg})` }} />
      <h5 className={style.title}>{title}</h5>
    </div>
  );
};

export default PhotoCard;
