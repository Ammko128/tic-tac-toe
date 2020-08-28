import React from 'react';

class DiagonalLine extends React.Component {
  render(){
    if(this.props.diagonal==="main"){
      var ctrans = 'rotate(45deg)';
    }
    else{
      ctrans='rotate(-45deg)';
    }
    var css = {
        transform: ctrans
    }
    return (
      <div className="diagonalLine" style={css}>
      </div>
    );
  }
}

export default DiagonalLine;
