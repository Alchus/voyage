import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './web3/web3Reducer'
import welcomeReducer from './FunctionalComponents/WelcomeReducer'
import initiatorReducer from './InitiatorContainer/InitiatorReducer'
import initiatorPaymentReducer from './InitiatorContainer/InitiatorPaymentReducer'
import initiatorStatusReducer from './InitiatorContainer/InitiatorStatusReducer'
import shipperReducer from './ShipperContainer/ShipperReducer'
import shipperReducerTwo from './ShipperContainer/ShipperReducerTwo'
import shipperStatusReducer from './ShipperContainer/ShipperReducer'
import initiatorpaymentlinkReducer from './InitiatorContainer/InitiatorReducerPayFinalLink'
import initiatorlinkReducer from './InitiatorContainer/InitiatorReducerLink'
import paytwoLinkReducer from './ShipperContainer/ShipperReducerPaytwoLink'
import paythreeLinkReducer from './ShipperContainer/ShipperReducerPaythreeLink'


const reducer = combineReducers({
  routing: routerReducer,
    welcome: welcomeReducer,
    initiator: initiatorReducer,
    initiatorPayment: initiatorPaymentReducer,
    initiatorStatus: initiatorStatusReducer,
    initiatorpaylink: initiatorpaymentlinkReducer,
    initiatorlink: initiatorlinkReducer,
    shipperpaytwo: shipperReducer,
    shipperpaythree: shipperReducerTwo,
    shipperstatus: shipperStatusReducer,
    shipperpaytwoLink: paytwoLinkReducer,
    shipperpaythreeLink: paythreeLinkReducer,
  web3: web3Reducer
})

export default reducer
