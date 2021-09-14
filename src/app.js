const express = require('express');
// set up rate limiter: maximum of five requests per minute
const RateLimit = require('express-rate-limit');
// connect to db
require('./db/mongoose');

// routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

// setup app
const app = express();

// setup middlewares
app.use(express.json());
// apply rate limiter to all requests
const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
});
app.use(limiter);

// routers
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
