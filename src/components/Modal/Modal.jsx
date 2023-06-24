import { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {

  render() {
    const {closeModal, chosenImageId} = this.props
    return (
      <>
        {chosenImageId !== null && (
          <div className={css.overlay} onClick={closeModal}>
            <div className={css.modal}>
              <img
                src={
                  this.props.gallery.find(
                    image => image.id === Number(chosenImageId)
                  ).largeImageURL
                }
                alt={
                  this.props.gallery.find(
                    image => image.id === Number(chosenImageId)
                  ).tags
                }
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
