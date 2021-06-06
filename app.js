const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const pred = require('./routes/predict')
const ngrok = require('ngrok')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use('/static', express.static(`${__dirname}/static`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/predict', pred);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on port 3000!');
});

ngrok.connect(3000).then((url) => {
    console.log(url)
});