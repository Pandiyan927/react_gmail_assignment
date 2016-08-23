var React=require("react");

var RightLabelComponent=React.createClass({
	render:function(){
		return(
			<div>
				<h3>{this.props.fromValue}</h3>
				<h3>{this.props.subjValue}</h3>
				<h3>{this.props.dateValue}</h3>
			</div>
		);
	}
});

module.exports=RightLabelComponent;