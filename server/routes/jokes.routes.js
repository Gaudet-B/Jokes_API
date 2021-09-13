const JokeController = require('../controllers/jokes.controller')
const Joke = require('../models/jokes.model')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.get('/api/jokes/:_id', JokeController.findJoke)
    app.get('/api/jokes/random', JokeController.findRandom)
    app.post('/api/jokes/new', JokeController.createJoke)
    app.put('/api/jokes/update/:id', JokeController.updateJoke)
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}