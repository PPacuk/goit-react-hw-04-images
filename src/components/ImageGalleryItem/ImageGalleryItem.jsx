import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    render() {
        return (
          <li className={css.imageGalleryItem}>
            <img src="" alt="" />
          </li>
        );
    }
}