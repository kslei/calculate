import React from 'react';
import Diagram from './Diagram';
import {provider} from '../UI/data';
import styles from '../styles/components/Diagrams.module.scss';

const Diagrams = ({storage, transfer}) => {
  
  return (
    <div className={styles.diagrams}>
      <div className={styles.wrapper}>
        {provider.map(item =>
          <Diagram key={item.name} provider={item} storage={storage} transfer={transfer} />
        )}
      </div>
    </div>
  );
};
export default Diagrams;