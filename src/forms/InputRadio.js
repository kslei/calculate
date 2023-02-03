import React from 'react';
import styles from '../styles/forms/InputRadio.module.scss';

const InputRadio = ({ storagePrice, name, value, setValue }) => {
  
  return (
  <div className={styles.inputs}>
    {storagePrice.map((item, i)=> 
      <label key={item.name} className={styles.form_radio_hidden}>
        <input type="radio" id={item.name} name={name} value={item.price} onChange={e=> setValue(e.target.value)} checked={value == item.price && 'checked'} />
          <span className={styles.radio}></span>
          <span className={styles.text}>{item.name}</span>
      </label> 
    )}
  </div>
  );
};
export default InputRadio;