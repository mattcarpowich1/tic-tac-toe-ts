(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var c,r,a=t(0),i=t.n(a),o=t(4),s=t.n(o),u=t(5),O=t(2),l=t(3),b=t(9);!function(e){e.NOT_STARTED="NOT STARTED",e.IN_PROGRESS="IN PROGRESS",e.TIE_GAME="TIE GAME",e.X_WINS="X WINS",e.O_WINS="O WINS"}(c||(c={})),function(e){e.MAKE_MOVE="MAKE MOVE",e.RESET_GAME="RESET GAME",e.GO_HOME="GO HOME",e.SET_BOARD_DIMENSION="SET BOARD DIMENSION"}(r||(r={}));var j="X",d="",m=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=n,r=0;r<=t*(t-1);r+=t)if(e[r]!==d){for(var a=!0,i=e[r],o=r;o<r+t;o++)if(e[o]!==i){a=!1;break}if(a)return i===j?c.X_WINS:c.O_WINS}for(var s=0;s<t;s+=1)if(e[s]!==d){for(var u=!0,O=e[s],l=s;l<=t*(t-1)+s;l+=t)if(e[l]!==O){u=!1;break}if(u)return O===j?c.X_WINS:c.O_WINS}var b=e[0];if(b){for(var m=!0,f=0;f<t*t;f+=t+1)if(e[f]!==b){m=!1;break}if(m)return b===j?c.X_WINS:c.O_WINS}var S=e[t-1];if(S){for(var E=!0,N=t-1;N<=t*(t-1);N+=t-1)if(e[N]!==S){E=!1;break}if(E)return S===j?c.X_WINS:c.O_WINS}return e.includes(d)?c.IN_PROGRESS:c.TIE_GAME},f="",S="X",E=[f,f,f,f,f,f,f,f,f],N={currentPlayer:S,board:E,gameState:c.NOT_STARTED,boardDimension:3},h={currentPlayer:S,board:E,gameState:c.IN_PROGRESS,boardDimension:3},_=Object(u.a)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.MAKE_MOVE:var t=n.index,c=n.value,a=[].concat(Object(b.a)(e.board.slice(0,t)),[c],Object(b.a)(e.board.slice(t+1))),i=m(a,e.boardDimension);return Object(l.a)(Object(l.a)({},e),{},{board:a,gameState:i,currentPlayer:e.currentPlayer===S?"O":S});case r.RESET_GAME:return Object(l.a)(Object(l.a)({},h),{},{board:new Array(e.boardDimension*e.boardDimension).fill(f),boardDimension:e.boardDimension});case r.GO_HOME:return N;case r.SET_BOARD_DIMENSION:var o=n.dimension;return Object(l.a)(Object(l.a)({},e),{},{boardDimension:o});default:return e}}}),v=(t(19),t(20),t(1)),I=function(e){return Object(v.jsx)("div",{className:"container",children:e.children})},x=(t(22),function(){return Object(v.jsxs)("header",{children:[Object(v.jsx)("h3",{children:"Ultimate"}),Object(v.jsx)("h1",{children:"TIC-TAC-TOE"})]})}),g=(t(23),function(e){var n=e.value,t=Object(O.b)();return Object(v.jsxs)("div",{className:"numberSelector",children:[Object(v.jsx)("h4",{children:"Board Size:"}),Object(v.jsxs)("div",{className:"numberSelectorBottom",children:[Object(v.jsxs)("div",{className:"left",children:[n,"x",n]}),Object(v.jsxs)("div",{className:"right",children:[Object(v.jsx)("button",{onClick:function(){t({type:r.SET_BOARD_DIMENSION,dimension:n<7?n+1:n})},children:"+"}),Object(v.jsx)("button",{onClick:function(){t({type:r.SET_BOARD_DIMENSION,dimension:n>2?n-1:n})},children:"-"})]})]})]})}),T=t(10),M=t.n(T),A=(t(26),function(){var e=Object(O.c)((function(e){return e.game.boardDimension})),n=Object(O.c)((function(e){return e.game.board})),t=Object(O.c)((function(e){return e.game.currentPlayer})),a=Object(O.c)((function(e){return e.game.gameState})),i=Object(O.b)();console.log(e);var o=M.a.chunk(n,e);console.log(o);return Object(v.jsx)("div",{className:"gameBoard",children:o.map((function(n,o){return Object(v.jsx)("div",{className:"boardRow",children:n.map((function(n,s){return Object(v.jsx)("button",{className:"square ".concat(n),onClick:function(){return function(e,n){if(!e&&a===c.IN_PROGRESS)return i({type:r.MAKE_MOVE,index:n,value:t})}(n,o*e+s)},children:n&&n},o)}))},o)}))})}),R=(t(27),function(e){var n=e.currentPlayer,t=e.gameState;return Object(v.jsxs)("div",{className:"message",children:[t===c.IN_PROGRESS&&"Player ".concat(n,"'s Move!"),t===c.X_WINS&&"Player X Wins!",t===c.O_WINS&&"Player O Wins!",t===c.TIE_GAME&&"Tie Game!"]})}),D=(t(28),function(){var e=Object(O.b)(),n=Object(O.c)((function(e){return e.game.gameState})),t=Object(O.c)((function(e){return e.game.currentPlayer})),a=Object(O.c)((function(e){return e.game.boardDimension}));return Object(v.jsx)("div",{className:"zone",children:n===c.NOT_STARTED?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{className:"actionButton",onClick:function(){e({type:r.RESET_GAME})},children:"Begin Multiplayer Game"}),Object(v.jsx)(g,{value:a})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"gameActionButtons",children:[Object(v.jsx)("button",{className:"actionButtonSmallAbsolute",onClick:function(){return e({type:r.RESET_GAME})},children:"Reset Game"}),Object(v.jsx)("button",{className:"actionButtonSmallAbsolute",onClick:function(){return e({type:r.GO_HOME})},children:"Home"})]}),Object(v.jsx)(R,{currentPlayer:t,gameState:n}),Object(v.jsx)(A,{})]})})});t(29);var G=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(I,{children:[Object(v.jsx)(x,{}),Object(v.jsx)(D,{})]})})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))},P=Object(u.b)(_);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(O.a,{store:P,children:Object(v.jsx)(G,{})})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.6dd9ce3d.chunk.js.map