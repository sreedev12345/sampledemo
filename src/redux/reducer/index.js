import { combineReducers } from 'redux';
import productlistReducer from './ProductListReducer';
import pendingRequestReducer from './PendingRequestReducer';
import serviceReducer from './ServiceReducer';
import paymentReducer from './PaymentReducer'


export default combineReducers({
	productlistReducer,
	pendingRequestReducer,
	serviceReducer,
	paymentReducer
});