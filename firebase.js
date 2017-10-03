
var admin = require('firebase-admin')

var serviceAccount = process.env.FIREBASE_PRIVATE_KEY
 ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
 : require('./sit-craft-camp-firebase-adminsdk-mgfw6-a890638f35.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sit-craft-camp.firebaseio.com'
})

const db = admin.database()
const personRef = db.ref('person')

module.exports = {
  personRef
}
