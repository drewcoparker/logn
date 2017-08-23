var express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10,
    mongoose = require('mongoose'),
    server = 'mongodb://localhost:27017/logn';

// Mongo connection
mongoose.connect(server, (err) => {
    if (err) throw err;
    console.log(`\nConnected to ${server}`);
});

// Define a schema
var Schema = mongoose.Schema,
    userDataSchema = new Schema({
        email: { type: String, required: true, index: { unique: true} },
        password: { type: String, required: true },
    }, { collection: 'users' }),
    userData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get all users route (never called by the frontend)
router.get('/get-users', (req, res, next) => {
  userData.find()
    .then((docs) => {
        console.log(docs);
    })
});

// Login router
router.all('/login', (req, res, next) => {
    console.log('hello');
    var email = req.body.email,
        password = req.body.password;
    // var email = 'drew.i.parker@gmail.com',
    //     password = 'thruhike<';
    userData.findOne({email: email})
        .then((doc) => {
            var docObject = doc.toObject();
            // res.render('index', { title: 'Welcome.', msg: `${docObject.username} now logged in.` });
            res.json({
                login: true,
                name: docObject.username
            });
        })
        .catch((err) => {
            res.json({
                msg: 'err'
            });
        });
});

module.exports = router;
