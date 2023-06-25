import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInput = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.getGallery({ ...this.state });
  };

  render() {
    const { searchQuery } = this.state;
    const { handleSubmit, handleInput, } = this;
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
  }
}

Searchbar.propTypes = {
  searchQuery: PropTypes.string
}