(this["webpackJsonpbmi-converter-react"]=this["webpackJsonpbmi-converter-react"]||[]).push([[0],{32:function(e,t,a){e.exports=a(42)},37:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),o=a.n(i),l=(a(37),a(23)),c=a(24),h=a(29),s=a(30),m=a(61),u=a(65),g=a(64),v=a(63),d=a(62),p=a(43),b=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleHeight=function(t){e.setState({height:t.target.value})},e.handleWeight=function(t){e.setState({weight:t.target.value})},e.getBmi=function(t){t.preventDefault();var a=e.state,r=a.weight,n=a.height,i=(r/(n*n/1e4)).toFixed(2);return 0===n?e.setState({bmi:"Wow! I can't do that!"}):(e.setState({bmi:i}),i<=18.5?e.setState({state:"Underweight",color:"orange"}):i>=18.5&&i<=25?e.setState({state:"Normal",color:"green"}):i>=25&&i<=30?e.setState({state:"Overweight",color:"orange"}):i>31?e.setState({state:"Obesity",color:"red"}):void 0)},e.state={weight:0,height:0,bmi:0,state:"",color:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.weight,a=e.height,r=e.bmi,i=e.state,o=e.color;return n.a.createElement("div",{className:"App"},n.a.createElement(m.a,{target:"_blank",variant:"body2",href:"https://github.com/Dev-CasperTheGhost/bmi-converter"},"Source Code"),n.a.createElement("form",{style:{marginTop:"20px"},onSubmit:this.getBmi},n.a.createElement(u.a,{fullWidth:!0},n.a.createElement(g.a,null,"Enter your Weight in kilograms"),n.a.createElement(v.a,{type:"number",value:t,onChange:this.handleWeight})),n.a.createElement("div",{className:"margin-top"},n.a.createElement(u.a,{fullWidth:!0},n.a.createElement(g.a,null,"Enter your height in centimeters"),n.a.createElement(v.a,{type:"number",value:a,onChange:this.handleHeight}))),n.a.createElement("div",{className:"margin-top"},n.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Get BMI"))),n.a.createElement("div",{style:{marginTop:"20px"}},n.a.createElement(p.a,{color:"inherit",variant:"h2"},"Your BMI is: ",r," "),n.a.createElement(p.a,{color:"inherit",variant:"h3"},"State: ",n.a.createElement("span",{style:{color:o}}," ",i," ")," ")))}}]),a}(r.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c1a81d41.chunk.js.map