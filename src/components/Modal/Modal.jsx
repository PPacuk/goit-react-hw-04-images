import { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {

  render() {
    return (
      <>
        {this.props.chosenImageId !== null && (
          <div className={css.overlay} onClick={this.props.closeModal}>
            <div className={css.modal}>
              <img
                src={
                  this.props.gallery.find(
                    image => image.id === Number(this.props.chosenImageId)
                  ).largeImageURL
                }
                alt={
                  this.props.gallery.find(
                    image => image.id === Number(this.props.chosenImageId)
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
