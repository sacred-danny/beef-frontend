(this["webpackJsonpwagyu-frontend"]=this["webpackJsonpwagyu-frontend"]||[]).push([[7],{1165:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Uc}));var c,i,r,s,a,j,o,b,l,d,u,x,O,h,m,p,g,f,y,v,w,k,S,z,C,W,D,L,T,N,A,F,I,U,B,P,Q,H,E,R,Y,M,V,G,q,J,K,X,Z,_,$,ee,te,ne,ce,ie,re,se,ae,je,oe,be,le,de,ue,xe,Oe,he,me,pe,ge,fe,ye=n(3),ve=n.n(ye),we=n(12),ke=n(17),Se=n(15),ze=n(0),Ce=n.n(ze),We=n(7),De=n(2),Le=Ce.a.createContext({mostRecentLotteryNumber:0,historyError:!1,historyData:[]}),Te=n(954),Ne=n(49),Ae=n(187),Fe=n(18),Ie=n(209),Ue=n(943),Be=function(){var e=Object(ze.useState)((new Date).getTime()),t=Object(ke.a)(e,2),n=t[0],c=t[1];return Object(ze.useEffect)((function(){var e=setInterval((function(){c((function(e){return e+1e3}))}),1e3);return function(){return clearInterval(e)}}),[]),n},Pe=n(432),Qe=[2,14],He=function(e){var t,n=new Date(e),c=n.getUTCHours(),i=function(e){switch(!0){case e<Qe[0]||e>=Qe[1]:return Qe[0];case e<Qe[1]:return Qe[1];default:return 0}}(c);if(2===i&&c>=2&&c<=23){var r=new Date(e),s=r.getUTCDate()+1;r.setUTCDate(s),t=r.setUTCHours(i,0,0,0)}else t=n.setUTCHours(i,0,0,0);return t},Ee=function(e,t){return"".concat(parseInt(e),"h, ").concat(parseInt(t),"m")},Re=function(e){var t=function(e){return 36e5*(parseInt(e/36e5)+1)}(e)-e,n=Object(Pe.a)(t/1e3).minutes,c=Object(Pe.a)(t/1e3).hours;return Ee(c,n)},Ye=function(e){return 100-(He(e)-e)/432e5*100},Me=n(1),Ve=We.e.div(c||(c=Object(Se.a)(["\n  display: block;\n  width: 100%;\n"]))),Ge=We.e.div(i||(i=Object(Se.a)(["\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]))),qe=We.e.div(r||(r=Object(Se.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]))),Je=Object(We.e)(De.W)(s||(s=Object(Se.a)(["\n  margin-right: 16px;\n"]))),Ke=function(){var e=Object(Fe.b)().t,t=Object(Ue.a)(),n=Be(),c=Re(n),i=function(e){var t=He(e)-e,n=Object(Pe.a)(t/1e3).minutes,c=Object(Pe.a)(t/1e3).hours;return Ee(c,n)}(n);return Object(Me.jsxs)(Ve,{children:[Object(Me.jsx)(De.P,{primaryStep:Ye(n),secondaryStep:1/12*100,showProgressBunny:!0}),Object(Me.jsxs)(Ge,{children:[Object(Me.jsx)(Je,{fontSize:"20px",bold:!0,color:"contrast",children:t?c:i}),Object(Me.jsx)(De.W,{fontSize:"20px",bold:!0,color:"invertedContrast",children:e(t?"Until ticket sale":"Until lottery draw")})]}),t&&Object(Me.jsx)(qe,{children:Object(Me.jsxs)(De.W,{color:"invertedContrast",children:[i," ",e("Until lottery draw")]})})]})},Xe=Object(We.e)(De.z).attrs({as:"h1",size:"xl"})(a||(a=Object(Se.a)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(e){return e.theme.colors.secondary})),Ze=Object(We.e)(De.W)(j||(j=Object(Se.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))),_e=We.e.div(o||(o=Object(Se.a)(["\n  background-image: linear-gradient(139.73deg,#313D5C 0%,#3D2A54 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n"]))),$e=Object(We.e)(Ie.a)(b||(b=Object(Se.a)(["\n  display: flex;\n\n  flex-direction: column;\n\n  "," {\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),et=We.e.div(l||(l=Object(Se.a)(["\n  flex: 1;\n  padding-right: 0;\n\n  "," {\n    padding-right: 24px;\n  }\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),tt=We.e.div(d||(d=Object(Se.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 0;\n  margin-top: 16px;\n\n  "," {\n    margin-top: 0;\n    padding-left: 24px;\n  }\n\n  "," {\n    padding-left: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),nt=function(){var e=Object(Fe.b)().t;return Object(Me.jsx)(_e,{children:Object(Me.jsxs)($e,{children:[Object(Me.jsxs)(et,{children:[Object(Me.jsx)(Xe,{children:e("The WAGYU Lottery")}),Object(Me.jsx)(Ze,{children:e("Buy tickets with WAGYU")}),Object(Me.jsx)(Ze,{children:e("Win if 2, 3, or 4 of your ticket numbers match!")})]}),Object(Me.jsx)(tt,{children:Object(Me.jsx)(Ke,{})})]})})},ct=We.e.div(u||(u=Object(Se.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),it=n(31),rt=n(933),st=n(22),at=n(953),jt=We.e.div(x||(x=Object(Se.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #ddd;\n  border-bottom: 8px solid #ddd;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),ot=function(){return Object(Me.jsx)(jt,{})},bt=We.e.div(O||(O=Object(Se.a)(["\n  color: #ff8c28;\n"]))),lt=We.e.div(h||(h=Object(Se.a)(["\n  text-align: center;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),dt=Object(We.e)(De.i)(m||(m=Object(Se.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[2]})),ut=function(e){var t=e.myTicketNumbers,n=e.onDismiss,c=e.from,i=Object(rt.e)(),r=Object(Fe.b)().t,s=Object(ze.useCallback)((function(e){for(var t=0,n=i.length-1;n>=0;n--)i[n]==e[n]&&t++;return t}),[i]),a=t.map((function(e,t){if(s(e[0])>1&&"buy"!==c){var n=new Array(s(e[0])+1).join("\ud83e\udd11");return Object(Me.jsxs)(bt,{children:[n,e.toString(),n]},t)}return Object(Me.jsx)("p",{children:e.toString()},t)}));return Object(Me.jsxs)(De.L,{title:r("My Tickets (Total: ".concat(t.length,")"),{TICKETS:t.length}),onDismiss:n,children:[Object(Me.jsx)(lt,{children:Object(Me.jsx)("h2",{children:a})}),Object(Me.jsx)(dt,{variant:"secondary",onClick:n,children:r("Close")})]})},xt=We.e.div(p||(p=Object(Se.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),Ot=We.e.div(g||(g=Object(Se.a)(["\n  margin-bottom: 16px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),ht=We.e.div(f||(f=Object(Se.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[3]})),mt=We.e.div(y||(y=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),pt=Object(We.e)(De.i)(v||(v=Object(Se.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[1]})),gt=function(e){var t=e.onSuccess,n=Object(ze.useState)(!1),c=Object(ke.a)(n,2),i=c[0],r=c[1],s=Object(Fe.b)().t,a=Object(rt.c)(),j=a.claimLoading,o=a.claimAmount,b=Object(at.c)().onMultiClaim,l=Object(rt.a)(),d=Object(De.mb)(Object(Me.jsx)(ut,{myTicketNumbers:l,from:"buy"})),u=Object(ke.a)(d,1)[0],x=Object(ze.useCallback)(Object(we.a)(ve.a.mark((function e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,b();case 4:e.sent&&(t(),r(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[b,r,t]),O=Object(st.c)(o).toFixed(2);return Object(Me.jsxs)(mt,{children:[Object(Me.jsx)(Ot,{children:Object(Me.jsx)(De.fb,{})}),Object(Me.jsx)(De.z,{as:"h3",size:"lg",color:"secondary",children:s("You won!")}),j&&Object(Me.jsx)(ot,{}),!j&&Object(Me.jsx)(Me.Fragment,{children:Object(Me.jsxs)(xt,{children:[Object(Me.jsx)(De.z,{as:"h4",size:"xl",style:{marginRight:"6px"},children:O}),Object(Me.jsx)(De.z,{as:"h4",size:"lg",children:"WAGYU"})]})}),Object(Me.jsx)(ht,{children:Object(Me.jsx)(De.i,{width:"100%",disabled:i,onClick:x,children:s("Collect")})}),Object(Me.jsx)(pt,{variant:"text",onClick:u,children:s("View your tickets")})]})},ft=We.e.div(w||(w=Object(Se.a)(["\n  display: flex;\n"]))),yt=We.e.div(k||(k=Object(Se.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),vt=Object(We.e)(De.W)(S||(S=Object(Se.a)(["\n  padding-left: 12px;\n"]))),wt=We.e.img(z||(z=Object(Se.a)(["\n  margin-right: 6px;\n\n  "," {\n    margin-right: 20px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),kt=Object(We.e)(De.i)(C||(C=Object(Se.a)(["\n  padding: 0 12px;\n  height: unset;\n"]))),St=function(){var e=Object(Fe.b)().t,t=Object(rt.a)(),n=Object(De.mb)(Object(Me.jsx)(ut,{myTicketNumbers:t,from:"buy"})),c=Object(ke.a)(n,1)[0];return Object(Me.jsxs)(ft,{children:[Object(Me.jsx)(wt,{src:"/images/no-prize.svg",alt:"no prizes won"}),Object(Me.jsxs)(yt,{children:[Object(Me.jsx)(vt,{color:"textDisabled",children:e("Sorry, no prizes to collect")}),Object(Me.jsx)(kt,{variant:"text",onClick:c,children:e("View your tickets")})]})]})},zt=Object(We.e)(De.m)(W||(W=Object(Se.a)(["\n  ","\n"])),(function(e){return e.isDisabled?"  \n        margin-top: 16px;\n        background-color: unset;\n        box-shadow: unset;\n        border: 1px solid ".concat(e.theme.colors.textDisabled,";\n\n        ").concat(e.theme.mediaQueries.sm," {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg," {\n          margin-top: 32px;\n        }\n        "):""})),Ct=function(e){var t=e.isAWin,n=e.onSuccess;return Object(Me.jsx)(zt,{isDisabled:!t,isActive:t,children:Object(Me.jsx)(De.n,{children:t?Object(Me.jsx)(gt,{onSuccess:n}):Object(Me.jsx)(St,{})})})},Wt=n(139),Dt=Object(We.e)(De.n)(D||(D=Object(Se.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Lt=Object(We.e)(De.z)(L||(L=Object(Se.a)(["\n  margin: 16px 0;\n"]))),Tt=We.e.div(T||(T=Object(Se.a)(["\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),Nt=function(){var e=Object(Fe.b)().t;return Object(Me.jsx)(De.m,{isActive:!0,children:Object(Me.jsxs)(Dt,{children:[Object(Me.jsx)(Tt,{children:Object(Me.jsx)(De.X,{})}),Object(Me.jsx)(Lt,{size:"md",children:e("Unlock wallet to access lottery")}),Object(Me.jsx)(Wt.a,{})]})})},At=n(971),Ft=n(948),It=n(20),Ut=n(972),Bt=n(1005),Pt=n(973),Qt=We.e.div(N||(N=Object(Se.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n\n  "," {\n    justify-content: space-between;\n  }\n"])),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.mediaQueries.lg})),Ht=function(){var e=Object(Fe.b)().t,t=Object(At.a)(),n=Object(Ue.a)(),c=Object(Ft.a)(Object(It.o)()),i=Object(rt.a)(),r=i.length,s=Object(De.mb)(Object(Me.jsx)(ut,{myTicketNumbers:i,from:"buy"})),a=Object(ke.a)(s,1)[0],j=Object(De.mb)(Object(Me.jsx)(Pt.a,{})),o=Object(ke.a)(j,1)[0],b=Object(De.mb)(Object(Me.jsx)(Bt.a,{max:c.balance})),l=Object(ke.a)(b,1)[0],d=Object(Ut.a)(o),u=d.handleApprove,x=d.requestedApproval;return Object(Me.jsx)(Qt,{children:n?Object(Me.jsxs)(De.i,{disabled:!0,children:[" ",e("On sale soon")]}):t.toNumber()?Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(De.i,{style:{marginRight:"8px"},width:"100%",disabled:0===r,variant:"secondary",onClick:a,children:e("View your tickets")}),Object(Me.jsx)(De.i,{id:"lottery-buy-start",width:"100%",onClick:l,children:e("Buy ticket")})]}):Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(De.i,{width:"100%",disabled:!0,children:e("View your tickets")}),Object(Me.jsx)(De.i,{width:"100%",disabled:x,onClick:u,children:e("Approve WAGYU")})]})})},Et=Object(We.e)(De.m)(A||(A=Object(Se.a)(["\n  ","\n"])),(function(e){return e.isSecondCard?"  \n        margin-top: 16px;\n\n        ".concat(e.theme.mediaQueries.sm," {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg," {\n          margin-top: 32px;\n        }\n        "):""})),Rt=We.e.div(F||(F=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n"]))),Yt=We.e.div(I||(I=Object(Se.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))),Mt=We.e.div(U||(U=Object(Se.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Vt=function(e){var t=e.isSecondCard,n=void 0!==t&&t,c=Object(Fe.b)().t,i=Object(Ue.a)(),r=Object(rt.a)().length,s=Be(),a=i&&Re(s);return Object(Me.jsx)(Et,{isSecondCard:n,children:Object(Me.jsxs)(De.n,{children:[Object(Me.jsxs)(Rt,{children:[Object(Me.jsx)(Yt,{children:Object(Me.jsx)(De.Y,{})}),i?Object(Me.jsxs)(Mt,{children:[Object(Me.jsx)(De.W,{fontSize:"14px",color:"textSubtle",children:c("Until ticket sale:")}),Object(Me.jsx)(De.z,{size:"lg",children:a})]}):Object(Me.jsxs)(Mt,{children:[Object(Me.jsx)(De.W,{fontSize:"14px",color:"textSubtle",children:c("Your tickets for this round")}),Object(Me.jsx)(De.z,{size:"lg",children:r})]})]}),Object(Me.jsx)(Ht,{})]})})},Gt=n(949),qt=n(11),Jt=n(28),Kt=n(937),Xt=We.e.div(B||(B=Object(Se.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(4, auto);\n"])),(function(e){return e.pastDraw?3:2})),Zt=Object(We.e)(De.W)(P||(P=Object(Se.a)(["\n  text-align: right;\n"]))),_t=Object(We.e)(De.z)(Q||(Q=Object(Se.a)(["\n  text-align: right;\n"]))),$t=We.e.div(H||(H=Object(Se.a)(["\n  margin-bottom: ",";\n"])),(function(e){return e.marginBottom?e.marginBottom:"10px"})),en=Object(We.e)($t)(E||(E=Object(Se.a)(["\n  transform: translate(-40%, 0%);\n"]))),tn=function(e){var t=e.lotteryPrizeAmount,n=void 0===t?0:t,c=e.pastDraw,i=void 0!==c&&c,r=e.jackpotMatches,s=e.twoTicketMatches,a=e.threeTicketMatches,j=+(n/100*50).toFixed(0),o=+(n/100*20).toFixed(0),b=+(n/100*10).toFixed(0),l=+(n/100*20).toFixed(0),d=Object(Fe.b)().t,u=Object(Jt.k)(),x=function(e){return new qt.BigNumber(e).multipliedBy(u).toNumber()};return Object(Me.jsxs)(Xt,{pastDraw:i,children:[Object(Me.jsx)($t,{children:Object(Me.jsx)(De.W,{fontSize:"14px",color:"textSubtle",children:d("No. Matched")})}),i&&Object(Me.jsx)(en,{children:Object(Me.jsx)(Zt,{fontSize:"14px",color:"textSubtle",children:d("Winners")})}),Object(Me.jsx)($t,{children:Object(Me.jsx)(Zt,{fontSize:"14px",color:"textSubtle",children:d("Prize Pot")})}),Object(Me.jsx)($t,{children:Object(Me.jsx)(De.z,{size:"md",children:"4"})}),i&&Object(Me.jsx)(en,{children:Object(Me.jsx)(_t,{size:"md",children:r})}),Object(Me.jsx)($t,{children:Object(Me.jsxs)(_t,{size:"md",children:[j.toLocaleString(),!i&&!u.eq(0)&&Object(Me.jsx)(Kt.a,{value:x(j)})]})}),Object(Me.jsx)($t,{children:Object(Me.jsx)(De.W,{bold:!0,children:"3"})}),i&&Object(Me.jsx)(en,{children:Object(Me.jsx)(Zt,{bold:!0,children:a})}),Object(Me.jsx)($t,{children:Object(Me.jsxs)(Zt,{children:[o.toLocaleString(),!i&&!u.eq(0)&&Object(Me.jsx)(Kt.a,{value:x(o)})]})}),Object(Me.jsx)($t,{children:Object(Me.jsx)(De.W,{children:"2"})}),i&&Object(Me.jsx)(en,{children:Object(Me.jsx)(Zt,{children:s})}),Object(Me.jsx)($t,{children:Object(Me.jsxs)(Zt,{children:[b.toLocaleString(),!i&&!u.eq(0)&&Object(Me.jsx)(Kt.a,{value:x(b)})]})}),Object(Me.jsx)($t,{marginBottom:"0",children:Object(Me.jsxs)(De.W,{children:[d("".concat(i?"Burned":"To burn")),":"]})}),i?Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)($t,{marginBottom:"0"}),Object(Me.jsx)($t,{marginBottom:"0",children:Object(Me.jsx)(Zt,{children:l.toLocaleString()})})]}):Object(Me.jsx)($t,{marginBottom:"0",children:Object(Me.jsx)(Zt,{children:l.toLocaleString()})})]})},nn=We.e.div(R||(R=Object(Se.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"]))),cn=We.e.div(Y||(Y=Object(Se.a)(["\n  display: flex;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),rn=We.e.div(M||(M=Object(Se.a)(["\n  display: flex;\n"]))),sn=We.e.div(V||(V=Object(Se.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))),an=We.e.div(G||(G=Object(Se.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),jn=We.e.div(q||(q=Object(Se.a)(["\n  height: ",";\n\n  "," {\n    height: 100%;\n  }\n"])),(function(e){return e.showFooter?"100%":"0px"}),(function(e){return e.theme.mediaQueries.sm})),on=function(){var e=Object(Fe.b)().t,t=Object(it.c)().account,n=Object(ze.useState)(!1),c=Object(ke.a)(n,2),i=c[0],r=c[1],s=+Object(st.c)(Object(rt.d)()).toFixed(0),a=new qt.BigNumber(s).multipliedBy(Object(Jt.k)()).toNumber(),j=s.toLocaleString(),o=Object(ze.useContext)(Le).currentLotteryNumber;return Object(Me.jsxs)(De.m,{children:[Object(Me.jsxs)(De.n,{children:[t&&Object(Me.jsxs)(De.y,{mb:"16px",alignItems:"center",justifyContent:"space-between",style:{height:"20px"},children:[0===o&&Object(Me.jsx)(De.S,{height:20,width:56}),o>0&&Object(Me.jsx)(De.W,{fontSize:"12px",style:{fontWeight:600},children:e("Round #".concat(o),{num:o})})]}),Object(Me.jsxs)(nn,{children:[Object(Me.jsxs)(rn,{children:[Object(Me.jsx)(sn,{children:Object(Me.jsx)(De.eb,{})}),Object(Me.jsxs)(an,{children:[Object(Me.jsx)(De.W,{fontSize:"14px",color:"textSubtle",children:e("Total Pot:")}),Object(Me.jsxs)(De.z,{size:"lg",children:[j," WAGYU"]}),0!==a&&Object(Me.jsx)(Kt.a,{value:a})]})]}),Object(Me.jsx)(cn,{children:Object(Me.jsx)(Gt.a,{onClick:function(){return r(!i)},expanded:i})})]})]}),Object(Me.jsx)(jn,{showFooter:i,children:Object(Me.jsx)(De.o,{children:Object(Me.jsx)(tn,{lotteryPrizeAmount:s})})})]})},bn=We.e.a(J||(J=Object(Se.a)(["\n  margin-top: 1em;\n  text-decoration: none;\n  color: #25beca;\n"]))),ln=We.e.div(K||(K=Object(Se.a)(["\n  margin-top: 1em;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n"]))),dn=We.e.div(X||(X=Object(Se.a)(["\n  margin-top: -2.3em;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),un=We.e.div(Z||(Z=Object(Se.a)(["\n  margin-top: -2.3em;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]))),xn=We.e.div(_||(_=Object(Se.a)(["\n  text-align: center;\n"]))),On=We.e.div($||($=Object(Se.a)(["\n  text-align: center;\n  margin-left: -1.2em;\n\n  @media (max-width: 600px) {\n    margin-left: -0.2em;\n  }\n"]))),hn=We.e.div(ee||(ee=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n"]))),mn=We.e.div(te||(te=Object(Se.a)(["\n  margin-top: 1em;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),pn=We.e.div(ne||(ne=Object(Se.a)(["\n  text-align: center;\n  align-items: center;\n"]))),gn=We.e.div(ce||(ce=Object(Se.a)(["\n  text-align: center;\n  align-items: center;\n  padding-left: 2px;\n  padding-right: 2px;\n"]))),fn=We.e.div(ie||(ie=Object(Se.a)(["\n  padding: 10px;\n  border-radius: 12px;\n  background: linear-gradient(180deg, #54dade 0%, #24c7d6 76.22%);\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  margin: 10px;\n  margin-bottom: 7px;\n  width: 40px;\n\n  @media (min-width: 768px) {\n    font-size: 40px;\n    margin: 20px;\n    width: 60px;\n  }\n"]))),yn=We.e.div(re||(re=Object(Se.a)(["\n  /* padding: 10px; */\n  border-radius: 12px;\n  margin: 16px 20px;\n  width: 60px;\n"]))),vn=We.e.div(se||(se=Object(Se.a)(["\n  padding-top: 10px;\n  padding-left: 10px;\n  border-radius: 12px;\n  margin: 20px;\n  width: 20px;\n"]))),wn=We.e.div(ae||(ae=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),kn=We.e.div(je||(je=Object(Se.a)(["\n  color: ",";\n  font-size: 24px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 1000;\n"])),(function(e){return e.theme.colors.secondary})),Sn=We.e.div(oe||(oe=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),zn=function(){var e=Object(it.c)().account,t=Object(rt.e)(),n=Object(Ue.a)(),c=Object(rt.b)(4),i=Object(rt.b)(3),r=Object(rt.b)(2),s=Object(Fe.b)().t;return Object(Me.jsx)(De.m,{children:Object(Me.jsx)(De.n,{children:Object(Me.jsxs)(Sn,{children:[Object(Me.jsxs)(wn,{children:[Object(Me.jsx)(kn,{children:e&&n?"\ud83e\udd73".concat(s("Winning Numbers This Round"),"\ud83e\udd73"):s("Latest Winning Numbers")}),Object(Me.jsx)("br",{})]}),Object(Me.jsx)(ln,{children:t.map((function(e,t){return Object(Me.jsx)(fn,{children:Object(Me.jsx)(pn,{children:e})},t)}))}),Object(Me.jsxs)(dn,{children:[Object(Me.jsx)(yn,{children:Object(Me.jsx)(On,{children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 1@2x.png",alt:"Number 1",width:200,height:150,responsive:!0})})}),Object(Me.jsx)(yn,{children:Object(Me.jsx)(xn,{style:{marginLeft:"-1.2em"},children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 2@2x.png",alt:"Number 2",width:200,height:150,responsive:!0})})}),Object(Me.jsx)(yn,{children:Object(Me.jsx)(xn,{style:{marginLeft:"-1.2em"},children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 3@2x.png",alt:"Number 3",width:200,height:150,responsive:!0})})}),Object(Me.jsx)(yn,{children:Object(Me.jsx)(xn,{style:{marginLeft:"-1.2em"},children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 4@2x.png",alt:"Number 4",width:200,height:150,responsive:!0})})})]}),Object(Me.jsxs)(un,{children:[Object(Me.jsx)(vn,{children:Object(Me.jsx)(On,{children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 1@2x.png",alt:"Number 1",width:200,height:150,responsive:!0})})}),Object(Me.jsx)(vn,{children:Object(Me.jsx)(xn,{style:{marginLeft:"-1.2em"},children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 2@2x.png",alt:"Number 2",width:200,height:150,responsive:!0})})}),Object(Me.jsx)(vn,{children:Object(Me.jsx)(xn,{style:{marginLeft:"-1.2em"},children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 3@2x.png",alt:"Number 3",width:200,height:150,responsive:!0})})}),Object(Me.jsx)(vn,{children:Object(Me.jsx)(xn,{style:{marginLeft:"-1.2em"},children:Object(Me.jsx)(De.C,{src:"/images/sign bunny 4@2x.png",alt:"Number 4",width:200,height:150,responsive:!0})})})]}),Object(Me.jsxs)(mn,{children:[Object(Me.jsxs)(hn,{children:[Object(Me.jsx)(gn,{children:s("Tickets matching 4 numbers:")}),Object(Me.jsx)(gn,{children:Object(Me.jsx)("strong",{children:c})})]}),Object(Me.jsxs)(hn,{children:[Object(Me.jsx)(gn,{children:s("Tickets matching 3 numbers:")}),Object(Me.jsx)(gn,{children:Object(Me.jsx)("strong",{children:i})})]}),Object(Me.jsxs)(hn,{children:[Object(Me.jsx)(gn,{children:s("Tickets matching 2 numbers:")}),Object(Me.jsx)(gn,{children:Object(Me.jsx)("strong",{children:r})})]})]}),Object(Me.jsx)(bn,{href:"https://api.wagyuswap.com/api/lottery?page=0&pageSize=25",target:"_blank",children:s("Export recent winning numbers")})]})})})},Cn=We.e.div(be||(be=Object(Se.a)(["\n  max-width: 500px;\n  margin: 0 auto 40px;\n  display: flex;\n  flex-direction: column;\n"]))),Wn=Object(We.e)(De.z)(le||(le=Object(Se.a)(["\n  margin: 16px 0;\n"]))),Dn=Object(We.e)(De.C)(de||(de=Object(Se.a)(["\n  align-self: center;\n"]))),Ln=Object(We.e)(De.E)(ue||(ue=Object(Se.a)(["\n  align-self: center;\n  margin-top: 16px;\n"]))),Tn=function(){var e=Object(Fe.b)().t;return Object(Me.jsxs)(Cn,{children:[Object(Me.jsx)(Dn,{src:"/images/wagyu-lottery-bunny.png",alt:"lottery bunny",width:163,height:140}),Object(Me.jsx)(Wn,{size:"lg",as:"h3",color:"secondary",children:e("How it works")}),Object(Me.jsx)(De.W,{fontSize:"16px",children:e("Spend WAGYU to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!")}),Object(Me.jsx)(Ln,{href:"https://docs.wagyuswap.finance/lottery-1",children:e("Read more")})]})},Nn=Object(We.e)(De.f)(xe||(xe=Object(Se.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),An=We.e.div(Oe||(Oe=Object(Se.a)(["\n  display: flex;\n  flex-direction: ",";\n"])),(function(e){return e.isAWin?"column":"column-reverse"})),Fn=function(){var e=Object(it.c)().account,t=Object(rt.c)(),n=t.claimAmount,c=t.setLastUpdated,i=Object(st.c)(n)>0,r=Object(ze.useCallback)((function(){c()}),[c]);return Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsxs)(Nn,{children:[Object(Me.jsx)(on,{}),Object(Me.jsx)(An,{isAWin:i,children:e?Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(Ct,{isAWin:i,onSuccess:r}),Object(Me.jsx)(Vt,{isSecondCard:i})]}):Object(Me.jsx)(Nt,{})})]}),Object(Me.jsx)(Tn,{}),Object(Me.jsx)(zn,{})]})},In=n(10),Un=function(){var e=Object(we.a)(ve.a.mark((function e(t){var n,c;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.wagyuswap.com/api/singleLottery?lotteryNumber=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Bn=function(){var e=Object(ze.useState)(!0),t=Object(ke.a)(e,2),n=t[0],c=t[1],i=Object(ze.useState)(null),r=Object(ke.a)(i,2),s=r[0],a=r[1],j=Object(ze.useState)(null),o=Object(ke.a)(j,2),b=o[0],l=o[1],d=Object(ze.useContext)(Le).mostRecentLotteryNumber;return Object(ze.useEffect)((function(){d>0&&function(){var e=Object(we.a)(ve.a.mark((function e(){var t;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,Un(d);case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(e.t0);case 11:return e.prev=11,c(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()().then()}),[d,a,c,l]),{isLoading:n,data:s,mostRecentLotteryNumber:d,error:b}},Pn=We.e.div(he||(he=Object(Se.a)(["\n  margin-bottom: 24px;\n"]))),Qn=We.e.div(me||(me=Object(Se.a)(["\n  position: relative;\n"]))),Hn=We.e.div(pe||(pe=Object(Se.a)(["\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]))),En=We.e.div(ge||(ge=Object(Se.a)(["\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: auto;\n"]))),Rn=function(e){var t=e.initialLotteryNumber,n=e.onSubmit,c=Object(ze.useState)(t),i=Object(ke.a)(c,2),r=i[0],s=i[1],a=Object(ze.useState)(!1),j=Object(ke.a)(a,2),o=j[0],b=j[1],l=Object(Fe.b)().t;return Object(Me.jsxs)(Pn,{children:[Object(Me.jsx)(De.W,{children:l("Select lottery number:")}),Object(Me.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(r)},children:Object(Me.jsxs)(Qn,{children:[Object(Me.jsx)(Hn,{children:Object(Me.jsx)(De.D,{value:r,type:"number",inputMode:"numeric",min:"0",isWarning:o,max:t,onChange:function(e){if(e.currentTarget.value){var n=parseInt(e.currentTarget.value,10);b(n>t),s(n)}else s(t)}})}),Object(Me.jsx)(En,{children:Object(Me.jsx)(De.i,{type:"submit",scale:"sm",disabled:o,children:l("Search")})})]})})]})},Yn=function(e){var t=e.error;return Object(Me.jsx)(De.W,{p:"24px",children:t.message})},Mn=n(104),Vn=["valueToDisplay","children","Icon"],Gn=We.e.div(fe||(fe=Object(Se.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))),qn=function(e){var t=e.valueToDisplay,n=e.children,c=e.Icon,i=Object(Mn.a)(e,Vn);return Object(Me.jsxs)(De.y,Object(In.a)(Object(In.a)({},i),{},{children:[c&&Object(Me.jsx)(Gn,{children:Object(Me.jsx)(c,{})}),Object(Me.jsxs)(De.y,{flexDirection:"column",children:[Object(Me.jsx)(De.W,{fontSize:"14px",color:"textSubtle",children:n}),Object(Me.jsx)(De.z,{size:"lg",children:t})]})]}))};qn.defaultProps={valueToDisplay:"",Icon:function(){return Object(Me.jsx)("div",{})},children:""};var Jn,Kn,Xn,Zn,_n,$n,ec,tc,nc,cc,ic,rc,sc,ac,jc,oc=qn,bc=We.e.div(Jn||(Jn=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n\n  & > div {\n    flex: 1;\n    width: 100%;\n  }\n"]))),lc=Object(We.e)(De.F)(Kn||(Kn=Object(Se.a)(["\n  align-items: center;\n  display: flex;\n  height: 48px;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n"]))),dc=function(e){var t=e.contractLink,n=e.lotteryNumber,c=Object(Fe.b)().t,i=Object(rt.a)(n),r=i.length,s=Object(De.mb)(Object(Me.jsx)(ut,{myTicketNumbers:i,from:"buy"})),a=Object(ke.a)(s,1)[0];return Object(it.c)().account?Object(Me.jsxs)(bc,{children:[Object(Me.jsx)(De.i,{disabled:0===r,onClick:a,width:"100%",children:c("View your tickets")}),Object(Me.jsx)(lc,{href:t,children:c("View on BscScan")})]}):Object(Me.jsx)(bc,{children:Object(Me.jsx)(Wt.a,{})})},uc=function(e){if(!e)return{};var t=new Date(e),n=t.toDateString();return{hours:t.getUTCHours(),monthAndDay:n.split(" ").splice(1,2).join(" ")}},xc=We.e.div(Xn||(Xn=Object(Se.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),Oc=function(e){var t=e.timeValue,n=uc(t),c=n.monthAndDay,i=n.hours;return Object(Me.jsx)(xc,{children:Object(Me.jsxs)(De.W,{fontSize:"14px",children:[c,", ",i,":00 UTC"]})})},hc=We.e.div(Zn||(Zn=Object(Se.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),mc=Object(We.e)(oc)(_n||(_n=Object(Se.a)(["\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[4]})),pc=function(e){var t=e.data,n=Object(Fe.b)().t,c=t.contractLink,i=t.jackpotTicket,r=t.lotteryDate,s=t.lotteryNumber,a=t.lotteryNumbers,j=t.match2Ticket,o=t.match3Ticket,b=t.poolSize;return!t.error&&t&&Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(De.n,{children:Object(Me.jsxs)(hc,{children:[Object(Me.jsx)(Oc,{timeValue:r}),Object(Me.jsxs)(De.z,{size:"md",mb:"24px",children:["Round #",s]}),Object(Me.jsx)(mc,{valueToDisplay:"".concat(a[0],", ").concat(a[1],", ").concat(a[2],", ").concat(a[3]),Icon:De.Y,children:n("Winning numbers")}),Object(Me.jsx)(oc,{valueToDisplay:n("".concat(b.toLocaleString()," WAGYU")),Icon:De.eb,children:n("Total prizes")})]})}),Object(Me.jsxs)(De.o,{children:[Object(Me.jsx)(tn,{lotteryPrizeAmount:b,jackpotMatches:i,twoTicketMatches:j,threeTicketMatches:o,pastDraw:!0}),Object(Me.jsx)(dc,{contractLink:c,lotteryNumber:s})]})]})},gc=function(e){var t=e.error,n=e.data;return Object(Me.jsx)(De.m,{children:t.message?Object(Me.jsx)(Yn,{error:t}):Object(Me.jsx)(pc,{data:n})})},fc=We.e.div($n||($n=Object(Se.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),yc=Object(We.e)(De.n)(ec||(ec=Object(Se.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 552px; // height of final card\n"]))),vc=function(){var e=Object(ze.useState)({roundData:null,error:{message:null,type:null},isInitialized:!1,isLoading:!0}),t=Object(ke.a)(e,2),n=t[0],c=t[1],i=Bn(),r=i.data,s=i.mostRecentLotteryNumber,a=Object(Fe.b)().t,j=n.roundData,o=n.error,b=n.isInitialized,l=n.isLoading;Object(ze.useEffect)((function(){r&&c((function(e){return Object(In.a)(Object(In.a)({},e),{},{isLoading:!1,isInitialized:!0,roundData:r})}))}),[r,c]);var d=function(){var e=Object(we.a)(ve.a.mark((function e(t){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c((function(e){return Object(In.a)(Object(In.a)({},e),{},{isLoading:!0})})),Un(t).then((function(e){e.error?c((function(e){return Object(In.a)(Object(In.a)({},e),{},{error:{message:a("The lottery number you provided does not exist"),type:"out of range"},isLoading:!1,isInitialized:!0})})):c((function(t){return Object(In.a)(Object(In.a)({},t),{},{error:{message:null,type:null},roundData:e,isLoading:!1,isInitialized:!0})}))})).catch((function(){c((function(e){return Object(In.a)(Object(In.a)({},e),{},{error:{message:a("Error fetching data"),type:"api"},isLoading:!1,isInitialized:!0})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Me.jsxs)(fc,{children:[Object(Me.jsx)(Rn,{initialLotteryNumber:s,onSubmit:d}),!b||l?Object(Me.jsx)(De.m,{children:Object(Me.jsx)(yc,{children:Object(Me.jsx)(ot,{})})}):Object(Me.jsx)(gc,{error:o,data:j})]})},wc=Object(ze.lazy)((function(){return Promise.all([n.e(6),n.e(9)]).then(n.bind(null,1164))})),kc=We.e.div(tc||(tc=Object(Se.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Sc=function(){var e=Object(ze.useContext)(Le),t=e.historyData,n=e.historyError,c=function(e){return t.map((function(t){return t[e]})).reverse()},i=function(e){return{borderColor:e.color,fill:!1,borderWidth:2,pointRadius:0,pointHitRadius:10}},r={labels:c("lotteryNumber"),datasets:[Object(In.a)({label:"Pool Size",data:c("poolSize"),yAxisID:"y-axis-pool"},i({color:"#8F80BA"})),Object(In.a)({label:"Burned",data:c("burned"),yAxisID:"y-axis-burned"},i({color:"#1FC7D4"}))]},s=function(e){return{borderCapStyle:"round",gridLines:{display:!1},ticks:{fontFamily:"Kanit, sans-serif",fontColor:e.color,fontSize:14,lineHeight:e.lineHeight,maxRotation:0,beginAtZero:!0,autoSkipPadding:15,userCallback:function(e){return e.toLocaleString()}}}},a={legend:{display:!1},scales:{yAxes:[Object(In.a)({type:"linear",display:!0,position:"left",id:"y-axis-pool"},s({color:"#8f80ba",lineHeight:1.6})),Object(In.a)({type:"linear",display:!0,position:"right",id:"y-axis-burned"},s({color:"#1FC7D4",lineHeight:1.5}))],xAxes:[Object(In.a)({},s({color:"#452A7A",lineHeight:1}))]}};return Object(Me.jsxs)(Me.Fragment,{children:[n&&Object(Me.jsx)(kc,{children:Object(Me.jsx)(De.W,{children:"Error fetching data"})}),!n&&t.length>1?Object(Me.jsx)(ze.Suspense,{fallback:Object(Me.jsx)("div",{children:"Loading..."}),children:Object(Me.jsx)(wc,{data:r,options:a,type:"line"})}):Object(Me.jsx)(kc,{children:Object(Me.jsx)(ot,{})})]})},zc=We.e.div(nc||(nc=Object(Se.a)(["\n  display: flex;\n  margin: 36px 0 28px;\n"]))),Cc=We.e.div(cc||(cc=Object(Se.a)(["\n  display: flex;\n  margin-right: 18px;\n  align-items: center;\n"]))),Wc=We.e.div(ic||(ic=Object(Se.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: ",";\n  margin-right: 6px;\n"])),(function(e){var t=e.isPoolSize;return e.theme.colors[t?"textSubtle":"primary"]})),Dc=function(){var e=Object(Fe.b)().t;return Object(Me.jsxs)(zc,{children:[Object(Me.jsxs)(Cc,{children:[Object(Me.jsx)(Wc,{isPoolSize:!0}),Object(Me.jsx)(De.W,{children:e("Pool Size")})]}),Object(Me.jsxs)(Cc,{children:[Object(Me.jsx)(Wc,{}),Object(Me.jsx)(De.W,{children:e("Burned")})]})]})},Lc=function(){var e=Object(Fe.b)().t;return Object(Me.jsx)(De.m,{children:Object(Me.jsxs)(De.n,{children:[Object(Me.jsx)(De.z,{size:"md",children:e("History")}),Object(Me.jsx)(Dc,{}),Object(Me.jsx)(Sc,{})]})})},Tc=Object(We.e)(De.f)(rc||(rc=Object(Se.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Nc=We.e.div(sc||(sc=Object(Se.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ac=We.e.div(ac||(ac=Object(Se.a)(["\n  display: flex;\n  margin-top: 32px;\n  justify-content: center;\n"]))),Fc=function(){return Object(Me.jsxs)(Tc,{children:[Object(Me.jsx)(vc,{}),Object(Me.jsxs)(Nc,{children:[Object(Me.jsx)(Lc,{}),Object(Me.jsx)(Ac,{children:Object(Me.jsx)("img",{src:"/images/wagyu-lottery-bunny.png",alt:"lottery bunny"})})]})]})},Ic=We.e.div(jc||(jc=Object(Se.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 32px;\n"]))),Uc=function(){var e=Object(Fe.b)().t,t=Object(Ne.b)(),n=Object(ze.useState)(0),c=Object(ke.a)(n,2),i=c[0],r=c[1],s=Object(ze.useState)([]),a=Object(ke.a)(s,2),j=a[0],o=a[1],b=Object(ze.useState)(!1),l=Object(ke.a)(b,2),d=l[0],u=l[1],x=Object(ze.useState)(0),O=Object(ke.a)(x,2),h=O[0],m=O[1],p=Object(ze.useState)(1),g=Object(ke.a)(p,2),f=g[0],y=g[1];Object(ze.useEffect)((function(){fetch("https://api.wagyuswap.com/api/lotteryHistory").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(){u(!0)}))}),[]),Object(ze.useEffect)((function(){t&&function(){var e=Object(we.a)(ve.a.mark((function e(){var n,c;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.a)(t);case 2:n=e.sent,c=n-1,m(n),y(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]);return Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(nt,{}),Object(Me.jsxs)(Ae.a,{children:[Object(Me.jsx)(Ic,{children:Object(Me.jsxs)(De.j,{activeIndex:i,onItemClick:function(e){r(e)},scale:"sm",variant:"subtle",children:[Object(Me.jsx)(De.k,{children:e("Next draw")}),Object(Me.jsx)(De.k,{children:e("Past draws")})]})}),Object(Me.jsx)(ct,{}),Object(Me.jsx)(Le.Provider,{value:{historyError:d,historyData:j,mostRecentLotteryNumber:f,currentLotteryNumber:h},children:0===i?Object(Me.jsx)(Fn,{}):Object(Me.jsx)(Fc,{})})]})]})}},949:function(e,t,n){"use strict";var c,i=n(15),r=(n(0),n(7)),s=n(2),a=n(18),j=n(1),o=r.e.div(c||(c=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),b=function(e){var t=e.onClick,n=e.expanded,c=Object(a.b)().t;return Object(j.jsxs)(o,{"aria-label":c("Hide or show expandable content"),role:"button",onClick:function(){return t()},children:[Object(j.jsx)(s.W,{color:"primary",bold:!0,children:c(n?"Hide":"Details")}),n?Object(j.jsx)(s.t,{}):Object(j.jsx)(s.s,{})]})};b.defaultProps={expanded:!1},t.a=b}}]);
//# sourceMappingURL=7.8f46915d.chunk.js.map