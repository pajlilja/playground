(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(11),r=t.n(s),o=(t(89),t(29)),c=t(30),i=t(35),m=t(31),d=t(36),u=t(17),h=t(172),E=t(173),v=t(169),p=t(170),f=t(171),g=(t(91),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={days:0,hours:0,min:0,sec:0},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var a=e.calculateCountdown(e.props.date);a?e.setState(a):e.stop()},1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var a=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(a<=0)return!1;var t={years:0,days:0,hours:0,min:0,sec:0};return a>=31557600&&(t.years=Math.floor(a/31557600),a-=365.25*t.years*86400),a>=86400&&(t.days=Math.floor(a/86400),a-=86400*t.days),a>=3600&&(t.hours=Math.floor(a/3600),a-=3600*t.hours),a>=60&&(t.min=Math.floor(a/60),a-=60*t.min),t.sec=a,t}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return l.a.createElement("div",{className:"Countdown"},l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.days)),l.a.createElement("span",null,1===e.days?"Dag":"Dagar"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.hours)),l.a.createElement("span",null,"Timmar"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.min)),l.a.createElement("span",null,"Minuter"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.sec)),l.a.createElement("span",null,"Sekunder"))))}}]),a}(n.Component));g.defaultProps={date:new Date};var b=g,N=t(15),k=t(73),w=t.n(k),y=t(74),C=t.n(y),S=t(75),O=t.n(S),j=t(76),L=t.n(j),x=t(77),A=t.n(x),B=(t(103),function(e){function a(e,t){var n;return Object(o.a)(this,a),(n=Object(i.a)(this,Object(m.a)(a).call(this,e,t))).handleShow=n.handleShow.bind(Object(u.a)(Object(u.a)(n))),n.handleClose=n.handleClose.bind(Object(u.a)(Object(u.a)(n))),n.state={show:!1},n}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header startbgImage"},l.a.createElement(h.a,{fixedTop:!0},l.a.createElement(E.a,null,l.a.createElement(v.a,null,l.a.createElement(N.Link,{className:"navbarLinks",activeClass:"active",to:"information",spy:!0,smooth:!0,offset:50,duration:700,onSetActive:this.handleSetActive},"Information")),l.a.createElement(v.a,null,l.a.createElement(N.Link,{className:"navbarLinks",activeClass:"active",to:"boende",spy:!0,smooth:!0,offset:50,duration:700,onSetActive:this.handleSetActive},"Boende")),l.a.createElement(v.a,null,l.a.createElement(N.Link,{className:"navbarLinks",activeClass:"active",to:"brollopet",spy:!0,smooth:!0,offset:50,duration:700,onSetActive:this.handleSetActive},"Br\xf6llopet")),l.a.createElement(v.a,null,l.a.createElement(N.Link,{className:"navbarLinks",activeClass:"active",to:"osa",spy:!0,smooth:!0,offset:50,duration:700,onSetActive:this.handleSetActive},"O.S.A")))),l.a.createElement("h1",{className:"homeNames"},"Chameli & Haoujin"),l.a.createElement("h2",{className:"homeText"},"Gifter sig"),l.a.createElement("h2",{className:"homeText"},"31.08.2019")),l.a.createElement(N.Element,{name:"information",className:"informationElement"},l.a.createElement("div",{className:"infoWrapper"},l.a.createElement("h1",null,"Varmt V\xe4lkomna"),l.a.createElement("div",{className:"infoOverText"},"P\xe5 den h\xe4r sidan hittar ni all information om helgen 30 augusti \u2013 1 september. ",l.a.createElement("br",null),"Hela festligheten med vigsel, middag, dans med mera kommer vara p\xe5 Villa L\xe5ngbers i fantastiska Dalarna."),l.a.createElement("div",{className:"infoGrid"},l.a.createElement("div",{className:"innerInfoGrid"},l.a.createElement("div",{className:"iconGrid"},l.a.createElement("img",{className:"icons",src:O.a,alt:"gift"}),"30 augusti \u2013 1 september 2019"),l.a.createElement("div",{className:"iconGrid"},l.a.createElement("img",{className:"icons",src:C.a,alt:"gift"}),"Villa L\xe5ngbers (l\xe4nkad till karta)")),l.a.createElement("div",{className:"innerInfoGrid"},l.a.createElement("div",{className:"iconGrid"},l.a.createElement("img",{className:"icons",src:L.a,alt:"gift"}),"\xc5terkommer om exakt tid"),l.a.createElement("div",{className:"iconGrid"},l.a.createElement("img",{className:"icons",src:A.a,alt:"gift"}),"G\xe4rna sin nationalitets folkdr\xe4kt,",l.a.createElement("br",null),"annars g\xe5r det j\xe4ttebra med kostym,",l.a.createElement("br",null),"eller b\xe5da om man vill byta om till kv\xe4llens fest")),l.a.createElement("div",{className:"iconGrid"},l.a.createElement("div",null,l.a.createElement("img",{className:"icons",src:w.a,alt:"gift"})),"Vi ser det som en present att Ni \xe4r d\xe4r och vill fira med oss!",l.a.createElement("br",null),"Men om ni s\xe5 g\xe4rna vill ge en present s\xe5 \xe4r v\xe5r h\xf6gsta \xf6nskan ett bidrag till br\xf6llopsresan"),l.a.createElement("div",null,"Vill ni h\xe5lla tal eller annat, har fr\xe5gor med mera s\xe5 kontakta v\xe5r toastmaster:",l.a.createElement("br",null),"Mikael Enstr\xf6m",l.a.createElement("br",null),"mikael.enstrom67@gmail.com",l.a.createElement("br",null),"070-679 11 22")))),l.a.createElement("div",{className:"countdownbgImage"},l.a.createElement("h1",null,"Nu r\xe4knar vi ner dagarna!"),l.a.createElement("h1",null,l.a.createElement(b,{date:"2019-08-31T14:00:00"}))),l.a.createElement(N.Element,{name:"boende",className:"boendeElement"},l.a.createElement("div",{className:"boendeWrapper"},l.a.createElement("h1",null,"Boende"))),l.a.createElement("div",{className:"invitedbgImage"},l.a.createElement("h1",null,"Du \xe4r inbjuden!")),l.a.createElement(N.Element,{name:"brollopet",className:"brollopElement"},l.a.createElement("div",{className:"brollopWrapper"},l.a.createElement("h1",null,"Br\xf6llopet"),l.a.createElement("h2",{className:"brollopInfo"},"Mer info kommer snart"))),l.a.createElement(N.Element,{name:"osa",className:"osaElement"},l.a.createElement("div",{className:"osaWrapper"},l.a.createElement("h1",null,"Om svar anh\xe5lls"),l.a.createElement("div",{className:"modalButton"},l.a.createElement(p.a,{className:"osaButton",bsStyle:"primary",bsSize:"large",onClick:this.handleShow},"Klicka h\xe4r f\xf6r att svara")),l.a.createElement(f.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Om svar anh\xe5lles")),l.a.createElement(f.a.Body,null,"H\xe4r kan du fylla i O.S.A",l.a.createElement("form",{method:"POST",action:"https://formspree.io/joakung@yahoo.se"},l.a.createElement("textarea",{name:"message",placeholder:"Test Message"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Send Test"))),l.a.createElement(f.a.Footer,null,l.a.createElement(p.a,{type:"submit",onClick:this.handleClose},"Svara nu"))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,a,t){e.exports=t.p+"static/media/gift.1dc5ab27.svg"},74:function(e,a,t){e.exports=t.p+"static/media/placeholder.e41fed32.svg"},75:function(e,a,t){e.exports=t.p+"static/media/wedding-day.905d37e0.svg"},76:function(e,a,t){e.exports=t.p+"static/media/wedding.972e17e4.svg"},77:function(e,a,t){e.exports=t.p+"static/media/wedding-dress.3ae2f6d4.svg"},84:function(e,a,t){e.exports=t(167)},89:function(e,a,t){},91:function(e,a,t){}},[[84,2,1]]]);
//# sourceMappingURL=main.59a28609.chunk.js.map