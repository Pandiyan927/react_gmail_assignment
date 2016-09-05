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
  handleTo:function(e){
    this.setState({fromVal:e.target.value});
  },
  handleSubject:function(e){
    this.setState({subjVal:e.target.value});
  },
  handleBody:function(e){
    this.setState({messageVal:e.target.value});
  },
  closeButon:function(){
    this.props.changeStatusToFalse;
  },
  updateMail:function()
  {
    this.setState({status:true});
    document.getElementById('updateOnly').style.display = 'block';
    document.getElementById('updateDeleteMain').style.display = 'none';
  },

  updateData:function()
  {
    $.ajax({
          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
          url: '/updateData',
          dataType: 'JSON',
          type: 'PUT',
          data:{"_id":this.state.docIdVal,"from":this.state.fromVal,"subject":this.state.subjVal,"message":this.state.messageVal},
          success: function(data)
          {
            console.log("Success");
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
                        <label className="control-label" for="frmVal">Recipient:{this.props.fromValue}</label>

                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-lg-12">
                        <label className="control-label" for="subjVal">Subject:{this.props.subjValue}</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-lg-12">
                        <label className="control-label" for="dateVal">Date:{this.props.dateValue}</label>
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
              </div>

               <div id="updateOnly" style={{display:'none'}}>
                  <div className="modal-header">
                     <button className="close" onClick={this.props.changeStatusToFalse} data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                     <form  className="form-horizontal">
                        <div className="form-group">
                           <label className="col-lg-2 control-label" for="inputName">To</label>
                           <div className="col-lg-10">
                              <input className="form-control" type="text" id="inputName" value={this.state.fromVal} onChange={this.handleTo} placeholder="Enter the receipient" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label className="col-lg-2 control-label" for="inputSubject">Subject</label>
                           <div className="col-lg-10">
                              <input className="form-control" type="text" id="inputSubject" value={this.state.subjVal} onChange={this.handleSubject} placeholder="Enter the subject" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label className="col-lg-2 control-label" for="inputSubject">Message body</label>
                           <div id="iframeMessageBody" className="col-lg-10">
                              <textarea className="form-control" type="text" id="inputMessage" value={this.state.messageVal} onChange={this.handleBody} placeholder="Enter the mail" rows="8"><iframe className="col-md-12" id="iframe-message" ref="myIframe"></iframe></textarea>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                     <button className="btn btn-primary" id="saveButton" data-target="#myModal" data-dismiss="modal" data-toggle="modal" type="button" onClick={this.updateData}>Save</button>
                     <button className="btn btn-warning" id="closeButton" data-target="#myModal" data-dismiss="modal" data-toggle="modal" type="button" onClick={this.closeButon}>Close</button>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports=HomeStoredMailModalComponent;
