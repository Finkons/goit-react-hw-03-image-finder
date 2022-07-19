import React, { Component } from 'react';
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import fetchImages from '../../servises/Api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Loader from 'components/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    url: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchSearchQuery();
      return;
    }
  }

  getSearchQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  fetchSearchQuery = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    try {
      const { hits } = await fetchImages(searchQuery, page);

      if (hits.length === 0) {
        toast.error('Nothing was found for your query');
        return;
      }
      this.setState(({ images }) => ({ images: [...images, ...hits] }));
    } catch {
      toast.error('An error has occurred, please try again');
    } finally {
      this.setState({ loading: false });
    }
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  openModal = activeUrl => this.setState({ url: activeUrl });

  closeModal = () => this.setState({ url: '' });

  render() {
    const { url, loading, images } = this.state;
    const { openModal, closeModal, loadMore } = this;

    return (
      <Container>
        <Searchbar onSubmit={this.getSearchQuery} />
        <ImageGallery
          images={images}
          onImageClick={openModal}
          loadMore={loadMore}
        />
        {loading && <Loader />}
        {url && <Modal activeUrl={url} alt={url} onClose={closeModal} />}
        <ToastContainer />
      </Container>
    );
  }
}
