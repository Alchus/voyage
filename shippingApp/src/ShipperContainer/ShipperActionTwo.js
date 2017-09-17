import Hackathon from '../solcCompiled/Hackathon.json'

export const PAYFROMTHREE = "PAYFROMTHREE"
function payfromthreeAction(payfromthreeResult) {
    return {
        type: PAYFROMTHREE,
        payload: payfromthreeResult
    }
}

export function payfromthreeHelper(shipmentHash, web3) {
    return function(dispatch) {
      let HackathonObject = web3.eth.contract(Hackathon)
      let HackathonInstance = HackathonObject.at("0x73e54d2a748ea0e503f9eb47f46e0427a364907d")
      let coinbase = web3.eth.coinbase;

      return HackathonInstance.makePaymentFromThree(shipmentHash, {from: coinbase}, (error, result) => {
        if (!error) {dispatch(payfromthreeAction(result))
        console.log(result)} else {dispatch(payfromthreeAction(error))}
      })
    }
}
