import { Component } from 'react';
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
    
    this.props.getGallery({...this.state});
   
    
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.searchQuery}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
