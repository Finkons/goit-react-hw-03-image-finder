import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Form, Input, Button } from './Searchbar.styled';
import { ToastContainer, toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    if (searchQuery.trim() === '') {
      toast.error('The search cannot be performed without a query', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    onSubmit(searchQuery);
    e.currentTarget.reset();
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ToastContainer />
        <Button type="submit">
          <BsSearch size={30} />
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
