import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Actions/Dexin";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using react and redux</h4>

      <div className="mx-5">
        <a onClick={() => dispatch(decNumber())}>-</a>{" "}
        <input type="text" value={myState} />
        <a onClick={() => dispatch(incNumber())}>+</a>
      </div>
    </div>
  );
}

export default App;
