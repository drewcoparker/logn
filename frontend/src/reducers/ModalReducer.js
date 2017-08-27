export default function(state = false, action){
	switch(action.type){
		case "LOGIN_MODAL":
			return action.payload;
		case "REGISTER_MODAL":
			return action.payload;
		default:
			return state;
	}
}
