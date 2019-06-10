import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="parent">
   <div className="child">

     <button className="btn">Button</button>
   </div>
    </div>
  );
}

export default App;


/* https://cssreference.io/property/transition-timing-function/
https://www.w3schools.com/css/css_pseudo_classes.asp 

summary: make sure to understand if we want to change child values on hover then we set it on the hover in the parent. 
but if we only want to have the change happen when hover over child then declare the :hover on the child class instead
*/