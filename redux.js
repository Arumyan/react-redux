// node redux
const redux = require('redux');
const initialState = {
  counter: 0
}

// Reducer(state, action)
const reducer = (state = initialState, action) => {
  if(action.type ==='ADD'){
    return {
      counter: state.counter + 1
    }
  }

  if(action.type ==='SUB'){
    return {
      counter: state.counter - 1
    }
  }

  if(action.type ==='ADD_NUMBER'){
    return {
      counter: state.counter + action.value
    }
  }
  return state
}

// Store
const store = redux.createStore(reducer)
// console.log(store.getState())

// Subscription
store.subscribe(() => {
  console.log('Subscripbe:', store.getState())
})

// Actions
const addCounter = {
  type: 'ADD'
}

const subCounter = {
  type: 'SUB'
}

const addNumberCounter = {
  type: 'ADD_NUMBER',
  value: 10
}

store.dispatch(addNumberCounter)
store.dispatch(subCounter)
// console.log(store.getState())
