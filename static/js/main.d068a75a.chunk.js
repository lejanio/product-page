(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{27:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},50:function(e,c,t){},51:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),i=t(19),n=t.n(i),r=(t(27),t(28),t(29),t(22)),l=t(5),A=t(10),o=t.n(A),d=t(20),m=t(3),j=t(21),b=t.n(j),u=t(55),p=t(0),O=function(e){var c=e.endDate,t=Object(a.useState)(0),s=Object(m.a)(t,2),i=s[0],n=s[1],r=Object(a.useState)(0),l=Object(m.a)(r,2),A=l[0],o=l[1],d=Object(a.useState)(0),j=Object(m.a)(d,2),b=j[0],u=j[1],O=Object(a.useState)(0),h=Object(m.a)(O,2),g=h[0],x=h[1];return Object(a.useEffect)((function(){var e=new Date(c),t=setInterval((function(){if(""!==c){var t=new Date,a=e.getTime()-t.getTime(),s=Math.floor(a/864e5);n(s);var i=Math.floor(a%864e5/36e5);o(i);var r=Math.floor(a%36e5/6e4);u(r);var l=Math.floor(a%6e4/1e3);x(l)}}),1e3);return function(){return clearInterval(t)}}),[]),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[i,"d:",A,"h:",b,"m:",g,"s"]})})},h=(t(50),function(e){var c=e.inputValue,t=e.onChange,s=Object(a.useState)(""),i=Object(m.a)(s,2),n=i[0],r=i[1],l=function(e){t(e),+e<=0||r(e)};return Object(p.jsxs)("div",{className:"quantity-rocker",children:[Object(p.jsx)("button",{disabled:Number(c)<=0,onClick:function(){var e=String(Number(c)-1);t(e),r(e)},className:"rocker-button",children:"\u2212"}),Object(p.jsx)("input",{type:"number",className:"rocker-input",placeholder:"0",value:c,onChange:function(e){return l(e.target.value)},onBlur:function(){Number(c)>=0||t(n)},onFocus:function(e){return e.target.select()}}),Object(p.jsx)("button",{onClick:function(){var e=String(Number(c)+1);t(e),r(e)},className:"rocker-button",children:"+"})]})}),g=(t(51),function(e){var c=e.color,t=e.icon,a=e.children;return Object(p.jsxs)("button",{className:"button ".concat("orange"===c&&"orange"," ").concat("white"===c&&"white"),children:[t&&Object(p.jsx)("img",{src:t,alt:"Icon"}),a]})}),x=t.p+"static/media/spinner.81453d27.gif",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAA//8A/2YA/2YA/2cA/2oA/2cA/2YA/2cA/2gA/20A/2gA/2oA/2oA/2YA/2YA/2YA/2YA/2YA/2YA/20A/2cA/2YA/2YA/2cA/2YAGn9F/wAAABp0Uk5TAAFkyPMYvOqBTBVlDDXrLfCMFJEHTRnZwQ8Sha+BAAAAZElEQVQImVWOSQ7AMAgDnYRClu5L0v7/o4VIPZTTYFm2ATgfiIJ30BtYYkpReFCdOZuWmR2KdMaYxSPEztO8xABKndcNifTZj9MYF6mtttsYavOSazO2AIt+vuhfqdYWm1NUfwH3AwNsYTF7HgAAAABJRU5ErkJggg==",N=t.p+"static/media/march_expo_logo.aa77fdc7.png",f=t.p+"static/media/shield_icon.1f068467.svg",y=t.p+"static/media/visa_icon.11c9e75c.svg",S=t.p+"static/media/mastercard_icon.3af0e930.svg",Z=t.p+"static/media/applepay_icon.19eb5188.svg",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IArs4c6QAAADZQTFRFAAAAqqqqmZmZmpqamZmZmZmZmZmZmpqampqam5ubmpqampqam5ubm5ubmZmZmpqampqamZmZ686HEQAAABJ0Uk5TAAyAz/NB3/KzQP64HFm5gaF9HJke9QAAAGFJREFUCJldj+EOgCAIhE8kIbXS93/ZBF1b8uPgG+wAAAgUmSMFeBxJlEglnU65VMu15MEhlVFf15A7BTxivdasL4So+EIjmKzo3ZR4oerCOTxxDJNbOZrVtmg7Yz/y98ILLyoC2tMMjh0AAAAASUVORK5CYII=",_=(t(52),{name:"",tags:[],options:[{label:"",price:{value:"",currency:{code:"",symbol:"",format:""}},old_price:{value:"",currency:{code:"",symbol:"",format:""}}},{label:"",price:{value:"",currency:{code:"",symbol:"",format:""}},old_price:{value:"",currency:{code:"",symbol:"",format:""}}}],discount:{amount:"",end_date:""},gallery:[{main:""},{main:""}],shipping:{method:{country:"",title:"",shipping_time:{value:"",info:""},cost:{value:"",currency:{code:"",symbol:"",format:""}}},lead_time:{value:"",info:""},props:{ready_to_ship:!1,in_stock:!1,fast_dispatch:!1}},reviews:{rating:"",count:0,total_buyers:0}}),k=[{label:"1080p",currency:"R",price:"833.99",quantity:"0",totalAmount:0},{label:"4K",currency:"R",price:"895.31",quantity:"0",totalAmount:0},{label:"Battery (Accessories)",currency:"R",price:"78.50",quantity:"0",totalAmount:0}],R=[{label:"1080p",currency:"R",totalAmount:0},{label:"4K",currency:"R",totalAmount:0},{label:"Battery (Accessories)",currency:"R",totalAmount:0}],F=function(){var e=Object(a.useState)(_),c=Object(m.a)(e,2),t=c[0],s=c[1],i=Object(a.useState)([]),n=Object(m.a)(i,2),A=n[0],j=n[1],F=Object(a.useState)(k),B=Object(m.a)(F,2),q=B[0],I=B[1],V=Object(a.useState)(R),w=Object(m.a)(V,2),M=w[0],U=w[1],C=Object(a.useState)(0),E=Object(m.a)(C,2),T=E[0],Q=E[1],K=t.name,L=t.gallery,D=t.options,J=t.reviews,P=t.shipping,G=t.tags,H=t.discount,z=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://fe-assignment.vaimo.net/").then((function(e){var c=e.data;s(c.product)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){z()}),[]);Object(a.useEffect)((function(){!function(){for(var e=[],c=0;c<Math.floor(+J.rating);c+=1)e.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IArs4c6QAAAF1QTFRFAAAA/2sA/2cA/2cA/2wA/2cA/2YA/2YA/2cA/2YA/2cA/2cA/2YA/4AA/2cA/2YA/2YA/2YA/2gA/2cA/2cA/2YA/2gA/2cA/2cA/2cA/20A/2YA/2cA/2oA/2YATI9FPwAAAB90Uk5TABNmvxr9cP9ck5SV3gaSBVr0WCrz/mXusLcH6GgdI1iAC1gAAABoSURBVAiZVczZFkAwDATQ0NaU2pcWxf9/JhWcmpfkJjkhupMkFCdNfxQillRKRsyAjDud54UpgdJc0VQZfKmba992jK7n+2EMGof37xQ4vb8t4BxgH85YpFwws1a/hbL59eZ+8PjYiU45HgRptjiFhAAAAABJRU5ErkJggg==");j([].concat(e))}()}),[t]);Object(a.useEffect)((function(){!function(){var e=q.map((function(e,c){var t=Number(e.price)*Number(e.quantity);return Object(l.a)(Object(l.a)({},M[c]),{},{totalAmount:t})}));U(e)}(),function(){var e=0;M.forEach((function(c){e+=c.totalAmount})),Q(e)}()}),[q,T]);var W=Object.values(D).sort((function(e,c){return+e.price.value-+c.price.value})),X=Object.entries(D);return Object(p.jsx)(p.Fragment,{children:""===K?Object(p.jsx)("img",{src:x,alt:"Loading...",className:"spinner"}):Object(p.jsxs)("div",{className:"main-section",children:[Object(p.jsx)("div",{className:"image-section",children:Object(p.jsx)("img",{src:L[0].main,alt:K,className:"image"})}),Object(p.jsxs)("section",{className:"description-section",children:[Object(p.jsxs)("div",{className:"description-section__header",children:[Object(p.jsxs)("div",{className:"description-header__top",children:[P.props.ready_to_ship&&Object(p.jsx)("div",{className:"description-header-top__item colored-item first",children:"Ready to Ship"}),P.props.in_stock&&Object(p.jsxs)("div",{className:"description-header-top__item",children:[Object(p.jsx)("div",{className:"image-wrapper",children:Object(p.jsx)("img",{src:v,alt:"checkmark"})}),Object(p.jsx)("span",{children:"In Stock"})]}),P.props.fast_dispatch&&Object(p.jsxs)("div",{className:"description-header-top__item last",children:[Object(p.jsx)("div",{className:"image-wrapper",children:Object(p.jsx)("img",{src:v,alt:"checkmark"})}),Object(p.jsx)("span",{children:"Fast Dispatch"})]})]}),Object(p.jsxs)("div",{className:"heading-container",children:[Object(p.jsx)("h1",{className:"heading",children:K}),Object(p.jsx)("div",{className:"heading-tags",children:G.map((function(e){return Object(p.jsx)("span",{className:"heading-tag",children:e},e)}))})]})]}),Object(p.jsxs)("div",{className:"reviews",children:[Object(p.jsxs)("div",{className:"rating",children:[Object(p.jsxs)("div",{className:"rating-stars",children:[Object(p.jsx)("div",{children:""!==J.rating&&A.map((function(e){return Object(p.jsx)("img",{src:e,alt:"rating"},Object(u.a)())}))}),Object(p.jsx)("div",{children:J.rating})]}),Object(p.jsxs)("div",{children:[J.count," ","Reviews"]})]}),Object(p.jsxs)("div",{className:"buyers",children:[J.total_buyers," ","buyers"]})]}),Object(p.jsxs)("div",{className:"pricing",children:[Object(p.jsx)("div",{className:"prices",children:Object(p.jsxs)("div",{className:"discounted-prices",children:[W[0].price.currency.symbol," ",Number(W[0].price.value).toLocaleString()," ","-"," ",W[W.length-1].price.currency.symbol," ",Number(W[W.length-1].price.value).toLocaleString()]})}),Object(p.jsxs)("div",{className:"pricing__text",children:[Object(p.jsxs)("span",{children:["/ Option"," ",Object(p.jsx)("span",{className:"pipe",children:"|"})]}),"\xa0",Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"option-count",children:[W.length," ","Options"]}),"\xa0 (Min.Order)"]})]}),Object(p.jsxs)("div",{className:"original-prices",children:[W[0].old_price.currency.symbol," ",Number(W[0].old_price.value).toFixed(2)," ","-"," ",W[W.length-1].old_price.currency.symbol," ",Number(Number(W[W.length-1].old_price.value).toFixed(2)).toLocaleString()]})]}),Object(p.jsxs)("div",{className:"promo",children:[Object(p.jsx)("div",{className:"promo-item",children:Object(p.jsx)("img",{src:N,alt:"Promotion Logo",className:"logo"})}),Object(p.jsx)("div",{className:"promo-item",children:"\u2022 Free shipping (up to $40)"}),Object(p.jsx)("div",{className:"promo-item large-display",children:"\u2022 On-time delivery guaranteed"}),Object(p.jsx)("div",{className:"promo-item",children:Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOBAMAAADkjZCYAAAAAXNSR0IArs4c6QAAAB5QTFRFAAAA/2kA/2YA/2kA/2gA/2cA/2YA/2cA//8A/2YArfssVQAAAAp0Uk5TADO7ESDu/8wBlvimq5kAAAAkSURBVAiZY2BUZgAC13QDINmZVgwkOabh4oBJiAg6E2oC2DQAfdAPIRLu6D8AAAAASUVORK5CYII=",alt:"chevron logo",className:"logo"})})})]}),Object(p.jsxs)("div",{className:"discount",children:[Object(p.jsxs)("div",{className:"discount-amount",children:[H.amount," ","OFF"]}),Object(p.jsxs)("div",{className:"discount-end",children:["Discount ends in",Object(p.jsxs)("div",{className:"discount-timer",children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAAmpqamZmZmZmZmZmZmZmZmpqampqampqamZmZmpqamZmZmZmZmpqanZ2dmpqampqa////mpqamZmZmpqamZmZmpqampqam5ubmZmZ4zA4ngAAABp0Uk5TACuP1fMFk/z+zaa8/8Qnu4gCpKPM2J/UfxTmTEBVAAAAg0lEQVQYlWWP2xLDIAhE10tQLNrYpmn6/z9aRTOdaXhg4AwLC9DCWOe9swYjFgqRU+IYaNH+Jrn0omS5d0KyVuDxBOoq1PQhtx7b1lLNwcBGnVeAEi0c4wfADj4N8OpCJH8Ckr0OMCV1V8Lvc2knhy6dZxs5Pnp2GlOkxq7WL8/9vf8FIb4F+DxYnDoAAAAASUVORK5CYII=",alt:"clock"}),""!==H.end_date&&Object(p.jsx)(O,{endDate:H.end_date})]})]})]}),Object(p.jsxs)("div",{className:"options-container",children:[Object(p.jsx)("div",{className:"padding-top-12 large-display",children:"Options:"}),Object(p.jsx)("div",{className:"options",children:""!==H.end_date&&X.map((function(e,c){return Object(p.jsxs)("div",{className:"option",children:[Object(p.jsx)("div",{children:e[1].label}),Object(p.jsxs)("div",{children:[e[1].price.currency.symbol," ",Number(e[1].price.value).toLocaleString()]}),Object(p.jsx)("div",{children:Object(p.jsx)(h,{inputValue:q[c].quantity,onChange:function(c){var t=q.findIndex((function(c){return c.label===e[1].label})),a=Object(r.a)(q);a[t]=Object(l.a)(Object(l.a)({},a[t]),{},{quantity:c}),I(a)}})})]},e[1].label)}))})]}),Object(p.jsxs)("div",{className:"description-section__footer",children:[Object(p.jsxs)("div",{className:"description-section__footer-item",children:[Object(p.jsx)("img",{src:f,alt:"Shield"}),Object(p.jsx)("span",{className:"bold",children:"Trade Assurance"})," ","protects your Alibaba.com orders"]}),Object(p.jsxs)("div",{className:"description-section__footer-item gap-4",children:["Payments:"," ",Object(p.jsx)("img",{src:y,alt:"Visa"}),Object(p.jsx)("img",{src:S,alt:"MasterCard"}),Object(p.jsx)("img",{src:Z,alt:"ApplePay"})]}),Object(p.jsxs)("div",{className:"description-section__footer-item gap-24",children:[Object(p.jsx)("span",{children:"Alibaba.com Logistics"}),Object(p.jsx)("span",{children:"Inspection Solutions"})]})]})]}),Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsx)("div",{className:"added-products",children:M.map((function(e,c){return e.totalAmount>0&&Object(p.jsxs)("div",{className:"added-product",children:[Object(p.jsx)("div",{children:e.label}),Object(p.jsx)("div",{children:q[c].quantity}),T>=0&&Object(p.jsxs)("div",{className:"flex gap-4",children:[Object(p.jsx)("span",{children:e.currency}),Object(p.jsx)("span",{children:Number(e.totalAmount).toLocaleString()})]})]},e.label)}))}),Object(p.jsxs)("div",{className:"summary-section",children:[Object(p.jsxs)("div",{className:"grid",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:["Ship to"," ",Object(p.jsxs)("span",{className:"underlined",children:[P.method.country," "]})]}),Object(p.jsxs)("div",{className:"underlined",children:["by"," ",P.method.title.slice(0,15).concat("...")]})]}),Object(p.jsxs)("div",{className:"total-amount",children:[P.method.cost.currency.symbol," ",T.toLocaleString()]})]}),Object(p.jsxs)("div",{className:"flex vertical-center gap-28",children:["Lead Time"," ",P.lead_time.value,Object(p.jsx)("div",{title:P.lead_time.info.concat(" ").concat(P.lead_time.value),className:"flex",children:Object(p.jsx)("img",{src:Y,alt:"Info"})})]}),Object(p.jsxs)("div",{className:"flex vertical-center gap-28",children:["Shipping time"," ",P.method.shipping_time.value,Object(p.jsx)("div",{title:P.method.shipping_time.info,className:"flex",children:Object(p.jsx)("img",{src:Y,alt:"Info"})})]}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(g,{color:"orange",children:"Login to Purchase"}),Object(p.jsx)(g,{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAA7ElEQVR4nKXSsS7DcRTF8c+VRiKIycKEqaMOjB14hj7CPyoGg8XWTSSNdDCoxOYBSMQrIJFYEOIBKqZqLKT6M0kabZPirOd8k5N7T0AqK+ooIWc4vUrqkbaMa2kITbwMhSYLuMl5M41JCVTN2I+KTl8mM4UdYVEyP9LlHQvbGq5SptADrikJD8KS5Ay64RNj8rjGZcrspXUTacNcypxLjiS7ViwLdz9hUdOMurJQxKq2Rx9u8W5UPg7VouTzO9/3ulF3kSoKGjbxFHWn/XIDXxMVbVQH+T21f6t/wd0jeUZrSG4W98Gf5tmSHHwBYBtKVZMFj+EAAAAASUVORK5CYII=",color:"white",children:"Contact the Supplier"})]})]})]})]})})},B=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(F,{})})};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d068a75a.chunk.js.map