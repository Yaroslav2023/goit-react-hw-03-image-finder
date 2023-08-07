import React from 'react';
import cl from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
// import PropTypes from 'prop-types';

const ImageGallery = ({ contacts, deleteContact }) => {
  return (
    <ul className={cl.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ImageGallery;
