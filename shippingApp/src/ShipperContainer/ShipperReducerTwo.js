const shipperReducerTwo = (state = null, action) => {
    if (action.type === "PAYFROMTHREE") {
        return action.payload
    }
    return state
}

export default shipperReducerTwo
