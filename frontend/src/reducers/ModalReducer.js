export default function(state = {modalVisible: false}, action){
	switch(action.type){
		case "LOGIN_MODAL":
			return action.payload;
		default:
			return state;
	}
}
