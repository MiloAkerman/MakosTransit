if (confirmSessionToken() == false) {
    window.location.href = "login.html";
}

$( document ).ready(function() {
    
});

function confirmSessionToken() {
  
    if (localStorage.getItem("session_token") == "null") {
        return false;
    }
    else {
        return true;
    }
}