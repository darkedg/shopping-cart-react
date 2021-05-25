import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import './TopMenu.scss';

const TopMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
      </Container>
    </Navbar>
  )
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <h2>La casa de las camisas</h2>
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#">Camisas</Nav.Link>
      <Nav.Link href="#">Camisetas</Nav.Link>
      <Nav.Link href="#">Polos</Nav.Link>
    </Nav>
  )
}

export default TopMenu;
