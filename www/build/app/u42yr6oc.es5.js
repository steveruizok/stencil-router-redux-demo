/*! Built with http://stenciljs.com */
App.loadBundle("u42yr6oc",["exports","./chunk-89591aba.js","./chunk-3835f420.js"],function(t,e,n){var o=window.App.h,p=function(){function t(){}return t.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,function(t){return{count:t.app.count}}),this.store.mapDispatchToProps(this,{appUpdateCount:e.appUpdateCount})},t.prototype.render=function(){if(this.match&&this.match.params.name)return o("div",{class:"app-profile"},o("p",null,"Hello! My name is ",this.match.params.name,". My name was passed in through a route param!"),o("p",null,"Count:"),o("app-counter",{changeCount:this.appUpdateCount,count:this.count}),o("p",null,"Routes:"),o("stencil-route-link",{url:"/"},o("button",null,"Back home")))},Object.defineProperty(t,"is",{get:function(){return"app-profile"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{count:{state:!0},match:{type:"Any",attr:"match"},store:{type:"Any",attr:"store"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".app-profile{padding:10px}"},enumerable:!0,configurable:!0}),t}();t.AppProfile=p,Object.defineProperty(t,"__esModule",{value:!0})});