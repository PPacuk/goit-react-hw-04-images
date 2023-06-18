import { Component } from 'react';
import css from './App.module.css'
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default class App extends Component {

  render() {
    return <div className={css.mainContainer}>
      <Searchbar />
      <ImageGallery />
      <ImageGalleryItem />
      <Button />
      {/* <Modal /> */}
    </div>;
  }
}