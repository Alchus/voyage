const shipperReducer = (state = null, action) => {
    if (action.type === "PAYFROMTWO") {
        return action.payload
    }
    return state
}

export default shipperReducer
