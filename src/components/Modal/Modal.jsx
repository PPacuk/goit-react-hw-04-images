import css from './Modal.module.css';

export const Modal = ({ chosenImageId, closeModal, gallery }) => {
  return (
    <>
      {chosenImageId !== null && (
        <div className={css.overlay} onClick={closeModal}>
          <div className={css.modal}>
            <img
              src={
                gallery.find(image => image.id === Number(chosenImageId))
                  .largeImageURL
              }
              alt={
                gallery.find(image => image.id === Number(chosenImageId)).tags
              }
            />
          </div>
        </div>
      )}
    </>
  );
};
