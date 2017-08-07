import { combineReducers } from 'redux';
import ModalReducer from "./ModalReducer.js";

const masterReducer = combineReducers({
    modalVisible: ModalReducer
});

export default masterReducer
