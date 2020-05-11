import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    // will log to console handleColorChange
    // which is equal to this.changeColor
    console.log(this.props)
    //add React event handler - onClick
    //change Child component background color based on Child state
    return (
      <div /* onClick={this.props.handleColorChange} */
           /* made to be a function since Parent component changeColor method takes in an argument */
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        // style={{backgroundColor: "#FFF"}}
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
