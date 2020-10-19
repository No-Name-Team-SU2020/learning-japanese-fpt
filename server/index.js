const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//Test database connection
db.authenticate()
    .then(() => console.log('Database connect successfully!'))
    .catch(err => console.log('Error' + err))

app.use(express.json());
app.use(cors());

app.use(require('./routes/userRoute.js'));

app.listen(3000, () => {
    console.log('Listening to port 3000');
});