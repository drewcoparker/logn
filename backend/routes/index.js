var express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    mongoose = require('mongoose'),
    server = 'mongodb://localhost:27017/logn';
const SALT_WORK_FACTOR = 10;
// Mongo connection
mongoose.connect(server, (err) => {
    if (err) throw err;
    console.log(`\nConnected to ${server}`);
});

// Define a schema and a model
var Schema = mongoose.Schema;
var userSchema = new Schema({
        email: { type: String, required: true},
        password: { type: String, required: true },
        username: { type: String, required: true, index: { unique: true} },
        name: {
            first: { type: String, required: true},
            last: { type: String, required: true}
        },
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date}
    }, { collection: 'users' });

// Populate the created_at and/or updated_at fields before every save
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    // change the updated_at field to current date
    this.updated_at = currentDate;
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;
    next();
});

var User = mongoose.model('User', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get all users route (never called by the frontend)
router.get('/get-users', (req, res, next) => {
  User.find()
    .then((docs) => {
        res.json(docs);
    })
});

// Login router
router.post('/login', (req, res) => {
    // Data sent in the request
    var username = req.body.username,
        password = req.body.password;
    // Find the email address in the backend and verify the password
    User.findOne({username: username})
        .then((doc) => {
            bcrypt.compare(password, hash)
                .then((result) => {
                    console.log(result);
                    if (result) {
                        var docObject = doc.toJSON();
                        res.json({
                            login: true,
                            msg: 'Login successful',
                            name: docObject.username
                        });
                    } else {
                        res.json({
                            msg: 'Invalid password'
                        })
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.json({
                        msg: 'Invalid password'
                    });
                });
            // if (doc.password === password) {
            //     var docObject = doc.toJSON();
            //     res.json({
            //         login: true,
            //         name: docObject.username
            //     });
            // } else {
            //     res.json({
            //         msg: 'Invalid password'
            //     })
            // }
        })
        .catch((err) => {
            console.log(err);
            res.json({
                msg: 'Invalid username'
            });
        });
});

router.post('/register', (req, res) => {

    bcrypt.hash(req.body.password, SALT_WORK_FACTOR)
        .then((hash) => {
            console.log(hash);
            var newUser = new User ({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                name: {
                    first: req.body.firstName,
                    last: req.body.lastName
                }
            });
            newUser.save()
                .then((doc) => {
                    console.log(doc);
                    res.json({
                        msg: 'New user created'
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.json({
                        msg: 'Registration failed'
                    });
                });
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;
