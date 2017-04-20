// Include React
var React = require("react");

var Description = React.createClass({
  render: function() {
    return (
      <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Here is the project description</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
      </div>
    );
  }
});

module.exports = Description;
