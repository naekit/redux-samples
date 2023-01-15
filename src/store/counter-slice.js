import { createSlice } from "@reduxjs/toolkit"

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

export default counterSlice
