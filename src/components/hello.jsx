import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../assets/stylesheets/application.scss';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    // change state
    const { clicked, counter } = this.state;
    this.setState({
      clicked: !clicked,
      counter: counter + 1
    });
  }

  render() {
    const { name } = this.props;
    const { clicked, counter } = this.state;
    return (
      <div className={clicked ? "clicked" : null} onClick={this.handleClick}>
        Hello
        {name}
        {counter}
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
