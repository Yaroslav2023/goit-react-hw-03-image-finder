import React from 'react';
import cl from './imageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <li className={cl.ImageGalleryItem}>
      <img
        className={cl.ImageGalleryItemImage}
        src={imageUrl}
        alt=""
        onClick={onClick}
      />
    </li>
  );
};

// class ImageGalleryItem extends Component {
//   render() {
//     const { images, onClick } = this.props;
//     return images.map(({ id, webformatURL, largeImageURL }) => {
//       return (
//         <li key={id} className={cl.ImageGalleryItem}>
//           <img
//             className={cl.ImageGalleryItemImage}
//             src={webformatURL}
//             alt=""
//             onClick={() => {
//               onClick(largeImageURL);
//             }}
//           />
//         </li>
//       );
//     });
//   }
// }

export default ImageGalleryItem;
