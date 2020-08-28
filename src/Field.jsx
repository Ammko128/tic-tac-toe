import React from 'react';

class Field extends React.Component {
  render(){
    return (
      <div
        id={this.props.id}
        onClick={(e)=>{this.props.onClick(e.target.id[0], e.target.id[1]);}}
        className={this.props.classes}
      >
      </div>
    );
  }
}

export default Field;
