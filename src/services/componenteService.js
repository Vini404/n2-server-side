import { ComponenteRepository } from '../repositories/componenteRepository.js';

export class ComponenteService {
  constructor() {
    this.repository = new ComponenteRepository();
  }

  async listar() {
    return this.repository.findAll();
  }

  async buscarPorId(id) {
    const componente = await this.repository.findById(id);
    if (!componente) throw new Error('Componente não encontrado');
    return componente;
  }

  async buscarPorNome(nome) {
    return this.repository.findByName(nome);
  }

  async criar(data) {
    if (!data.nome_componente) throw new Error('Nome é obrigatório');
    return this.repository.create(data);
  }

  async atualizar(id, data) {
    await this.buscarPorId(id);
    await this.repository.update(id, data);
  }

  async excluir(id) {
    await this.buscarPorId(id);
    await this.repository.delete(id);
  }
}
