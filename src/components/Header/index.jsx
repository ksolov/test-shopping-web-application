import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import * as routes from '../../constants/routes';
import Card from '../../containers/Card';

const Header = ({ logged, user }) => (
  <Navbar>
    {!logged ?
      <React.Fragment>
        <NavLink to={routes.registration}>Sign up</NavLink>
        <NavLink to={routes.login}>Log in</NavLink>
      </React.Fragment> :
      <React.Fragment>
        <div>Hello, {user.name}, {user.email}!</div>
        <Card />
      </React.Fragment>
    }
  </Navbar>
);

export default Header;
