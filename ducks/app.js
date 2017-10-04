import actionCreator from '../utils/actionCreator'

// Actions
const appAction = actionCreator('app')
const IS_LOADING = appAction('IS_LOADING')
const DONE_LOADING = appAction('DONE_LOADING')

// InitialState
let InitialState = {
  loading: true
}

export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: true
      }
    }

    case DONE_LOADING:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export const actions = {
  isLoading: () => ({
    type: IS_LOADING
  }),
  doneLoading: () => ({
    type: DONE_LOADING
  })
}
