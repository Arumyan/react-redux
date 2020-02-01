import {ADD, ADD2, SUB, ADD_NUMBER} from './actionTypes'

// ACTION CREATOR
export function add() {
  return {
    type: ADD
  }
}

export function add2(number) {
  return {
    type: ADD2,
    payload: number
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number
  }
}