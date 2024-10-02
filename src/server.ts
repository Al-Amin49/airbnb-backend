import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";


async function main() {
  try {
   const connection= await mongoose.connect(config.db_url as string);
   const dbHost=connection.connection.host;

    app.listen(config.port, () => {
      console.log(`Airbnb listening on port ${config.port} and hosted on ${dbHost}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();