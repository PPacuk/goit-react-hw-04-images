import { Component } from 'react';
import { PropTypes } from 'prop-types';
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
    page: 1,
    searchQuery: '',
  };

  getGallery = async ({ searchQuery }) => {
    this.setState({ isLoading: true, searchQuery: searchQuery });

    try {
      const gallery = await fetchGalleryByQuery(`${searchQuery}`);
      this.setState({ gallery });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false, page: 2 });
    }
  };

  addNextPage = async () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
    try {
      const nextPageGallery = await fetchGalleryByQuery(
        this.state.searchQuery,
        this.state.page
      );
      this.setState(prev => ({
        gallery: [...prev.gallery, ...nextPageGallery],
      }));
    } catch (err) {
      this.setState({ error: err.message });
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
    const { getGallery, openModal, closeModal, addNextPage } = this;

    return (
      <div className={css.mainContainer}>
        <Searchbar getGallery={getGallery} addNextPage={addNextPage} />
        {error !== null && `Error : ${error}`}
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery gallery={gallery} openModal={openModal} />
        )}
        {gallery.length !== 0 ? <Button addNextPage={addNextPage} /> : null}
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

App.propTypes = {
  gallery: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  chosenImageId: PropTypes.number,
  page: PropTypes.number,
  searchQuery: PropTypes.string,
};
