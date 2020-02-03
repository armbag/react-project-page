import React, { Component } from 'react';

import Category from './category';

class CategoryList extends Component {
  render() {
    return (
      <div className="content">
        {this.props.categories.map(category => {
          return <Category name={category.name} key={category.name} />
        })}
      </div>
    );
  }
}

export default CategoryList;
