// Include React
var React = require("react");



var Profile = React.createClass({
  render: function() {
    return (

<div className="container">
        <div id="game"></div>

        <div className="row">
            <div className="col-lg-12">
                <h1>PROFILE PAGE: Enter Information</h1></div>
        </div>
        <br> </br>
        <div className="text-center">
            <button id="startButton" className="btn btn-primary btn-lg" value="start"></button>
        </div>
        <h3>Bob The Coder</h3>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-4"><h4>Time Remaining: </h4></div>
                        <div className="col-sm-1"><p></p><span id="display"></span></div>
                        <div className="col-sm-2"><h4>Seconds</h4></div>
                    </div>

        <div className="form-group">
            <label for="employee-name-input">Email Address</label>
            <input className="form-control" id="employee-name-input" type="text"></input>
        </div>
 

        <br> </br>

        <h4>Question 1: How many years of experience do you have?</h4>
        <div className="panel-body">
            <div className="text-center">
                <input type="radio" name="ques1answer" value="1"> 0 - 2 Years </input>
                <input type="radio" name="ques1answer" value="2"> 2 - 4 Years </input>
                <input type="radio" name="ques1answer" value="3"> 4 - 6 Years </input>
                <input type="radio" name="ques1answer" value="4"> 6+ Years </input>
            </div>
        </div>
        <br> </br>
        <h4>Question 2: How do you rate yourself? </h4>
        <div className="panel-body">
            <div className="text-center">
                <input type="radio" name="ques2answer" value="1"> Beginner </input>
                <input type="radio" name="ques2answer" value="2"> Intermediate </input>
                <input type="radio" name="ques2answer" value="3"> Rock Star </input>
            </div>
        </div>
        <br> </br>
        <h4>Question 3: Preferred programming language?</h4>
        <div className="panel-body">
            <div className="text-center">
                <input type="radio" name="ques3answer" value="1"> JavaScript </input>
                <input type="radio" name="ques3answer" value="2"> Ruby </input>
                <input type="radio" name="ques3answer" value="3"> Python </input>
                <input type="radio" name="ques3answer" value="4"> Laravel </input>
            </div>
        </div>
        <br> </br>
        <h4>Question 4: How many projects from this site have you completed ?</h4>
        <div className="panel-body">
            <div className="text-center">
                <input type="radio" name="ques4answer" value="1"> 0 to 3  </input>
                <input type="radio" name="ques4answer" value="2"> 4 to 6  </input>
                <input type="radio" name="ques4answer" value="3"> 7 to 10 </input>
                <input type="radio" name="ques4answer" value="4"> 10+     </input>
            </div>
        </div>
    </div>
    );
  }
});

module.exports = Profile;
