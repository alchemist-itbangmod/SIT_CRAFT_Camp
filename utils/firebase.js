export function haveRegistration (firebase, user) {
  return firebase.database().ref().child(`registration/${user.uid}`)
    .once('value').then(snapshot => snapshot.val())
}

export function saveRegistration (firebase, user, registration) {
  return firebase.database().ref().child(`registration/${user.uid}`)
    .set({
      ...registration,
      registeredAt: firebase.database.ServerValue.TIMESTAMP
    })
    .then((data) => data)
}
