import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ gallery, openModal }) => {
  return gallery.map(({ webformatURL, id, tags }) => (
    <li className={css.imageGalleryItem} key={id}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        id={id}
        onClick={openModal}
      />
    </li>
  ));
};
