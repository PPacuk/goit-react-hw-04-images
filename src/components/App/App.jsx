import { Component } from 'react';
import css from './App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import fetchGalleryByQuery from 'services/api';
import Modal from 'components/Modal/Modal';

export default class App extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    isModalOpen: false,
    chosenImageId: null,
  };

  getGallery = async ({ searchQuery }) => {
    this.setState({ isLoading: true });

    try {
      const gallery = await fetchGalleryByQuery(`${searchQuery}`);
      this.setState({ gallery });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = e => {
    this.setState({ isModalOpen: true });
    this.setState({ chosenImageId: e.currentTarget.id });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModal, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal, false);
  }

  closeModal = e => {
    if (e.keyCode === 27) {
      this.setState({ isModalOpen: false });
    }
    this.setState({ isModalOpen: false });
    
  };

  render() {
    const { gallery, isLoading, error, isModalOpen, chosenImageId } =
      this.state;
    const { getGallery, openModal, closeModal } = this;
    console.log();

    return (
      <div className={css.mainContainer}>
        <Searchbar getGallery={getGallery} />
        {error !== null && `Error : ${error}`}
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery gallery={gallery} openModal={this.openModal} />
        )}
        {gallery.length !== 0 ? <Button /> : null}
        {isModalOpen && (
          <Modal
            gallery={gallery}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            chosenImageId={chosenImageId}
          />
        )}
      </div>
    );
  }
}
