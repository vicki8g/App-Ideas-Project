// Include React
var React = require("react");

var Description = require("../components/children/grandchildren/Description");

var Projects = React.createClass({
  render: function() {
    var projAr;
    return (

    <div className="container">

        <div className="row">

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <div className="panel-body">
                      <p>
                        <a href="#/Projects/Description" className="btn btn-warning btn-sm">Project #1</a>
           
                      </p>
{projAr}
                      {/* This code will allow us to automatically dump the correct GrandChild component */}
                      {/* we need to pass to the parent the description of selected project, through method*/}
                      <Description desc = this.state.desc/>
                  </div>
            </div>
            
        </div>
    </div>

    );
  }
});

module.exports = Projects;
