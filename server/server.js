import app from './app.js';
import { connectionDB } from './config/db.js';
import { client_port } from './secret.js';

app.listen(client_port, async (req, res) => {
  console.log(`server is running on A ${client_port} `);
  await connectionDB();
});
