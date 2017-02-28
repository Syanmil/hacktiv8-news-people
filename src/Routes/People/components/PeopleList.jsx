import React from 'react'

export class PeopleList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ul>
        {this.props.list.map((item, index)=>{
          return (
              <li key={index}>
                {item.name}
              </li>
            )
          })
        }
      </ul>
    )
  }
}
