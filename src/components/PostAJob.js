import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createListing } from '../actions/listingActions';

class PostAJob extends Component {
  constructor() {
    super();
    this.state = {
      listing: {
        listing: {
          position: '',
          shift: 'full-time',
          company: '',
          company_url: '',
          apply_url: '',
          experience_level: 'intern',
          programming_languages: '',
          compensation: '',
          street: '',
          city: 'New York',
          state: 'NY',
          zipcode: '',
          description: ''
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitListing = this.submitListing.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const listing = this.state.listing;
    listing['listing'][field] = event.target.value;
    return this.setState({ listing });
  }

  submitListing(event) {
    event.preventDefault();
    this.pleaseDeleteMe();
    let listing = this.state.listing;
    this.props.createListing(listing);
  }

  pleaseDeleteMe() {
    let listing = this.state.listing;
    listing['listing']['apply_url'] = this.state.listing.listing.company_url;
    this.setState({ listing });
    console.log(this.state.listing);
  }

  render() {
    return (
      <div>
        <h1>Create Your Job Listing</h1>
        <p>List your job posting and find talent!</p>
        <div className="space" />

        <div className="form-page">
          <form onSubmit={this.submitListing}>
            <div className="row">
              <div className="col-12">
                <label>Type</label>
                <select
                  className="fill"
                  name="shift"
                  onChange={this.handleChange}
                >
                  <option value="full-time">Full-time 60 days</option>
                  <option value="part-time">Part-time 30 days</option>
                  <option value="contract">Contract 45 days</option>
                  <option value="entry">
                    Internship/junior full-time/part-time 45 days
                  </option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Job Title</label>
                <input
                  className="fill"
                  type="text"
                  name="position"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Programming Languages</label>
                <input
                  className="fill"
                  type="text"
                  name="programming_languages"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Level of Experience</label>
                <select
                  className="fill"
                  name="experience_level"
                  onChange={this.handleChange}
                >
                  <option value="intern">Intern (0 yrs of experience)</option>
                  <option value="junior">
                    Junior (0 - 1 yrs of experience)
                  </option>
                  <option value="mid">Mid(1 - 3 yrs of experience)</option>
                  <option value="senior">Senior (3+ yrs of experience)</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Compensation</label>
                <input
                  className="fill"
                  type="text"
                  name="compensation"
                  placeholder="Compensation"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Description</label>
                <textarea
                  className="fill"
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <label>How to Apply</label>

            <div className="row">
              <div className="col-12">
                <select className="fill" name="">
                  <option value="true">From us (recommended)</option>
                  <option value="false">From you (enter URL)</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className="fill"
                  type="text"
                  name="company"
                  placeholder="Company"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className="fill"
                  type="text"
                  name="company_url"
                  placeholder="Company URL"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className="fill"
                  type="text"
                  name="street"
                  placeholder="Street"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className="fill"
                  type="text"
                  name="zipcode"
                  placeholder="Zipcode"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <input className="fill" type="checkbox" />
              </div>
              <div className="col-11">
                <p>E-mail to Weekly Newsletter</p>
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <input className="fill" type="checkbox" />
              </div>
              <div className="col-11">
                <p>Terms & Agreements</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button className="primary center" type="submit">
                  Submit Listing
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createListing: listing => {
      let action = createListing(listing);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(PostAJob);
