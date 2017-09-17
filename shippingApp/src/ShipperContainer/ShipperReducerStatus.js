const shipperstatusReducer = (state = null, action) => {
    if (action.type === "SHIPPERSTATUS") {
        return action.payload
    }
    return state
}

export default shipperstatusReducer
