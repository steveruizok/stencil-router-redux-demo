/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as appUpdateCount } from './chunk-561575a8.js';
import './chunk-c62281c0.js';

class AppProfile {
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
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" },
                h("p", null,
                    "Hello! My name is ",
                    this.match.params.name,
                    ". My name was passed in through a route param!"),
                h("p", null, "Count:"),
                h("app-counter", { changeCount: this.appUpdateCount, count: this.count }),
                h("p", null, "Routes:"),
                h("stencil-route-link", { url: "/" },
                    h("button", null, "Back home"))));
        }
    }
    static get is() { return "app-profile"; }
    static get properties() { return {
        "count": {
            "state": true
        },
        "match": {
            "type": "Any",
            "attr": "match"
        },
        "store": {
            "type": "Any",
            "attr": "store"
        }
    }; }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
}

export { AppProfile };
