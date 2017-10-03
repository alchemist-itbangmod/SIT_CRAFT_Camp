import actionCreator from '../utils/actionCreator'

// Actions
const registerAction = actionCreator('register')
const SET_FIELD = registerAction('SET_FIELD')
const SET_STEP = registerAction('SET_STEP')

// InitialState
let InitialState = {
  currentStep: 1,
  // Team
  team: '',
  // Profile
  email: '',
  name: '',
  surname: '',
  nickname: '',
  citizenID: '',
  gender: '',
  religion: '',
  school: '',
  grade: '',
  GPAX: '', // ยังไม่ได้ใส่
  // Contact
  address: '',
  district: '',
  province: '',
  zipcode: '',
  telno: '',
  // Interesting
  activities: '',
  talent: '',
  shirtSize: '',
  needStayInUniversity: false,
  // Team Question
  questions: []
}

// Reducer
export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case SET_FIELD: {
      return {
        ...state,
        [action.field]: action.value
      }
    }

    case SET_STEP:
      return {
        ...state,
        currentStep: action.step
      }

    default:
      return state
  }
}

// Action Creators
export const actions = {
  setField: (field, value) => ({
    type: SET_FIELD,
    field,
    value
  }),
  navigateStep: step => ({
    type: SET_STEP,
    step
  })
}
