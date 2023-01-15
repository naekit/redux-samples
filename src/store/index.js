import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-slice"
import counterSlice from "./counter-slice"

const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
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
