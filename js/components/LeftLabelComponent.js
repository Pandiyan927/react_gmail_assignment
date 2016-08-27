var React=require("react");

var LeftLabelComponent=React.createClass({
	handleClick:function(id){
		var idd=id;

		console.log("inside left label component")
		console.log("printing id");
		console.log(idd);
		console.log("calling left component now and then gmailbox")
		this.props.labelIdds(idd);

	},


	render:function(){
		return(
			<div>
				  <table className="table table-responsive table-hover col-md-12">
					<tbody>
					  <tr>
						<td><button className="btn btn-success btn-block"id={this.props.id}  onClick={() => this.handleClick(this.props.id)}>{this.props.name}</button></td>
					  </tr>
					</tbody>
				  </table>
			</div>
		);
	}
});

module.exports=LeftLabelComponent;
