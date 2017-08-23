import { combineReducers } from 'redux';
import ModalReducer from "./ModalReducer.js";
import LoginReducer from "./LoginReducer.js";

const masterReducer = combineReducers({
    modalVisible: ModalReducer,
    login: LoginReducer
});

export default masterReducer
