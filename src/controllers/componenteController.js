import { ComponenteService } from '../services/componenteService.js';

const service = new ComponenteService();

export const ComponenteController = {
  listar: async (req, res) => {
    try {
      const componentes = await service.listar();
      res.json(componentes);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const componente = await service.buscarPorId(req.params.id);
      res.json(componente);
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  },

  buscarPorNome: async (req, res) => {
    try {
      const { nome } = req.query;
      const resultados = await service.buscarPorNome(nome);
      res.json(resultados);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  criar: async (req, res) => {
    try {
      const novo = await service.criar(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  atualizar: async (req, res) => {
    try {
      await service.atualizar(req.params.id, req.body);
      res.json({ mensagem: 'Atualizado com sucesso' });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  excluir: async (req, res) => {
    try {
      await service.excluir(req.params.id);
      res.json({ mensagem: 'Removido com sucesso' });
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  },
};