const index = async ({ Tool }, req, res) => {
	const { tag } = req.query
	const tools = tag ? await Tool.find({ tags: { $all: [tag] } }) : await Tool.find({})
	if (tools) {
		if (tools.length > 0) {
			res.send(tools)
		} else {
			res.send({
				success: true,
				message: 'No tools registered.'
			})
		}
	} else {
		res.send({
			success: false
		})
	}
}

/* 
const findByTag = async ({ Tool }, req, res) => {
	console.log('req.params', req.params)
	const tools = await Tool.find({ tags: { $all: [req.params.name] } })
	if (tools) {
		if (tools.length > 0) {
			res.send({
				status: '201 Created',
				data: tools
			})
		} else {
			res.send({
				success: true,
				message: 'No tools registered.'
			})
		}
	} else {
		res.send({ success: false })
	}
}
*/

const addTool = async ({ Tool }, req, res) => {
	const { title, link, description, tags } = req.body
	const tool = Tool.find({ title })
	if (tool.length > 0) {
		res.send({
			success: true,
			message: 'Already registered.'
		})
	} else {
		const newTool = new Tool({
			title,
			link,
			description,
			tags
		})
		try {
			await newTool.save()
			res.send(newTool)
		} catch (e) {
			res.send({
				success: false,
				message: 'Saving failed.',
				error: e
			})
		}
	}
}

const deleteById = async ({ Tool }, req, res) => {
	const tool = await Tool.findOne({ _id: req.params.id })
	if (tool) {
		try {
			await Tool.deleteOne({ _id: req.params.id })
			res.send({
				success: true,
				status: '204 No Content'
			})
		} catch (e) {
			res.send({
				success: false,
				error: e
			})
		}
	} else {
		res.send({
			success: false,
			message: 'Not registered.'
		})
	}
}

module.exports = {
	index,
	addTool,
	deleteById
}