import React, { Component } from 'react'


class Web3Init extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.onWeb3ComponentLoad()
        }, 250)
    }

  render() {
    return(
    <li className="pure-menu-item">
    </li>
      )
  }
}

export default Web3Init
