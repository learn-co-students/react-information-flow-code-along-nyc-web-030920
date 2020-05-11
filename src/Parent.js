import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'
// parent's color changes when child is clicked. 
// this means the child is changing the state of the parent. 
// to do this we must pass a setState function as a prop to our Child so that Child can invoke it
// we also want the clicked child to change color and have it's sibling change to the same color
// React components cannot pass data between 'sibling' components. // only up down -- parent /child
// store color of child in the Parent component. 
// then we pass the childrenColor to child as props 
class Parent extends Component {


  constructor() {
    super()
    this.state = {
      color: getRandomColor(), // the states that change
      childrenColor: 'FFF' 
    }
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
      {/* pass setState function as props so that the child can change the state of the parent 
      make the childColor a prop so that the up down data transfer can work
      */}
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
