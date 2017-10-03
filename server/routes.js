const router = require('express').Router()
const firebase = require('../firebase')

// const personController = require('path/to/personController')
const addPerson = (req, res) => {
  let name = req.params.name
  let key = firebase.personRef.push({
    a: name
  }).key

  res.json({
    key: key,
    name: name === undefined ? '-Unknown-' : name,
    age: 19
  })
}

const showPerson = async (req, res) => {
  let data = await firebase.personRef.once('value').then(snapshot => snapshot.val())
  const persons = Object.keys(data).map(key => data[key])
  res.json(persons)
}

// // --------------------------
// // |      PERSONS ROUTE.     |
// // --------------------------
router.route('/persons').get(showPerson)
router.route('/persons/:name').get(addPerson)

module.exports = router
