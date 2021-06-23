import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/importData">Import Data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/companies">Manage Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sectors">Manage Sectors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/stockExchanges">Manage Stock Exchanges</NavLink>
            </NavItem>


          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;