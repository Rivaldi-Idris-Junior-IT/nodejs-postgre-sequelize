const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = express('path');
const app = express();
const database = require('./src/Config/Database');


app.get('/', (req, res) => res.send("Welcome"));

// Berita Route
app.use('/berita', require('./src/Routes/Berita'));

database.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));