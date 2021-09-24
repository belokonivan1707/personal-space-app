import { useDispatch } from 'react-redux';
import { actionChangeFavoritePropertyOnPhoto } from 'store/photos/actions';
import { PhotosType } from 'store/photos/data/data';
import BlackLike from '../../../assets/black-like/like.svg';
import EmptyLike from '../../../assets/black-like/empty-like.svg';
import style from './styles.module.css';

interface Props {
  item: PhotosType;
  handleClick: (item: PhotosType) => void;
}

const PhotoCard = ({ item, handleClick }: Props) => {
  const { id, title, mobileImg, favorite } = item;

  const dispatch = useDispatch();

  const changeFavoriteProperty = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();

    dispatch(actionChangeFavoritePropertyOnPhoto(id));
  };

  return (
    <div
      className={style.photoBox}
      tabIndex={0}
      role="button"
      onClick={() => handleClick(item)}
      onKeyPress={() => handleClick(item)}
    >
      <div className={style.photo} style={{ backgroundImage: `url(${mobileImg})` }}>
        <div
          tabIndex={0}
          role="button"
          className={style.like}
          style={{ backgroundImage: `url(${favorite ? BlackLike : EmptyLike})` }}
          onClick={changeFavoriteProperty}
          onKeyPress={changeFavoriteProperty}
        />
      </div>
      <h5 className={style.title}>{title}</h5>
    </div>
  );
};

export default PhotoCard;
