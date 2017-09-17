import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newshipmentHelper } from './InitiatorAction'
import { initstatusHelper } from './InitiatorActionStatus'
import { payfinalHelper } from './InitiatorActionPayFinal'

class InitiatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: this.props.web3,
      addr1: "",
      addr2: "",
      addr3: "",
      payout1: 0,
      payout2: 0,
      payout3: 0,
      shipmentHash: "",
      newshipmentHash: this.props.initiator,
      status: this.props.initiatorStatus,
      payFinalTxHash: this.props.initiatorPayment,
    }
  }

  onHashChange(event) {
    event.preventDefault()
    this.setState({shipmentHash: event.target.value})
  }

  onAddr1Change(event) {
    event.preventDefault()
    this.setState({addr1: event.target.value})
  }

  onAddr2Change(event) {
    event.preventDefault()
    this.setState({addr2: event.target.value})
  }

  onAddr3Change(event) {
    event.preventDefault()
    this.setState({addr3: event.target.value})
  }

  onPayout1Change(event) {
    event.preventDefault()
    this.setState({payout1: event.target.value})
  }

  onPayout2Change(event) {
    event.preventDefault()
    this.setState({payout2: event.target.value})
  }

  onPayout3Change(event) {
    event.preventDefault()
    this.setState({payout3: event.target.value})
  }

  onNewClick() {
    this.props.newshipmentDispatch(
      this.state.shipmentHash,
      this.state.payout1,
      this.state.payout2,
      this.state.payout3,
      this.state.addr1,
      this.state.addr2,
      this.state.addr3,
      this.state.web3.web3
    )
  }

  onStatusClick() {
    this.props.statusDispatch(this.state.shipmentHash, this.state.web3.web3)
  }

  onPaymentClick() {
    this.props.finalpayDispatch(this.state.shipmentHash, this.state.web3.web3)
  }


  render() {
    return (
      <div>
        <div className="centerComponent">
      <h1>For Initiators</h1>
          <div className="boldClass">
      From here, you can instantiate a new shipment, check
      the status of a shipment, or close a shipment chain by
      taking receipt of a good and paying the person who
      delievered your goods!
          </div>
      <hr />
      <div className="spaceMaker" />
      <span className="boldClass">Enter a shipment hash you want details for, or a new one for a new shipment</span>
      <form>
      <p/>
      <input size="64" onChange={this.onHashChange.bind(this)} value={this.state.shipmentHash} />
      </form>
      <div className="spaceMaker" />
      <h2>Initiate a new shipment</h2>
       <p/>
       <p/>
       <form>
       <p/>
       <p/>
       <span className="boldClass">Shipper Addresses / Shippers payout (ETH) </span>
       <p/>
       <input size="44" onChange={this.onAddr1Change.bind(this)} value={this.state.addr1} />
       <input className="valueMargin" size="8" onChange={this.onPayout1Change.bind(this)} value={this.state.payout1} />
       <p/>
       <input size="44" onChange={this.onAddr2Change.bind(this)} value={this.state.addr2} />
       <input className="valueMargin" size="8" onChange={this.onPayout2Change.bind(this)} value={this.state.payout2} />
       <p/>
       <input size="44" onChange={this.onAddr3Change.bind(this)} value={this.state.addr3} />
       <input className="valueMargin" size="8" onChange={this.onPayout3Change.bind(this)} value={this.state.payout3} />
       </form>
       <div className="spaceMakerMini" />
       <span className="boldClass">Tx Hash: </span>
       <div className="spaceMakerMini" />
       <span><a href={this.props.initiatorlink} target="_blank">{this.props.initiator}</a></span>
       <div className="cometButton" onClick={this.onNewClick.bind(this)}>Create</div>

       <div className="spaceMaker" />
        </div>
        <div className="spaceMaker" />
        <h2>Check the status of an existing shipment</h2>
        <div className="spaceMakerMini" />
        <div className="centerComponent">
        <span className="boldClass">Your shipment is: </span>
        <span>{this.props.status}</span>
          <div className="spaceMaker" />
          <div className="cometButton" onClick={this.onStatusClick.bind(this)}>Get Status</div>

          <div className="spaceMakerLarge" />
          <h2>Close out a shipment by making final payment and confirming receipt</h2>
          <div className="spaceMakerMini" />
          <div className="boldClass">
          Enter the hash of the shipment you want to close
          out and click submit to finalize!
          </div>
          <div className="spaceMakerMini" />
          <span className="boldClass">Tx Hash: </span>
          <span><a href={this.props.initiatorpaylink} target="_blank">{this.props.initiatorPayment}</a></span>
          <div className="spaceMaker" />
          <div className="cometButton" onClick={this.onPaymentClick.bind(this)}>Finalize</div>

      </div>
      </div>



    )
  }
}

function mapStateToProps(state) {
  return {
    web3: state.web3,
    initiator: state.initiator,
    initiatorlink: state.initiatorlink,
    initiatorpaylink: state.initiatorpaylink,
    initiatorPayment: state.initiatorPayment,
    status: state.initiatorStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newshipmentDispatch: (shipmentHash, payout1, payout2, payout3, addr1, addr2, addr3, web3) => {
      dispatch(newshipmentHelper(shipmentHash, payout1, payout2, payout3, addr1, addr2, addr3, web3))
    },
    statusDispatch: (shipmentHash, web3) => {
      dispatch(initstatusHelper(shipmentHash, web3))
    },
    finalpayDispatch: (shipmentHash, web3) => {
      dispatch(payfinalHelper(shipmentHash, web3))
    }
  }
}

const InitiatorContainer = connect(mapStateToProps, mapDispatchToProps)(InitiatorComponent)
export default InitiatorContainer
