import React, { Component } from 'react'
import Audio from './audio'
import GifAction from './gif'

export default class Tamagotchi extends Component {
  constructor(props) {
    super(props)
    this.name = prompt('What is your Pet name ?', 'SpongeBob')
  }

  render() {
    return (
        <div class='main'>
          <div class='container'>
            <div class='inner-container'>
              <div class='display' id='display'>
                <p>name:  {this.name}</p>

                <div class='hi'></div>
              <GifAction />
              </div>
            </div>
          </div>
          <Audio />
        </div>
    )
  }
}
