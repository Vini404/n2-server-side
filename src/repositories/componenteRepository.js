import { openDb } from '../config/database.js';

export class ComponenteRepository {
  async findAll() {
    const db = await openDb();
    return db.all('SELECT * FROM componente');
  }

  async findById(id) {
    const db = await openDb();
    return db.get('SELECT * FROM componente WHERE codigo_componente = ?', [id]);
  }

  async findByName(name) {
    const db = await openDb();
    return db.all(
      'SELECT * FROM componente WHERE nome_componente LIKE ?',
      [`%${name}%`]
    );
  }

  async create({ nome_componente, desc_componente }) {
    const db = await openDb();
    const result = await db.run(
      'INSERT INTO componente (nome_componente, desc_componente) VALUES (?, ?)',
      [nome_componente, desc_componente]
    );
    return { codigo_componente: result.lastID, nome_componente, desc_componente };
  }

  async update(id, { nome_componente, desc_componente }) {
    const db = await openDb();
    await db.run(
      'UPDATE componente SET nome_componente = ?, desc_componente = ? WHERE codigo_componente = ?',
      [nome_componente, desc_componente, id]
    );
  }

  async delete(id) {
    const db = await openDb();
    await db.run('DELETE FROM componente WHERE codigo_componente = ?', [id]);
  }
}
