(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{"5kS5":function(e,t,n){e.exports={container:"index-module--container--1Qco9",photo:"index-module--photo--6zcpX",content:"index-module--content--2qSIH",iconsContainer:"index-module--iconsContainer--1JLyf",iconWrapper:"index-module--iconWrapper--1IEjp"}},O0dG:function(e,t,n){"use strict";n.r(t),n.d(t,"aboutPropTypes",(function(){return b})),n.d(t,"imageListPropTypes",(function(){return j})),n.d(t,"query",(function(){return S})),n.d(t,"iconsNameMap",(function(){return I}));n("pJf4"),n("zGcK"),n("q8oJ"),n("8npG"),n("nWfQ"),n("3nLz");var a=n("q1tI"),r=n.n(a),i=n("17x9"),o=n.n(i),s=n("9eSz"),u=n.n(s),c=n("I/Ru"),l=n("jNNy"),p=n("Al62"),m=n.n(p),d=n("5kS5"),f=n.n(d);function h(e){return function(){var t,n=v(e);if(y()){var a=v(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return g(this,t)}}function g(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var b={data:o.a.shape({profilePhoto:o.a.shape({childImageSharp:o.a.shape({fluid:o.a.object.isRequired}).isRequired}).isRequired,flagIt:o.a.shape({childImageSharp:o.a.shape({fixed:o.a.object.isRequired})}),flagEn:o.a.shape({childImageSharp:o.a.shape({fixed:o.a.object.isRequired})}),skillIcons:o.a.object.isRequired,toolIcons:o.a.object.isRequired})},q=function(e){E(t,e);h(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.data,t=e.profilePhoto,n=e.flagIt,a=e.skillIcons,i=e.toolIcons;return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"About",description:"A brief summary of this blog",path:"about"}),r.a.createElement("div",{className:f.a.container},r.a.createElement("div",{className:f.a.photo},r.a.createElement(u.a,{fluid:t.childImageSharp.fluid})),r.a.createElement("div",{className:f.a.content},r.a.createElement("h1",null,"Hi, I'm Luigi!"),r.a.createElement("h2",null,"Software Developer"),r.a.createElement("p",null,"Per la versione italiana clicca qui"),r.a.createElement("a",{href:m.a.resolvePageUrl("../","it","about")},r.a.createElement(u.a,{fixed:n.childImageSharp.fixed,style:{display:"block",margin:"auto"}})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus venenatis arcu, cursus pretium enim lacinia nec. Duis viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi, fringilla quis lacus et, sagittis mollis massa. Cras tempus massa quis lobortis laoreet. Pellentesque metus odio, sagittis nec venenatis non, maximus congue eros. Suspendisse pellentesque purus sit amet ante commodo, et molestie mauris aliquet. Proin non nibh libero. Fusce at nulla euismod, condimentum augue quis, convallis justo."),r.a.createElement("br",null),r.a.createElement("h2",null,"Skills"),r.a.createElement(R,{edges:a.edges}),r.a.createElement("h2",null,"Tools"),r.a.createElement(R,{edges:i.edges}))))},t}(r.a.Component),j={edges:o.a.arrayOf(o.a.shape({node:o.a.shape({name:o.a.string.isRequired,childImageSharp:o.a.shape({fixed:o.a.object.isRequired}).isRequired}).isRequired})).isRequired},R=function(e){E(t,e);h(t);function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).render=function(){return r.a.createElement("div",{className:f.a.iconsContainer},t.props.edges.sort((function(e,t){return e.node.name.toLowerCase()>t.node.name.toLowerCase()?1:-1})).map((function(e){var t=e.node,n=t.name,a=t.childImageSharp;return r.a.createElement("div",{className:f.a.iconWrapper,key:n},r.a.createElement(u.a,{fixed:a.fixed,alt:n+" logo",title:n}),r.a.createElement("label",null,I[n]?I[n]:m.a.capitalize(n)))})))},t}return t}(r.a.Component),S="3573639707",I={css:"CSS",html:"HTML",jquery:"JQuery",nodejs:"Node.js",vuejs:"Vue.js",gruntjs:"Grunt.js"};t.default=q},rLZg:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return q}));n("pJf4"),n("zGcK"),n("q8oJ"),n("8npG"),n("nWfQ"),n("3nLz");var a=n("q1tI"),r=n.n(a),i=n("9eSz"),o=n.n(i),s=n("O0dG"),u=n("I/Ru"),c=n("jNNy"),l=n("Al62"),p=n.n(l),m=n("5kS5"),d=n.n(m);function f(e){return function(){var t,n=y(e);if(g()){var a=y(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return h(this,t)}}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var E=function(e){v(t,e);f(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.data,t=e.profilePhoto,n=e.flagEn,a=e.skillIcons,i=e.toolIcons;return r.a.createElement(u.a,null,r.a.createElement(c.a,{title:"About",description:"Una breve presentazione di questo blog",path:"about"}),r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.photo},r.a.createElement(o.a,{fluid:t.childImageSharp.fluid})),r.a.createElement("div",{className:d.a.content},r.a.createElement("h1",null,"Ciao, sono Luigi!"),r.a.createElement("h2",null,"Software Developer"),r.a.createElement("p",null,"For the English version click here"),r.a.createElement("a",{href:p.a.resolvePageUrl("../","../","about")},r.a.createElement(o.a,{fixed:n.childImageSharp.fixed,style:{display:"block",margin:"auto"}})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus venenatis arcu, cursus pretium enim lacinia nec. Duis viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi, fringilla quis lacus et, sagittis mollis massa. Cras tempus massa quis lobortis laoreet. Pellentesque metus odio, sagittis nec venenatis non, maximus congue eros. Suspendisse pellentesque purus sit amet ante commodo, et molestie mauris aliquet. Proin non nibh libero. Fusce at nulla euismod, condimentum augue quis, convallis justo."),r.a.createElement("br",null),r.a.createElement("h2",null,"Competenze"),r.a.createElement(b,{edges:a.edges}),r.a.createElement("h2",null,"Strumenti"),r.a.createElement(b,{edges:i.edges}))))},t}(r.a.Component),b=function(e){v(t,e);f(t);function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).render=function(){return r.a.createElement("div",{className:d.a.iconsContainer},t.props.edges.sort((function(e,t){return e.node.name.toLowerCase()>t.node.name.toLowerCase()?1:-1})).map((function(e){var t=e.node,n=t.name,a=t.childImageSharp;return r.a.createElement("div",{className:d.a.iconWrapper,key:n},r.a.createElement(o.a,{fixed:a.fixed,alt:n+" logo",title:n}),r.a.createElement("label",null,s.iconsNameMap[n]?s.iconsNameMap[n]:p.a.capitalize(n)))})))},t}return t}(r.a.Component),q="4242763207";t.default=E}}]);
//# sourceMappingURL=component---src-pages-about-index-it-js-2d30b733708ce58916e6.js.map