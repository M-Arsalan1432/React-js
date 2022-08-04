import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
// import { Link } from "react-router-dom";
import './index.css';
// import App from './App';
import Header from './Header';
// import Footer from './Footer';

function Parent() {

  return(
    <>
      <Header/>
      <h1 className='head'>Sticky footer with fixed navbar</h1>
      <p className='pgra'>Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. 
        A fixed navbar has been added with padding-top: 60px; on the <strong> main  .container.</strong> </p>
        {/* <p className='pgra'>Back to <Link to="/">the default sticky footer</Link>minus the navbar.</p> */}
       {/* <Footer/>
       <h1>What is your Name:</h1>
       <h2>My Name: { name }</h2>
       <h3>Your ID: {props.empID}</h3>
       <button onClick={ nameChange }>Name Change</button>
       <Child name="Arslan" empID="4"/> */}
    </>
  );
}


// function Child(props){
//   return(
//     <div>
//       <h1>What is your Name is:</h1>
//        <h2>My Name is: {props.name}</h2>
//        <h3>Your ID is: {props.empID}</h3>
//     </div>
//   );
// }

// Parent.defaultProps={
//   name: "Shani",
//   empID: "1"
// }

ReactDOM.render(<Parent/>, document.getElementById('root'));