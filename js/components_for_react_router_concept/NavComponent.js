var React=require("react");

var NavLink=require('./NavLink');

var NavComponent=React.createClass({
	render:function(){
		return(
			<div>
							<nav className="navbar navbar-default navbar-fixed-top" role="navigation" id="navbar_row">
								<div className="navbar-header">

									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
										 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
									</button> <a className="navbar-brand" href="#">LifeMail</a>
								</div>

								<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


									<ul className="nav navbar-nav navbar-right">

										<li>
											<NavLink to="/home">Home</NavLink>
										</li>
										<li>
											<NavLink to="/gmailbox">Gmail</NavLink>
										</li>

										<li>
											<NavLink to="/about/React3333">About React</NavLink>
										</li>
										<li>
											<NavLink to="/about/Router">About Router</NavLink>
										</li>

										<li className="dropdown">
											 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<strong className="caret"></strong></a>
											<ul className="dropdown-menu">
												<li>
													<a href="#">Action</a>
												</li>
												<li>
													<a href="#">Another action</a>
												</li>
												<li>
													<a href="#">Something else here</a>
												</li>
												<li className="divider">
												</li>
												<li>
													<a href="#">Separated link</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>




							</nav>
						</div>


		);
	}
});

module.exports=NavComponent;
