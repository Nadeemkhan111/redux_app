import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/indexAction";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Nadeem</h1>
      <div>
        <button title="Decrement" onClick={() => dispatch(decNumber(2))}>
          -
        </button>
        <input value={myState} />
        <button title="Increment" onClick={() => dispatch(incNumber(2))}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
