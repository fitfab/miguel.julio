_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},hUgY:function(e,t,r){"use strict";r.r(t);var n,o=r("nKUr"),c=r("rePB"),i=r("VX74"),a=r("q1tI");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){return new i.ApolloClient({ssrMode:!1,uri:"https://api-us-east-1.graphcms.com/v2/ckerhsxkkqv0501yx4zs9bv50/master",cache:new i.InMemoryCache})}function b(e){return Object(a.useMemo)((function(){return function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=null!==(e=n)&&void 0!==e?e:p();if(t){var o=r.extract();r.cache.restore(u(u({},o),t))}return n||(n=r),r}(e)}),[e])}var O=r("vOnD");function l(){var e,t,r=(e=["\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return r},r}var f=Object(O.b)(l()),j={colors:{primary:"#FF415C"}};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps,n=b(r.initialApolloState);return Object(o.jsx)(i.ApolloProvider,{client:n,children:Object(o.jsxs)(O.a,{theme:j,children:[Object(o.jsx)(f,{}),Object(o.jsx)(t,v({},r))]})})}}},[[0,0,1,2,3]]]);