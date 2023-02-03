import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/SLG_6850_web.jpg'}
        title={'Jackets'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/SLG_7207.jpg'}
        title={'Pants'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/IMG_5874b.jpg'}
        title={'Accessories'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/IMG_5849b.jpg'}
        title={'Merchandise'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
