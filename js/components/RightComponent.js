var React=require("react");
var RightLabelComponent=require('./RightLabelComponent');



console.log("Inside Left Panel");
var RightComponent=React.createClass({
	
	render:function(){
		var fromSubjDate = this.props.processed_messages.map(function(fSD) {
    		return (
       			<RightLabelComponent fromValue={fSD.fromValue} subjValue={fSD.subjValue} dateValue={fSD.dateValue} />
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

module.exports=RightComponent;