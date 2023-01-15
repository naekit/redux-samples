import classes from "./Counter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const Counter = () => {
	const [amount, setAmount] = useState(1)
	const value = useSelector((state) => state.counter)
	const visibility = useSelector((state) => state.visible)
	const dispatch = useDispatch()

	const toggleDeviationHandler = () => {
		if (amount === 10) {
			setAmount(0)
		}
		setAmount((prevState) => prevState + 1)
	}

	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" })
	}

	const increaseHandler = () => {
		dispatch({ type: "increment", payload: amount })
	}
	const decreaseHandler = () => {
		dispatch({ type: "decrement", payload: amount })
	}
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{visibility && <div className={classes.value}>{value}</div>}
			<button onClick={decreaseHandler}>decrease</button>
			<button onClick={toggleDeviationHandler}>
				Toggle Deviation: {amount}
			</button>
			<button onClick={increaseHandler}>increase</button>
			<div>
				<button onClick={toggleCounterHandler}>Toggle Counter</button>
			</div>
		</main>
	)
}

export default Counter

// Class Based example
// class CounterC extends Component {
// 	increaseHandler() {
// 		this.props.increment()
// 	}
// 	decreaseHandler() {
// 		this.props.decrement()
// 	}
// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<button onClick={this.decreaseHandler.bind(this)}>
// 					decrease
// 				</button>
// 				<button onClick={this.toggleCounterHandler}>
// 					Toggle Counter
// 				</button>
// 				<button onClick={this.increaseHandler.bind(this)}>
// 					increase
// 				</button>
// 			</main>
// 		)
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: "increment" }),
// 		decrement: () => dispatch({ type: "decrement" }),
// 	}
// }

// export { Counter }
// export default connect(mapStateToProps, mapDispatchToProps)(CounterC)
