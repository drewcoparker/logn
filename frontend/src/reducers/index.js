import { combineReducers } from 'redux';
import LoginModalReducer from "./LoginModalReducer.js";
import RegisterModalReducer from "./RegisterModalReducer.js";
import LoginReducer from "./LoginReducer.js";
import RegisterReducer from "./RegisterReducer.js";

const masterReducer = combineReducers({
    loginModalVisible: LoginModalReducer,
    registerModalVisible: RegisterModalReducer,
    loginResponse: LoginReducer,
    registerResponse: RegisterReducer
});

export default masterReducer
