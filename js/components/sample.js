var React=require('react');
var Modalchild =require('./Modalchild');
var Modalchild3 =require('./Modalchild3');

var Modalchild2=React.createClass({
getInitialState:function()
{
	return({status:false,status2:false});
},
change:function()
{
	console.log("onclick of reply");
	this.setState({status:true});
	console.log(this.state.status);
},



appendToIframe: function(message)
{
var iFrameNode = this.refs.myIframe,
frameDoc = iFrameNode.contentWindow.document;
frameDoc.write(message);
},
render: function()
{

return(
  <div className="modal fade" id="myModal2" >
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <button type="button" onClick={this.props.y4} className="close" data-dismiss="modal">close</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>

       <div className="modal-body">

             <form  className="form-horizontal">
               <div className="form-group">
                 <div className="col-lg-12">
                   {this.props.y1}
                 </div>
               </div>
               <div className="form-group">
                 <div className="col-lg-12">
                 {this.props.y2}
                 </div>
               </div>
             <iframe id="iframe-message" ref="myIframe" >
</iframe>
             </form>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
         <button type="button" className="btn btn-success" data-target="#myModal"  data-toggle="modal"  onClick={this.change} >Reply</button>

       {this.state.status?<Modalchild3 try1={this.props.y1} try2={this.props.y2} heck1={this.props.y4}/>:null}

      </div>
    </div>

  </div>
</div>

);
},
componentDidMount: function(){
var encodedBody = this.props.y3;

encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
this.appendToIframe(encodedBody);

},
});

module.exports=Modalchild2
