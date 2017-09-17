import React, { Component } from 'react'
import { connect } from 'react-redux'
import { payfromtwoHelper } from './ShipperAction'
import { payfromthreeHelper } from './ShipperActionTwo'
import { shipperstatusHelper } from './ShipperActionStatus'

class ShipperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: this.props.web3,
      payTwo: this.props.paytwo,
      payThree: this.props.paythree,
      shipmentHash:"0x0000...0000" ,
    }
  }

  onHashChange(event) {
    event.preventDefault()
    this.setState({shipmentHash: event.target.value})
  }

  paytwoClick() {
    this.props.payfromtwoDispatch(this.state.shipmentHash, this.state.web3.web3)
  }

  paythreeClick() {
    this.props.payfromthreeDispatch(this.state.shipmentHash, this.state.web3.web3)
  }

  statusClick() {
    this.props.statusDispatch(this.state.shipmentHash, this.state.web3.web3)
  }

  render() {
    return (
      <div className="centerComponent">
      <h1>For Shippers</h1>
        <div className="boldClass">
      Here you can accept custody from another shipper and check
      the status of a shipment
        </div>
      <div className="spaceMaker" />
          <h2>Enter your shipment hash and choose from the following</h2>
          <form>
          <span className="boldClass">My hash:</span>
          <p/>
          <input size="64" onChange={this.onHashChange.bind(this)} value={this.state.shipmentHash} />
          </form>
          <hr />
      <h2>Check the status of a shipment</h2>
      <p/>
      <p/>

      <div className="spaceMakerMini" />
      <span className="boldClass">Shipment status : {this.props.status}</span>

      <div className="spaceMaker" />
      <div className="cometButton" onClick={this.statusClick.bind(this)}>Status</div>
      <div className="spaceMaker" />
      <h2>Second stage shippers: take custody</h2>
      <div className="spaceMakerMini" />
      <div className="boldClass">
      Take custody of shipment and finalize payment to shipper one
      </div>
      <div className="spaceMaker" />
      <span className="boldClass">Tx Hash: </span>
      <span><a href={this.props.paytwoLink} target="_blank">{this.props.paytwo}</a></span>
      <div className="cometButton" onClick={this.paytwoClick.bind(this)}>Take Custody</div>
      <div className="spaceMaker" />
      <h2>Third stage shippers: take custody</h2>
      <div className="spaceMakerMini" />
      <div className="boldClass">
      Enter the hash of the shipment you want to take custody of
      and submit your transaction to finalize!
      </div>
      <div className="spaceMakerMini" />
      <span className="boldClass">Tx Hash: </span>
      <span><a href={this.props.paythreeLink} target="_blank">{this.props.paythree}</a></span>
      <div className="spaceMakerMini" />
      <div className="cometButton" onClick={this.paythreeClick.bind(this)}>Take Custody</div>





      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    web3: state.web3,
    paytwo: state.shipperpaytwo,
    paythree: state.shipperpaythree,
    status: state.shipperstatus,
    paytwoLink: state.shipperpaytwoLink,
    paythreeLink: state.shipperpaythreeLink,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    statusDispatch: (shipmentHash, web3) => {
      dispatch(shipperstatusHelper(shipmentHash, web3))
    },
    payfromtwoDispatch: (shipmentHash, web3) => {
      dispatch(payfromtwoHelper(shipmentHash, web3))
    },
    payfromthreeDispatch: (shipmentHash, web3) => {
      dispatch(payfromthreeHelper(shipmentHash, web3))
    }
  }
}

const ShipperContainer = connect(mapStateToProps, mapDispatchToProps)(ShipperComponent)
export default ShipperContainer
