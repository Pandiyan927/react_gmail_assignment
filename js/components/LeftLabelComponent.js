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
				<button className="btn btn-success"id={this.props.id}  onClick={() => this.handleClick(this.props.id)}>{this.props.name}</button>
			</div>
		);
	}
});

module.exports=LeftLabelComponent;
