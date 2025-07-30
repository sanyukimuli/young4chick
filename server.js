//1. Dependencies 
require('dotenv').config(); 
const express = require('express'); // helps you to build get and post routes and handle requests and responses
const mongoose = require('mongoose'); // connects you to a mongoDB database so you can using models and schemas run database operations 
const session = require('express-session'); // keeps users logged in while they browse 
const passport = require('passport'); // handles identity checking - checks through who can enter and who cannot 
const path = require('path');
const ensureLogin = require('connect-ensure-login'); // works with passport to ensure only logged in users can use certain routes
const moment = require('moment'); // used to format and manipulate dates and times 

//import user model - a structure (defined in users.js) for users in mongoDB database
const User = require('./models/User');

//import routes - these make the route exist, then app.use below will give it a link so the browser can run it
const farmerRoutes = require('./routes/farmerRoutes');
const authRoutes = require('./routes/authRoutes');
const managerRoutes = require('./routes/managerRoutes');
const salesRoutes = require('./routes/salesRepRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const expressSession = require('express-session')({
  secret: 'young4chick',
  resave: false,
  saveUninitialized: false});

//2. Instantiations
const app = express(); // allows you to CRUD 
const port = 3001; // gives you an empty port to use 

//3. Configurations - which tell all the things you've installed how to behave in your app 
mongoose.connect(process.env.DATABASE);
mongoose.connection.once('open', ()=>{ //once connection is open i.e. succesful
console.log('Mongoose connection open')
})
.on('error', (error)=>{
console.error(`Connection error: ${error.message}`)
});

app.set('view engine', 'pug'); // setting pug as the view engine
app.set('views', path.join( __dirname, 'views')); //saying our front endpages will be found here 

//4. Middleware - checks or modifies things before the route handles the request. order is key!
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//express and passport session configs 
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// Passport-local-mongoose handles auth logic 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//5. Routes - using the rotues . app use gives it a link so the browser can run it

app.use('/farmer', farmerRoutes);
app.use('/', loginRoutes);
app.use('/', registerRoutes);


app.get('/', (req, res) => {
  res.render('index'); // this tells Express to look for views/index.pug
});

//6. Bootstrapping the server 
// always the last line in the file because it starts the server 
app.listen(port, () => console.log(`listening on port ${port}`));


// list of things that were npm installed:
// mongoose connect-ensure-login express-session passport-local-mongoose dotenv passport pug express nodemon mongodb