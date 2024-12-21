const express = require('express');
const taskController = require('../controllers/taskController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get('/', authenticate, taskController.getAllTasks);
router.get('/:id', authenticate, taskController.getTaskById);
router.post('/', authenticate, taskController.createTask);
router.put('/:id', authenticate, taskController.updateTask);
router.delete('/:id', authenticate, taskController.deleteTask);

module.exports = router;
