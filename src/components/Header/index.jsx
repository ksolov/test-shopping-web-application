import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import * as routes from '../../constants/routes';

const Header = ({ logged, user }) => (
  <Navbar>
    {!logged ?
      <React.Fragment>
        <NavLink to={routes.registration}>Sign up</NavLink>
        <NavLink to={routes.login}>Log in</NavLink>
      </React.Fragment> :
      <div>Hello, {user.name}, {user.email}!</div>
    }
  </Navbar>
);

export default Header;
