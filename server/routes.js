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
// // |   CANDIDATE FUNCTION.   |
// // --------------------------
// show all candidates
const showAllCandidate = async (req, res) => {
  let data = await firebase.candidateRef.once('value').then(snapshot => snapshot.val())
  const candidates = await Object.keys(data).map(key => {
    let tem = {
      key: key,
      ...data[key]
    }
    return tem
  })

  res.json(candidates)
}

// add candidate
const addCandidate = (req, res) => {
  // res.json({
  //   message: 'response'
  // })
  let key = firebase.candidateRef.push(req.body.data).key
  // console.log(req)
  res.json({
    key: key
  })
  // let key = firebase.personRef.push({
    // a: name
  // }).key
}

// // --------------------------
// // |    CANDIDATE ROUTE.     |
// // --------------------------
router.route('/candidates').get(showAllCandidate)
router.route('/candidates/:name').get(addCandidate)
router.route('/candidates').post(addCandidate)

// // --------------------------
// // |      PERSONS ROUTE.     |
// // --------------------------
router.route('/persons').get(showPerson)
router.route('/persons/:name').get(addPerson)

module.exports = router
