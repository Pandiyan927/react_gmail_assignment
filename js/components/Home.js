var React = require('react');


var Home = React.createClass({
  getInitialState:function(){
  	return({getData:"",updateData:"",deleteData:""});


  },

  getData:function()
  {
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/getData',
          dataType: 'text',
          type: 'GET',
          success: function(data)
          {
            console.log("Success");
            this.setState({getData:data});
          }.bind(this),

          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
  },

  updateData:function()
  {
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/updateData',
          dataType: 'text',
          type: 'PUT',
          success: function(data)
          {
            console.log("Success");
            this.setState({updateData:data});
          }.bind(this),

          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
  },

  deleteData:function()
  {
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/deleteData',
          dataType: 'text',
          type: 'DELETE',
          success: function(data)
          {
            console.log("Success");
            this.setState({deleteData:data});
          }.bind(this),

          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
  },




  render:function()
  {
    return(
      <div>
        <div>
          <h2>Home</h2>

          <button className="btn btn-warning" onClick="{this.getData}">Get Data</button>
          <h1>{this.state.getData}</h1>

           <button className="btn btn-warning" onClick="{this.updateData}">Update data</button>
          <h1>{this.state.updateData}</h1>

           <button className="btn btn-warning" onClick="{this.deleteData}">Delete Data</button>
          <h1>{this.state.deleteData}</h1>

        </div>
      </div>
    );
 }
 });

module.exports = Home;
