import React, { Component } from 'react';
import cl from './app.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

export class App extends Component {
  state = {};

  render() {
    return (
      <div className={cl.App}>
        <Searchbar />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}
