import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList (e) {
    console.log("Clearing list!")
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange (e) {//set the new items value to e.target.value 
    this.setState({
      newItem: e.target.value
      
    })
  }

  addItem (e) {
    e.preventDefault()
    console.log(this.state.newItem)
    console.log(this.state.toDoItemArray)

    let newToDoArray = this.state.toDoItemArray
    let newItem = this.state.newItem

    this.setState({
      newToDoArray: newToDoArray.push(newItem),
      newItem: ""

    })
  }

  render() {

    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>

        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>

        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList