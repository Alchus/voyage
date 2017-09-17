const initiatorpaymentlinkReducer = (state = null, action) => {
    if (action.type === "PAYFINAL") {
        return (`https://ropsten.etherscan.io/tx/${action.payload}`)
    }
    return state
}

export default initiatorpaymentlinkReducer
