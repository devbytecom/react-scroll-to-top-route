react-scroll-to-top-route
============================

[![npm version](https://badge.fury.io/js/react-scroll-to-top-route.svg)](https://badge.fury.io/js/react-scroll-to-top-route)
[![Build Status](https://travis-ci.com/devbytecom/react-scroll-to-top-route.svg?branch=master)](https://travis-ci.com/devbytecom/react-scroll-to-top-route)
[![NPM Packages](https://david-dm.org/devbytecom/react-scroll-to-top-route.svg)](https://david-dm.org/devbytecom/react-scroll-to-top-route)
[![NPM Dev Dependencies](https://david-dm.org/devbytecom/react-scroll-to-top-route/dev-status.svg)](https://david-dm.org/devbytecom/react-scroll-to-top-route?type=dev)

A ReactJS route component that scrolls users back to the top of the page when navigating around with the react router.

# Example
```js
import ScrollToTopRoute from "react-scroll-to-top-route";

// Example usage
const Routes = () => 
<Switch>
    <ScrollToTopRoute
        path="/example-but-with-scrolling"
        render={() => <p>Normal route with scrolling to top when navigating.</p>}
    />
    <Route
        path="/example"
        render={() => <p>Normal route.</p>}
    />
</Switch>;
```