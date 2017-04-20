// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>Concepto</strong></h2>
          <hr />
          <p>
            <a href="#/Projects" className="btn btn-primary btn-lg">Projects Homepage</a>
            <a href="#/Submission" className="btn btn-primary btn-lg">Submit a Project</a>
            <a href="#/Profile" className="btn btn-primary btn-lg">User Account</a>
          </p>
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;
