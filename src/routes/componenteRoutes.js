import express from 'express';
import { ComponenteController } from '../controllers/componenteController.js';

const router = express.Router();

router.get('/', ComponenteController.listar);
router.get('/search', ComponenteController.buscarPorNome);
router.get('/:id', ComponenteController.buscarPorId);
router.post('/', ComponenteController.criar);
router.put('/:id', ComponenteController.atualizar);
router.delete('/:id', ComponenteController.excluir);

export default router;