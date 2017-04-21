// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {

  getProjectList: function() {
    return axios.get("/api");
  },

  saveNewProject: function(projectName, userName, projectDescription) {
    return axios.post("/api", {
      projectName: projectName,
      userName: userName,
      projectDescription: projectDescription,

    });
  }
};