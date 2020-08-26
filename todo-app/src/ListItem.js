import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.doThis}</li>
        </ul>
      </div>
    )
  }
}

export default ListItem

