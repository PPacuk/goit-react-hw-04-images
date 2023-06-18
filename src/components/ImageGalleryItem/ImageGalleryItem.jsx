import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    render() {
        return (
          <li className={css.ImageGalleryItem}>
            <img src="" alt="" />
          </li>
        );
    }
}