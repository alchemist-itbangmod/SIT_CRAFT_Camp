export function haveRegistration (firebase, user) {
  return firebase.database().ref().child(`topics/${user.uid}`)
    .once('value').then(snapshot => snapshot.val())
}

export function saveRegistration (firebase, user, registration) {
  return firebase.database().ref().child(`topics/${user.uid}`)
    .set({
      ...registration,
      registeredAt: new Date()
    })
    .then((data) => data)
}
