import connectDB from '#config/db.js';
import '#config/env.js';
import httpServer from '#config/http.js';

const bootstrap = async () => {
  await connectDB(process.env.MONGODB_URL)
  httpServer.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT)
  })
};
bootstrap();