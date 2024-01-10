(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [671],
  {
    16: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/CreateAccount",
        function () {
          return s(2976);
        },
      ]);
    },
    9143: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = s(5893);
      function r(e) {
        return (0, a.jsxs)("div", {
          className: (function () {
            let t = e.bgcolor ? " bg-" + e.bgcolor : "",
              s = e.txtcolor ? " text-" + e.txtcolor : " text-white";
            return "card mb-3" + t + s;
          })(),
          style: { maxWidth: "18rem" },
          children: [
            e.img &&
              (0, a.jsx)("img", { src: e.img, alt: "Transmis du parent" }),
            (0, a.jsx)("div", { className: "card-header", children: e.header }),
            (0, a.jsxs)("div", {
              className: "card-body",
              children: [
                e.title &&
                  (0, a.jsx)("h5", {
                    className: "card-title",
                    children: e.title,
                  }),
                e.text &&
                  (0, a.jsx)("p", { className: "card-text", children: e.text }),
                e.body,
                e.status &&
                  (0, a.jsx)("div", { id: "createStatus", children: e.status }),
              ],
            }),
          ],
        });
      }
    },
    2976: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(5893),
        r = s(7294),
        n = s(9143),
        l = s(390);
      let c = (e) => {
        let { currentUser: t, setCurrentUser: s } = (0, l.Z)(),
          [n, c] = r.useState(!1),
          [i, o] = r.useState(""),
          [u, d] = r.useState(""),
          [m, h] = r.useState(""),
          [x, j] = r.useState(""),
          [g, b] = r.useState(!1),
          [p, f] = r.useState(!0);
        return (
          r.useEffect(() => {
            f(
              (null == i ? void 0 : i.length) > 0 &&
                (null == u ? void 0 : u.length) > 0 &&
                (null == m ? void 0 : m.length) > 0
            );
          }, [u, i, m]),
          (0, a.jsxs)("form", {
            onSubmit: (t) => {
              t.preventDefault(),
                c(!0),
                (async () => {
                  try {
                    let t = await fetch(
                      "/api/account/create?name="
                        .concat(i, "&email=")
                        .concat(u, "&password=")
                        .concat(m)
                    );
                    if (t.ok) await t.json(), e.setShow(!1);
                    else {
                      let s = await t.json();
                      console.error("Creation error : ", s.message || ""),
                        null == e || e.setErrorMessage(s.message || ""),
                        setTimeout(
                          () => (null == e ? void 0 : e.setErrorMessage("")),
                          2e3
                        );
                    }
                  } catch (e) {
                    console.error("Erreur de cr\xe9ation : ", e);
                  } finally {
                    c(!1);
                  }
                })();
            },
            children: [
              (0, a.jsxs)("label", {
                className: "my-2",
                children: [
                  "Enter name:",
                  (0, a.jsx)("input", {
                    type: "text",
                    name: "name",
                    className: "form-control",
                    required: !0,
                    value: i || "",
                    onChange: (e) => o(e.currentTarget.value),
                  }),
                ],
              }),
              (0, a.jsxs)("label", {
                className: "my-2",
                children: [
                  "Enter email:",
                  (0, a.jsx)("input", {
                    required: !0,
                    type: "email",
                    name: "email",
                    className: "form-control",
                    value: u || "",
                    onChange: (e) => d(e.currentTarget.value),
                  }),
                ],
              }),
              (0, a.jsxs)("label", {
                className: "my-2",
                children: [
                  "Enter password:",
                  (0, a.jsx)("input", {
                    required: !0,
                    type: g ? "text" : "password",
                    name: "password",
                    className: "form-control",
                    minLength: "8",
                    value: m || "",
                    onChange: (e) => h(e.currentTarget.value),
                  }),
                  (0, a.jsxs)("label", {
                    htmlFor: "showPassword",
                    children: [
                      (0, a.jsx)("input", {
                        type: "checkbox",
                        id: "showPassword",
                        onClick: () => b(!g),
                      }),
                      " Show Password",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("input", {
                disabled: !p,
                className: "btn btn-light my-3",
                type: "submit",
              }),
              n &&
                (0, a.jsx)("div", {
                  className: "d-flex justify-content-center",
                  children: (0, a.jsx)("div", {
                    className: "spinner-border",
                    role: "status",
                    children: (0, a.jsx)("span", {
                      className: "visually-hidden",
                      children: "Loading...",
                    }),
                  }),
                }),
            ],
          })
        );
      };
      function i(e) {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("h5", { children: "Success!" }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("button", {
              type: "submit",
              className: "btn btn-light",
              onClick: () => e.setShow(!0),
              children: "Add another account",
            }),
          ],
        });
      }
      t.default = function (e) {
        let [t, s] = r.useState(!0),
          [l, o] = r.useState("");
        return (0, a.jsx)(n.Z, {
          bgcolor: "primary",
          header: "Create Account",
          text: "",
          body: (0, a.jsx)(a.Fragment, {
            children: t
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(c, { setShow: s, setErrorMessage: o }),
                    (0, a.jsx)("span", {
                      className: "text-danger bg-dark",
                      children: l || "",
                    }),
                  ],
                })
              : (0, a.jsx)(i, { setShow: s }),
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 16));
    }),
      (_N_E = e.O());
  },
]);
