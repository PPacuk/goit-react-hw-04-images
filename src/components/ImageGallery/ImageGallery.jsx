import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.imageGallery}>
        <ImageGalleryItem
          gallery={this.props.gallery}
          openModal={this.props.openModal}
        />
      </ul>
    );
  }
}
