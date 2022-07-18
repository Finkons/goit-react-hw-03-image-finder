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
    chooseImage: null,
    showModal: false,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ images: [] });
    }
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchSearchQuery();
      return;
    }

    if (prevState.chooseImage !== this.state.chooseImage) {
      this.toggleShowModal();
    }
  }

  searchQuery = query => {
    this.setState({ searchQuery: query, page: 1 });
  };

  chooseImage = image => {
    this.setState({ chooseImage: image });
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

  toggleShowModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, loading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery
          images={this.state.images}
          onClick={this.chooseImage}
          loadMore={this.loadMore}
        />
        {loading && <Loader />}
        {showModal && (
          <Modal
            chooseImage={this.state.chooseImage}
            onClose={this.toggleShowModal}
          />
        )}
        <ToastContainer />
      </Container>
    );
  }
}
