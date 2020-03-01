const express = require('express')
const router = express.Router()

const toolsController = require('../controllers/tools')
const Tool = require('../models/tool')

const models = {
	Tool
}

router.get('/', toolsController.index.bind(null, models))
router.post('/', toolsController.addTool.bind(null, models))
router.delete('/:id', toolsController.deleteById.bind(null, models))

module.exports = router