import app from './app.js';
import { initDb } from './config/database.js';

const PORT = 3000;

initDb().then(() => {
  app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
});
