import { PropTypes } from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ getGallery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    getGallery(searchQuery);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormBtn}>
          <span className={css.searchFormBtnLabel}></span>
        </button>

        <input
          className={css.searchFormInput}
          name="searchBar"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
};
