/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as appUpdateCount } from './chunk-561575a8.js';
import './chunk-c62281c0.js';

class AppHome {
    componentWillLoad() {
        this.store.mapStateToProps(this, state => {
            const { app: { count } } = state;
            return {
                count
            };
        });
        this.store.mapDispatchToProps(this, {
            appUpdateCount
        });
    }
    render() {
        return (h("div", { class: "app-home" },
            h("p", null,
                "This project is a very simple demo of a stencil-redux working alongside stencil-router. It was creating using:",
                h("pre", null,
                    "npm init stencil",
                    h("br", null),
                    "npm install redux",
                    h("br", null),
                    "npm install @stencil/redux",
                    h("br", null),
                    "npm install redux-thunk",
                    h("br", null),
                    "npm install stencil-router"),
                "The store is created in ",
                h("code", null, "app-root"),
                " and passed to routes using:",
                h("pre", null,
                    "componentProps=",
                    "{{ store: this.store }}"),
                "It works as you'd expect! In this example, we have a state with a single property, count. It's currently at ",
                this.count,
                ", but we can change it using the control below. When we route to our Profile Page, the count should be preserved."),
            h("p", null, "Count:"),
            h("app-counter", { changeCount: this.appUpdateCount, count: this.count }),
            h("p", null, "Routes:"),
            h("stencil-route-link", { url: "/profile/stencil" },
                h("button", null, "Profile page"))));
    }
    static get is() { return "app-home"; }
    static get properties() { return {
        "count": {
            "state": true
        },
        "store": {
            "type": "Any",
            "attr": "store"
        }
    }; }
    static get style() { return ".app-home {\n  padding: 10px;\n}"; }
}

export { AppHome };
