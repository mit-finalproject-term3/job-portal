import React, { Component } from 'react';

export default class SearchResults extends Component {
  render() {
    return (
      <div key={i} className="col-12 card">
        <div className="row">
          <div className="col-12">
            <h2>
              {listing.position} at {listing.company}
            </h2>
            <h4>
              {listing.street}, {listing.city} {listing.state} {listing.zipcode}{' '}
              - {listing.shift} - ${listing.compensation}
            </h4>
            <p className="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum enim vitae pellentesque fringilla. Vivamus eleifend
              faucibus ipsum, nec rutrum nulla imperdiet lacinia. Phasellus
              euismod enim sit amet ante luctus, in rhoncus arcu egestas.
              Integer eu tempor quam. Fusce nec ante tellus.
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
  }
}
