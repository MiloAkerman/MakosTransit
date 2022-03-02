const express = require("express");
const app = new express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
let path = require("path");

let startingloc = path.resolve("").replace("server", "");
console.log(startingloc);
app.use("/", router);
class Login12 {
     ID = "";
    pass = "";
    constructor(ID, pass) {
        this.ID = ID;
        this.pass = pass;
    }
}
let logintester = new Login12("1234", "test");
let databaseinfo = new Array();
databaseinfo.push(logintester);

app.use(express.static(startingloc));

app.get("/", (req, res) => {

    res.sendFile(startingloc + "login.html");
}).listen(1000, "localhost");
router.get("/login", (req, res) => {
   
    res.send("<script type = 'text/javascript'> localStorage.setItem('session_token', 'testing'); document.location.href = 'login.html';</script>");
})
router.post("/Video", (req, res) => {
    
    console.log(req.body);
})
router.post("/Login", (req, res) => {
    let bool = false;
    databaseinfo.forEach(login => {
        console.log(req.body);
        console.log(req.body.ID);
        console.log(req.body.sid);
        if (login.ID.toString() == req.body.sid.toString()) {
            if (req.body.pass = login.pass) {
                bool = true;
            }
        }
    });
    setTimeout(() => {
        if (bool == true) {
            

            setTimeout(() => { res.send("<script type = 'text/javascript'> document.location.href = 'home.html'; </script>"); }, 1000);
            
        }
        else {
            res.send("<script type = 'text/javascript'> document.location.href = 'login.html'; </script>")
        }
    }, 1000);

});

