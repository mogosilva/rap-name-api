const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const rappers ={ 
	'21 savage': {

		'birthName': 'Sheyaa Bin Abraham-Joseph',
		'birthLocation' : 'London, England',
		'age' : 29,
	},
	'chance the rapper': {
		'birthName': 'Chancelor Bennett',
		'birthLocation' : 'Chicago, Illinois',
		'age' : 29,
	},
	'unknown' : {
		'birthName': 'unknown',
		'birthLocation' : 'unknown',
		'age' : 'unknown',
	}
}

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
	const rapperName = request.params.name.toLocaleLowerCase()
	response.json( rappers[rapperName] ? rappers[rapperName] : rappers['unknown'] )
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})