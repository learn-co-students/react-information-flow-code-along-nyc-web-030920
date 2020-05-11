import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    //initial state
    this.state = {
      color: getRandomColor(),
      //store the state of the Child component
      childrenColor: '#FFF'
    }
  }

  // instance method to change state
  // will be passed to child components as a prop
  // child components will be able to invoke and change parent's state
  // will also change the color state of the Child components
  // added parameter to allow Child components to send data back to Parent
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor // added to represent new changed state
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        {/* add callback function as a prop that changes color on click */}
        {/* pass down Child component state data as a prop */}
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
