import Hackathon from '../../build/contracts/Hackathon.json'
const contract = require("truffle-contract");

export const INITSTATUS = "INITSTATUS"
function initstatusAction(initstatusResult) {
    return {
        type: INITSTATUS,
        payload: initstatusResult,
    }
}



export function initstatusHelper(shipmentHash, web3) {
  return function (dispatch) {
    const HackathonObject = contract(Hackathon);
    HackathonObject.setProvider(web3.currentProvider)

    let HackathonInstance
    let coinbase = web3.eth.coinbase;

    HackathonObject.at("0x73e54d2a748ea0e503f9eb47f46e0427a364907d").then(function(instance) {
      HackathonInstance = instance
      return HackathonInstance.getStatus({from: coinbase})
    }).then(function(result) {
      let numResult = (result.toNumber())
      console.log(numResult)
      dispatch(initstatusAction(numResult))
    })
  }
}
