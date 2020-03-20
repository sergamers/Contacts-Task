import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, token}) => {
  const render = ({location}) =>
    token ? (
      <Component/>
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {from: location}
        }}
      />
    );

  return <Route render={render}/>;
};

const mapStateFromProps = ({contacts}) => (contacts);

export default connect(mapStateFromProps)(PrivateRoute);