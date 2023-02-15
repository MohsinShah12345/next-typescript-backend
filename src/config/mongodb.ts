import process from "process";

const mongoose = require("mongoose");
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDb Connected", process.env.MONGO_DB_CONNECTION_STRING);
} catch (error) {
  console.log("Cannot connect to mongodb", error);
}
