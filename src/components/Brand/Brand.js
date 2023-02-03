import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <img src="/logo_langlitz.png"/>
      {/* <h4>SYDNEY</h4> */}
 
    </div>
  );
};

export default Brand;
