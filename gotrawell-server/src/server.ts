import app from "./app";
import sequalize from "./utils/database";

const PORT = 8080;

const startServer = async () => {
  sequalize.sync().then(async () => {
    console.log('Database synced');
    try {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error("Error starting server:", error);
    }
  });
};

startServer();
