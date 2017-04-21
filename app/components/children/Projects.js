// Include React
var React = require("react");

var Description = require("./grandchildren/Description");

var helper = require("../../utils/helper");

var Projects = React.createClass({
  render: function() {
    var projAr;

  getInitialState: function() {
    return { 
      projectList: "", 
      projectDescription: ""
      projectName: "",
      userName: "",

    };
  },


  // We use this function to allow children to update the parent with the list of projects saved in the database
  setDescription: function(desc) {
    this.setState({ projectDescription: desc});
  },


  // The moment the page renders get all the projects saved in the database to be displayed
  componentDidMount: function() {
    // Get the latest project list
    helpers.getProjectList().then(function(response) {
      console.log(response);
      if (response !== this.state.projectList) {
        console.log("Project List", response.data);
        this.setState({ projectList: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a new Project is entered
  componentDidUpdate: function() {

        // After we've received the result... then post the search term to our history.
        helpers.saveNewProject(this.state.projectName,this.state.userName,this.state.projectDescription).then(function() {
          console.log("Project List Updated!");

          // After we've done the post... then get the updated history
          helpers.getProjectList().then(function(response) {
            console.log("Current List of Projects", response.data);


            this.setState({ projectList: response.data });

          }.bind(this));
        }.bind(this));
      },


    return (

    <div className="container">

        <div className="row">

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <div className="panel-body">
                      <p>
                        <a href="#/Projects/Description" className="btn btn-warning btn-sm">Project #1</a>
           
                      </p>
                      {/* This code will allow us to automatically dump the correct GrandChild component */}
                      {/* we need to pass to the parent the description of selected project, through method*/}
                      <Description description={this.setDescription} />
                      
                  </div>
            </div>
            
        </div>
    </div>

    );
  }
});

module.exports = Projects;
