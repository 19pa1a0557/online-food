const express = require('express')
const cors = require('cors')
const mongojs = require('mongojs')
const bodyparser = require('body-parser')

const app = express()

app.use(cors)
app.use(express.json())
app.use(express.json({ extended: false }));
app.use(
    cors({
        origin: '*',
    })
);
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// database setup
var cs="mongodb+srv://admin_ui:Kairos.ai@cluster0.pyahb.mongodb.net/Wireframe?retryWrites=true&w=majority"
var db=mongojs(cs,["users"])

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
    session({
      key: "user_sid", // cookies id 
      secret: "ssshhhhh",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 1000 * 6000 * 6000 * 1000000, // cookie expiration time in seconds
      },
    })
);

var sess; // declaring session variable

app.post('/signup', (req,res) => {
    var d = {
        firstname : req.body.firstname
    }
    db.users.find(d, function(err,docs){
        if(docs.length !== 0){
            res.send('already registered')
        }
        else{
            var e = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            }
            db.users.insert(e,function(err,docs){
                if(err){
                    res.send("sorry")
                }else{
                    res.send("registration completed")
                }
            })
        }
    })
})

app.post('/login', (req,res) => {

})

app.listen(5000)
