import React from 'react';
import './App.css';
import DropDownList from './components/main/DropDownList';
import Footer from './components/main/Footer';
import Header from './components/main/Header';

function App() {

  return (
    <div className="App">
        <Header/>
            <hr/>
        <DropDownList />
        <Footer/>
    </div>
  );
}

export default App;
