import Button from "./Button";
import styles from "./Button.module.css";
export default function Body({ dispatch }) {
  function handleNumber(e) {
    const number = e.target.innerHTML;
    dispatch({ type: "pushNumber", payload: number });
  }
  function hanldeClearCurrentScreen() {
    dispatch({ type: "clearCurrentNumber" });
  }
  function handleAllClear() {
    dispatch({ type: "AC" });
  }
  function handleMathOperation(e) {
    const operation = e.target.innerHTML;
    dispatch({ type: "mathOperation", payload: operation });
  }
  function calculate() {
    dispatch({ type: "calculate" });
  }
  return (
    <div className={styles.calculatorBody}>
      <Button handleClick={handleAllClear} buttonClass={styles.twoSlots}>
        AC
      </Button>
      <Button
        handleClick={hanldeClearCurrentScreen}
        buttonClass={styles.oneSlot}
      >
        C
      </Button>
      <Button handleClick={handleMathOperation} buttonClass={styles.oneSlot}>
        ÷
      </Button>

      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        7
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        8
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        9
      </Button>
      <Button handleClick={handleMathOperation} buttonClass={styles.oneSlot}>
        ×
      </Button>

      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        4
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        5
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        6
      </Button>
      <Button handleClick={handleMathOperation} buttonClass={styles.oneSlot}>
        +
      </Button>

      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        1
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        2
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        3
      </Button>
      <Button handleClick={handleMathOperation} buttonClass={styles.oneSlot}>
        -
      </Button>

      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        .
      </Button>
      <Button handleClick={handleNumber} buttonClass={styles.oneSlot}>
        0
      </Button>

      <Button handleClick={calculate} buttonClass={styles.twoSlots}>
        =
      </Button>
    </div>
  );
}
