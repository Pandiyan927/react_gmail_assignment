var React=require("react");

var HomeStoredMailModalComponent=require('./HomeStoredMailModalComponent.js')

console.log("Inside Left Panel");
var HomeRightLabelComponent=React.createClass({
	 getInitialState: function()
  	{
    	return({status:false});
  	},

	changeStatusOfViewModalToTrue:function(){

  		this.setState({status:true});
  		console.log("inside change status of modal");
  		console.log(status);
  	},
	changeStatusOfViewModalToFalse:function(){

  		this.setState({status:false});
  	},

	render:function(){
		return(

				<div>
				  <table className="table table-responsive table-bordered table-hover col-md-12 test ">
					<tbody>
					  <tr>
					  	<a href="#myModalStoredMail" data-toggle="modal"  id="modal" onClick={this.changeStatusOfViewModalToTrue}>
							<td className="col-md-4">{this.props.docId}</td>
							<td className="col-md-4">{this.props.fromValue}</td>
							<td className="col-md-4">{this.props.subjectValue}</td>
							<td className="col-md-4">{this.props.dateValue}</td>
						</a>
						{this.state.status?<HomeStoredMailModalComponent docId={this.props.docId} fromValue={this.props.fromValue} subjValue={this.props.subjValue} dateValue={this.props.dateValue} messageValue={this.props.messageValue} changeStatusToFalse={this.changeStatusOfViewModalToFalse} />:null}
					  </tr>
					</tbody>
				  </table>
				</div>
		);
	}
});

module.exports=HomeRightLabelComponent;
