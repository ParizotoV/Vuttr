const mongoose = require('mongoose')

const ToolSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	link: String,
	description: String,
	tags: [String]
})

const Tool = mongoose.model('Tool', ToolSchema);

module.exports = Tool