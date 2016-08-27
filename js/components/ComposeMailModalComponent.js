var React=require("react");



var ComposeMailModalComponent=React.createClass({
    getInitialState: function()
    {
      return({to:"",subj:"",body:""})
    },
    handleTo:function(e)
    {
      this.setState({to: e.target.value});

    },
    handleSubject: function(e)
    {
      this.setState({subj: e.target.value});
    },
    handleBody: function(e)
    {
      this.setState({body: e.target.value});

    },

    handleSendOnClick: function()
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
      email += "\r\n" + this.state.body;
      console.log("constructed email: " +email);
      var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
      $.ajax({
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
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
              this.setState({to:"",subj:"",body:""});
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
                <a href="#myModal" role="button" className="btn btn-warning btn-block" data-toggle="modal"><span className="glyphicon glyphicon-hand-up"></span> Compose mail</a>

                            <div className="modal fade" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title">Compose Here !!!</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form className="form-horizontal">

                                                <div className="form-group">
                                                    <label className="col-lg-2 control-label" for="inputEmail" >To</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" id="inputEmail" placeholder="Email Id" type="email" value={this.state.to} onChange={this.handleTo}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-lg-2 control-label" for="inputName">Subject</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" id="inputName" placeholder="Subject" type="text" value={this.state.subj} onChange={this.handleSubject} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-lg-2 control-label" for="inputMessage" >Message</label>
                                                    <div className="col-lg-10">
                                                        <textarea className="form-control" id="inputMessage" placeholder="Message" rows="3" value={this.state.body} onChange={this.handleBody}></textarea>
                                                        <br/>
                                                        <button className="btn btn-success pull-right" type="submit" onClick={this.handleSendOnClick} data-dismiss="modal">Send</button>
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