import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeOfConductPath from '../../../../CodeOfConduct.md'

class CodeOfConduct extends React.Component {
  constructor(props) {
    super(props)

    this.state = { code: null }
  }

  componentWillMount() {
    fetch(CodeOfConductPath).then((response) => response.text()).then((text) => {
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

export default CodeOfConduct