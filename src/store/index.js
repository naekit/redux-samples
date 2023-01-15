import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { counter: 0, visible: true }

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state, action) {
			state.counter += action.payload
		},
		decrement(state, action) {
			state.counter -= action.payload
		},
		toggle(state) {
			state.visible = !state.visible
		},
	},
})

const initialAuthState = {
	isAuth: false,
}

const authSlice = createSlice({
	name: "auth",
	initialAuthState,
	reducers: {
		login(state) {
			state.isAuth = true
		},
		logout(state, action) {
			state.isAuth = false
		},
	},
})

const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice },
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store

// const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "increment":
// 			return {
// 				counter: state.counter + action.payload,
// 				visible: state.visible,
// 			}
// 		case "decrement":
// 			return {
// 				counter: state.counter - action.payload,
// 				visible: state.visible,
// 			}
// 		case "toggle":
// 			return {
// 				counter: state.counter,
// 				visible: !state.visible,
// 			}
// 		default:
// 			return state
// 	}
// }
