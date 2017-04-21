// Include React
var React = require("react");

const divStyle = {
  backgroundColor: "#E5E4E2", 
  color: "white"
}

var Description = React.createClass({
  render: function() {
    return (
      <div className="panel panel-warning" style={divStyle}>
            <div className="panel-heading">
              <h3 className="panel-title">Here is the project description</h3>
            </div>
            <div className="panel-body">
            <h3>Description:</h3>
            <p>{this.props.description}</p>
            </div>
      </div>
    );
  }
});

module.exports = Description;
