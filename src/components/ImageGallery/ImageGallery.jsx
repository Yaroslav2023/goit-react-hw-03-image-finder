import React from 'react';
import cl from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import { getImages } from 'api/search.images';
// import PropTypes from 'prop-types';

class ImageGallery extends React.Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const data = await getImages({});
    this.setState({ images: data.hits });
  }
  render() {
    return (
      <ul className={cl.ImageGallery}>
        <ImageGalleryItem images={this.state.images} />
      </ul>
    );
  }
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ImageGallery;
