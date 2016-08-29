var React = require('react');


var AboutUS = React.createClass({




  render:function()
  {
    return(
      <div>
        <div>

              <h2>About Us</h2>
              <h2>{this.props.params.aboutName}</h2>
        </div>
      </div>
    );
 }
 });

module.exports = AboutUS;
