import db from './config/database.js';
import './models/UserModel.js';


console.log("Sync script started");

async function syncDatabase() {
  try {
    await db.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
}

syncDatabase().then(() => {
  console.log("Sync script finished");
});