import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Header from './Header';
import Footer from './Footer';

function Content(){
  return(
    <div>
      <Header/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(<Content/>,
document.getElementById('root')

);