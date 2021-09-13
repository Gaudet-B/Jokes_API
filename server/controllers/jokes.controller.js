const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((jokes) => res.json({ jokes: jokes }))
        .catch((err) => res.json({ message: "Something went wrong retreiving ALL JOKES.", error: err }))
}

module.exports.findJoke = (req, res) => {
    Joke.find({ _id: req.params.id })
        .then(joke => res.json({ joke }))
        .catch(err => res.json({ message: "Something went wrong retreiving ONE JOKE.", error: err }))
}

module.exports.findRandom = (req, res) => {
    Joke.aggregate([ { $sample: {size: 1} } ])
        .then((randomJoke) => res.json({ randomJoke: randomJoke }))
        .catch(err => res.json({ message: "Something went wrong retreiving RANDOM JOKE", error: err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json({ newJoke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong making a NEW JOKE", error: err }))
}

module.exports.updateJoke = (req, res) => {
    Joke.updateOne({ _id: req.params.id }, req.body)
        .then(updatedJoke => res.json({ updatedJoke: updatedJoke}))
        .catch(err => res.json({ message: "Something went wrong UPDATING.", error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong DELETING", error: err }))
}