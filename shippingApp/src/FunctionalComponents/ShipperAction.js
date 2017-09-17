export const SHIPPER = "SHIPPER"
function shipperAction(shipperResult) {
    return {
        type: SHIPPER,
        payload: shipperResult
    }
}

export default function shipperHelper() {
    return function(dispatch) {
        dispatch(shipperAction(2))
    }
}
