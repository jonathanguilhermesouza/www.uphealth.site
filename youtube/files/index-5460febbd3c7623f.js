/*(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    8312: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(2823)
        }
        ])
    },
    2823: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return A
            }
        });
        var a = r(5893)
          , n = r(7294)
          , o = r(4105)
          , s = r(8725)
          , l = r(2345)
          , i = r(6518)
          , c = r(8773)
          , d = () => {
            let[e,t] = (0,
            n.useState)([])
              , [r,d] = (0,
            n.useState)([])
              , [m,g] = (0,
            n.useState)(0)
              , b = (0,
            n.useRef)(Date.now())
              , f = (0,
            n.useRef)(null)
              , [x,h] = (0,
            n.useState)(1.1)
              , u = (0,
            n.useRef)(null)
              , [p,E] = (0,
            n.useState)("")
              , [F,A] = (0,
            n.useState)(!1);
            (0,
            n.useEffect)( () => {
                (async () => {
                    try {
                        let e = await fetch("https://www.uphealth.site/youtube/files/comments.xlsx")
                          , r = await e.arrayBuffer()
                          , a = new Uint8Array(r)
                          , n = o.ij(a, {
                            type: "array"
                        })
                          , s = n.Sheets[n.SheetNames[0]]
                          , [l,...i] = o.P6.sheet_to_json(s, {
                            header: 1
                        })
                          , c = i.map(e => {
                            let[t,r,a,n,o] = e;
                            return {
                                time: "".concat(String(t).padStart(2, "0"), ":").concat(String(r).padStart(2, "0"), ":").concat(String(a).padStart(2, "0")),
                                name: String(n),
                                text: String(o)
                            }
                        }
                        );
                        t(c)
                    } catch (e) {
                        console.error("Erro ao carregar o arquivo:", e)
                    }
                }
                )()
            }
            , []),
            (0,
            n.useEffect)( () => {
                if (u.current) {
                    let e = u.current;
                    e.scrollTop = e.scrollHeight
                }
            }
            , [r]),
            (0,
            n.useEffect)( () => {
                let t = setInterval( () => {
                    let t = Math.floor((Date.now() - b.current) / 1e3);
                    g(t);
                    let r = e.filter(e => {
                        let[r,a,n] = e.time.split(":").map(Number);
                        return 3600 * r + 60 * a + n <= t
                    }
                    );
                    r.sort( (e, t) => {
                        let[r,a,n] = e.time.split(":").map(Number)
                          , [o,s,l] = t.time.split(":").map(Number);
                        return 3600 * r + 60 * a + n - (3600 * o + 60 * s + l)
                    }
                    ),
                    d(r)
                }
                , 1e3);
                return () => clearInterval(t)
            }
            , [e]),
            (0,
            n.useEffect)( () => {
                f.current && f.current.scrollIntoView({
                    behavior: "smooth"
                })
            }
            , [r]);
            let v = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3];
            (0,
            n.useEffect)( () => {
                let e = 0
                  , t = setInterval( () => {
                    h(v[e]),
                    ++e >= v.length && clearInterval(t)
                }
                , 6e4);
                return () => clearInterval(t)
            }
            , []);
            let j = ["bg-gradient-to-br from-[#FFB457] to-[#FF705B]", "bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6]", "bg-gradient-to-br from-[#FBCFE8] to-[#F9A8D4]", "bg-gradient-to-br from-[#D4FC79] to-[#96E6A1]", "bg-gradient-to-br from-[#C4E0E5] to-[#9AABAC]", "bg-gradient-to-br from-[#FCD34D] to-[#FDBA74]", "bg-gradient-to-br from-[#FF7A7A] to-[#FF9A9A]", "bg-gradient-to-br from-[#A5F3FC] to-[#60A5FA]", "bg-gradient-to-br from-[#D6E9F1] to-[#B9D6E6]", "bg-gradient-to-br from-[#C7D2FE] to-[#A5B4FC]", "bg-gradient-to-br from-[#FEE2E2] to-[#FECACA]", "bg-gradient-to-br from-[#D8F2F2] to-[#A4F9F9]", "bg-gradient-to-br from-[#FEC5C5] to-[#F9A8D4]", "bg-gradient-to-br from-[#E2E2E2] to-[#C4C4C4]", "bg-gradient-to-br from-[#F9F5F6] to-[#D6D6D6]", "bg-gradient-to-br from-[#A7F3D0] to-[#5BDBA8]", "bg-gradient-to-br from-[#EAB0A6] to-[#F4A1A8]", "bg-gradient-to-br from-[#FAD02E] to-[#F9C74F]", "bg-gradient-to-br from-[#F9A8D4] to-[#E2B6F5]", "bg-gradient-to-br from-[#E4D9FD] to-[#B4A2F4]", "bg-gradient-to-br from-[#D8B4FE] to-[#F6A9FA]", "bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]", "bg-gradient-to-br from-[#B9FBC0] to-[#A3D9A0]", "bg-gradient-to-br from-[#B2F5EA] to-[#81E6D9]", "bg-gradient-to-br from-[#D0B2F1] to-[#B2A2D7]", "bg-gradient-to-br from-[#C4B5FD] to-[#A1A1F7]", "bg-gradient-to-br from-[#FEE2E2] to-[#F9A8D4]", "bg-gradient-to-br from-[#D0F2F1] to-[#A0F1E8]", "bg-gradient-to-br from-[#C1E8E4] to-[#9AEBEC]", "bg-gradient-to-br from-[#F1C6E7] to-[#C3A9D1]", "bg-gradient-to-br from-[#E3F9F5] to-[#C2F5D4]", "bg-gradient-to-br from-[#D3B9F2] to-[#B4A1F7]", "bg-gradient-to-br from-[#C3F0F0] to-[#A1E9E8]"]
              , N = () => {
                if (p.trim()) {
                    let e = Math.floor((Date.now() - b.current) / 1e3)
                      , r = {
                        time: "".concat(String(Math.floor(e / 3600)).padStart(2, "0"), ":").concat(String(Math.floor(e % 3600 / 60)).padStart(2, "0"), ":").concat(String(e % 60).padStart(2, "0")),
                        name: "Voc\xea",
                        text: p
                    };
                    t(e => [...e, r]),
                    E("")
                }
            }
            ;
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)("div", {
                    className: "mx-2 mb-2 mt-2",
                    style: {
                        height: "calc(60vh - 50px)",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: (0,
                    a.jsxs)(s.w, {
                        className: "relative flex-grow bg-white dark:bg-transparent",
                        style: {
                            height: "100%"
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "absolute top-0 left-0 right-0 p-1 bg-white dark:bg-black z-10 border-b border-zinc-600",
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-black dark:text-white ml-2 font-bold",
                                children: "Live chat"
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex items-center text-zinc-400 ml-2",
                                style: {
                                    fontSize: "11px"
                                },
                                children: [(0,
                                a.jsx)("p", {
                                    className: "text-zinc-800 dark:text-zinc-400 flex items-center",
                                    children: "Main messages"
                                }), (0,
                                a.jsx)(c.Xws, {
                                    size: 12,
                                    className: "text-zinc-800 dark:text-zinc-400",
                                    style: {
                                        marginLeft: "12px"
                                    }
                                }), (0,
                                a.jsxs)("p", {
                                    className: "text-zinc-800 dark:text-zinc-400",
                                    style: {
                                        marginLeft: "2px"
                                    },
                                    children: [x, " mil"]
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            ref: u,
                            className: "pt-1 p-1 overflow-y-auto",
                            style: {
                                flexGrow: 1,
                                maxHeight: "calc(100% - 80px)",
                                marginTop: "50px"
                            },
                            children: r.map( (e, t) => {
                                let r = j[t % j.length]
                                  , n = "Voc\xea" === e.name;
                                return (0,
                                a.jsxs)("div", {
                                    className: "mb-1 z-2 rounded-lg flex items-start space-x-2",
                                    children: [(0,
                                    a.jsx)(l.h, {
                                        size: "sm",
                                        name: e.name[0],
                                        classNames: {
                                            base: n ? "bg-gradient-to-br from-red-500 to-red-700" : r,
                                            icon: "text-black/80"
                                        },
                                        style: {
                                            width: "24px",
                                            height: "24px",
                                            fontSize: "10px"
                                        }
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "flex flex-col",
                                        children: (0,
                                        a.jsxs)("div", {
                                            className: "font-bold",
                                            style: {
                                                fontSize: "11px"
                                            },
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "font-bold ".concat(n ? "text-red-500" : "text-zinc-500 dark:text-white"),
                                                children: e.name
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "font-normal ml-2",
                                                children: e.text
                                            })]
                                        })
                                    })]
                                }, t)
                            }
                            )
                        }), (0,
                        a.jsxs)("div", {
                            className: "absolute bottom-0 left-0 right-0 p-2 bg-white dark:bg-black border-t border-zinc-600 flex items-center",
                            children: [(0,
                            a.jsx)("input", {
                                type: "text",
                                value: p,
                                onChange: e => {
                                    E(e.target.value)
                                }
                                ,
                                onKeyDown: e => {
                                    "Enter" === e.key && N()
                                }
                                ,
                                placeholder: "Comment...",
                                className: "flex-grow p-2 rounded-lg bg-white border-1 border-zinc-600 text-black dark:bg-zinc-800 dark:text-white"
                            }), (0,
                            a.jsx)(i.A, {
                                onClick: N,
                                className: "ml-2 flex items-center bg-transparent",
                                size: "sm",
                                children: (0,
                                a.jsx)(c.Y2X, {
                                    size: 16,
                                    className: "text-zinc-800 dark:text-zinc-400"
                                })
                            })]
                        })]
                    })
                })
            })
        }
          , m = r(8957)
          , g = r(1774)
          , b = r(9776)
          , f = r(3581)
          , x = r(5725)
          , h = r(5975)
          , u = r(884)
          , p = r(5260)
          , E = r(1664)
          , F = r.n(E);
        function A() {
            let e = (0,
            n.useRef)(null)
              , t = (0,
            n.useRef)(null)
              , [r,o] = (0,
            n.useState)(!1)
              , E = (0,
            n.useRef)(null)
              , [A,v] = (0,
            n.useState)(!1)
              , [j,N] = (0,
            n.useState)(!1)
              , w = (0,
            n.useRef)(Date.now());
            return (0,
            n.useEffect)( () => {
                let r = e.current
                  , a = t.current;
                if (!r || !a) {
                    console.error("Refer\xeancias inv\xe1lidas");
                    return
                }
                let n = () => {
                    if (r.readyState < 2) {
                        E.current = requestAnimationFrame(n);
                        return
                    }
                    let e = document.createElement("canvas")
                      , t = e.getContext("2d");
                    if (!t) {
                        console.error("N\xe3o foi poss\xedvel obter o contexto 2D");
                        return
                    }
                    e.width = r.videoWidth,
                    e.height = r.videoHeight,
                    t.drawImage(r, 0, 0);
                    try {
                        let r = t.getImageData(0, 0, e.width, e.height).data
                          , n = 0
                          , o = 0
                          , s = 0;
                        for (let e = 0; e < r.length; e += 4)
                            n += r[e],
                            o += r[e + 1],
                            s += r[e + 2];
                        n = Math.floor(n / (r.length / 4)),
                        o = Math.floor(o / (r.length / 4)),
                        s = Math.floor(s / (r.length / 4)),
                        a.style.background = "radial-gradient(circle, rgba(".concat(n, ",").concat(o, ",").concat(s, ",1) 0%, rgba(").concat(n, ",").concat(o, ",").concat(s, ",0.5) 30%, rgba(").concat(n, ",").concat(o, ",").concat(s, ",0.2) 70%)")
                    } catch (e) {
                        console.error("Erro ao processar dados da imagem:", e)
                    }
                    E.current = requestAnimationFrame(n)
                }
                  , s = () => {
                    o(!0),
                    E.current = requestAnimationFrame(n)
                }
                  , l = () => {
                    console.error("Erro ao carregar o v\xeddeo.")
                }
                ;
                return r.addEventListener("canplay", s),
                r.addEventListener("error", l),
                r.readyState >= 2 && s(),
                () => {
                    r.removeEventListener("canplay", s),
                    r.removeEventListener("error", l),
                    E.current && cancelAnimationFrame(E.current)
                }
            }
            , [r]),
            (0,
            n.useEffect)( () => {
                let e = setInterval( () => {
                    (Date.now() - w.current) / 1e3 >= 1643 && !j && (N(!0),
                    clearInterval(e))
                }
                , 1e3);
                return () => {
                    clearInterval(e)
                }
            }
            , [r, j]),
            (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: "max-w-2xl mx-auto",
                    children: [(0,
                    a.jsxs)(m.R, {
                        className: " bg-black",
                        children: [(0,
                        a.jsxs)(g.H, {
                            children: [(0,
                            a.jsx)(b.L, {
                                className: "sm:hidden"
                            }), (0,
                            a.jsx)(f.J, {
                                src: "./files/logo.png",
                                isBlurred: !0,
                                alt: "NextUI logo",
                                width: 120
                            })]
                        }), (0,
                        a.jsx)(x.U, {
                            className: "hidden sm:flex gap-4",
                            justify: "center",
                            children: (0,
                            a.jsx)(h.k, {})
                        }), (0,
                        a.jsxs)(x.U, {
                            justify: "end",
                            children: [(0,
                            a.jsx)(h.k, {
                                children: (0,
                                a.jsx)(c.Ivv, {
                                    className: "text-white",
                                    size: 20
                                })
                            }), (0,
                            a.jsx)(h.k, {
                                children: (0,
                                a.jsx)(l.h, {
                                    icon: (0,
                                    a.jsx)(u.f, {}),
                                    size: "sm",
                                    classNames: {
                                        base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                        icon: "text-black/80"
                                    }
                                })
                            })]
                        })]
                    }), (0,
                    a.jsx)(p.j, {
                        className: ""
                    }),
                        
                        
                        
                        /*, (0,
                    a.jsxs)("div", {
                        className: "relative mx-auto mt-5 ml-2 mr-2",
                        children: [(0,
                        a.jsx)("div", {
                            ref: t,
                            className: "fixed inset-x-0 top-0 z-0 h-[450px]",
                            style: {
                                transform: "scale(1.5)",
                                pointerEvents: "none",
                                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
                            }
                        }), (0,
                        a.jsxs)(s.w, {
                            className: "relative overflow-hidden",
                            children: [(0,
                            a.jsx)("div", {
                                className: "relative rounded-md overflow-hidden"
                            }), (0,
                            a.jsx)("iframe", {
                                src: "https://player-vz-f44a4fdb-887.tv.pandavideo.com.br/embed/?v=1e399e54-07e7-42a3-bd17-ba9a7932162e",
                                className: "w-full aspect-video",
                                allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
                                allowFullScreen: !0,
                                title: "V\xeddeo do Panda Player"
                            }), " "]
                        })]
                    })*/
                        
                       /* (0, a.jsxs)("div", {
                            className: "relative mx-auto mt-5 ml-2 mr-2",
                            children: [
                                (0, a.jsx)("div", {
                                    ref: t,
                                    className: "fixed inset-x-0 top-0 z-0 h-[450px]",
                                    style: {
                                        transform: "scale(1.5)",
                                        pointerEvents: "none",
                                        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                                        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
                                    }
                                }),
                                (0, a.jsxs)(s.w, {
                                    className: "relative overflow-hidden",
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: "relative rounded-md overflow-hidden"
                                        }),
                                        (0, a.jsx)("div", {
                                            id: "dynamic-script-container",
                                            className: "w-full aspect-video",
                                            ref: (node) => {
                                                if (node) {
                                                    // Verifica se o script já foi inserido
                                                    if (!node.querySelector("#scr_674129b47d09cb000bc1ba1e")) {
                                                        // Cria e insere o script dinâmico
                                                        const script = document.createElement("script");
                                                        script.id = "scr_674129b47d09cb000bc1ba1e";
                                                        script.src = "https://scripts.converteai.net/1183f511-c04b-4210-8507-c650000310f5/ab-test/674129b47d09cb000bc1ba1e/player.js";
                                                        script.async = true;
                        
                                                        node.appendChild(script);
                        
                                                        // Adiciona o estilo relacionado ao script
                                                        const style = document.createElement("style");
                                                        style.textContent = ".elementor-element:has(#smartplayer) { width: 100%; }";
                                                        node.appendChild(style);
                                                    }
                                                }
                                            }
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                        
                            
                        

                        
                        
                        
                        , (0,
                    a.jsxs)(s.w, {
                        className: "mx-auto mt-1 ml-2 mr-2 bg-transparent",
                        children: [(0,
                        a.jsxs)("h2", {
                            className: "text-start ml-2 mt-2 font-bold",
                            children: ['"RECEBA 500 REAIS ENQUANTO ASSISTE OU EU SOU OBRIGADO A TE ENVIAR 500 REAIS DO MEU BOLSO!" | -', " ", (0,
                            a.jsx)("span", {
                                className: "text-blue-600",
                                children: "LIVE #01"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex items-center space-x-4 ml-2 mt-3",
                            children: [(0,
                            a.jsx)(f.J, {
                                src: "./files/canal.png",
                                alt: "Avatar",
                                width: 38,
                                height: 38,
                                className: "rounded-full"
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0,
                                a.jsx)("p", {
                                    className: "font-bold",
                                    children: "Poul Magalhaez"
                                }), (0,
                                a.jsx)("p", {
                                    style: {
                                        fontSize: "12px"
                                    },
                                    className: "text-sm text-zinc-400",
                                    children: "98,6 mil Subscribed"
                                })]
                            }), (0,
                            a.jsxs)(i.A, {
                                size: "sm",
                                className: "rounded-full ml-auto mb-2 flex items-center bg-black text-white dark:bg-white dark:text-black  ".concat(A ? " " : "text-white dark:text-black"),
                                onClick: () => {
                                    v(!A)
                                }
                                ,
                                children: [A && (0,
                                a.jsx)(c.Z3q, {
                                    size: 16,
                                    style: {
                                        marginRight: "8px"
                                    }
                                }), " ", A ? "Subscribed" : "Subscribe"]
                            })]
                        })]
                    }), (0,
                    a.jsx)(d, {})]
                })
            })
        }
    },
    67: function() {},
    2061: function() {}
}, function(e) {
    e.O(0, [251, 365, 79, 888, 774, 179], function() {
        return e(e.s = 8312)
    }),
    _N_E = e.O()
}
]);
*/