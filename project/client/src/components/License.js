import React from 'react'
import ReactMarkdown from 'react-markdown'
import LicensePath from './LICENSE'

class License extends React.Component {
  constructor(props) {
    super(props)

    this.state = { code: null }
  }

  componentWillMount() {
    fetch(LicensePath).then((response) => response.text()).then((text) => {
      this.setState({ code: text })
    })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.code} />
      </div>
    )
  }
}

export default License