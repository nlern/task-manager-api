const express = require('express');
// connect to db
require('./db/mongoose');

// routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

// setup app
const app = express();

// setup middlewares
app.use(express.json());
// routers
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
