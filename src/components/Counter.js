import classes from "./Counter.module.css"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
	const value = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	const toggleCounterHandler = () => {
		alert(value)
	}

	const increaseHandler = () => {
		dispatch({ type: "increment" })
	}
	const decreaseHandler = () => {
		dispatch({ type: "decrement" })
	}
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{value}</div>
			<button onClick={decreaseHandler}>decrease</button>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
			<button onClick={increaseHandler}>increase</button>
		</main>
	)
}

export default Counter
