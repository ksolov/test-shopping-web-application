import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Search from '../../containers/Pages/Search';
import Registration from '../../containers/Pages/Registration';
import Login from '../../containers/Pages/Login';
import Header from '../../components/Header';

class Routes extends React.Component {
  requireAuth = (Component, props) => {
    return this.props.loggedIn ? (<Component {...props} />) : (
      <Redirect
        to={{
          pathname: routes.login,
          state: {
            next: props.location.pathname
          }
        }}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header
          logged={this.props.loggedIn}
          user={this.props.user}
        />
        <Switch>
          <Route
            exact={true}
            path={routes.login}
            component={Login} />
          <Route
            exact={true}
            path={routes.registration}
            component={Registration}
          />
          <Route
            exact={true}
            path={routes.search}
            render={props => this.requireAuth(Search, props)}
          />
          <Route
            path='*'
            render={() => <Redirect to={routes.login}/>}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth: { loggedIn }, user }) => ({ loggedIn, user });
const mapStateDispatchToProps = null;

export default withRouter(connect(mapStateToProps, mapStateDispatchToProps)(Routes));
