
let location1 = "http://localhost:1000"

function send(id, password) {
    
    var http = new XMLHttpRequest();
    http.open("POST", location1 + "/Login");
    http.setRequestHeader("Content-type", "application/json");
    class login1 {
        ID = "";
        pass = "";
        constructor(ID, pass) {
            this.ID = ID;
            this.pass = pass;
        }
    }
    let login = new login1(id, password);
    http.send(JSON.stringify(login));
    onreadystatechange = (win, eve) => {
        document.body.innerHTML += http.responseText;
    };
}
function Login() {
    
    let Id = document.getElementById("sid");
    let Pass = document.getElementById("pass");
    send(Id.value, Pass.value);
}