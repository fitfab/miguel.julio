_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(r.AmpStateContext))};var i,a=(i=n("q1tI"))&&i.__esModule?i:{default:i},r=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,a=void 0!==i&&i,r=e.hasQuery,o=void 0!==r&&r;return n||a&&o}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"7W2i":function(e,t,n){var i=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=i?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(i=n("Xuae"))&&i.__esModule?i:{default:i},o=n("lwAK"),c=n("FYa8"),l=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?r=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?r=!1:n.add(u);else{var s=a.props[u],d=i[u]||new Set;d.has(s)?r=!1:(d.add(s),i[u]=d)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),i=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:p,headManager:i,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},B94C:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"consultants"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firtName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"work"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Client"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"technology"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:253}};n.loc.source={body:"query($email: String) {\n    consultants(where: { email: $email }) {\n        firtName\n        lastName\n        work {\n            ... on Client {\n                name\n                description\n                technology\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var i=t.type;"NamedType"===i.kind&&n.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),i[e.name.value]=t}})),e.exports=n},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return _})),n.d(t,"default",(function(){return x}));var i=n("q1tI"),a=n.n(i),r=n("8Kt/"),o=n.n(r),c=n("vOnD"),l=c.c.div.withConfig({displayName:"components__Container",componentId:"sc-1i8d6yx-0"})(["min-height:100vh;padding:0 0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),u=c.c.main.withConfig({displayName:"components__Main",componentId:"sc-1i8d6yx-1"})(["padding:5rem 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),s=c.c.footer.withConfig({displayName:"components__Footer",componentId:"sc-1i8d6yx-2"})(["width:100%;height:100px;border-top:1px solid #eaeaea;display:flex;justify-content:center;align-items:center;& img{margin-left:0.5rem;height:1em;}& a{display:flex;justify-content:center;align-items:center;}"]),d=c.c.div.withConfig({displayName:"components__Flex",componentId:"sc-1i8d6yx-3"})(["display:flex;align-items:top;justify-content:center;flex-wrap:wrap;max-width:960px;margin-top:3rem;@media (max-width:600px){width:100%;flex-direction:column;}"]),f=c.c.a.withConfig({displayName:"components__Card",componentId:"sc-1i8d6yx-4"})(["background:#fff;margin:1rem;flex-basis:420px;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;transition:color 0.15s ease,border-color 0.15s ease;min-height:300px;transition:all 0.3s ease-out;&:hover,&:focus,&:active{box-shadow:-1px -1px 32px rgba(128,128,128,0.1);transform:scale(1.01);}& h2{margin:0 0 1rem 0;font-size:1.5rem;}& p{margin:0;font-size:1.25rem;line-height:1.5;margin-bottom:8px;}"]),p=c.c.strong.withConfig({displayName:"components__Pill",componentId:"sc-1i8d6yx-5"})(["display:inline-block;border-radius:16px;background:",";color:#fff;line-height:24px;font-size:16px;font-weight:300;padding:0 16px;margin:0 8px 8px 0;text-transform:uppercase;letter-spacing:0.5px;"],(function(e){return e.theme.colors.primary})),m=n("VX74"),h=n("B94C"),v=n.n(h),g=a.a.createElement,y=["http://fitfab.com/images/bolivia/1024px-Lomas_de_Arena_-_Santa_Cruz,_Bolivia.jpg","http://fitfab.com/images/bolivia/Cascadas_de_Cuevas_Santa_Cruz_Bolivia.jpg","http://fitfab.com/images/bolivia/Cerro_Chochis_-_Santa_Cruz_-_Bolivia_.png","http://fitfab.com/images/bolivia/NL-Cataratas_Arcoiris_Bolivia.jpg","http://fitfab.com/images/upload/10.JPG","http://fitfab.com/images/upload/12.JPG"],b=function(e){var t=e.consultants;return t[0].work.map((function(e,t){return g(f,{href:"https://www.google.com/search?q="+e.name,key:t,target:"blank"},g("h2",null,e.name," \u2192"),g("p",null,e.description),e.technology.map((function(e,t){return g(p,{key:t},e)})),g("div",{className:"addthis_inline_share_toolbox","data-title":e.name,"data-description":e.description,"data-url":"fitfab.com?q=i"+t,"data-image":y[t]}))}))},_=!0;function x(){var e=Object(m.useQuery)(v.a,{variables:{email:"mjulio.developer@gmail.com"}}),t=e.data,n=e.loading;return e.error||n?g("p",null,"error"):g(l,null,g(o.a,null,g("title",null,"Miguel Julio, a front-end developer with a flair for design"),g("link",{rel:"icon",href:"/favicon.ico"})),g(u,null,g("h1",null,"Miguel Julio"),g("p",null,"a front-end developer with a flair for design"),g(d,null,b(t))),g(s,null,g("a",{href:"http://fitfab.com",target:"_blank",rel:"noopener noreferrer"},"fitfab by miguel julio"),g("script",{type:"text/javascript",src:"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f5abbea7ec78c38"})))}},RIqP:function(e,t,n){var i=n("Ijbi"),a=n("EbDI"),r=n("ZhPi"),o=n("Bnag");e.exports=function(e){return i(e)||a(e)||r(e)||o()}},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),a=n("lwsE"),r=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),c=n("a1gu"),l=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){o(n,e);var t=u(n);function n(e){var r;return a(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(i(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},a1gu:function(e,t,n){var i=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?a(e):t}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var a=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=a}},[["/EDR",0,1,2]]]);