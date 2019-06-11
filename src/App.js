import React, {Component} from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Will",
      isActive: false,
      position: 0
    
    };
    this.transform = this.transform.bind(this);
  }

  transform() {
    if (this.state.position < 3)
    {
      this.setState({position: this.state.position + 1})
    }
    if (this.state.position === 3) {
      this.setState({position: 0})
    }
    
  }
  render() {

    let classname = 'box pos-0';
    if (this.state.position === 0) {
      classname = 'box pos-0';
    }
    if (this.state.position === 1) {
      classname = 'box pos-1';
    }
    if (this.state.position === 2) {
      classname = 'box pos-2';
    }
    if (this.state.position === 3) {
      classname = 'box pos-3';
    }
    console.log(classname)
    return (
      <div className="container">
     <button className="btn" onClick={this.transform}>Transform</button>
     <div className={classname}></div>

      </div>
     );
  }
 
}

export default App;


/* https://cssreference.io/property/transition-timing-function/
https://www.w3schools.com/css/css_pseudo_classes.asp 

summary: make sure to understand if we want to change child values on hover then we set it on the hover in the parent. 
but if we only want to have the change happen when hover over child then declare the :hover on the child class instead
*/