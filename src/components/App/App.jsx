import { Component } from 'react';
import css from './App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

export default class App extends Component {
  render() {
    const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
    const API_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

console.log(API_URL);

    
    return (
      <div className={css.mainContainer}>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
