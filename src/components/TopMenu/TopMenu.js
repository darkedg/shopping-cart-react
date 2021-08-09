import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Cart from '../Cart/Cart';

import './TopMenu.scss';

const TopMenu = (props) => {
  const { productsCart, getProductsCart, products } = props;

  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        {/* <MenuNav /> */}
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <h2>La casa de las camisas</h2>
    </Navbar.Brand>
  );
}

// function MenuNav() {
//   return (
//     <Nav className="mr-auto">
//       <Nav.Link href="#">Camisas</Nav.Link>
//       <Nav.Link href="#">Camisetas</Nav.Link>
//       <Nav.Link href="#">Polos</Nav.Link>
//     </Nav>
//   )
// }

export default TopMenu;
