import React from 'react';
import './App.css';
import ScrollButton from './components/ScrollToTopBtn/ScrollToTopBtn';
import Router from './router';


function App() {


  return (
    <div className="App">
      <Router />
      <ScrollButton />
    </div>
  );
}

export default App;
