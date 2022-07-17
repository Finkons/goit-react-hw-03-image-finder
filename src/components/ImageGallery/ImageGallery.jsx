import PropTypes from 'prop-types';
import Button from 'components/Button';
import ImageGalleryItem from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick, loadMore }) => {
  return (
    <>
      <List>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            smallImg={image.webformatURL}
            // largeImg={image.largeImageURL}
            description={image.tags}
            onClick={() =>
              onClick({
                id: image.id,
                url: image.largeImageURL,
                alt: image.tags,
              })
            }
          />
        ))}
      </List>
      {images.length > 0 && <Button onClick={loadMore} />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
  loadMore: PropTypes.func,
};
