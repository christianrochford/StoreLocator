(function () {
    var b = void 0,
        g;

    function k(a) {
        this.extend(k, google.maps.OverlayView);
        this.b = [];
        this.d = null;
        this.g = 100;
        this.m = !1;
        a = a || {};
        if (a.backgroundColor == b)
            a.backgroundColor =
                this.z;
        if (a.borderColor == b) a.borderColor =
            this.A;
        if (a.borderRadius == b) a.borderRadius =
            this.B;
        if (a.borderWidth == b) a.borderWidth =
            this.C;
        if (a.padding == b) a.padding =
            this.F;
        if (a.arrowPosition == b) a
            .arrowPosition = this.u;
        a.disableAutoPan == b && (a
            .disableAutoPan = !1);
        a.disableAnimation == b &&
            (a.disableAnimation = !
            1);
        if (a.minWidth == b) a.minWidth =
            this.D;
        if (a.shadowStyle == b) a.shadowStyle =
            this.G;
        if (a.arrowSize == b) a.arrowSize =
            this.v;
        if (a.arrowStyle == b) a.arrowStyle =
            this.w;
        l(this);
        this.setValues(a)
    }
    window.InfoBubble = k;
    g = k.prototype;
    g.v = 15;
    g.w = 0;
    g.G = 1;
    g.D = 50;
    g.u = 50;
    g.F = 10;
    g.C = 1;
    g.A = "#ccc";
    g.B = 10;
    g.z = "#fff";
    g.extend = function (a, c) {
        return function (a) {
            for (var c in a.prototype)
                this.prototype[c] =
                    a.prototype[c];
            return this
        }.apply(a, [c])
    };

    function l(a) {
        var c = a.c = document.createElement(
            "DIV");
        c.style.position =
            "absolute";
        c.style.zIndex = a.g;
        (a.i = document.createElement(
            "DIV")).style.position =
            "relative";
        var d = a.l = document.createElement(
            "IMG");
        d.style.position =
            "absolute";
        d.style.width = n(12);
        d.style.height = n(12);
        d.style.border = 0;
        d.style.zIndex = a.g + 1;
        d.style.cursor = "pointer";
        d.src =
            "../assets/images/close-modal.png";
        google.maps.event.addDomListener(
            d, "click", function () {
                a.close();
                google.maps.event.trigger(
                    a, "closeclick"
                )
            });
        var e = a.e = document.createElement(
            "DIV");
        e.style.cursor = "default";
        e.style.clear = "both";
        e.style.backgroundColor = "transparent";
        e.style.position =
            "relative";
        var f = a.j = document.createElement(
            "DIV");
        e.appendChild(f);
        f = a.L = document.createElement(
            "DIV");
        f.style.position =
            "relative";
        var i = a.n = document.createElement(
            "DIV"),
            h = a.k = document.createElement(
                "DIV"),
            j = q(a);
        i.style.position = h.style.position =
            "absolute";
        i.style.left = h.style.left =
            "50%";
        i.style.height = h.style.height =
            "0";
        i.style.width = h.style.width =
            "0";
        i.style.marginLeft = n(-j);
        i.style.borderWidth = n(j);
        i.style.borderBottomWidth =
            0;
        j = a.a = document.createElement(
            "DIV");
        j.style.position =
            "absolute";
        c.style.display = j.style.display =
            "none";
        c.appendChild(a.i);
        c.appendChild(d);
        c.appendChild(e);
        f.appendChild(i);
        f.appendChild(h);
        c.appendChild(f);
        c = document.createElement(
            "style");
        c.setAttribute("type",
            "text/css");
        a.h = "_ibani_" + Math.round(
            1E4 * Math.random());
        document.getElementsByTagName(
            "head")[0].appendChild(
            c)
    }
    g.ca = function (a) {
        this.set(
            "backgroundClassName",
            a)
    };
    k.prototype.setBackgroundClassName =
        k.prototype.ca;
    k.prototype.M = function () {
        this.j.className = this.get(
            "backgroundClassName")
    };
    k.prototype.backgroundClassName_changed =
        k.prototype.M;
    k.prototype.oa = function (a) {
        this.set("tabClassName", a)
    };
    k.prototype.setTabClassName = k
        .prototype.oa;
    k.prototype.ra = function () {
        t(this)
    };
    k.prototype.tabClassName_changed =
        k.prototype.ra;
    k.prototype.ba = function (a) {
        this.set("arrowStyle", a)
    };
    k.prototype.setArrowStyle = k.prototype
        .ba;
    k.prototype.K = function () {
        this.p()
    };
    k.prototype.arrowStyle_changed =
        k.prototype.K;

    function q(a) {
        return parseInt(a.get(
            "arrowSize"), 10) || 0
    }
    k.prototype.aa = function (a) {
        this.set("arrowSize", a)
    };
    k.prototype.setArrowSize = k.prototype
        .aa;
    k.prototype.p = function () {
        this.r()
    };
    k.prototype.arrowSize_changed =
        k.prototype.p;
    k.prototype.$ = function (a) {
        this.set("arrowPosition", a)
    };
    k.prototype.setArrowPosition =
        k.prototype.$;
    k.prototype.J = function () {
        this.n.style.left = this.k.style
            .left = (parseInt(this.get(
                "arrowPosition"
            ), 10) || 0) + "%";
        u(this)
    };
    k.prototype.arrowPosition_changed =
        k.prototype.J;
    k.prototype.setZIndex =
        function (a) {
            this.set("zIndex", a)
    };
    k.prototype.setZIndex = k.prototype
        .setZIndex;
    k.prototype.getZIndex =
        function () {
            return parseInt(this.get(
                "zIndex"), 10) ||
                this.g
    };
    k.prototype.ta = function () {
        var a = this.getZIndex();
        this.c.style.zIndex = this.g =
            a;
        this.l.style.zIndex = a + 1
    };
    k.prototype.zIndex_changed = k.prototype
        .ta;
    k.prototype.ma = function (a) {
        this.set("shadowStyle", a)
    };

    k.prototype.shadowStyle_changed =
        k.prototype.pa;
    k.prototype.qa = function () {
        this.set("hideCloseButton", !
            1)
    };
    k.prototype.showCloseButton = k
        .prototype.qa;
    k.prototype.P = function () {
        this.set("hideCloseButton", !
            0)
    };
    k.prototype.hideCloseButton = k
        .prototype.P;
    k.prototype.Q = function () {
        this.l.style.display = this
            .get("hideCloseButton") ?
            "none" : ""
    };
    k.prototype.hideCloseButton_changed =
        k.prototype.Q;

    k.prototype.setBackgroundColor =
        k.prototype.da;

    k.prototype.backgroundColor_changed =
        k.prototype.N;
    k.prototype.ea = function (a) {
        a && this.set("borderColor",
            a)
    };
    k.prototype.setBorderColor = k.prototype
        .ea;
    k.prototype.O = function () {
        var a = this.get(
            "borderColor"),
            c = this.e,
            d = this.n;
        t(this)
    };
    k.prototype.borderColor_changed =
        k.prototype.O;
    k.prototype.fa = function (a) {
        this.set("borderRadius", a)
    };
    k.prototype.setBorderRadius = k
        .prototype.fa;

    function w(a) {
        return parseInt(a.get(
            "borderRadius"), 10) ||
            0
    }
    k.prototype.q = function () {
        var a = w(this),
            c = x(this);
        this.i.style.paddingLeft =
            this.i.style.paddingRight =
            n(a + c);
        u(this)
    };
    k.prototype.borderRadius_changed =
        k.prototype.q;

    function x(a) {
        return parseInt(a.get(
            "borderWidth"), 10) ||
            0
    }
    k.prototype.ga = function (a) {
        this.set("borderWidth", a)
    };
    k.prototype.setBorderWidth = k.prototype
        .ga;
    k.prototype.r = function () {
        var a = x(this);
        this.e.style.borderWidth =
            n(a);

        var a = x(this),
            c = q(this),
            d = parseInt(this.get(
                    "arrowStyle"),
                10) || 0,
            e = n(c),
            f = n(Math.max(0, c - a)),
            i = this.n,
            h = this.k;
        this.L.style.marginTop = n(-
            a);
        i.style.borderTopWidth = e;
        h.style.borderTopWidth = f;
        0 == d || 1 == d ? (i.style
            .borderLeftWidth = e, h
            .style.borderLeftWidth =
            f) : i.style.borderLeftWidth =
            h.style.borderLeftWidth =
            0;
        0 == d || 2 == d ? (i.style
            .borderRightWidth = e,
            h.style.borderRightWidth =
            f) : i.style.borderRightWidth =
            h.style.borderRightWidth =
            0;
        2 > d ? (i.style.marginLeft =
            n(-c), h.style.marginLeft =
            n(-(c - a))) : i.style.marginLeft =
            h.style.marginLeft = 0;
        i.style.display = 0 == a ?
            "none" : "";
        t(this);
        this.q();
        u(this)
    };
    k.prototype.borderWidth_changed =
        k.prototype.r;
    k.prototype.la = function (a) {
        this.set("padding", a)
    };
    k.prototype.setPadding = k.prototype
        .la;

    function y(a) {
        return parseInt(a.get(
            "padding"), 10) || 0
    }
    k.prototype.X = function () {
        this.e.style.padding = n(y(
            this));
        t(this);
        u(this)
    };
    k.prototype.padding_changed = k
        .prototype.X;

    function n(a) {
        return a ? a + "px" : a
    }

    function z(a) {
        var c =
            "mousedown,mousemove,mouseover,mouseout,mouseup,mousewheel,DOMMouseScroll,touchstart,touchend,touchmove,dblclick,contextmenu,click"
            .split(","),
            d = a.c;
        a.s = [];
        for (var e = 0, f; f = c[e]; e++)
            a.s.push(google.maps.event
                .addDomListener(d,
                    f, function (a) {
                        a.cancelBubble = !
                            0;
                        a.stopPropagation &&
                            a.stopPropagation()
                    }))
    }
    k.prototype.onAdd = function () {
        this.c || l(this);
        z(this);
        var a = this.getPanes();
        a && (a.floatPane.appendChild(
                this.c), a.floatShadow
            .appendChild(this.a))
    };
    k.prototype.onAdd = k.prototype
        .onAdd;
    k.prototype.draw = function () {
        var a = this.getProjection();
        if (a) {
            var c = this.get(
                "position");
            if (c) {
                var d = 0;
                if (this.d) d =
                    this.d.offsetHeight;
                var e = A(this),
                    f = q(this),
                    i = parseInt(
                        this.get(
                            "arrowPosition"
                        ), 10) || 0,
                    i = i / 100,
                    a = a.fromLatLngToDivPixel(
                        c);
                if (c = this.e.offsetWidth) {
                    var h = a.y - (
                        this.c.offsetHeight +
                        f);
                    e && (h -= e);
                    var j = a.x - c *
                        i;
                    this.c.style.top =
                        n(h);
                    this.c.style.left =
                        n(j);
                    switch (
                        parseInt(
                            this.get(
                                "shadowStyle"
                            ), 10)) {
                    case 1:
                        this.a.style
                            .top =
                            n(h + d -
                                1);
                        this.a.style
                            .left =
                            n(j);
                        this.a.style
                            .width =
                            n(c);
                        this.a.style
                            .height =
                            n(this.e
                                .offsetHeight -
                                f);
                        break;
                    case 2:
                        c *= 0.8,
                            this.a.style
                            .top =
                            e ? n(a
                                .y) :
                            n(a.y +
                                f),
                            this.a.style
                            .left =
                            n(a.x -
                                c *
                                i),
                            this.a.style
                            .width =
                            n(c),
                            this.a.style
                            .height =
                            n(2)
                    }
                }
            } else this.close()
        }
    };
    k.prototype.draw = k.prototype.draw;
    k.prototype.onRemove = function () {
        this.c && this.c.parentNode &&
            this.c.parentNode.removeChild(
                this.c);
        this.a && this.a.parentNode &&
            this.a.parentNode.removeChild(
                this.a);
        for (var a = 0, c; c = this
            .s[a]; a++) google.maps
            .event.removeListener(c)
    };
    k.prototype.onRemove = k.prototype
        .onRemove;
    k.prototype.R = function () {
        return this.m
    };
    k.prototype.isOpen = k.prototype
        .R;
    k.prototype.close = function () {
        if (this.c) this.c.style.display =
            "none", this.c.className =
            this.c.className.replace(
                this.h, "");
        if (this.a) this.a.style.display =
            "none", this.a.className =
            this.a.className.replace(
                this.h, "");
        this.m = !1
    };
    k.prototype.close = k.prototype
        .close;
    k.prototype.open = function (a,
        c) {
        var d = this;
        window.setTimeout(function () {
            B(d, a, c)
        }, 0)
    };

    function B(a, c, d) {
        C(a);
        c && a.setMap(c);
        d && (a.set("anchor", d), a
            .bindTo("anchorPoint",
                d), a.bindTo(
                "position", d));
        a.c.style.display = a.a.style
            .display = "";
        a.get("disableAnimation") ||
            (a.c.className += " " +
            a.h, a.a.className +=
            " " + a.h);
        u(a);
        a.m = !0;
        a.get("disableAutoPan") ||
            window.setTimeout(
                function () {
                    a.o()
                }, 200)
    }
    k.prototype.open = k.prototype.open;
    k.prototype.setPosition =
        function (a) {
            a && this.set(
                "position", a)
    };
    k.prototype.setPosition = k.prototype
        .setPosition;
    k.prototype.getPosition =
        function () {
            return this.get(
                "position")
    };
    k.prototype.getPosition = k.prototype
        .getPosition;
    k.prototype.Y = function () {
        this.draw()
    };
    k.prototype.position_changed =
        k.prototype.Y;
    k.prototype.o = function () {
        var a = this.getProjection();
        if (a && this.c) {
            var c = this.c.offsetHeight +
                A(this),
                d = this.get("map"),
                e = d.getDiv().offsetHeight,
                f = this.getPosition(),
                i = a.fromLatLngToContainerPixel(
                    d.getCenter()),
                f = a.fromLatLngToContainerPixel(
                    f),
                c = i.y - c,
                e = e - i.y,
                i = 0;
            0 > c && (i = (-1 * c +
                e) / 2);
            f.y -= i;
            f = a.fromContainerPixelToLatLng(
                f);
            d.getCenter() != f && d
                .panTo(f)
        }
    };
    k.prototype.panToView = k.prototype
        .o;

    function D(a) {
        var a = a.replace(
            /^\s*([\S\s]*)\b\s*$/,
            "$1"),
            c = document.createElement(
                "DIV");
        c.innerHTML = a;
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (a = document.createDocumentFragment(); c
            .firstChild;) a.appendChild(
            c.firstChild);
        return a
    }

    function E(a) {
        if (a)
            for (var c; c = a.firstChild;)
                a.removeChild(c)
    }
    k.prototype.setContent =
        function (a) {
            this.set("content", a)
    };
    k.prototype.setContent = k.prototype
        .setContent;
    k.prototype.getContent =
        function () {
            return this.get(
                "content")
    };
    k.prototype.getContent = k.prototype
        .getContent;

    function C(a) {
        if (a.j) {
            E(a.j);
            var c = a.getContent();
            if (c) {
                "string" == typeof c &&
                    (c = D(c));
                a.j.appendChild(c);
                for (var c = a.j.getElementsByTagName(
                        "IMG"), d =
                        0, e; e = c[
                            d]; d++
                ) google.maps.event
                    .addDomListener(
                        e, "load",
                        function () {
                            var c = !
                                a.get(
                                    "disableAutoPan"
                            );
                            u(a);
                            c && (0 ==
                                a.b
                                .length ||
                                0 ==
                                a.d
                                .index
                            ) && a.o()
                        });
                google.maps.event.trigger(
                    a, "domready")
            }
            u(a)
        }
    }

    function t(a) {
        if (a.b && a.b.length) {
            for (var c = 0, d; d =
                a.b[c]; c++) F(a, d
                .f);
            a.d.style.zIndex = a.g;
            c = x(a);
            d = y(a) / 2;
            a.d.style.borderBottomWidth =
                0;
            a.d.style.paddingBottom =
                n(d + c)
        }
    }

    function F(a, c) {
        var d = a.get(
            "backgroundColor"),
            e = a.get("borderColor"),
            f = w(a),
            i = x(a),
            h = y(a),
            j = n(-Math.max(h, f)),
            f = n(f),
            p = a.g;
        c.index && (p -= c.index);
        var d = {
            cssFloat: "left",
            position: "relative",
            cursor: "pointer",
            border: n(i) +
                " solid " + e,
            padding: n(h / 2) + " " +
                n(h),
            marginRight: j,
            whiteSpace: "nowrap",
            zIndex: p,
            display: "inline"
        }, m;
        for (m in d) c.style[m] =
            d[m];
        m = a.get("tabClassName");
        m != b && (c.className +=
            " " + m)
    }

    function G(a, c) {
        c.S = google.maps.event.addDomListener(
            c, "click", function () {
                H(a, this)
            })
    }
    k.prototype.na = function (a) {
        (a = this.b[a - 1]) && H(
            this, a.f)
    };
    k.prototype.setTabActive = k.prototype
        .na;

    function H(a, c) {
        if (c) {
            var d = y(a) / 2,
                e = x(a);
            if (a.d) {
                var f = a.d;
                f.style.zIndex = a.g -
                    f.index;
                f.style.paddingBottom =
                    n(d);
                f.style.borderBottomWidth =
                    n(e)
            }
            c.style.zIndex = a.g;
            c.style.borderBottomWidth =
                0;
            c.style.marginBottomWidth =
                "-10px";
            c.style.paddingBottom =
                n(d + e);
            a.setContent(a.b[c.index]
                .content);
            C(a);
            a.d = c;
            u(a)
        } else a.setContent(""), C(
            a)
    }
    k.prototype.ia = function (a) {
        this.set("maxWidth", a)
    };
    k.prototype.setMaxWidth = k.prototype
        .ia;
    k.prototype.U = function () {
        u(this)
    };
    k.prototype.maxWidth_changed =
        k.prototype.U;
    k.prototype.ha = function (a) {
        this.set("maxHeight", a)
    };
    k.prototype.setMaxHeight = k.prototype
        .ha;
    k.prototype.T = function () {
        u(this)
    };
    k.prototype.maxHeight_changed =
        k.prototype.T;
    k.prototype.ka = function (a) {
        this.set("minWidth", a)
    };
    k.prototype.setMinWidth = k.prototype
        .ka;
    k.prototype.W = function () {
        u(this)
    };
    k.prototype.minWidth_changed =
        k.prototype.W;
    k.prototype.ja = function (a) {
        this.set("minHeight", a)
    };
    k.prototype.setMinHeight = k.prototype
        .ja;
    k.prototype.V = function () {
        u(this)
    };
    k.prototype.minHeight_changed =
        k.prototype.V;
    k.prototype.H = function (a, c) {
        var d = document.createElement(
            "DIV");
        d.innerHTML = a;
        F(this, d);
        G(this, d);
        this.i.appendChild(d);
        this.b.push({
            label: a,
            content: c,
            f: d
        });
        d.index = this.b.length - 1;
        d.style.zIndex = this.g - d
            .index;
        this.d || H(this, d);
        d.className = d.className +
            " " + this.h;
        u(this)
    };
    k.prototype.addTab = k.prototype
        .H;
    k.prototype.sa = function (a, c,
        d) {
        if (this.b.length && !(0 >
            a || a >= this.b.length
        )) {
            a = this.b[a];
            if (c != b) a.f.innerHTML =
                a.label = c;
            if (d != b) a.content =
                d;
            this.d == a.f && (this.setContent(
                a.content), C(
                this));
            u(this)
        }
    };
    k.prototype.updateTab = k.prototype
        .sa;
    k.prototype.Z = function (a) {
        if (this.b.length && !(0 >
            a || a >= this.b.length
        )) {
            var c = this.b[a];
            c.f.parentNode.removeChild(
                c.f);
            google.maps.event.removeListener(
                c.f.S);
            this.b.splice(a, 1);
            delete c;
            for (var d = 0, e; e =
                this.b[d]; d++) e.f
                .index = d;
            if (c.f == this.d) this
                .d = this.b[a] ?
                this.b[a].f : this.b[
                    a - 1] ? this.b[
                    a - 1].f : b, H(
                    this, this.d);
            u(this)
        }
    };
    k.prototype.removeTab = k.prototype
        .Z;

    function I(a, c, d) {
        var e = document.createElement(
            "DIV");
        e.style.display = "inline";
        e.style.position =
            "absolute";
        e.style.visibility =
            "hidden";
        "string" == typeof a ? e.innerHTML =
            a : e.appendChild(a.cloneNode(!
                0));
        document.body.appendChild(e);
        a = new google.maps.Size(e.offsetWidth,
            e.offsetHeight);
        if (c && a.width > c) e.style
            .width = n(c), a = new google
            .maps.Size(e.offsetWidth,
                e.offsetHeight);
        if (d && a.height > d) e.style
            .height = n(d), a = new google
            .maps.Size(e.offsetWidth,
                e.offsetHeight);
        document.body.removeChild(e);
        delete e;
        return a
    }

    function u(a) {
        var c = a.get("map");
        if (c) {
            var d = y(a);
            x(a);
            w(a);
            var e = q(a),
                f = c.getDiv(),
                i = 2 * e,
                c = f.offsetWidth -
                    i,
                f = f.offsetHeight -
                    i - A(a),
                i = 0,
                h = a.get(
                    "minWidth") ||
                    0,
                j = a.get(
                    "minHeight") ||
                    0,
                p = a.get(
                    "maxWidth") ||
                    0,
                m = a.get(
                    "maxHeight") ||
                    0,
                p = Math.min(c, p),
                m = Math.min(f, m),
                v = 0;
            if (a.b.length)
                for (var r = 0, o; o =
                    a.b[r]; r++) {
                    var s = I(o.f,
                        p, m);
                    o = I(o.content,
                        p, m);
                    if (h < s.width)
                        h = s.width;
                    v += s.width;
                    if (j < s.height)
                        j = s.height;
                    if (s.height >
                        i) i = s.height;
                    if (h < o.width)
                        h = o.width;
                    if (j < o.height)
                        j = o.height
                } else if (r = a.get(
                        "content"),
                    "string" ==
                    typeof r && (r =
                        D(r)), r) {
                    o = I(r, p, m);
                    if (h < o.width)
                        h = o.width;
                    if (j < o.height)
                        j = o.height
                }
            p && (h = Math.min(h, p));
            m && (j = Math.min(j, m));
            h = Math.max(h, v);
            h == v && (h += 2 * d);
            h = Math.max(h, 2 * e);
            h > c && (h = c);
            j > f && (j = f - i);
            if (a.i) a.t = i, a.i.style
                .width = n(v);
            a.e.style.width = n(h);
            a.e.style.height = n(j)
        }
        w(a);
        d = x(a);
        c = 2;
        a.b.length && a.t && (c +=
            a.t);
        e = 2 + d;
        (f = a.e) && f.clientHeight <
            f.scrollHeight && (e +=
                15);
        a.l.style.right = "20px";
        a.l.style.top = "30px";
        a.draw()
    }

    function A(a) {
        return a.get("anchor") && (
            a = a.get("anchorPoint")
        ) ? -1 * a.y : 0
    }
    k.prototype.I = function () {
        this.draw()
    };
    k.prototype.anchorPoint_changed =
        k.prototype.I;
})();

