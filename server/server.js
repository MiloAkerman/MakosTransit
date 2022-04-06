// express lib
import express from "express";
const app = new express();

// bodyparset express config
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ???
import path from "path";
let startingloc = path.resolve("").replace("server", "");

// express router setup
const router = express.Router();
app.use("/", router);
app.use(express.static(startingloc));

// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";

// -------------------------- END BOILERPLATE -----------------------------------------------

// Set the AWS parameters
const params = {
    bucket: "carpool-project", // The name of the bucket. For example, 'sample_bucket_101'.
    key: "udata.json" // The name of the object. For example, 'sample_upload.txt'.
};

// serves login (init) page
// address: localhost, port: 3000
app.get("/", (req, res) => {
    res.sendFile(startingloc + "login.html");
}).listen(3000, "localhost");


// GET and POST handlers
router.get("/login", (req, res) => {   
    res.send("You are trying to access login page");
})
router.post("/login", (req, res) => {
    // TODO: integrate AWS S3

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

