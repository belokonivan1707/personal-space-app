import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PhotosType } from 'store/photos/data/data';
import PhotoCard from '../../cards/photo-card/photo-card';
import style from './styles.module.css';

interface Props {
  item: PhotosType;
  nextPhoto: (id: number) => void;
  previousPhoto: (id: number) => void;
  changePhoto: (item: PhotosType) => void;
  closeClick: () => void;
}

export interface PhotosStore {
  photosStore: { photosToShow: PhotosType[] };
}

const ModalPhoto = ({ item, changePhoto, closeClick, nextPhoto, previousPhoto }: Props) => {
  const { id, image, description } = item;

  const photos = useSelector<PhotosStore, PhotosType[]>(state => state.photosStore.photosToShow);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div>
      <div className={style.wrapper} tabIndex={0} role="button" onClick={closeClick} onKeyPress={closeClick}>
        {' '}
      </div>
      <div className={style.modal}>
        <div className={`${style.menubox}`}>
          <ul>12</ul>
        </div>
        <div className={style.photobox}>
          <div className={style.photo} style={{ backgroundImage: `url(${image})` }}>
            {' '}
          </div>
          <div className={style.descriptionbox}>
            <p className={style.description}>{description}</p>
          </div>
          <button type="button" onClick={() => previousPhoto(id)} className={`${style.button} ${style.previous}`}>
            previous
          </button>
          <button type="button" onClick={() => nextPhoto(id)} className={`${style.button} ${style.next}`}>
            next
          </button>
        </div>
        {/* <p className={style.description}>{description}</p> */}
        <div className={style.preview}>
          {photos
            // .filter(el => el.id !== id)
            .map(el => {
              return <PhotoCard key={el.id} item={el} handleClick={changePhoto} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ModalPhoto;
