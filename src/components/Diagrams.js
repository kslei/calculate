import React, { useState } from 'react';
import Diagram from './Diagram';
import {provider} from '../UI/data';
import styles from '../styles/components/Diagrams.module.scss';

const Diagrams = ({storage, transfer}) => {
  const [price, setPrice] = useState([])
  const [color, setColor] = useState(0)
    
  var arr = price;
  const setSum =(i, sum) =>{
    arr[i] = sum;
    setPrice(arr);
    let min = Math.min.apply(window, arr);
    setColor(arr.indexOf(min));
  }
      
  return (
    <div className={styles.diagrams}>
      <div className={styles.wrapper}>
        {provider.map((item, i) =>
          <Diagram key={item.name} i={i} provider={item} storage={storage} transfer={transfer} color={color === i ? true : false} setSum={setSum}/>
        )}
      </div>
    </div>
  );
};
export default Diagrams;