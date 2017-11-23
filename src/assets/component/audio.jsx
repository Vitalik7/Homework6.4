import React, {Component } from 'react'
import audio from './../audio/audio.mp3'

export default class Audio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: null
    }
  }

  handlePlay() {
    this.audio.play()
  }

  handleStop() {
    this.audio.currentTime = 0
    this.slider.value = 0
    this.audio.pause()
  }

  componentDidMount() {
    this.slider.value = 0
    this.currentTimeInterval = null

    // Get duration of the song and set it as max slider value
    this.audio.onloadedmetadata = function() {
      this.setState({duration: this.audio.duration})
    }.bind(this)

    // Sync slider position with song current time
    this.audio.onplay = () => {
      this.currentTimeInterval = setInterval( () => {
        this.slider.value = this.audio.currentTime
      }, 500)
    }

    this.audio.onpause = () => {
      clearInterval(this.currentTimeInterval)
    }

    // Seek functionality
    this.slider.onchange = (e) => {
      clearInterval(this.currentTimeInterval)
      this.audio.currentTime = e.target.value
    }
  }
  render() {
    const src = audio
    return (
        <div className='wrap'>
          <audio ref={(audio) => { this.audio = audio }} src={src} />

          <input type='button'
                 value='Play'
                 className='btnAudio'
                 onClick={ this.handlePlay.bind(this) } />

          <input type='button'
                 value='Stop'
                 className='btnAudio'

                 onClick={ this.handleStop.bind(this) } />

          <p><input ref={(slider) => { this.slider = slider }}
                    type='range'
                    name='points'
                    min='0' max={this.state.duration} /> </p>


        </div>
    )
  }
}


// https://stackoverflow.com/questions/42695145/how-to-handle-audio-playing-in-react-redux/42754114
