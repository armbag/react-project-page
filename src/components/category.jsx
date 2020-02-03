import React, { Component } from 'react';


class Category extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="content">
        {name}
      </div>
    );
  }
}

export default Category;
