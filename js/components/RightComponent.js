var React=require("react");
var RightLabelComponent=require('./RightLabelComponent');

var loadedData = false;



console.log("Inside Left Panel");



var RightComponent=React.createClass({
  getInitialState: function()
  {
    return({allMessagesData:[]});
  },

  componentWillMount: function() {

    console.log("start of componentwill mount");

    this.allMessages();
   	console.log("end of component will mount");
  },
  componentWillReceiveProps  : function() {

    console.log("start of componentWillReceiveProps");

    this.allMessages();
    console.log("end of componentWillReceiveProps");
  },

  allMessages:function(){
    console.log("inside allMessages function");
    var that =this;
    var requiredData=[];
    console.log("calling map");
    that.props.processed_idsAndThreadsids.map(function(idThreadid) {


          var id=idThreadid.id
          console.log("inside map");
          console.log(id);
          console.log("calling ajax")
          var accessToken = localStorage.getItem('gToken');
            $.ajax({
                url: 'https://www.googleapis.com/gmail/v1/users/dev.pandian927%40gmail.com/messages/'+id+'?key={AIzaSyBGQSYqG79hQKBmupvuo8a5WpnFhPedcSo}',
                dataType: 'json',
                type: 'GET',
                async:'false',
                beforeSend: function (request)
                {
                  console.log("inside before send");
                  request.setRequestHeader("Authorization", "Bearer "+accessToken);
                },
                success: function(data)
                {
                  console.log("inside ajax inside success function");
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
                 console.log(requiredData[0].fromValue);
                 that.setState({allMessagesData:requiredData});
                 console.log("printing allmessages data's from value");
                 console.log(allMessagesData[0].fromValue);
                 loadedData=true;
                 }.bind(that),
                 error: function(xhr, status, err) {
                 console.error(err.toString());
                 }.bind(that)
            });//end of ajax
          console.log("end of ajax")
          console.log("iterating the map now after returnstatement")
          return (
           that
          );

    });//end of map

  },


	render:function(){


    console.log("inside right component render")

    var fromSubjDate = this.state.allMessagesData.map(function(fSD) {
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
