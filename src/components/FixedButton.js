import React, { Component } from 'react';

export default class FixedButton extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <input
          className="fixed-button icon"
          id={this.props.id}
          type="image"
          src={this.props.source}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
