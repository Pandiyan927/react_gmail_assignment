var React=require("react");
var RightLabelComponent=require('./RightLabelComponent');



console.log("Inside Left Panel");


var requiredData=[];
var idAndThreadid;
var RightComponent=React.createClass({
  getInitialState: function()
  {
    return({allMessagesData:[]});
  },

  componentDidMount: function() {

  	var that =this;
    idAndThreadid = this.props.processed_idsAndThreadsids.map(function(idThreadid) {

    console.log("inside render");
    
   	console.log(idThreadid.id);

   	that.allMessages(idThreadid.id);

   	console.log("calling the 3rd ajax method");
    return (
       	<RightLabelComponent messages={that.state.allMessagesData} />
      );
   	});
   	console.log("end of component did mount")
  },

  allMessages: function(id)
  {
  	var again=this;
  	console.log(id);
    var accessToken = localStorage.getItem('gToken');
      $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/dev.pandian927%40gmail.com/messages/'+id+'?key={AIzaSyBGQSYqG79hQKBmupvuo8a5WpnFhPedcSo}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
       
        
        var fromValue;
        var subjValue;
        var dateValue;
        for(var j=0;j < data.payload.headers.length;j++){
          if(data.payload.headers[j].name=="From")
            fromValue=data.payload.headers[j].value;
          if(data.payload.headers[j].name=="Subject")
            subjValue=data.payload.headers[j].value;
          if(data.payload.headers[j].name=="Date")
             dateValue=data.payload.headers[j].value;
        }
       requiredData.push({"fromValue":fromValue,"subjValue":subjValue,"dateValue":dateValue});

       //req2.push(requiredData);
       
       again.setState({allMessagesData:requiredData});

       console.log(allMessagesData[0]);
        loadedData=true;
      }.bind(again),
      error: function(xhr, status, err) {
       console.error(err.toString());
      }.bind(again)
    });

  },


	
	render:function(){


		return(
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h3 className="text-center">
								Right Panel
							</h3>
							<h3>inside render</h3>
							<h3>
							{idAndThreadid}
							</h3>
						</div>
					</div>
				</div>
			</div>
		
		);
	}
});

module.exports=RightComponent;