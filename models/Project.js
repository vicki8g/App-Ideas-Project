var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({

      projectName: {
      	type: String
      },
      userName: {
      	type: String
      },
      projectDescription: {
      	type: String
      },

});

var Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
