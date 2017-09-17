const initiatorlinkReducer = (state = null, action) => {
    if (action.type === "NEWSHIPMENT") {
        return (`https://ropsten.etherscan.io/tx/${action.payload}`)
    }
    return state
}

export default initiatorlinkReducer
