var React=require("react");

var ViewMailModalComponent=require('./ViewMailModalComponent.js')

console.log("Inside Left Panel");
var RightLabelComponent=React.createClass({
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
					  	<a href="#myModalView" data-toggle="modal"  id="modal" onClick={this.changeStatusOfViewModalToTrue}>
							<td className="col-md-4">{this.props.fromValue}</td>
							<td className="col-md-4">{this.props.subjValue}</td>
							<td className="col-md-4">{this.props.dateValue}</td>
						</a>
						{this.state.status?<ViewMailModalComponent fromValue={this.props.fromValue} subjValue={this.props.subjValue} dateValue={this.props.dateValue} encodedBody={this.props.encodedBody} changeStatusToFalse={this.changeStatusOfViewModalToFalse} />:null}
					  </tr>
					</tbody>
				  </table>
				</div>
		);
	}
});

module.exports=RightLabelComponent;
