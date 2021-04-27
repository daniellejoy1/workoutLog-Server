require('dotenv').config();
const Express = require('express');
const database = require('./db');
const userController = require('./controllers/userController');
const logController = require('./controllers/logController')

const app = Express();

database.sync();

// app.use(require());
app.use(Express.json());

app.use('/user', userController);

app.use('/log', logController);



app.listen(process.env.PORT, () => console.log(`[${process.env.PORT}]: a message`));