var React=require("react");


var LeftRightComponent=React.createClass({
	render:function(){
		return(
			<div>
				
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-4">
								<h3 className="text-center text-primary">
									Left Panel
								</h3> 
								<button type="button" className="btn btn-block btn-primary">
									Home
								</button> 
								<button type="button" className="btn btn-block btn-primary">
									AboutUs
								</button> 
								<button type="button" className="btn btn-block btn-primary">
									ContactUs
								</button>
							</div>
							<div className="col-md-8">
								<h3 className="text-center text-primary">
									Right Panel
								</h3>
								<dl className="dl-horizontal">
									<dt>
										Description lists
									</dt>
									<dd>
										A description list is perfect for defining terms.
									</dd>
									<dt>
										Euismod
									</dt>
									<dd>
										Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
									</dd>
									<dd>
										Donec id elit non mi porta gravida at eget metus.
									</dd>
									<dt>
										Malesuada porta
									</dt>
									<dd>
										Etiam porta sem malesuada magna mollis euismod.
									</dd>
									<dt>
										Felis euismod semper eget lacinia
									</dt>
									<dd>
										Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>


				
			</div>
		
		);
	}
});

module.exports=LeftRightComponent;



