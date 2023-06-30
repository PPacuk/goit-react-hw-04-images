import { useState } from 'react';
import { PropTypes } from 'prop-types';
import css from './App.module.css';
import {Searchbar} from 'components/Searchbar/Searchbar';
import {ImageGallery} from 'components/ImageGallery/ImageGallery';
import {Button} from 'components/Button/Button';
import {Loader} from 'components/Loader/Loader';
import fetchGalleryByQuery from 'services/api';
import {Modal} from 'components/Modal/Modal';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setModal] = useState(false);
  const [chosenImageId, setChosenImageId] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const getGallery = async searchQuery => {
    setLoading(true);
    setSearchQuery(searchQuery);

    try {
      const gallery = await fetchGalleryByQuery(`${searchQuery}`);
      setGallery(gallery);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setPage(2);
    }
  };

  const addNextPage = async () => {
    setPage(prev => prev + 1);
    try {
      const nextPageGallery = await fetchGalleryByQuery(searchQuery, page);
      setGallery(prev => [...prev, ...nextPageGallery]);
    } catch (err) {
      setError(err.message);
    }
  };

  const openModal = e => {
    setModal(true);
    setChosenImageId(e.currentTarget.id);
  };

  // componentDidMount() {
  //   document.addEventListener('keydown', this.closeModal, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.closeModal, false);
  // }

  const closeModal = e => {
    if (e.keyCode === 27) {
      setModal(false);
    }
    setModal(false);
  };

  return (
    <div className={css.mainContainer}>
      <Searchbar getGallery={getGallery} />
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
};

App.propTypes = {
  gallery: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  chosenImageId: PropTypes.number,
  page: PropTypes.number,
  searchQuery: PropTypes.string,
};
