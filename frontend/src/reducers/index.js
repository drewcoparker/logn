import { combineReducers } from 'redux';
import ModalReducer from "./ModalReducer.js";
import LoginReducer from "./LoginReducer.js";

const masterReducer = combineReducers({
    modalVisible: ModalReducer,
    loginResponse: LoginReducer
});

export default masterReducer
