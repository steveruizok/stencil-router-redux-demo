/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e}from"./chunk-561575a8.js";import"./chunk-c62281c0.js";class n{componentWillLoad(){this.store.mapStateToProps(this,t=>{const{app:{count:e}}=t;return{count:e}}),this.store.mapDispatchToProps(this,{appUpdateCount:e})}render(){return t("div",{class:"app-home"},t("p",null,"This project is a very simple demo of a stencil-redux working alongside stencil-router. It was creating using:",t("pre",null,"npm init stencil",t("br",null),"npm install redux",t("br",null),"npm install @stencil/redux",t("br",null),"npm install redux-thunk",t("br",null),"npm install stencil-router"),"The store is created in ",t("code",null,"app-root")," and passed to routes using:",t("pre",null,"componentProps=","{{ store: this.store }}"),"It works as you'd expect! In this example, we have a state with a single property, count. It's currently at ",this.count,", but we can change it using the control below. When we route to our Profile Page, the count should be preserved."),t("p",null,"Count:"),t("app-counter",{changeCount:this.appUpdateCount,count:this.count}),t("p",null,"Routes:"),t("stencil-route-link",{url:"/profile/stencil"},t("button",null,"Profile page")))}static get is(){return"app-home"}static get properties(){return{count:{state:!0},store:{type:"Any",attr:"store"}}}static get style(){return".app-home{padding:10px}"}}export{n as AppHome};