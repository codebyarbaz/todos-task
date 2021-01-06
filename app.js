require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const taskRouter = require("./routes/taskRouter");
const homeRouter = require("./routes/homeRouter");

const errController = require("./controllers/errorController");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/api/v1/tasks", taskRouter);
app.use("/", homeRouter);

app.use(errController.get404);
app.use(errController.get500);

app.listen(process.env.PORT, () => {
  console.log(`Server is started on port ${process.env.PORT}!`);
});
