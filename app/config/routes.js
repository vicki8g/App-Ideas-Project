// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main        = require("../components/Main");
var Profile     = require("../components/children/Profile");
var Projects    = require("../components/children/Projects");
var Submission  = require("../components/children/Submission");
var Description = require("../components/children/grandchildren/Description");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

          {/* If user selects Projects then show the appropriate component*/}
          <Route path="Projects" component={Projects} >

            {/* Child1 has its own Description options */}
            <Route path="Description" component={Description} />

            <IndexRoute component={Description} />

          </Route>

          {/* If user selects Profile then show the appropriate component*/}
          <Route path="Profile" component={Profile} /> 
          {/* If user selects Submit a project then show the appropriate component*/}
          <Route path="Submission" component={Submission} />

          {/* If user selects any other path... we get the Home Route */}
          <IndexRoute component={Projects} />


    </Route>


  </Router>
);
