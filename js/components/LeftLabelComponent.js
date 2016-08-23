var React=require("react");

var LeftLabelComponent=React.createClass({
	render:function(){
		return(
			<div>
				<a href="#" id={this.props.id}>Name:{this.props.name}</a>

			</div>
		);
	}
});

module.exports=LeftLabelComponent;
