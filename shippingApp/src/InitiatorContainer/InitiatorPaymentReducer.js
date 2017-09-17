const initiatorPaymentReducer = (state = null, action) => {
    if (action.type === "INITIATORPAYMENT") {
        return action.payload
    }
    return state
}

export default initiatorPaymentReducer
