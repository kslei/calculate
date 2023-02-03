import React from 'react';
import styles from '../styles/forms/InputRange.module.scss';


const InputRange = ({name, max, min, step, value, setValue}) => {
  
  
  return (
    <div className={styles.input}>
      <div>
        <label>{name}: </label>
        <output className={styles.output}>{value} GB</output>
      </div>
      <input type="range" name={name} id={name} min={min} max={max} step={step} value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  );
};
export default InputRange;