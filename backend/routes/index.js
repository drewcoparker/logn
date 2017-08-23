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
    // Data sent in the request
    var email = req.body.email,
        password = req.body.password;
    // Find the email address in the backend and verify the password
    userData.findOne({email: email})
        .then((doc) => {
            var docObject = doc.toObject();
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
