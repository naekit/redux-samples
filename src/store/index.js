import { createStore } from "redux"

const initialState = { counter: 0, visible: true }

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "increment":
			return {
				counter: state.counter + action.payload,
				visible: state.visible,
			}
		case "decrement":
			return {
				counter: state.counter - action.payload,
				visible: state.visible,
			}
		case "toggle":
			return {
				counter: state.counter,
				visible: !state.visible,
			}
		default:
			return state
	}
}

const store = createStore(counterReducer)

export default store
