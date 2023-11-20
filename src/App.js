import "./App.css";
import Screen from "./components/Screen.jsx";
import Body from "./components/Body.jsx";
import { useReducer } from "react";

const initialState = {
  result: null,
  currentScreen: "",
  previousResult: "",
};
const operations = ["+", "-", "×", "÷"];

function reducer(state, action) {
  switch (action.type) {
    case "clearCurrentNumber": {
      return {
        ...state,
        currentScreen: initialState.currentScreen,
      };
    }
    case "pushNumber": {
      // DECIMAL POINT CONDITION
      if (action.payload === "." && [...state?.currentScreen].includes(".")) {
        return state;
      }
      // MULTIPLE ZEROES CONDITION
      if (
        action.payload === "0" &&
        [...state?.currentScreen].includes("0") &&
        ![...state?.currentScreen].includes(".")
      ) {
        return state;
      }
      return {
        ...state,
        currentScreen: state.currentScreen + action.payload,
      };
    }
    case "AC": {
      return {
        ...initialState,
      };
    }
    case "mathOperation": {
      return {
        ...state,
        currentScreen: state.currentScreen + action.payload,
      };
    }
    case "calculate": {
      // IF THE SCREEN IS EMPTY
      if (state.currentScreen === "") return state;
      // IF NO OPERATION IS APPLIED
      if (
        !state.currentScreen?.split("").some((element) => {
          return operations.indexOf(element) !== -1;
        })
      )
        return state;
      // LAST INPUT IS A CONDITION AND NOT A NUMBER
      if (
        operations.includes(state.currentScreen[state.currentScreen.length - 1])
      ) {
        return state;
      }
      // DIVISION BY ZERO CONDITION
      if (
        state.currentScreen[state.currentScreen.length - 1] === "0" &&
        state.currentScreen[state.currentScreen.length - 2] === "÷"
      ) {
        return state;
      }
      const result = () => {
        let res = null;
        let numbers = "";
        let mathOperations = [];
        for (let i = 0; i < state.currentScreen.length; i++) {
          if (operations.includes(state.currentScreen[i])) {
            mathOperations.push(state.currentScreen[i]);
            numbers += "_";
          } else {
            numbers += state.currentScreen[i];
          }
        }
        for (let i = 0; i < numbers.split("_").length - 1; i++) {
          if (mathOperations[i] === "+") {
            res =
              Number(numbers.split("_")[i]) + Number(numbers.split("_")[i + 1]);
          } else if (mathOperations[i] === "-") {
            res =
              Number(numbers.split("_")[i]) - Number(numbers.split("_")[i + 1]);
          } else if (mathOperations[i] === "×") {
            res =
              Number(numbers.split("_")[i]) * Number(numbers.split("_")[i + 1]);
          } else if (mathOperations[i] === "÷") {
            res =
              Number(numbers.split("_")[i]) / Number(numbers.split("_")[i + 1]);
          }
        }
        // DECIMALS MORE THAN 8 DIGITS CASE
        if (String(res).length >= 8) return String(res.toFixed(6));
        return String(res);
      };
      return {
        ...state,
        previousResult: state.currentScreen,
        currentScreen: result(),
      };
    }
    default:
      throw new Error("Unknown action..");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Screen state={state} />
      <Body dispatch={dispatch} />
    </div>
  );
}

export default App;
