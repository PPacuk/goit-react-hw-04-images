import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return this.props.gallery.map(({ webformatURL, id, tags }) => (
      <li className={css.imageGalleryItem} key={id}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>
    ));
  }
}
