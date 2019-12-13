
const express = require('express'); // Make the comunication with a server to create petitions
const path = require('path'); // Make the paths for the paths to create the petitions
const bodyParser = require('body-parser'); // Parses the information in the body of petitions
const cors = require('cors'); // Cross-Origin Resource Sharing needed for express to get headers
const passport = require('passport'); // Strategy for authenticating with a JSON Web Token.
const mongoose = require('mongoose'); // MongoDB object modeling tool designed to work in an asynchronous environment.
const config = require('./config/database'); // Configuration of the database

// Connect to the database
/*mongoose.connect(config.database, {
  useNewUrlParser: true
});*/
mongoose.connect(config.database, {dbName: 'planedu'});

// Connect to the database and log out if it was successful
mongoose.connection.on('connected', () => {
  console.log('Connected to the database ' + config.database);
});

// Logout if the connect was failed
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Initialize Express
const app = express();

// Create the routing for the petitions in users URL
const users = require('./routes/users');

// Set the port that you want to start the service app
const port = 3000;

// CORS Middleware added to express
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser Middleware
app.use(bodyParser.json());

// Estrategia de autenticación con Passport basada en JSON Web Token
app.use(passport.initialize());
app.use(passport.session());

// Recoge la configuración establecida para passport
require('./config/passport')(passport);

// Use users as the domain to make the petitions
app.use('/users', users);

// Index Route / show as invalid end point
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server on the port setted
app.listen(port, () => {
  console.log('Server started on port ' + port);
});