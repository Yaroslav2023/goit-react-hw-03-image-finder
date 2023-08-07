import React, { Component } from 'react';
import cl from './imageGalleryItem.module.css';
// import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={cl.ImageGalleryItem}>
        <img className={cl.ImageGalleryItemImage} src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
