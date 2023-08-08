import React, { Component } from 'react';
import cl from './imageGalleryItem.module.css';
// import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { images, onClick } = this.props;
    return images.map(({ id, webformatURL }) => {
      return (
        <li key={id} className={cl.ImageGalleryItem}>
          <img
            className={cl.ImageGalleryItemImage}
            src={webformatURL}
            alt=""
            onClick={onClick}
          />
        </li>
      );
    });
  }
}

export default ImageGalleryItem;
