var React = require('react');

var HomeRightLabelComponent=require('./HomeRightLabelComponent')


var Home = React.createClass({
  getInitialState:function(){
  	return({getData:[],updateData:[],deleteData:[]});
  },

  componentDidMount:function(){
    this.getData();
  },
  getData:function()
  {
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/getData',
          dataType: 'json',
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






  render:function()
  {

    var getdata=this.state.getData.map(function(data) {
      console.log("Inside Home.js render inside map");
      return(
        <HomeRightLabelComponent fromValue={data.from} subjectValue={data.subject} dateValue={data.date} docId={data._id} messageValue={data.message}/>
      );
    });

    return(
      <div>
        <div className="Home">
          <div className="container-fluid">
            <h1 className="text-center">Home</h1>
            <h4>U r now viewing stored emails !!! </h4>
            <div className="row">
              <div className="col-sm-2">
                <h4 className="text-center">Rendered stored mails to the right !!!</h4>
              </div>
              <div className="col-sm-10 pull-right">
                <h4 className="text-center">Important Mails</h4>
                {getdata}
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
 }
 });

module.exports = Home;
