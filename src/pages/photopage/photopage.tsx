import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PhotosType } from 'store/photos/data/data';
import PhotoCard from 'components/cards/photo-card/photo-card';
import ButtonMore from 'components/buttons/button-more/button-more';
import Profile from 'containers/profile/profile';
import ModalPhoto from 'components/modal-windows/modal-photo/modal-photo';
import style from './styles.module.css';

export interface PhotosStore {
  photosStore: { photosToShow: PhotosType[] };
}

const Photopage = () => {
  const photos = useSelector<PhotosStore, PhotosType[]>(state => state.photosStore.photosToShow);

  const [photoItem, setPhotoItem] = useState<PhotosType | any>([]);
  const [openImage, setOpenImage] = useState(false);
  const [photosCounter, setPhotosCounter] = useState(10);

  const openPhoto = (item: PhotosType) => {
    setPhotoItem(() => item);
    setOpenImage(true);
  };

  const closeModalPhoto = () => {
    setOpenImage(false);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = (id: number) => {
    const nextItem = photos.find(item => item.id === id + 1);
    if (nextItem) setPhotoItem(() => nextItem);
  };
  const previousPhoto = (id: number) => {
    const prevItem = photos.find(item => item.id === id - 1);
    if (prevItem) setPhotoItem(() => prevItem);
  };

  return (
    <div className={style.photopage}>
      <div>
        <div>
          <Profile />
        </div>
        <div className={style.photosContainer}>
          {photos.slice(0, photosCounter).map((item: PhotosType) => {
            return <PhotoCard key={item.id} handleClick={openPhoto} item={item} />;
          })}
        </div>
        <div>
          <ButtonMore handleClick={() => setPhotosCounter(prev => prev + 10)}>more</ButtonMore>
        </div>
      </div>

      {openImage ? (
        <ModalPhoto
          item={photoItem}
          changePhoto={openPhoto}
          closeClick={closeModalPhoto}
          nextPhoto={nextPhoto}
          previousPhoto={previousPhoto}
        />
      ) : null}
    </div>
  );
};

export default Photopage;
