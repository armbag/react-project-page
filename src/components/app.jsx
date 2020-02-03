import React, { Component } from 'react';

import SearchBar from './search_bar';
import CategoryList from './category_list';
import Category from './category';

class App extends Component {

  render() {
    const categories = [
      { name: 'Experience' },
      { name: 'Education' },
      { name: 'Interests' },
      { name: 'Abroad Experience' }

    ];

    return (
      <div>
        <div className="menu">
          <div>
            <img src="../../assets/images/armen.jpg" alt=""/>
            <SearchBar />
          </div>
        </div>
        <div className="content">
          <CategoryList categories={categories} />
        </div>
      </div>
    );
  }
}

export default App;
