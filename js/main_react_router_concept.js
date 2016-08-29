var React=require("react");
var ReactDom=require("react-dom");
var {hashHistory, Route, Router, IndexRoute}=require('react-router');

var NavComponent=require('./components/NavComponent');
var Home=require('./components/Home');
var AboutUS=require('./components/AboutUs');
var GmailBox=require('./components/GmailBox');

var MainComponent=React.createClass({
	render:function(){
		return(
			<div>
				<div >
          <NavComponent />
          <br />
          <br />
          <br />
          {this.props.children}
				</div>
			</div>
		);
	}
});

ReactDom.render(<Router history={hashHistory}>
                    <Route path="/" component={MainComponent}>
                      <IndexRoute component={Home}/>
                      <Route path="/home" component={Home} />
                      <Route path="/about/:aboutName" component={AboutUS} />
                      <Route path="/gmailbox" component={GmailBox} />
                    </Route>
                </Router>,document.getElementById("app"));
