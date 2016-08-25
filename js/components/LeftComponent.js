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
