(window["webpackJsonprestaurant-menu"]=window["webpackJsonprestaurant-menu"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),o=(a(14),a(15),a(1)),u=a(2),i=a(4),m=a(3),s=a(5),h=a(6),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={checked:[]},a.onChange=function(e){if(e.target.checked)a.setState({checked:[].concat(Object(h.a)(a.state.checked),[e.target.value])});else{var t=Object(h.a)(a.state.checked),n=t.indexOf(e.target.value);-1!==n&&(t.splice(n,1),a.setState({checked:t}))}},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.related.map((function(t,a){var n=t.name;return c.a.createElement("li",{key:a},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"menu2",onChange:e.onChange,value:n}),n),e.state.checked.includes(n)?c.a.createElement(p,{item:t}):null)}));return c.a.createElement("ul",null,t)}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={expanded:!1},a.onChange=function(e){for(var t=document.getElementsByName(e.target.name),n=0;n<t.length;n++)if(t[n].checked)return a.setState({expanded:!0}),null;a.setState({expanded:!1})},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.choices,r=t.related,l=a.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"menu2",onChange:e.onChange,value:t.name}),t.name))}));return void 0===r?c.a.createElement("ul",null,l):this.state.expanded?c.a.createElement(n.Fragment,null,c.a.createElement("ul",null,l),0===r.length?"":c.a.createElement("h6",{className:"related"},"You might also want"),c.a.createElement(d,{related:r})):c.a.createElement("ul",null,l)}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={checked:[]},a.onChange=function(e){if(e.target.checked)a.setState({checked:[].concat(Object(h.a)(a.state.checked),[e.target.value])});else{var t=Object(h.a)(a.state.checked),n=t.indexOf(e.target.value);-1!==n&&(t.splice(n,1),a.setState({checked:t}))}},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.menu.map((function(t,a){var n=t.name;return c.a.createElement("li",{key:a},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"menu1",onChange:e.onChange,value:n}),n),e.state.checked.includes(n)?c.a.createElement(p,{item:t}):null)}));return c.a.createElement("ul",null,t)}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.menu;return c.a.createElement(b,{menu:e})}}]),t}(n.Component),f=[{name:"Salad",choices:[{name:"Santa Fe"},{name:"Greek"},{name:"Asian"}],related:[{name:"Dressing",choices:[{name:"Italian"},{name:"Blue Cheese"},{name:"Ranch"}]},{name:"Bread",choices:[{name:"Italian"},{name:"Fiat"},{name:"Sourdough"}]}]},{name:"Entree",choices:[{name:"Steak"},{name:"Salmon"},{name:"Rice"}],related:[]},{name:"Soup",choices:[{name:"Minestrone"},{name:"Hot and sour"},{name:"Miso"}],related:[{name:"Bread",choices:[{name:"Breadsticks"}]}]}],k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={menu:f},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.menu;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Restaurant Menu"),c.a.createElement(v,{menu:e}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(k,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.26e46463.chunk.js.map