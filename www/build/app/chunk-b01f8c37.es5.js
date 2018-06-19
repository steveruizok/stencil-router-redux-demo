/*! Built with http://stenciljs.com */
App.loadBundle("chunk-b01f8c37.js", ["exports"], function (e) { var n = window.App.h; var t = "/", r = "./", i = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g"); function o(e) { return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"); } function a(e) { return e.replace(/([=!:$/()])/g, "\\$1"); } function s(e) { return e && e.sensitive ? "" : "i"; } function u(e, n, c) { return e instanceof RegExp ? function (e, n) { if (!n)
    return e; var t = e.source.match(/\((?!\?)/g); if (t)
    for (var r = 0; r < t.length; r++)
        n.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, pattern: null }); return e; }(e, n) : Array.isArray(e) ? function (e, n, t) { for (var r = [], i = 0; i < e.length; i++)
    r.push(u(e[i], n, t).source); return new RegExp("(?:" + r.join("|") + ")", s(t)); }(e, n, c) : function (e, n, u) { return function (e, n, i) { for (var a = (i = i || {}).strict, u = !1 !== i.end, c = o(i.delimiter || t), d = i.delimiters || r, l = [].concat(i.endsWith || []).map(o).concat("$").join("|"), f = "", p = !1, h = 0; h < e.length; h++) {
    var v = e[h];
    if ("string" == typeof v)
        f += o(v), p = h === e.length - 1 && d.indexOf(v[v.length - 1]) > -1;
    else {
        var g = o(v.prefix), m = v.repeat ? "(?:" + v.pattern + ")(?:" + g + "(?:" + v.pattern + "))*" : v.pattern;
        n && n.push(v), v.optional ? v.partial ? f += g + "(" + m + ")?" : f += "(?:" + g + "(" + m + "))?" : f += g + "(" + m + ")";
    }
} return u ? (a || (f += "(?:" + c + ")?"), f += "$" === l ? "$" : "(?=" + l + ")") : (a || (f += "(?:" + c + "(?=" + l + "))?"), p || (f += "(?=" + c + "|" + l + ")")), new RegExp("^" + f, s(i)); }(function (e, n) { for (var s, u = [], c = 0, d = 0, l = "", f = n && n.delimiter || t, p = n && n.delimiters || r, h = !1; null !== (s = i.exec(e));) {
    var v = s[0], g = s[1], m = s.index;
    if (l += e.slice(d, m), d = m + v.length, g)
        l += g[1], h = !0;
    else {
        var w = "", x = e[d], y = s[2], O = s[3], E = s[4], b = s[5];
        if (!h && l.length) {
            var A = l.length - 1;
            p.indexOf(l[A]) > -1 && (w = l[A], l = l.slice(0, A));
        }
        l && (u.push(l), l = "", h = !1);
        var R = "" !== w && void 0 !== x && x !== w, S = "+" === b || "*" === b, j = "?" === b || "*" === b, P = w || f, $ = O || E;
        u.push({ name: y || c++, prefix: w, delimiter: P, optional: j, repeat: S, partial: R, pattern: $ ? a($) : "[^" + o(P) + "]+?" });
    }
} return (l || d < e.length) && u.push(l + e.substr(d)), u; }(e, u), n, u); }(e, n, c); } var c = {}; var d = 0; var l = !("undefined" == typeof window || !window.document || !window.document.createElement); var f = function (e, t) {
    if (t === void 0) { t = function (e, t) { return n("context-consumer", { subscribe: e, renderer: t }); }; }
    var r = new Map, i = { location: null, titleSuffix: "", root: "/", history: null, subscribeGroupMember: function () { }, createSubscriptionGroup: function () { } };
    function o(e, n) { Array.isArray(e) ? e.slice().forEach(function (e) { n[e] = i[e]; }) : n[e] = Object.assign({}, i), n.forceUpdate(); }
    function a(e) { return function (n) { r.has(n) || (r.set(n, e), o(e, n)); }; }
    function s(e, n) { return a(n)(e), function () { r.delete(e); }; }
    return { Provider: function (_a) {
            var e = _a.state, n = _a.children;
            return i = e, r.forEach(o), n;
        }, Consumer: function (_a) {
            var e = _a.children;
            return t(s, e[0]);
        }, wrapConsumer: function (e, t) { var r = e.is; return function (e) { var i = e.children, o = function (e, n) { var t = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                n.indexOf(r[i]) < 0 && (t[r[i]] = e[r[i]]);
        } return t; }(e, ["children"]); return n(r, Object.assign({ ref: a(t) }, o), i); }; }, injectProps: function (e, n) { var t = null; var r = e.prototype.componentWillLoad; e.prototype.componentWillLoad = function () { if (t = s(this.el, n), r)
            return r.bind(this)(); }; var i = e.prototype.componentDidUnload; e.prototype.componentDidUnload = function () { if (t(), i)
            return i.bind(this)(); }; } };
}(); e.matchPath = function (e, n) {
    if (n === void 0) { n = {}; }
    "string" == typeof n && (n = { path: n });
    var _a = n.path, t = _a === void 0 ? "/" : _a, _b = n.exact, r = _b === void 0 ? !1 : _b, _c = n.strict, i = _c === void 0 ? !1 : _c, _d = function (e, n) { var t = "" + n.end + n.strict, r = c[t] || (c[t] = {}), i = JSON.stringify(e); if (r[i])
        return r[i]; var o = [], a = { re: u(e, o, n), keys: o }; return d < 1e4 && (r[i] = a, d += 1), a; }(t, { end: r, strict: i }), o = _d.re, a = _d.keys, s = o.exec(e);
    if (!s)
        return null;
    var l = s[0], f = s.slice(1), p = e === l;
    return r && !p ? null : { path: t, url: "/" === t && "" === l ? "/" : l, isExact: p, params: a.reduce(function (e, n, t) { return e[n.name] = f[t], e; }, {}) };
}, e.isModifiedEvent = (function (e) { return e.metaKey || e.altKey || e.ctrlKey || e.shiftKey; }), e.ActiveRouter = f, e.storageAvailable = (function (e) { try {
    var n = window[e], t = "__storage_test__";
    return n.setItem(t, t), n.removeItem(t), !0;
}
catch (e) {
    return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== n.length;
} }), e.canUseDOM = l, e.addEventListener = (function (e, n, t) { return e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent("on" + n, t); }), e.removeEventListener = (function (e, n, t) { return e.removeEventListener ? e.removeEventListener(n, t, !1) : e.detachEvent("on" + n, t); }), e.getConfirmation = (function (e, n) { return n(window.confirm(e)); }), e.supportsHistory = (function () { var e = window.navigator.userAgent; return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history; }), e.supportsPopStateOnHashChange = (function () { return -1 === window.navigator.userAgent.indexOf("Trident"); }), e.isExtraneousPopstateEvent = (function (e) { return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS"); }), e.supportsGoWithoutReloadUsingHash = (function () { return -1 === window.navigator.userAgent.indexOf("Firefox"); }); });
