import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state >0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};
const UseReducer = () => {
  // const[myNum, setMyNum] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR ME
        </div>
        <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR ME
        </div>
      </div>
    </>
  );
};
export default UseReducer;
