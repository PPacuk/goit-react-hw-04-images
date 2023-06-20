import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} >
          <button type="submit" className={css.searchFormBtn}>
            <span className={css.searchFormBtnLabel}></span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
