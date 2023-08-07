import React, { Component } from 'react';
import cl from './searchbar.module.css';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    return (
      <header className={cl.Searchbar}>
        <form className={cl.SearchForm}>
          <button type="submit" className={cl.SearchFormButton}>
            <span className={cl.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={cl.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
