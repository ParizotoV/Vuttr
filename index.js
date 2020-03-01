const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const mongo = process.env.MONGODB || 'mongodb://localhost:27017/vuttr'
mongoose.Promise = global.Promise

const app = require('./app')

mongoose
	.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(port, () => console.log('Running port: ' + port))
	})
	.catch(e => {
		console.log(e)
	})