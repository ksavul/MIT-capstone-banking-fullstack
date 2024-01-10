(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(6616);
        },
      ]);
    },
    9143: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(5893);
      function i(t) {
        return (0, r.jsxs)("div", {
          className: (function () {
            let e = t.bgcolor ? " bg-" + t.bgcolor : "",
              n = t.txtcolor ? " text-" + t.txtcolor : " text-white";
            return "card mb-3" + e + n;
          })(),
          style: { maxWidth: "18rem" },
          children: [
            t.img && (0, r.jsx)("img", { src: t.img, alt: "Parent transfer" }),
            (0, r.jsx)("div", { className: "card-header", children: t.header }),
            (0, r.jsxs)("div", {
              className: "card-body",
              children: [
                t.title &&
                  (0, r.jsx)("h5", {
                    className: "card-title",
                    children: t.title,
                  }),
                t.text &&
                  (0, r.jsx)("p", { className: "card-text", children: t.text }),
                t.body,
                t.status &&
                  (0, r.jsx)("div", { id: "createStatus", children: t.status }),
              ],
            }),
          ],
        });
      }
    },
    6616: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5893);
      n(7294);
      var i = n(9143);
      e.default = function () {
        return (0, r.jsx)(i.Z, {
          bgcolor: "primary",
          header: "Home",
          status: "",
          text: "Welcome to Bad Bank!",
          body: "",
          img: "https://images.unsplash.com/photo-1609358905581-e5381612486e?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        });
      };
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return t((t.s = 5557));
    }),
      (_N_E = t.O());
  },
]);
