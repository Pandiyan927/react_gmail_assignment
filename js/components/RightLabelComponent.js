var React=require("react");



console.log("Inside Left Panel");
var RightLabelComponent=React.createClass({
	

	
	render:function(){
		return(
			<div>
				<h6>{this.props.fromValue}</h6>
				<h6>{this.props.subjValue}</h6>
				<h6>{this.props.dateValue}</h6>
				<hr></hr>

			</div>
		);
	}
});

module.exports=RightLabelComponent;