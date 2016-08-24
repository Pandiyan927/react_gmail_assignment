var React=require("react");

var LeftLabelComponent=React.createClass({
	render:function(){
		return(
			<div>
				<button className="btn btn-success"id={this.props.id}>{this.props.name}</button>
			</div>
		);
	}
});

module.exports=LeftLabelComponent;
