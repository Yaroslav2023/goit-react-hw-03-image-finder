import React, { Component } from 'react';
import cl from './imageGalleryItem.module.css';
// import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return images.map(({ id, webformatURL }) => {
      return (
        <li className={cl.ImageGalleryItem} id={id}>
          <img className={cl.ImageGalleryItemImage} src={webformatURL} alt="" />
        </li>
      );
    });
  }
}

export default ImageGalleryItem;
