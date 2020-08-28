import React from 'react';

class VerticalLine extends React.Component {
  render(){
    var trans=(this.props.column-1)*136;
    var ctrans = 'translate('+trans+'px, 0px)';
    var visibility="visible";
    if(this.props.disabled){
      visibility="hidden";
    }
    var css = {
        transform: ctrans,
        visibility: visibility
    }
    return (
      <div className="verticalLine" style={css}>
      </div>
    );
  }
}

export default VerticalLine;
