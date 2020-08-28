import React from 'react';

class HorizontalLine extends React.Component {
  render(){
    var trans=(this.props.row)*136;
    var ctrans = 'translate(0px, '+trans+'px)';
    var css = {
        transform: ctrans
    }
    return (
      <div className="horizontalLine" style={css}>
      </div>
    );
  }
}

export default HorizontalLine;
