import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as CartEmpty } from '../../assets/svg/cart-empty.svg';
import { ReactComponent as CartFull } from '../../assets/svg/cart-full.svg';

import './Cart.scss';

const Cart = (props) => {
  const { productsCart } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  }

  return (
    <>
      <Button variant="link" className="cart">
        {
          productsCart.length > 0 ? (
            <CartFull onClick={openCart} />
          ) : (
            <CartEmpty onClick={openCart} />
          )
        }
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>Todos mis productos...</div>
    </>
  )
}

export default Cart;
