import Hackathon from '../solcCompiled/Hackathon.json'

export const SHIPPERSTATUS = "SHIPPERSTATUS"
function shipperstatusAction(shipperstatusResult) {
    return {
        type: SHIPPERSTATUS,
        payload: shipperstatusResult
    }
}

export function shipperstatusHelper(shipmentHash, web3) {
    return function(dispatch) {
      let HackathonObject = web3.eth.contract(Hackathon)
      let HackathonInstance = HackathonObject.at("0x73e54d2a748ea0e503f9eb47f46e0427a364907d")
      let coinbase = web3.eth.coinbase;

      return HackathonInstance.getStatus(shipmentHash, {from: coinbase}, (error, result) => {
        if (!error) {dispatch(shipperstatusAction(result))
        console.log(result)} else {dispatch(shipperstatusAction(error))}
      })
    }
}
