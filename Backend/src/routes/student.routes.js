const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/student.controller');

router.get('/', studentController.findAll);

router.post('/', studentController.create);

router.get('/:student.email', studentController.findById);

router.put('/:student.email', studentController.update);

router.delete('/:student.email', studentController.delete);

module.exports = router