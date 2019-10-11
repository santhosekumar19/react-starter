import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './stores/store'
import ContainerWrapper from './components/container'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ContainerWrapper />
      </div>
    </Provider>
  );
}

export default App;
