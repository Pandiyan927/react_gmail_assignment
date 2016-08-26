var React=require("react");



console.log("Inside Left Panel");
var ComposeMailModalComponent=React.createClass({

    getInitialState: function()
    {
    	return({to:"",subj:"",body:""});
    },

    handleToChange: function(e) {
   		this.setState({to: e.target.value});

  	},
  	handleSubjectChange: function(e) {
    	this.setState({subj: e.target.value});

  	},
  	handleBodyChange: function(e) {
    	this.setState({body: e.target.value});

  	},



sendMessage: function()
{
 var accessToken = localStorage.getItem('gToken');
 console.log("Access token: "+accessToken);
 var email = '';
 var Headers = {'To': this.state.to,'Subject': this.state.subj};
 for(var header in Headers)
 {
   email += header += ": "+Headers[header]+"\r\n";
   console.log("email---"+email);
   console.log("header---"+header);
   console.log("Headers[header]---"+Headers[header]);
  }
 email += "\r\n" + this.state.messageData;
 console.log("constructed email: " +email);
 var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
 $.ajax({
        url: 'https://www.googleapis.com/gmail/v1/users/dev.pandian927%40gmail.com/messages/send?key={AIzaSyBGQSYqG79hQKBmupvuo8a5WpnFhPedcSo}',
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: JSON.stringify({'raw': encodedMessage}),
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer "+accessToken);
        },
  success: function(data)
  {
    console.log("Success");
  }.bind(this),
  async: false,
  error: function(xhr, status, err) {
    console.error("Error.."+err.toString());
  }.bind(this)
});
},
	
	render:function(){
		return(
			<div>
				<a href="#myModal" role="button" className="btn btn-warning" data-toggle="modal"><span className="glyphicon glyphicon-hand-up"></span> Compose mail !</a>
							
							<div className="modal fade" id="myModal">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button className="close" data-dismiss="modal">&times;</button>
											<h4 className="modal-title">Compose Here !</h4>
										</div>
										<div className="modal-body">
											<form className="form-horizontal">
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputEmail">To</label>
													<div className="col-lg-10">
														<input className="form-control" id="inputEmail" placeholder="Email" type="email" value={this.state.to} onChange={this.handleToChange} />
													</div>
												</div>
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputName">Subject</label>
													<div className="col-lg-10">
														<input className="form-control" id="inputSubject" placeholder="Subject" type="text" value={this.state.subj} onChange={this.handleSubjectChange} />
													</div>
												</div>
												
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputMessage">Body</label>
													<div className="col-lg-10">
														<textarea className="form-control" id="inputMessage" placeholder="Message" rows="3" value={this.state.body} onChange={this.sendMessage}></textarea>
														
														<button className="btn btn-success pull-right" type="submit" onClick={this.handleSendOnClick}>Send</button>
													</div>
												</div>
											</form>
										</div>
										<div className="modal-footer">
											<button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
										</div>
									</div>
								</div>
							</div>

			</div>
		);
	}
});

module.exports=ComposeMailModalComponent;