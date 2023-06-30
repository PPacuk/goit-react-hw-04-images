import css from './ImageGallery.module.css';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({gallery, openModal}) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem
        gallery={gallery}
        openModal={openModal}
      />
    </ul>
  );
};
