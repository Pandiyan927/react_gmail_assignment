var React=require('react');
var ReplyMailModalComponent=require('./ReplyMailModalComponent');
var ViewMailModalComponent=React.createClass({
  getInitialState:function()
  {
    return({status:false,status2:false});
  },

  appendToIframe: function(message)
  {
    var iFrameNode = this.refs.myIframe,
    frameDoc = iFrameNode.contentWindow.document;
    frameDoc.write(message);
  },

  componentDidMount: function(){
    var encodedBody = this.props.encodedBody;

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

  render:function(){

    return(
      <div>
        <div className="modal fade" id="myModalView">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close" data-dismiss="modal" onClick={this.props.changeStatusToFalse}>&times;</button>
                <h4 className="modal-title">Compose Here !!!</h4>
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

                  <iframe className="col-md-12" id="iframe-message" ref="myIframe" ></iframe>
                </form>
              </div>

              <div className="modal-footer">
                <button className="btn btn-warning" type="button" data-target="#myModalreply" data-toggle="modal"  onClick={this.change}>Reply</button>
                {this.state.status?<ReplyMailModalComponent fromValue={this.props.fromValue} subjValue={this.props.subjValue}/>:null}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports=ViewMailModalComponent;
