const express = require('express');
const app = express();
const cors = require('cors');
const checkAdmin = require('./middleware/checkAdmin');
const checkTeacher = require('./middleware/checkTeacher');

//Database
const db = require('./db');

//Test database connection
db.authenticate()
    .then(() => console.log('Database connect successfully!'))
    .catch(err => console.log('Error' + err))

app.use(express.json());
app.use(cors());

app.use(require('./routes/userRoute.js'));
app.use('/admin', checkAdmin, require('./routes/adminRoute.js'));
// app.use('/teacher', checkTeacher, require('./routes/teacherRoute.js'));

app.listen(3000, () => {
    console.log('Listening to port 3000');
});
