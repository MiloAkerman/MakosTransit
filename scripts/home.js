if(!confirmSessionToken()) window.location.replace("./login.html");

$( document ).ready(function() {
    
});

function confirmSessionToken() {
    if(localStorage.getItem("session_token") == null) return false;
    // token validation stuff

    return true;
}