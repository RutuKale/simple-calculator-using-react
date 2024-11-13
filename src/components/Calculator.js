import React, { useState } from 'react';
import style from './Calculator.module.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState("");

  const appendNumber = (number) => {
    setDisplayValue((prev) => prev + number);
  };

  const appendOperator = (operator) => {
    setDisplayValue((prev) => prev + operator);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  const backspace = () => {
    setDisplayValue((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString()); // Use caution with eval
    } catch {
      setDisplayValue("Error");
    }
}
  return (
    <div>
        <h1>Calculator</h1>
      <div className={style.calculator}>
        <input type="text" className={style.display} value={displayValue} disabled />
        <div className={style.button_row}>
          <button className={style.button} onClick={clearDisplay}>C</button>
          <button className={style.button} onClick={() => appendOperator('/')}>/</button>
          <button className={style.button} onClick={() => appendOperator('*')}>*</button>
          <button className={style.button} onClick={backspace}>←</button>
        </div>
        <div className={style.button_row}>
          <button className={style.button} onClick={() => appendNumber('7')}>7</button>
          <button className={style.button} onClick={() => appendNumber('8')}>8</button>
          <button className={style.button} onClick={() => appendNumber('9')}>9</button>
          <button className={style.button} onClick={() => appendOperator('-')}>-</button>
        </div>
        <div className={style.button_row}>
          <button className={style.button} onClick={() => appendNumber('4')}>4</button>
          <button className={style.button} onClick={() => appendNumber('5')}>5</button>
          <button className={style.button} onClick={() => appendNumber('6')}>6</button>
          <button className={style.button} onClick={() => appendOperator('+')}>+</button>
        </div>
        <div className={style.button_row}>
          <button className={style.button} onClick={() => appendNumber('1')}>1</button>
          <button className={style.button} onClick={() => appendNumber('2')}>2</button>
          <button className={style.button} onClick={() => appendNumber('3')}>3</button>
          <button className={style.button} onClick={() => appendOperator('%')}>%</button>
        </div>
        <div className={style.button_row}>
          <button className={`${style.button} ${style.wide}`} onClick={() => appendNumber('0')}>0</button>
          <button className={style.button} onClick={() => appendNumber('.')}>.</button>
          <button className={`${style.button} ${style.equal}`} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator;