import $ from "jquery";
// import axios from "axios";

var RegisterAction = (registerData) => {

    var thePromise = $.ajax({
        method: "POST",
        url: "http://localhost:3001/login",
        data: registerData
    });
    return{
        type: "REGISTER",
        payload: thePromise
    }
}

export default RegisterAction;
