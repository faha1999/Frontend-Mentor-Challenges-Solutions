import React, { useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import productImage from '../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/images/icon-delete.svg';

export const Cart = ({
  setOpenCart,
  cartProductQuantity,
  setCartProductQuantity,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenCart(false));

  return (
    <div className="cart" ref={ref}>
      <div className="cart__heading">
        <h4 className="fs-400 fw-700 darkGrayishBlue">Cart</h4>
      </div>
      <div className="cart__items grid">
        {cartProductQuantity === 0 ? (
          <p className="fs-400 fw-700 darkGrayishBlue m-auto">
            Your cart is empty
          </p>
        ) : (
          <div className="cart__item flex">
            <div className="item flex">
              <img src={productImage} alt="" />
              <div className="item__info">
                <p className="item__name fw-400 fs-400 line-height-500 darkGrayishBlue">
                  Fall Limited Edition Sneakers
                </p>
                <span className="d-inline-block fw-400 fs-400 line-height-500 darkGrayishBlue">
                  $125.00 x {cartProductQuantity}
                </span>{' '}
                <span className="fw-700 fs-400 line-height-500 blue">
                  ${125 * cartProductQuantity}.00
                </span>
              </div>
              <img
                onClick={() => setCartProductQuantity(0)}
                src={deleteIcon}
                alt=""
              />
            </div>

            <button className="btn flex fw-700 fs-400">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};
