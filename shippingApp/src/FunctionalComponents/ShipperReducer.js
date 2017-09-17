const shipperReducer = (state = null, action) => {
    if (action.type === "SHIPPER") {
        return action.payload
    }
    return state
}

export default shipperReducer
