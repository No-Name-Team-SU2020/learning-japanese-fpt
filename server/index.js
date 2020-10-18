const express = require('express');
const app = express();
const cors = require('cors');

//Database
const db = require('./db');

//Test Database
db.authenticate()
    .then(() => console.log('Database connect successfully!'))
    .catch(err => console.log('Error' + err))

//middleware
app.use(express.json());
app.use(cors());

app.use(require('./routes/userRoute.js'));
//app.use('/admin', require('./routes/adminRoute.js'));

app.listen(3000, () => {
    console.log('Listening to port 3000');
});