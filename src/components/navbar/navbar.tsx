import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtnLink,
} from './navbar.styles';

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">TourBay</NavLogo>
        <MobileIcon onClick={handleClick}>
          {show ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </MobileIcon>
        <NavMenu show={show}>
          <NavItem>
            <NavLinks>
              <NavBtnLink to="/">Tours</NavBtnLink>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavBtnLink to="/my-tours">My Tours</NavBtnLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};
