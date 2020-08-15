import React, { Component } from "react"
import ReactMarkdown from 'react-markdown'
import song from '../uncle_buck_jingle.wav'
import LyricsPath from '../uncle_buck_song_lyrics.md'

class Song extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { code: null }
      }

      componentWillMount() {
        fetch(LyricsPath).then((response) => response.text()).then((text) => {
          this.setState({ code: text })
        })
      }

  render() {
    return (
        <div className="content">
            <ReactMarkdown source={this.state.code} />
            <audio
                    ref="audio_tag"
                    autoPlay={false}
                    controls={true} >
                <source type="audio/mp3" src={song} />
            </audio>
        </div>
    )
  }
}

export default Song
