import request from '../utils/request';
import { push } from 'react-router-redux';
import store from '../store';

const url = 'https://a-junior-dev.herokuapp.com/v1/';
// const dev_url = 'http://localhost:3000/v1/'

export const listingAdapter = {
  fetchAllListings: () => {
    return request('/listings', { method: 'GET' }).then(
      response => response.data
    );
  },

  createListing: listing => {
    return request('/listings', {
      method: 'POST',
      body: listing
    }).then(response => {
      console.log('response listing');
      store.dispatch(push('/'));
      return response.data;
    });
  }
};
