var React=require("react");
var RightLabelChildComponent=require('./RightLabelChildComponent');


var RightLabelComponent=React.createClass({
	render:function(){
		var fromSubjDate = this.props.messages.map(function(fSD) {
    		return (
       			<RightLabelChildComponent fromValue={fSD.fromValue} subjValue={fSD.subjValue} dateValue={fSD.dateValue} />
      		);
    	});

		return(
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h3 className="text-center">
								Right Panel
							</h3>
							<h3>
							{fromSubjDate}
							</h3>
							
						</div>
					</div>
				</div>
			</div>
		
		);
	}

});

module.exports=RightLabelComponent;