const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(require('./routes/userRoute.js'));

app.listen(3000, () => {
    console.log('Listening to port 3000');
});