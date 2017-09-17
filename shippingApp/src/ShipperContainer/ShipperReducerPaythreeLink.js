const paythreeLinkReducer = (state = null, action) => {
    if (action.type === "PAYFROMTHREE") {
        return (`https://ropsten.etherscan.io/tx/${action.payload}`)
    }
    return state
}

export default paythreeLinkReducer
