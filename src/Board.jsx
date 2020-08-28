import React from 'react';
import Field from './Field.jsx';
import HorizontalLine from './HorizontalLine.jsx';
import VerticalLine from './VerticalLine.jsx';
import DiagonalLine from './DiagonalLine.jsx';

class Board extends React.Component {
  state={
    fields:[["","",""], ["","",""], ["","",""]],
    playerToMove:"X",
    winner:"",
    winningTrio:"",
    scoreX:0,
    scoreO:0,
    draws:0,
    drawn:false
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.newGame = this.newGame.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  resetScore(){
    this.newGame();
    this.setState({
      scoreX:0,
      scoreO:0,
      draws:0
    });
  }
  newGame(){
    this.setState({
      fields:[["","",""], ["","",""], ["","",""]],
      playerToMove:"X",
      winner:"",
      winningTrio:"",
      drawn:false
    });
  }
  checkForWin(newFields){
    if(newFields[1][1]){
      if(newFields[0][0]===newFields[1][1] && newFields[0][0]===newFields[2][2]){
        this.setState({winningTrio:"00,11,22"});
        return newFields[0][0];
      }
      if(newFields[0][2]===newFields[1][1] && newFields[0][2]===newFields[2][0]){
        this.setState({winningTrio:"02,11,02"});
        return newFields[0][2];
      }
    }
    var i=0;
    while(i<3){
      if(newFields[i][0]){
        if(newFields[i][0]===newFields[i][1] && newFields[i][0]===newFields[i][2]){
          this.setState({winningTrio:i+"0,"+i+"1,"+i+"2"});
          return newFields[i][0];
        }
      }
      if(newFields[0][i]){
        if(newFields[0][i]===newFields[1][i] && newFields[0][i]===newFields[2][i]){
          this.setState({winningTrio:"0"+i+",1"+i+",2"+i});
          return newFields[0][i];
        }
      }
      i++;
    }
    return "";
  }
  checkForDraws(newFields, winner){
    console.log(winner);
    if(winner) return;
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        //console.log(newFields[i][j]);
        if(!newFields[i][j]){
          return;
        }
      }
    }
    var draws=this.state.draws;
    draws++;
    this.setState({draws: draws, drawn: true});
  }
  handleClick(i,j){
    if(this.state.winner) return;
    if(this.state.fields[i][j]==="X" || this.state.fields[i][j]==="O") return;
    var playerToMove=this.state.playerToMove;
    var newPlayerToMove="X";
    if(playerToMove==="X"){
      newPlayerToMove="O";
    }
    var newFields=this.state.fields;
    newFields[i][j]=playerToMove;
    var winner=this.checkForWin(newFields);
    var scoreX=this.state.scoreX;
    var scoreO=this.state.scoreO;
    if(winner==="X"){scoreX++;}
    else if(winner==="O"){scoreO++;}
    this.setState({
      playerToMove: newPlayerToMove,
      fields:newFields,
      winner:winner,
      scoreX:scoreX,
      scoreO:scoreO
    });
    this.checkForDraws(newFields, winner);
  }
  render(){
    const winner = this.state.winner;
    const winningTrio = this.state.winningTrio;
    const scoreX = this.state.scoreX;
    const scoreO = this.state.scoreO;
    const draws = this.state.draws;
    const playerToMove = this.state.playerToMove;
    const drawn = this.state.drawn;
    var additionalClass="";
    if(winner){additionalClass+=" gameOver";}
    if(playerToMove==="X"){additionalClass+=" xToMove";}
    else if(playerToMove==="O"){additionalClass+=" oToMove";}
    if(drawn){
      var line=<div className="drawn">Drawn</div>;
    }
    else if(!winningTrio.length>0){
      line = "";
    }
    else if(winningTrio[0]===winningTrio[3]){
      line = <HorizontalLine row={winningTrio[0]}/>;
    }
    else if(winningTrio[1]===winningTrio[4]){
      line = <VerticalLine column={winningTrio[1]}/>;
    }
    else if(winningTrio[1]===winningTrio[0]){
      line = <DiagonalLine diagonal="main"/>;
    }
    else if(winningTrio){
      line = <DiagonalLine diagonal="counter"/>;
    }
    const fields = this.state.fields.map((row, i)=>{
      const temp = row.map((field, j)=>{
        var specialClass="";
        if(i===0){
          specialClass+=" noTopBorder"
        }
        if(j===0){
          specialClass+=" noLeftBorder"
        }
        return(
          <Field onClick={this.handleClick} id={i+""+j} classes={"field"+specialClass+" "+field} key={i+""+j} />
        );
      });
      return(
        <div className="fieldRow" key={i}>
          {temp}
        </div>
      );
    });
    return (
      <div className="container">
      {line}
        <div className={"board"+additionalClass}>
          {fields}
        </div>
        <div className="options">
          <button className="button" onClick={this.newGame}>New Game</button>
          <button className="button" onClick={this.resetScore}>Reset Score</button>
        </div>
        <div className="score">
          <p>X: {scoreX}</p>
          <p>O: {scoreO}</p>
          <p>Draws: {draws}</p>
        </div>
        <div className="homePageDiv">
          <button
            className="homePage"
            onClick={() => window.location.href = 'http://ammarveljagic.me'}
          >
            Back to home page
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
