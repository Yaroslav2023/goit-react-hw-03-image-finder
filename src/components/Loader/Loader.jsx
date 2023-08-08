import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;

//   loadMoreImgs = () => {
//     const { searchQuery } = this.props;
//     const { page, perPage } = this.state;
//     console.log('Click');
//     this.setState({ isLoading: true });
//     getImages({ searchQuery, page, perPage })
//       .then(images => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//           page: prevState.page + 1,
//         }));
//       })
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   };
