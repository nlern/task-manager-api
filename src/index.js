const express = require('express');
// connect to db
require('./db/mongoose');

// routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

// setup app
const app = express();
const port = process.env.PORT;

// setup middlewares
app.use(express.json());
// routers
app.use(userRouter);
app.use(taskRouter);

// start app
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
