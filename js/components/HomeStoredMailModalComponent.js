var React=require('react');

var HomeStoredMailModalComponent=React.createClass({
  getInitialState:function()
  {
    return({status:false,docIdVal:this.props.docId,fromVal:this.props.fromValue,subjVal:this.props.subjValue,messageVal:this.props.messageValue});
  },

  appendToIframe: function(message)
  {
    var iFrameNode = this.refs.myIframe,
    frameDoc = iFrameNode.contentWindow.document;
    frameDoc.write(message);
  },

  componentDidMount: function(){
    var encodedBody = this.props.messageValue;
    encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
    this.appendToIframe(encodedBody);
  },
  change:function()
  {
    console.log("onclick of reply");
    this.setState({status:true});
    console.log(this.state.status);
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
          dataType: 'json',
          type: 'DELETE',
          data:{"_id":this.state.docIdVal,"from":this.state.fromVal,"subject":this.state.subjVal,"message":this.state.messageVal},
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

  render:function(){

    return(
      <div>
        <div className="modal fade" id="myModalStoredMail">
          <div className="modal-dialog">
            <div className="modal-content">
              <div id="updateDeleteMain">
                <div className="modal-header">
                  <button className="close" data-dismiss="modal" onClick={this.props.changeStatusToFalse}>&times;</button>
                  <h4 className="modal-title">View Here !!!</h4>
                </div>

                <div className="modal-body">

                  <form  className="form-horizontal">

                    <div className="form-group">
                      <div className="col-lg-10">
                        <label className="control-label" for="frmVal">{this.props.fromValue}</label>

                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-lg-12">
                        <label className="control-label" for="subjVal">{this.props.subjValue}</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-lg-12">
                        <label className="control-label" for="dateVal">{this.props.dateValue}</label>
                      </div>
                    </div>

                    <div id="iframeMessageBody">
                      <iframe className="col-md-12" id="iframe-message" ref="myIframe" ></iframe>
                    </div>

                  </form>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-primary" id="updateButton" data-target="#myModal" data-toggle="modal" type="button" onClick={this.updateMail}>Update</button>
                  <button className="btn btn-warning" id="deleteButton" data-target="#myModal" data-dismiss="modal" data-toggle="modal" type="button" onClick={this.deleteData}>Delete</button>
                </div>
              </div>end of div id

              <div id="updateOnly" style={{display:'none'}}>

              </div>

            </div>end of modal content
          </div>
        </div>
      </div>
    );
  },
});

module.exports=HomeStoredMailModalComponent;
