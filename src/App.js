import React from 'react';
import './App.scss';

function App() {
  return (
   <div className="container">
   <ul className="menu">
     <li>Products
    <ul className="first">
      <li>Shoes
      <ul className="second">
      <li>Mens
        <ul className="third">
          <li>Basketball</li>
          <li>Running</li>
          <li>Training</li>
        </ul>
      </li>
      <li>Womens</li>
      <li>Children</li>
    </ul>
      </li>
      <li>Clothes</li>
      <li>Gear</li>
    </ul>

     </li>
     <li>Support</li>
     <li>Contact</li>
   </ul>
   </div>
  );
}

export default App;


/* https://cssreference.io/property/transition-timing-function/
https://www.w3schools.com/css/css_pseudo_classes.asp 

summary: make sure to understand if we want to change child values on hover then we set it on the hover in the parent. 
but if we only want to have the change happen when hover over child then declare the :hover on the child class instead
*/