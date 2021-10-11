import './App.css';
import React from 'react';

const Apple = ({ onClick }) => <div onClick={onClick}>apple is red</div>;

const Box = ({ onClick }) => (
  <div className='apple'>
    <Apple onClick={onClick} />
  </div>
);

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const click = e => {
    console.log(e);
  };

  return (
    <div className='App'>
      <Box onClick={click} />
      <button onClick={() => setVisible(visible => !visible)}>who am I?</button>
      {visible && <div>Hello,I'm Allen</div>}
    </div>
  );
};

export default App;
