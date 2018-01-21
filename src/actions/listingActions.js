import { listingAdapter } from '../adapters/listingAdapter';

export const fetchAllListings = () => {
  const response = listingAdapter.fetchAllListings();

  return {
    type: 'FETCH_ALL_LISTINGS',
    payload: response
  };
};

export const createListing = listing => {
  listingAdapter.createListing(listing);

  return {
    type: 'CREATE_LISTING'
  };
};
