import './App.css';
import React from 'react';

const Son = ({ onClick }) => <div onClick={onClick}>Son</div>;

const Child = ({ onClick }) => (
  <div>
    <Son onClick={onClick} />
  </div>
);

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const click = e => {
    console.log(e, this);
  };

  return (
    <div className='App'>
      <Child onClick={click} />
      <button onClick={() => setVisible(visible => !visible)}>点我</button>
      {visible && <div>Hello</div>}
    </div>
  );
};

export default App;
