var React=require("react");
var LeftLabelComponent=require('./LeftLabelComponent');



console.log("Inside Left Panel");
var LeftComponent=React.createClass({

	render:function(){
		var a=this.props.labelIds;
		var idName = this.props.processed_labels.map(function(id_and_name) {
    		return (
       			<LeftLabelComponent id={id_and_name.id} name={id_and_name.name} labelIdds={a} />
      		);
    	});

		return(
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h3 className="text-center">
								Left Panel
							</h3>



							<a href="#myModal" role="button" className="btn btn-warning" data-toggle="modal"><span className="glyphicon glyphicon-hand-up"></span> Compose mail !</a>
							
							<div className="modal fade" id="myModal">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button className="close" data-dismiss="modal">&times;</button>
											<h4 className="modal-title">Give us Info and We will call you right away.</h4>
										</div>
										<div className="modal-body">
											<form className="form-horizontal">
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputName">Name</label>
													<div className="col-lg-10">
														<input className="form-control" id="inputName" placeholder="Name" type="text" />
													</div>
												</div>
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputMobileNo">Mobile No.</label>
													<div className="col-lg-10">
														<input className="form-control" id="inputMobileNo" placeholder="MobileNo" type="text" />
													</div>
												</div>
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputEmail">Email</label>
													<div className="col-lg-10">
														<input className="form-control" id="inputEmail" placeholder="Email" type="email" />
													</div>
												</div>
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputMessage">Message</label>
													<div className="col-lg-10">
														<textarea className="form-control" id="inputMessage" placeholder="Message" rows="3"></textarea>
														<button className="btn btn-success pull-right" type="submit">Send</button>
													</div>
												</div>
											</form>
										</div>
										<div className="modal-footer">
											<button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
											<button className="btn btn-primary" type="button"> Save Changes.</button>
										</div>
									</div>
								</div>
							</div>











							<h3>
							{idName}
							</h3>

						</div>
					</div>
				</div>
			</div>

		);
	}
});

module.exports=LeftComponent;
