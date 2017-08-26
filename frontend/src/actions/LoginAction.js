import $ from "jquery";
import axios from "axios";

var LoginAction = (loginData) => {
    
    var thePromise = $.ajax({
        method: "POST",
        url: "http://localhost:3001/login",
        data: loginData
    });
    return{
        type: "LOGIN",
        payload: thePromise
    }
}

export default LoginAction;
