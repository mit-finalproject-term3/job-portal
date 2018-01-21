import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllListings } from '../actions/listingActions';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      sortedListing: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.getSearchQuery = this.getSearchQuery.bind(this);
  }

  onInputChange() {
    const allListings = this.props.allListings;
    this.setState({ sortedListing: this.getSearchQuery(allListings) });
  }

  getSearchQuery(allListings) {
    return allListings.filter((listing, i) => {
      const position = listing.position.toLowerCase();
      const company = listing.company.toLowerCase();
      const isMatch =
        position.indexOf(this.refs.search.value.toLowerCase()) > -1 ||
        company.indexOf(this.refs.search.value.toLowerCase()) > -1;
      if (isMatch) return listing;
      return false;
    });
  }

  renderResults() {
    if (this.state.sortedListing.length === 0) return null;

    return (
      <div className="row">
        {this.state.sortedListing.map((listing, i) => {
          return (
            <div key={i} className="col-12 card">
              <div className="row">
                <div className="col-12">
                  <h2>
                    {listing.position} at {listing.company}
                  </h2>
                  <h4>
                    {listing.street}, {listing.city} {listing.state}{' '}
                    {listing.zipcode} - {listing.shift} - ${
                      listing.compensation
                    }
                  </h4>
                  <p className="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vestibulum enim vitae pellentesque fringilla. Vivamus
                    eleifend faucibus ipsum, nec rutrum nulla imperdiet lacinia.
                    Phasellus euismod enim sit amet ante luctus, in rhoncus arcu
                    egestas. Integer eu tempor quam. Fusce nec ante tellus.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <a href={listing.company_url} target="_blank">
                    <button className="fill primary">Apply</button>
                  </a>
                </div>
                <div className="col-3">
                  <a href={listing.company_url} target="_blank">
                    <button className="fill">Site</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchAllListings();
  }

  componentDidMount() {
    this.setState({ sortedListing: this.props.allListings || [] });
  }

  render() {
    const searchResults = this.renderResults();
    return (
      <div className="row search-container">
        <div className="col-9">
          <input
            ref="search"
            className="fill"
            placeholder="Keywords ( Example Fullstack, Backend, Rails ) . . ."
            onChange={this.onInputChange}
          />
        </div>

        <div className="col-3">
          <button className="col-12 primary">Search</button>
        </div>

        {searchResults}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allListings: state.listing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllListings: () => {
      let action = fetchAllListings();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
