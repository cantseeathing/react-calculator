import styles from "./Button.module.css";

export default function Button({ handleClick, buttonClass, children }) {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`${styles.button} ${buttonClass}`}
    >
      {children}
    </button>
  );
}
