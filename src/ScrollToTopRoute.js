import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class ProtectedRoute extends Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        const { component: Component, ...rest } = this.props;

        return <Route {...rest} render={props => (<Component {...props} />)} />;
    }
}

export default ProtectedRoute;