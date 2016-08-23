var React = require('react');

var NavComponent=require('./NavComponent');
var LeftComponent=require('./LeftComponent');
var RightComponent=require('./RightComponent');
var loadedData = false;

var GmailBox = React.createClass({
  getInitialState: function()
  {
    return({allLabelsData:[],allMessagesData:[]});
  },
  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '649567214697-pajp1o0d51qvtb8um644at4lu6s9uqpm.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8081';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer   =   window.setInterval(function()
    {

      try
      {
        if (win.document.URL.indexOf(REDIRECT) != -1)
        {
          window.clearInterval(pollTimer);
          var url =   win.document.URL;
          acToken =   gup(url, 'access_token');
          tokenType = gup(url, 'token_type');
          expiresIn = gup(url, 'expires_in');
          localStorage.setItem('gToken',acToken);
          localStorage.setItem('gTokenType',tokenType);
          localStorage.setItem('gExprireIn',expiresIn);
          function gup(url, name) {
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
              return "";
            else
              return results[1];
           }
               win.close();
        }
      }
      catch(e)
      {
       console.log(e);
      }
    }, 500);
    this.allLabels();
  },


  allLabels: function()
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/pandiyaa92@gmail.com/labels?key={AIzaSyDfmRuowT0h8l9u_7MJ7T1WqjhXIBKaCdY}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
      success: function(data)
      {
       this.setState({allLabelsData:data.labels});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(err.toString());
      }.bind(this)
    });


    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/pandiyaa92%40gmail.com/messages/156b6a474af8349a?key={AIzaSyDfmRuowT0h8l9u_7MJ7T1WqjhXIBKaCdY}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
      success: function(data)
      {
        var requiredData=[];
        var fromValue;
        var subjValue;
        var dateValue;
        for(var j=0;j < data.payload.headers.length;j++){
          if(data.payload.headers[j].name=="From")
            fromValue=data.payload.headers[j].value;
          else if(data.payload.headers[j].name=="Subject")
            subjValue=data.payload.headers[j].value;
          else if(data.payload.headers[j].name=="Date")
             dateValue=data.payload.headers[j].value;
        }
       requiredData.push({"fromValue":fromValue,"subjValue":subjValue,"dateValue":dateValue});
       this.setState({allMessagesData:requiredData});
       
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(err.toString());
      }.bind(this)
    });


  },
  render:function()
  {
    var leftPanel;
    var rightPanel;

    if(loadedData)
    {
      leftPanel =  <LeftComponent processed_labels={this.state.allLabelsData} />
      rightPanel=  <RightComponent processed_messages={this.state.allMessagesData} />
    }

    return(
      <div className="GmailBox">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">Sign In</button>
            </div>
            <div className="col-md-10 pull-right">
              <h2>ReactMails</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {leftPanel}
            </div>
            <div className="col-md-6">
              {rightPanel}
            </div>
          </div>
        </div>
      </div>
    );
 }
 });

module.exports = GmailBox;