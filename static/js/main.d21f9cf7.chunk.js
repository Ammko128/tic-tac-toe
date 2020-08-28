(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),o=(a(13),a(1)),c=a(2),l=a(5),u=a(3),m=a(4),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:this.props.id,onClick:function(t){e.props.onClick(t.target.id[0],t.target.id[1])},className:this.props.classes})}}]),a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={transform:"translate(0px, "+136*this.props.row+"px)"};return r.a.createElement("div",{className:"horizontalLine",style:e})}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e="translate("+136*(this.props.column-1)+"px, 0px)",t="visible";this.props.disabled&&(t="hidden");var a={transform:e,visibility:t};return r.a.createElement("div",{className:"verticalLine",style:a})}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if("main"===this.props.diagonal)var e="rotate(45deg)";else e="rotate(-45deg)";var t={transform:e};return r.a.createElement("div",{className:"diagonalLine",style:t})}}]),a}(r.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fields:[["","",""],["","",""],["","",""]],playerToMove:"X",winner:"",winningTrio:"",scoreX:0,scoreO:0,draws:0,drawn:!1},n.handleClick=n.handleClick.bind(Object(l.a)(n)),n.newGame=n.newGame.bind(Object(l.a)(n)),n.resetScore=n.resetScore.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"resetScore",value:function(){this.newGame(),this.setState({scoreX:0,scoreO:0,draws:0})}},{key:"newGame",value:function(){this.setState({fields:[["","",""],["","",""],["","",""]],playerToMove:"X",winner:"",winningTrio:"",drawn:!1})}},{key:"checkForWin",value:function(e){if(e[1][1]){if(e[0][0]===e[1][1]&&e[0][0]===e[2][2])return this.setState({winningTrio:"00,11,22"}),e[0][0];if(e[0][2]===e[1][1]&&e[0][2]===e[2][0])return this.setState({winningTrio:"02,11,02"}),e[0][2]}for(var t=0;t<3;){if(e[t][0]&&e[t][0]===e[t][1]&&e[t][0]===e[t][2])return this.setState({winningTrio:t+"0,"+t+"1,"+t+"2"}),e[t][0];if(e[0][t]&&e[0][t]===e[1][t]&&e[0][t]===e[2][t])return this.setState({winningTrio:"0"+t+",1"+t+",2"+t}),e[0][t];t++}return""}},{key:"checkForDraws",value:function(e,t){if(console.log(t),!t){for(var a=0;a<3;a++)for(var n=0;n<3;n++)if(!e[a][n])return;var r=this.state.draws;r++,this.setState({draws:r,drawn:!0})}}},{key:"handleClick",value:function(e,t){if(!this.state.winner&&"X"!==this.state.fields[e][t]&&"O"!==this.state.fields[e][t]){var a=this.state.playerToMove,n="X";"X"===a&&(n="O");var r=this.state.fields;r[e][t]=a;var i=this.checkForWin(r),s=this.state.scoreX,o=this.state.scoreO;"X"===i?s++:"O"===i&&o++,this.setState({playerToMove:n,fields:r,winner:i,scoreX:s,scoreO:o}),this.checkForDraws(r,i)}}},{key:"render",value:function(){var e=this,t=this.state.winner,a=this.state.winningTrio,n=this.state.scoreX,i=this.state.scoreO,s=this.state.draws,o=this.state.playerToMove,c="";if(t&&(c+=" gameOver"),"X"===o?c+=" xToMove":"O"===o&&(c+=" oToMove"),this.state.drawn)var l=r.a.createElement("div",{className:"drawn"},"Drawn");else!a.length>0?l="":a[0]===a[3]?l=r.a.createElement(d,{row:a[0]}):a[1]===a[4]?l=r.a.createElement(v,{column:a[1]}):a[1]===a[0]?l=r.a.createElement(f,{diagonal:"main"}):a&&(l=r.a.createElement(f,{diagonal:"counter"}));var u=this.state.fields.map((function(t,a){var n=t.map((function(t,n){var i="";return 0===a&&(i+=" noTopBorder"),0===n&&(i+=" noLeftBorder"),r.a.createElement(h,{onClick:e.handleClick,id:a+""+n,classes:"field"+i+" "+t,key:a+""+n})}));return r.a.createElement("div",{className:"fieldRow",key:a},n)}));return r.a.createElement("div",{className:"container"},l,r.a.createElement("div",{className:"board"+c},u),r.a.createElement("div",{className:"options"},r.a.createElement("button",{className:"button",onClick:this.newGame},"New Game"),r.a.createElement("button",{className:"button",onClick:this.resetScore},"Reset Score")),r.a.createElement("div",{className:"score"},r.a.createElement("p",null,"X: ",n),r.a.createElement("p",null,"O: ",i),r.a.createElement("p",null,"Draws: ",s)),r.a.createElement("div",{className:"homePageDiv"},r.a.createElement("button",{className:"homePage",onClick:function(){return window.location.href="http://ammarveljagic.me"}},"Back to home page")))}}]),a}(r.a.Component);a(14);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d21f9cf7.chunk.js.map