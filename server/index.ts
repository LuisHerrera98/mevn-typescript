import app from './app'
import { startConection } from './database'
const port = 3000;

startConection();
app.listen(port);
console.log("Server running on port: " + port);
