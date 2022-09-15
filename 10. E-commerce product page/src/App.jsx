import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';

export const App = () => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartProductQuantity, setCartProductQuantity] = useState(0);
  return (
    <>
      <Navbar
        cartProductQuantity={cartProductQuantity}
        setCartProductQuantity={setCartProductQuantity}
      />
      <Product
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        setCartProductQuantity={setCartProductQuantity}
      />
    </>
  );
};
