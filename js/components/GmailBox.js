var React = require('react');

var NavComponent=require('./NavComponent');
var LeftComponent=require('./LeftComponent');
var RightComponent=require('./RightComponent');
var loadedData = false;
var requiredData=[];

var GmailBox = React.createClass({
  getInitialState: function()
  {
    return({allLabelsData:[],allIdsThreadidsData:[]});
  },
  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '383293676213-4g485arsbrc2f8sahmfu0n3h3f25bkhr.apps.googleusercontent.com';
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
    this.allIdsThreadids();
  },
  allLabels: function()
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
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
  },


  allIdsThreadids: function()
  {
    var accessToken = localStorage.getItem('gToken');
      $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/messages?labelIds=INBOX&key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
       this.setState({allIdsThreadidsData:data.messages});
       loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(err.toString());
      }.bind(this)
    });
  },

  allIdsThreadidsForParticularLabels: function(id)
  {
    var idd=id
    console.log("inside allIdsThreadidsForParticularLabels in gmailBox js ")
    console.log("printing id here");
    console.log(idd);
    console.log("calling ajax now");
    var accessToken = localStorage.getItem('gToken');
      $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/messages?labelIds='+idd+'&key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
      console.log("inside success function of allIdsThreadidsForParticularLabels");
       this.setState({allIdsThreadidsData:data.messages});
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
      leftPanel =  <LeftComponent processed_labels={this.state.allLabelsData} labelIds={this.allIdsThreadidsForParticularLabels} />
      rightPanel=  <RightComponent processed_idsAndThreadsids={this.state.allIdsThreadidsData} />

    }

    return(
      <div className="GmailBox">
        <div className="container-fluid">
          <div className="row">
            <br /><br /><br />
            <div className="col-sm-2">
              <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">Sign In</button>
            </div>
            <div className="col-sm-10 pull-right">
              <h2 className="text-center" id="heading">Click on Sign In to access Ur Life Mail</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              {leftPanel}
            </div>
            <div className="col-md-10">
              {rightPanel}
            </div>
          </div>
        </div>
      </div>
    );
 }
 });

module.exports = GmailBox;
