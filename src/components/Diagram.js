import React, { useState } from 'react';
import InputRadio from '../forms/InputRadio';
import styles from '../styles/components/Diagram.module.scss';

const Diagram = ({provider, storage, transfer}) => {
  let defaultStoragePrice;
  Array.isArray(provider.storagePrice) ? defaultStoragePrice = provider.storagePrice[0].price : defaultStoragePrice = provider.storagePrice;
  
  const [storagePrice, setStoragePrice] = useState(defaultStoragePrice);
  let storageP;
  let transferP;
  let sum;
    
  if (provider.storageMin) {
    if (storage <= provider.storageMin) {
      storageP = 0;
    } else {
      storageP = (storage - provider.storageMin) * storagePrice;
    }
  } else {
    storageP = storage * storagePrice;
  }
  
  if (provider.transferMin) {
    if (transfer <= provider.transferMin) {
      transferP = 0;
    } else {
      transferP = (transfer - provider.transferMin) * provider.transferPrice;
    }
  } else {
    transferP = transfer * provider.transferPrice;
  }
  sum = storageP + transferP;
  if (provider.minPayment && sum <= provider.minPayment) { sum = provider.minPayment };
  if (provider.maxPayment && sum >= provider.maxPayment) { sum = provider.maxPayment };
  let res = Math.floor(sum * 100) / 100
 
  return (
    <div className={styles.diagram}>
      <div className={styles.diagram__chart}>
        <div className={styles.diagram__chart_dia} style = {window.innerWidth > 768 ? {width: sum +'%'} : {height: sum +'%'}}></div>
        <div className={styles.diagram__chart_value}>${res}</div>
      </div>
      <div className={styles.diagram__icon} style={{background: provider.background}}>
        <img src={provider.img} alt="#"/>
      </div>
      <div className={styles.diagram__title}>
        <div className={styles.diagram__title_name}>{provider.name.split('.')[0]}</div>
        {Array.isArray(provider.storagePrice) &&
          <InputRadio storagePrice={provider.storagePrice} name={provider.name} value={storagePrice} setValue={setStoragePrice} />
        }
      </div>
    </div>
  );
};
export default Diagram;