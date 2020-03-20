import React, { Component } from 'react'
import Auth from "./Authentication/Authentication";
import User from "./PersonalArea/PersonalArea";
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { user: { token }} = this.props;
    return ( <> {token.length ? <User/> : <Auth/> } </>
    )
  }
}

const mapStateToProps = ({user}) => ({user});

export default connect(mapStateToProps)(App);
