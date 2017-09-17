const paytwoLinkReducer = (state = null, action) => {
    if (action.type === "PAYFROMTWO") {
        return (`https://ropsten.etherscan.io/tx/${action.payload}`)
    }
    return state
}

export default paytwoLinkReducer
