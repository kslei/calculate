import React, { useEffect, useState } from 'react';
import InputRadio from '../forms/InputRadio';
import styles from '../styles/components/Diagram.module.scss';

const Diagram = ({i, provider, storage, transfer, color, setSum}) => {
  
  let defaultStoragePrice;
  Array.isArray(provider.storagePrice) ? defaultStoragePrice = provider.storagePrice[0].price : defaultStoragePrice = provider.storagePrice;
  
  const [storagePrice, setStoragePrice] = useState(defaultStoragePrice);
  let storageP;
  let transferP;
  let sum;
  
  useEffect(()=>{
    setSum(i, sum)
  }, [storage, transfer, storagePrice, sum])

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

  let res = Math.floor(sum * 100) / 100;

  let diaStyle;
  if (window.innerWidth > 768 && color) {diaStyle = { width: sum + '%' , backgroundColor: provider.colorMin}};
  if (window.innerWidth > 768 && !color) {diaStyle = { width: sum + '%'}};
  if (window.innerWidth <= 768 && color) {diaStyle = { height: sum + '%' , backgroundColor: provider.colorMin}};
  if (window.innerWidth <= 768 && !color) {diaStyle = { height: sum + '%'}};

  return (
    <div className={styles.diagram}>
      <div className={styles.diagram__chart} >
        <div className={styles.diagram__chart_dia} style = {diaStyle}></div>
        <div className={styles.diagram__chart_value}> ${res}</div>
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