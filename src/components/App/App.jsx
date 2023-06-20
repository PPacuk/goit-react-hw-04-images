import { Component } from 'react';
import axios from 'axios';
import css from './App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import fetchGalleryByQuery from 'services/api';

export default class App extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
  };

  searchHandler = () => {
    
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const gallery = await fetchGalleryByQuery('dog');
      this.setState({ gallery });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { gallery, isLoading, error } = this.state;
    console.log();

    return (
      <div className={css.mainContainer}>
        <Searchbar />
        {error !== null && `Error : ${error}`}
        {isLoading ? <Loader /> : <ImageGallery gallery={gallery} />}

        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
