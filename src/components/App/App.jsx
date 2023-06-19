import { Component } from 'react';
import axios from 'axios';
import css from './App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class App extends Component {
  state = {
    gallery: [],
  };

  async componentDidMount() {
    const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
    const response = await axios.get(
      `?q=dog&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ gallery: response.data.hits });
  }

  render() {
    const { gallery } = this.state;
    console.log();

    return (
      <div className={css.mainContainer}>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem gallery={gallery} />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
