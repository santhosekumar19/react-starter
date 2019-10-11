import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './stores/store'
import Container from './components/container'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
