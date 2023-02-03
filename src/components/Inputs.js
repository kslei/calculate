import React from 'react';
import InputRange from '../forms/InputRange';
import styles from '../styles/components/Inputs.module.scss';


const Inputs = ({storage, setStorage, transfer, setTransfer}) => {
  
  return (
    <div className={styles.inputs}>
      <div className={styles.wrapper}>
        <InputRange name='Storage' min={0} max={1000} step={1} value={storage} setValue={setStorage} />
        <InputRange name='Transfer' min={0} max={1000} step={1} value={transfer} setValue={setTransfer} />
      </div>
    </div>
  );
};
export default Inputs;