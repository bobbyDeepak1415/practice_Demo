import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increaseByAmount } from "./redux/CounterSlice";

function App() {
  const count = useSelector((state) => state.Counter.count.value);

  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2>Count is at:{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increaseByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
