import Hackathon from "../solcCompiled/Hackathon.json"

export const NEWSHIPMENT = "NEWSHIPMENT"
function newshipmentAction(newshipmentResult) {
    return {
        type: NEWSHIPMENT,
        payload: newshipmentResult
    }
}

export function newshipmentHelper(shipmentHash, payout1, payout2, payout3, addr1, addr2, addr3, web3) {
    return function(dispatch) {
      let HackathonObject = web3.eth.contract(Hackathon)
      let HackathonInstance = HackathonObject.at("0x73e54d2a748ea0e503f9eb47f46e0427a364907d")
      let coinbase = web3.eth.coinbase;
      let int1 = parseInt(payout1, 10)
      let int2 = parseInt(payout2, 10)
      let int3 = parseInt(payout3, 10)
      let payoutTotal = parseInt(payout1, 10) + parseInt(payout2, 10) + parseInt(payout3, 10)

      return HackathonInstance.newShipment(shipmentHash, web3.toWei(1, "ether"), web3.toWei(1, "ether"), web3.toWei(1, "ether"), addr1, addr2, addr3, {from: coinbase, value: web3.toWei(3, "ether")}, (error, result) => {
        if (!error) {dispatch(newshipmentAction(result))
        console.log(result)} else {dispatch(newshipmentAction(error))}
      })
    }
}
