(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),u=a.n(c),l=a(3);var s=function(e){var t=r.a.useRef();return r.a.createElement("form",null,r.a.createElement("input",{type:"file",ref:t,accept:".csv,.txt",onChange:function(){return e.setFile(t.current.files[0])}}))},o=a(6),i=a.n(o),f=["blue","green","grey","orange","purple","red","yellow"],p={blue:"rgb(54, 162, 235)",green:"rgb(75, 192, 192)",grey:"rgb(201, 203, 207)",orange:"rgb(255, 159, 64)",purple:"rgb(153, 102, 255)",red:"rgb(255, 99, 132)",yellow:"rgb(255, 205, 86)"};var b=function(e){var t=r.a.useRef();return r.a.useEffect((function(){var a,n;a=t.current.getContext("2d"),n=e.data,new i.a(a,{type:"line",data:{labels:n._labels,datasets:n._keys.map((function(e,t){return{label:e,backgroundColor:p[f[t]],borderColor:p[f[t]],data:n[e],fill:!1}}))}})})),r.a.createElement("canvas",{ref:t})};var m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.clearData},"Clear Data"),r.a.createElement(b,{data:e.data}))},d=a(1),g=a.n(d),y=a(8),h=a(2),k=a(7),v=a.n(k);function E(e,t){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){v.a.parse(t,Object(y.a)({complete:e},a))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(h.a)(g.a.mark((function e(t,a){var n,r,c,u,l,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,a);case 2:n=e.sent,r=n.data,c=n.meta.fields,u={_labels:[]},l=0;case 7:if(!(l<r.length-1)){e.next=23;break}s=0;case 9:if(!(s<c.length)){e.next=20;break}if(0!==l||0===s){e.next=13;break}return u[c[s]]=[r[l][c[s]]],e.abrupt("continue",17);case 13:if(0!==s){e.next=16;break}return u._labels.push(r[l][c[s]]),e.abrupt("continue",17);case 16:0!==l&&0!==s&&u[c[s]].push(r[l][c[s]]);case 17:s++,e.next=9;break;case 20:l++,e.next=7;break;case 23:return u._keys=c.splice(1),e.abrupt("return",u);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=r.a.useState(),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(),u=Object(l.a)(c,2),o=u[0],i=u[1];return r.a.useEffect((function(){a&&function(e,t){return w.apply(this,arguments)}(a,{header:!0,dynamicTyping:!0}).then((function(e){i(e)}))}),[a]),r.a.useEffect((function(){console.log(o)}),[o]),o?r.a.createElement(m,{data:o,clearData:function(){i(null)}}):r.a.createElement(s,{setFile:n})};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a72097bc.chunk.js.map