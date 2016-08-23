var React=require("react");


var GrandChildComponent=React.createClass({
	render:function(){
		return(
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h3 className="text-center">
								GrandChild
							</h3>
							<p>
								Am a grand child
							</p>
							<h2>{this.props.crushers}</h2>
						</div>
					</div>
				</div>

				</div>
		
		);
	}
});

module.exports=GrandChildComponent;