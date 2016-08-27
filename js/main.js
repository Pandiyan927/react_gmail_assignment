var React=require("react");
var ReactDom=require("react-dom");

var NavComponent=require('./components/NavComponent');
var LeftComponent=require('./components/LeftComponent');
var RightComponent=require('./components/RightComponent');

var GmailBox=require('./components/GmailBox');

var parsedData=[];
var data={
 "labels": [
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "Label_1",
   "name": "Wipro",
   "type": "user"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "type": "system"
  },
  {
   "id": "Label_2",
   "name": "[Imap]/Trash",
   "type": "user"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "type": "system"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
 ]
};

console.log(data.labels.length);
for(var i=0;i<data.labels.length;i++){
	var id = data.labels[i].id;
	var name = data.labels[i].name;
	parsedData.push({"id":id,"name":name});
}
console.log(parsedData[1].id);

var MainComponent=React.createClass({
	render:function(){
		console.log("Inside Main Render");
		console.log(parsedData[1].id)
		return(
			<div>
				<div className="container-fluid">
          <NavComponent />
          <GmailBox />
				</div>	
			</div>
		);
	}
});

ReactDom.render(<MainComponent />,document.getElementById("app"));
