import './App.css';
import React from 'react';

const Son = ({ onClick }) => <div onClick={onClick}>Son</div>;

const Child = ({ onClick }) => (
  <div>
    <Son onClick={onClick} />
  </div>
);

class App extends React.Component {
  componentDidMount() {}

  click = e => {
    console.log(e, this);
  };

  render() {
    return (
      <div className='App'>
        <Child onClick={this.click} />
      </div>
    );
  }
}

export default App;
