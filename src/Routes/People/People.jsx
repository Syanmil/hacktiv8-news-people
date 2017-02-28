import React, { Component } from 'react';
import '../../App.css';
import {Title, PeopleList} from './components'

class People extends Component {
  constructor(){
    super()
    this.state = {
      people : []
    }
  }
  componentWillMount(){
    this.fetchPeople()
  }
  fetchPeople(){
    fetch('https://swapi.co/api/people')
      .then((res)=> res.json())
      .then((items)=>{
        this.setState({
          people : items.results
        })
      })
      .catch((err)=> console.log(err))
  }
  render(){
    return (
      <div>
        <Title />
        <PeopleList list={this.state.people}/>
      </div>
    )
  }
}

export default People;
