"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [867], {
        2046: function (e, a, s) {
            s.r(a), s.d(a, {
                context: function () {
                    return d
                }
            });
            var r = s(3827),
                l = s(4090);
            let {
                MODE: t,
                BANNER_TYPE: c,
                PAGE_INFO: i,
                BANNER_IMAGE: n
            } = {
                MODE: "MODE",
                BANNER_TYPE: "BANNER_TYPE",
                BANNER_IMAGE: "BANNER_IMAGE",
                PAGE_INFO: "PAGE_INFO"
            }, d = (0, l.createContext)(), o = (e, a) => {
                let {
                    type: s,
                    payload: r
                } = a;
                switch (s) {
                    case t:
                        return {
                            ...e, mode: r
                        };
                    case c:
                        return {
                            ...e, banner_type: r
                        };
                    case n:
                        return {
                            ...e, banner_image: r
                        };
                    case i:
                        return {
                            ...e, page_info: r
                        };
                    default:
                        return e
                }
            };
            a.default = e => {
                let [a, s] = (0, l.useReducer)(o, {
                    mode: !1,
                    banner_image: "/img/banner.jpg",
                    banner_type: "",
                    page_info: {
                        pageTitle: "",
                        subTitle: "",
                        pageName: "",
                        scroll_down: !0
                    }
                }), m = (0, l.useCallback)(e => {
                    s({
                        type: t,
                        payload: e
                    })
                }, []), h = (0, l.useCallback)(e => {
                    s({
                        type: c,
                        payload: e
                    })
                }, []), x = (0, l.useCallback)(e => {
                    s({
                        type: n,
                        payload: e
                    })
                }, []), j = (0, l.useCallback)((e, a, r, l) => {
                    s({
                        type: i,
                        payload: {
                            pageTitle: e,
                            subTitle: a,
                            pageName: r,
                            scroll_down: !1 !== l || l
                        }
                    })
                }, []), {
                    mode: f,
                    banner_type: u,
                    banner_image: p,
                    page_info: v
                } = a;
                return (0, r.jsx)(d.Provider, {
                    value: {
                        mode: f,
                        modeChange: m,
                        banner_type: u,
                        banner_type_function: h,
                        banner_image: p,
                        banner_image_function: x,
                        page_info: v,
                        page_info_function: j
                    },
                    children: e.children
                })
            }
        },
        5444: function (e, a, s) {
            s.d(a, {
                Z: function () {
                    return S
                }
            });
            var r = s(3827),
                l = s(2046),
                t = s(3090),
                c = s(8792),
                i = s(4090),
                n = s(1786),
                d = e => {
                    let {
                        centerTitle: a
                    } = e, {
                        banner_type: s,
                        banner_image: t,
                        page_info: c
                    } = (0, i.useContext)(l.context), {
                        pageTitle: n,
                        subTitle: d,
                        pageName: j,
                        scroll_down: f
                    } = c;
                    switch (s) {
                        case "image":
                            return (0, r.jsx)(o, {
                                banner_image: t
                            });
                        case "video":
                            return (0, r.jsx)(h, {});
                        case "slider":
                            return (0, r.jsx)(x, {});
                        default:
                            return (0, r.jsx)(m, {
                                banner_image: t,
                                pageTitle: n,
                                subTitle: d,
                                pageName: j,
                                scroll_down: f,
                                centerTitle: a
                            })
                    }
                };
            let o = e => {
                let {
                    banner_image: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: "trm-banner",
                    "data-scroll": "",
                    "data-scroll-direction": "vertical",
                    "data-scroll-speed": -1,
                    children: [(0, r.jsx)("img", {
                        src: a,
                        alt: "banner",
                        className: "trm-banner-cover",
                        "data-scroll": "",
                        "data-scroll-direction": "vertical",
                        "data-scroll-speed": -4
                    }), (0, r.jsx)("div", {
                        className: "trm-banner-content trm-overlay",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            "data-scroll": "",
                            "data-scroll-direction": "vertical",
                            "data-scroll-speed": 1,
                            children: (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-4"
                                }), (0, r.jsxs)("div", {
                                    className: "col-lg-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "trm-banner-text",
                                        children: [(0, r.jsx)("div", {
                                            className: "trm-label trm-mb-20",
                                            children: "Hi my new friend!"
                                        }), (0, r.jsxs)("h1", {
                                            className: "trm-mb-30",
                                            children: ["Discover my", (0, r.jsx)("br", {}), "art space!"]
                                        }), (0, r.jsxs)("a", {
                                            "data-fancybox": "",
                                            href: "https://www.youtube.com/watch?v=Mo_vRjtkgSI",
                                            className: "trm-btn trm-btn-border",
                                            children: ["Video Resume ", (0, r.jsx)("i", {
                                                className: "fas fa-play"
                                            })]
                                        })]
                                    }), (0, r.jsxs)("a", {
                                        href: "#about-triger",
                                        "data-scroll-to": "#about-triger",
                                        "data-scroll-offset": -130,
                                        className: "trm-scroll-hint-frame",
                                        children: [(0, r.jsx)("div", {
                                            className: "trm-scroll-hint"
                                        }), (0, r.jsx)("span", {
                                            className: "trm-label",
                                            children: "Scroll down"
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            },
                m = e => {
                    let {
                        pageTitle: a,
                        subTitle: s,
                        pageName: l,
                        banner_image: t,
                        scroll_down: i,
                        centerTitle: n
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "trm-banner",
                        "data-scroll": !0,
                        "data-scroll-direction": "vertical",
                        "data-scroll-speed": -1,
                        children: [(0, r.jsx)("img", {
                            src: t,
                            alt: "banner",
                            className: "trm-banner-cover",
                            "data-scroll": !0,
                            "data-scroll-direction": "vertical",
                            "data-scroll-speed": -4
                        }), (0, r.jsx)("div", {
                            className: "trm-banner-content trm-overlay",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                "data-scroll": !0,
                                "data-scroll-direction": "vertical",
                                "data-scroll-speed": 1,
                                children: (0, r.jsxs)("div", {
                                    className: "row",
                                    children: [!n && (0, r.jsx)("div", {
                                        className: "col-lg-4"
                                    }), (0, r.jsxs)("div", {
                                        className: n ? "col-lg-12" : "col-lg-8",
                                        children: [(0, r.jsxs)("div", {
                                            className: "trm-banner-text ".concat(n && "trm-text-center"),
                                            children: [(0, r.jsx)("div", {
                                                className: "trm-label trm-mb-20",
                                                children: s
                                            }), (0, r.jsx)("h1", {
                                                className: "trm-mb-30",
                                                dangerouslySetInnerHTML: {
                                                    __html: a
                                                }
                                            }), (0, r.jsxs)("ul", {
                                                className: "trm-breadcrumbs trm-label",
                                                children: [(0, r.jsx)("li", {
                                                    children: (0, r.jsx)(c.default, {
                                                        legacyBehavior: !0,
                                                        href: "/",
                                                        children: (0, r.jsx)("a", {
                                                            className: "trm-anima-link",
                                                            children: "Home"
                                                        })
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    children: (0, r.jsx)("span", {
                                                        children: l
                                                    })
                                                })]
                                            })]
                                        }), i && (0, r.jsxs)("a", {
                                            href: "#about-triger",
                                            "data-scroll-to": "#about-triger",
                                            "data-scroll-offset": -130,
                                            className: "trm-scroll-hint-frame",
                                            children: [(0, r.jsx)("div", {
                                                className: "trm-scroll-hint"
                                            }), (0, r.jsx)("span", {
                                                className: "trm-label",
                                                children: "Scroll down"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                h = e => {
                    let { } = e;
                    return (0, r.jsxs)("div", {
                        className: "trm-banner",
                        "data-scroll": !0,
                        "data-scroll-direction": "vertical",
                        "data-scroll-speed": -1,
                        children: [(0, r.jsxs)("video", {
                            autoPlay: "autoplay",
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: "trm-banner-cover",
                            "data-scroll": !0,
                            "data-scroll-direction": "vertical",
                            "data-scroll-speed": -4,
                            children: [(0, r.jsx)("source", {
                                src: "https://bslthemes.com/mp4/trueman/banner.mp4",
                                type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                            }), (0, r.jsx)("source", {
                                src: "img/banner.webm",
                                type: 'video/webm; codecs="vp8, vorbis"'
                            }), (0, r.jsx)("source", {
                                src: "img/banner.ogg",
                                type: 'video/ogg; codecs="theora, vorbis"'
                            }), "Your browser does not support HTML5 video."]
                        }), (0, r.jsx)("div", {
                            className: "trm-banner-content trm-overlay",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                "data-scroll": !0,
                                "data-scroll-direction": "vertical",
                                "data-scroll-speed": 1,
                                children: (0, r.jsxs)("div", {
                                    className: "row",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-lg-4"
                                    }), (0, r.jsxs)("div", {
                                        className: "col-lg-8",
                                        children: [(0, r.jsxs)("div", {
                                            className: "trm-banner-text",
                                            children: [(0, r.jsx)("div", {
                                                className: "trm-label trm-mb-20",
                                                children: "Hi my new friend!"
                                            }), (0, r.jsxs)("h1", {
                                                className: "trm-mb-30",
                                                children: ["Discover my", (0, r.jsx)("br", {}), "art space!"]
                                            }), (0, r.jsxs)("a", {
                                                "data-fancybox": !0,
                                                href: "https://www.youtube.com/watch?v=Mo_vRjtkgSI",
                                                className: "trm-btn trm-btn-border",
                                                children: ["Video Resume ", (0, r.jsx)("i", {
                                                    className: "fas fa-play"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("a", {
                                            href: "#about-triger",
                                            "data-scroll-to": "#about-triger",
                                            "data-scroll-offset": -130,
                                            className: "trm-scroll-hint-frame",
                                            children: [(0, r.jsx)("div", {
                                                className: "trm-scroll-hint"
                                            }), (0, r.jsx)("span", {
                                                className: "trm-label",
                                                children: "Scroll down"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                x = e => {
                    let { } = e;
                    return (0, r.jsxs)("div", {
                        className: "trm-banner",
                        "data-scroll": !0,
                        "data-scroll-direction": "vertical",
                        "data-scroll-speed": -1,
                        children: [(0, r.jsxs)(n.tq, {
                            ...t.b.homeSlider,
                            className: "swiper-container trm-slideshow",
                            "data-scroll": !0,
                            "data-scroll-direction": "vertical",
                            "data-scroll-speed": -4,
                            children: [(0, r.jsx)(n.o5, {
                                className: "swiper-slide",
                                children: (0, r.jsx)("img", {
                                    src: "img/banner.jpg",
                                    alt: "banner",
                                    className: "trm-banner-cover",
                                    "data-swiper-parallax-y": -100,
                                    "data-swiper-parallax-scale": "1.2"
                                })
                            }), (0, r.jsx)(n.o5, {
                                className: "swiper-slide",
                                children: (0, r.jsx)("img", {
                                    src: "img/banner2.jpg",
                                    alt: "banner",
                                    className: "trm-banner-cover",
                                    "data-swiper-parallax-y": -100,
                                    "data-swiper-parallax-scale": "1.2"
                                })
                            }), (0, r.jsx)(n.o5, {
                                className: "swiper-slide",
                                children: (0, r.jsx)("img", {
                                    src: "img/banner3.jpg",
                                    alt: "banner",
                                    className: "trm-banner-cover",
                                    "data-swiper-parallax-y": -100,
                                    "data-swiper-parallax-scale": "1.2"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "trm-banner-content trm-overlay",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                "data-scroll": !0,
                                "data-scroll-direction": "vertical",
                                "data-scroll-speed": 1,
                                children: (0, r.jsxs)("div", {
                                    className: "row",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-lg-4"
                                    }), (0, r.jsxs)("div", {
                                        className: "col-lg-8",
                                        children: [(0, r.jsxs)("div", {
                                            className: "trm-banner-text",
                                            children: [(0, r.jsx)("div", {
                                                className: "trm-label trm-mb-20",
                                                children: "Hi my new friend!"
                                            }), (0, r.jsxs)("h1", {
                                                className: "trm-mb-30",
                                                children: ["Discover my", (0, r.jsx)("br", {}), "art space!"]
                                            }), (0, r.jsxs)("a", {
                                                "data-fancybox": !0,
                                                href: "https://www.youtube.com/watch?v=Mo_vRjtkgSI",
                                                className: "trm-btn trm-btn-border",
                                                children: ["Video Resume ", (0, r.jsx)("i", {
                                                    className: "fas fa-play"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("a", {
                                            href: "#about-triger",
                                            "data-scroll-to": "#about-triger",
                                            "data-scroll-offset": -130,
                                            className: "trm-scroll-hint-frame",
                                            children: [(0, r.jsx)("div", {
                                                className: "trm-scroll-hint"
                                            }), (0, r.jsx)("span", {
                                                className: "trm-label",
                                                children: "Scroll down"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                };
            var j = () => (0, r.jsx)(i.Fragment, {
                children: (0, r.jsx)("div", {
                    id: "trm-order",
                    className: "trm-order",
                    children: (0, r.jsxs)("div", {
                        className: "trm-popup-content",
                        children: [(0, r.jsx)("img", {
                            src: "img/popup.jpg",
                            alt: "photo"
                        }), (0, r.jsxs)("div", {
                            className: "trm-popup-form-frame",
                            children: [(0, r.jsx)("h5", {
                                className: "trm-mb-40",
                                children: "Write me a message"
                            }), (0, r.jsxs)("form", {
                                id: "form1",
                                children: [(0, r.jsx)("input", {
                                    name: "name",
                                    type: "text",
                                    placeholder: "Name"
                                }), (0, r.jsx)("input", {
                                    name: "email",
                                    type: "email",
                                    placeholder: "Email"
                                }), (0, r.jsx)("textarea", {
                                    name: "text",
                                    rows: 6,
                                    placeholder: "Message",
                                    defaultValue: ""
                                }), (0, r.jsxs)("button", {
                                    type: "submit",
                                    className: "trm-btn",
                                    children: ["Send ", (0, r.jsx)("i", {
                                        className: "fas fa-arrow-right"
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "trm-text-sm trm-mt-20",
                                children: "* I promise the confidentiality of your personal information"
                            }), (0, r.jsxs)("div", {
                                className: "trm-success-banner",
                                children: [(0, r.jsx)("img", {
                                    src: "img/success.png",
                                    alt: "success",
                                    className: "trm-mb-15"
                                }), (0, r.jsx)("h4", {
                                    className: "trm-mb-15",
                                    children: "Success"
                                }), (0, r.jsx)("div", {
                                    className: "trm-text trm-mb-20",
                                    children: "Your message has been sent successfully"
                                }), (0, r.jsx)("a", {
                                    href: "#.",
                                    className: "trm-btn",
                                    "data-fancybox-close": !0,
                                    children: "Ok"
                                })]
                            })]
                        })]
                    })
                })
            }),
                f = () => (0, r.jsxs)("footer", {
                    className: "trm-scroll-animation",
                    "data-scroll": "",
                    "data-scroll-offset": 50,
                    children: [(0, r.jsxs)("div", {
                        className: "trm-label",
                        children: ["\xa9 ", new Date().getFullYear(), " All Rights Reserved."]
                    }), (0, r.jsxs)("div", {
                        className: "trm-label",
                        children: ["Developed by:", " ", (0, r.jsx)("a", {
                            href: "https://saifulmiqdar.vercel.app/",
                            target: "_blank",
                            children: "saiful_mqdr"
                        })]
                    })]
                });
            let u = () => {
                ! function (e, a) {
                    var s, r = 0,
                        l = 0,
                        t = 0;

                    function c() {
                        s = setInterval(i, 100)
                    }

                    function i() {
                        let i = a[l];
                        0 == r ? ++t == i.length && (r = 1, clearInterval(s), setTimeout(c, 3e3)) : 1 == r && 0 == --t && (t = 0, r = 0, ++l == a.length && (l = 0));
                        let n = i.substring(0, t);
                        e.textContent = n
                    }
                    c()
                }(document.querySelector(".trm-typed-text"), ["UI/UX Designer", "Web Developer", "Grapic Designer", "Dreamer :)"]), document.addEventListener("swup:contentReplaced", function () {
                    ! function (e, a) {
                        var s, r = 0,
                            l = 0,
                            t = 0;

                        function c() {
                            s = setInterval(i, 100)
                        }

                        function i() {
                            let i = a[l];
                            0 == r ? ++t == i.length && (r = 1, clearInterval(s), setTimeout(c, 3e3)) : 1 == r && 0 == --t && (t = 0, r = 0, ++l == a.length && (l = 0));
                            let n = i.substring(0, t);
                            e.textContent = n
                        }
                        c()
                    }(document.querySelector(".trm-typed-text"), ["UI/UX Designer", "Web Developer", "Grapic Designer", "Dreamer :)"])
                })
            };
            var p = () => ((0, i.useEffect)(() => {
                u()
            }, []), (0, r.jsx)("div", {
                className: "col-lg-4",
                children: (0, r.jsx)("div", {
                    className: "trm-main-card-frame trm-sidebar",
                    children: (0, r.jsxs)("div", {
                        className: "trm-main-card",
                        "data-scroll": "",
                        "data-scroll-repeat": "",
                        "data-scroll-sticky": "",
                        "data-scroll-target": "#content",
                        "data-scroll-offset": 60,
                        children: [(0, r.jsxs)("div", {
                            className: "trm-mc-header",
                            children: [(0, r.jsxs)("div", {
                                className: "trm-avatar-frame trm-mb-20",
                                children: [(0, r.jsx)("img", {
                                    className: "trm-avatar",
                                    src: "/img/avatar.jpg",
                                    alt: "Avatar"
                                }), (0, r.jsx)("div", {
                                    className: "trm-dot"
                                })]
                            }), (0, r.jsx)("h5", {
                                className: "trm-name trm-mb-15",
                                children: "Saiful Miqdar"
                            }), (0, r.jsxs)("div", {
                                className: "trm-label",
                                children: ["I`m", " ", (0, r.jsx)("span", {
                                    className: "trm-typed-text"
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "trm-divider trm-mb-40 trm-mt-40"
                        }), (0, r.jsxs)("div", {
                            className: "trm-social",
                            children: [(0, r.jsx)("a", {
                                href: "https://www.linkedin.com/in/saiful-miqdar-7050511b1/",
                                target: "_blank",
                                children: (0, r.jsx)("i", {
                                    className: "fab fa-linkedin-in"
                                })
                            }), (0, r.jsx)("a", {
                                href: "https://dribbble.com/saimiq",
                                target: "_blank",
                                children: (0, r.jsx)("i", {
                                    className: "fab fa-dribbble"
                                })
                            }), (0, r.jsx)("a", {
                                href: "https://www.behance.net/saifulmiqdar7",
                                target: "_blank",
                                children: (0, r.jsx)("i", {
                                    className: "fab fa-behance"
                                })
                            }), (0, r.jsx)("a", {
                                href: "https://twitter.com/ifulxploit",
                                target: "_blank",
                                children: (0, r.jsx)("i", {
                                    className: "fab fa-twitter"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "trm-divider trm-mb-40 trm-mt-40"
                        }), (0, r.jsxs)("ul", {
                            className: "trm-table trm-mb-20",
                            children: [(0, r.jsxs)("li", {
                                children: [(0, r.jsx)("div", {
                                    className: "trm-label",
                                    children: "Residence:"
                                }), (0, r.jsx)("div", {
                                    className: "trm-label trm-label-light",
                                    children: "INDONESIA"
                                })]
                            }), (0, r.jsxs)("li", {
                                children: [(0, r.jsx)("div", {
                                    className: "trm-label",
                                    children: "City:"
                                }), (0, r.jsx)("div", {
                                    className: "trm-label trm-label-light",
                                    children: "TASIKMALAYA"
                                })]
                            }), (0, r.jsxs)("li", {
                                children: [(0, r.jsx)("div", {
                                    className: "trm-label",
                                    children: "Age:"
                                }), (0, r.jsx)("div", {
                                    className: "trm-label trm-label-light",
                                    children: "24"
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "trm-divider trm-mb-40 trm-mt-40"
                        }), (0, r.jsx)("div", {
                            className: "text-center",
                            children: (0, r.jsxs)("a", {
                                "data-fancybox": "",
                                href: "#trm-order",
                                className: "trm-btn",
                                children: ["Contact me ", (0, r.jsx)("i", {
                                    className: "far fa-envelope"
                                })]
                            })
                        })]
                    })
                })
            })),
                v = e => {
                    let {
                        onePage: a
                    } = e, [s, t] = (0, i.useState)(!1), {
                        modeChange: n,
                        mode: d
                    } = (0, i.useContext)(l.context);
                    return (0, i.useEffect)(() => {
                        n(JSON.parse(localStorage.getItem("trueman")))
                    }, []), (0, r.jsx)("div", {
                        className: "trm-top-bar",
                        "data-scroll": "",
                        "data-scroll-sticky": "",
                        "data-scroll-target": "#content",
                        "data-scroll-offset": -10,
                        children: (0, r.jsxs)("div", {
                            className: "container",
                            children: [(0, r.jsx)("div", {
                                className: "trm-left-side",
                                children: (0, r.jsx)(c.default, {
                                    legacyBehavior: !0,
                                    href: "/",
                                    children: (0, r.jsx)("a", {
                                        className: "trm-logo-frame trm-anima-link",
                                        children: (0, r.jsxs)("div", {
                                            className: "trm-logo-text",
                                            children: ["True", (0, r.jsx)("span", {
                                                children: "man"
                                            })]
                                        })
                                    })
                                })
                            }), (0, r.jsxs)("div", {
                                className: "trm-right-side ".concat(s ? "trm-active" : ""),
                                children: [(0, r.jsx)("div", {
                                    className: "trm-menu",
                                    children: (0, r.jsx)("nav", {
                                        children: a ? (0, r.jsx)(b, {}) : (0, r.jsxs)("ul", {
                                            children: [(0, r.jsxs)("li", {
                                                className: "menu-item-has-children",
                                                children: [(0, r.jsx)(c.default, {
                                                    legacyBehavior: !0,
                                                    href: "/",
                                                    children: "Home"
                                                }), (0, r.jsxs)("ul", {
                                                    children: [(0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "/",
                                                            children: "Image"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "home-video.html",
                                                            children: "Video"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "home-slideshow.html",
                                                            children: "Slideshow"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsxs)(c.default, {
                                                            href: "#",
                                                            rel: "noopener noreferrer",
                                                            target: "_blank",
                                                            children: ["Onepage Image ", (0, r.jsx)("i", {
                                                                class: "fas fa-external-link-alt"
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsxs)(c.default, {
                                                            href: "#",
                                                            rel: "noopener noreferrer",
                                                            target: "_blank",
                                                            children: ["Onepage Video ", (0, r.jsx)("i", {
                                                                class: "fas fa-external-link-alt"
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsxs)(c.default, {
                                                            href: "#",
                                                            rel: "noopener noreferrer",
                                                            target: "_blank",
                                                            children: ["Onepage Slideshow ", (0, r.jsx)("i", {
                                                                class: "fas fa-external-link-alt"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("li", {
                                                className: "menu-item-has-children",
                                                children: [(0, r.jsx)(c.default, {
                                                    legacyBehavior: !0,
                                                    href: "portfolio.html",
                                                    children: "Portfolio"
                                                }), (0, r.jsxs)("ul", {
                                                    children: [(0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "portfolio.html",
                                                            children: "Portfolio 1"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "portfolio-2.html",
                                                            children: "Portfolio 2"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "portfolio-3.html",
                                                            children: "Portfolio 3"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "portfolio-4.html",
                                                            children: "Portfolio 4"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "portfolio-5.html",
                                                            children: "Portfolio 5"
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsx)("li", {
                                                children: (0, r.jsx)(c.default, {
                                                    legacyBehavior: !0,
                                                    href: "resume.html",
                                                    children: "Resume"
                                                })
                                            }), (0, r.jsx)("li", {
                                                children: (0, r.jsx)(c.default, {
                                                    legacyBehavior: !0,
                                                    href: "contact.html",
                                                    children: "Contact"
                                                })
                                            }), (0, r.jsxs)("li", {
                                                className: "menu-item-has-children",
                                                children: [(0, r.jsx)(c.default, {
                                                    legacyBehavior: !0,
                                                    href: "blog.html",
                                                    children: "Blog"
                                                }), (0, r.jsxs)("ul", {
                                                    children: [(0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "blog.html",
                                                            children: "Blog 1"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "blog-2.html",
                                                            children: "Blog 2"
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(c.default, {
                                                            legacyBehavior: !0,
                                                            href: "publication.html",
                                                            children: "Publication"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "trm-mode-switcher-place",
                                    children: (0, r.jsxs)("div", {
                                        className: "trm-mode-switcher",
                                        children: [(0, r.jsx)("i", {
                                            className: "far fa-sun"
                                        }), (0, r.jsx)("input", {
                                            onChange: e => {
                                                localStorage.setItem("trueman", e.target.checked), n(e.target.checked)
                                            },
                                            checked: d,
                                            className: "tgl tgl-light",
                                            id: "trm-swich",
                                            type: "checkbox"
                                        }), (0, r.jsx)("label", {
                                            className: "trm-swich",
                                            htmlFor: "trm-swich"
                                        }), (0, r.jsx)("i", {
                                            className: "far fa-moon"
                                        })]
                                    })
                                }), (0, r.jsxs)("a", {
                                    href: "files/cv.txt",
                                    download: "",
                                    className: "trm-btn trm-btn-sm",
                                    children: ["Download cv ", (0, r.jsx)("i", {
                                        className: "fas fa-arrow-down"
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "trm-menu-btn ".concat(s ? "trm-active" : ""),
                                onClick: () => t(!s),
                                children: (0, r.jsx)("span", {})
                            })]
                        })
                    })
                };
            let b = () => (0, r.jsxs)("ul", {
                children: [(0, r.jsxs)("li", {
                    children: [(0, r.jsx)("a", {
                        href: "#home-triger",
                        "data-scroll-to": "#home-triger",
                        "data-scroll-offset": -10,
                        children: "Home"
                    }), (0, r.jsxs)("ul", {
                        children: [(0, r.jsx)("li", {
                            children: (0, r.jsx)(c.default, {
                                href: "onepage-image",
                                children: "Image"
                            })
                        }), (0, r.jsx)("li", {
                            children: (0, r.jsx)(c.default, {
                                href: "onepage-video",
                                children: "Video"
                            })
                        }), (0, r.jsx)("li", {
                            children: (0, r.jsx)(c.default, {
                                href: "onepage-slideshow",
                                children: "Slideshow"
                            })
                        })]
                    })]
                }), (0, r.jsx)("li", {
                    id: "about-link",
                    children: (0, r.jsx)("a", {
                        href: "#about-triger",
                        "data-scroll-to": "#about-triger",
                        "data-scroll-offset": -130,
                        children: "About"
                    })
                }), (0, r.jsx)("li", {
                    id: "portfolio-link",
                    children: (0, r.jsx)("a", {
                        href: "#portfolio-triger",
                        "data-scroll-to": "#portfolio-triger",
                        "data-scroll-offset": -130,
                        children: "Portfolio"
                    })
                }), (0, r.jsx)("li", {
                    id: "resume-link",
                    children: (0, r.jsx)("a", {
                        href: "#resume-triger",
                        "data-scroll-to": "#resume-triger",
                        "data-scroll-offset": -130,
                        children: "Resume"
                    })
                }), (0, r.jsx)("li", {
                    id: "contact-link",
                    children: (0, r.jsx)("a", {
                        href: "#contact-triger",
                        "data-scroll-to": "#contact-triger",
                        "data-scroll-offset": -130,
                        children: "Contact"
                    })
                })]
            });
            var g = s(4833),
                N = s.n(g),
                y = e => {
                    let a = (0, i.useRef)(null);
                    return (0, i.useEffect)(() => {
                        let s = s => {
                            a.current && !a.current.contains(s.target) && e()
                        };
                        return document.addEventListener("mousedown", s), () => {
                            document.removeEventListener("mousedown", s)
                        }
                    }, [e]), a
                };
            let w = e => {
                let {
                    close: a,
                    videoID: s
                } = e, l = y(() => {
                    a(!1)
                });
                return (0, r.jsxs)(i.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "mfp-bg mfp-ready",
                        onClick: () => a(!1)
                    }), (0, r.jsx)("div", {
                        className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                        tabIndex: -1,
                        style: {
                            overflow: "hidden auto"
                        },
                        children: (0, r.jsxs)("div", {
                            className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                            children: [(0, r.jsx)("div", {
                                className: "mfp-content",
                                ref: l,
                                children: (0, r.jsxs)("div", {
                                    className: "mfp-iframe-scaler",
                                    children: [(0, r.jsx)("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: () => a(),
                                        children: "\xd7"
                                    }), (0, r.jsx)(N(), {
                                        url: s,
                                        playing: !0
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "mfp-preloader",
                                children: "Loading..."
                            })]
                        })
                    })]
                })
            };
            var k = () => {
                let [e, a] = (0, i.useState)(!1), [s, l] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    setTimeout(() => {
                        document.querySelectorAll("a").forEach(e => {
                            (e.href.includes("www.youtube.com") || e.href.includes("vimeo.com") || e.href.includes("soundcloud.com")) && e.addEventListener("click", s => {
                                s.preventDefault(), l(e.href), a(!0)
                            })
                        })
                    }, 1500)
                }, []), (0, r.jsx)(i.Fragment, {
                    children: e && (0, r.jsx)(w, {
                        close: () => a(!1),
                        videoID: s
                    })
                })
            },
                E = s(9174),
                _ = s(862),
                S = e => {
                    let {
                        children: a,
                        noSidebar: s,
                        onePage: l
                    } = e;
                    return (0, i.useEffect)(() => {
                        E.D.scrollAnimation()
                    }, []), (0, i.useEffect)(() => {
                        _.KR.bind("[data-fancybox]", {
                            animationEffect: "zoom-in-out",
                            animationDuration: 600,
                            transitionDuration: 1200,
                            buttons: ["zoom", "slideShow", "thumbs", "close"]
                        })
                    }, []), (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsx)(k, {}), (0, r.jsx)(j, {}), (0, r.jsxs)("div", {
                            "data-scroll-section": "",
                            id: "content",
                            className: "trm-scroll-section",
                            children: [(0, r.jsx)(v, {
                                onePage: l
                            }), (0, r.jsxs)("div", {
                                className: "trm-content-start",
                                children: [(0, r.jsx)(d, {
                                    centerTitle: s
                                }), (0, r.jsx)("div", {
                                    className: "container",
                                    children: (0, r.jsxs)("div", {
                                        className: "row",
                                        children: [!s && (0, r.jsx)(p, {}), (0, r.jsxs)("div", {
                                            className: s ? "col-lg-12" : "col-lg-8",
                                            children: [(0, r.jsxs)("div", {
                                                className: "trm-content",
                                                id: "trm-content",
                                                children: [(0, r.jsx)("div", {
                                                    "data-scroll": !0,
                                                    "data-scroll-repeat": !0,
                                                    "data-scroll-offset": 500,
                                                    id: "about-triger"
                                                }), a, (0, r.jsx)("div", {
                                                    className: "trm-divider trm-mb-40"
                                                }), (0, r.jsx)(f, {})]
                                            }), (0, r.jsx)("div", {
                                                id: "trm-order",
                                                className: "trm-order",
                                                children: (0, r.jsxs)("div", {
                                                    className: "trm-popup-content",
                                                    children: [(0, r.jsx)("img", {
                                                        src: "img/popup.jpg",
                                                        alt: "photo"
                                                    }), (0, r.jsxs)("div", {
                                                        className: "trm-popup-form-frame",
                                                        children: [(0, r.jsx)("h5", {
                                                            className: "trm-mb-40",
                                                            children: "Write me a message"
                                                        }), (0, r.jsxs)("form", {
                                                            id: "form1",
                                                            children: [(0, r.jsx)("input", {
                                                                name: "name",
                                                                type: "text",
                                                                placeholder: "Name"
                                                            }), (0, r.jsx)("input", {
                                                                name: "email",
                                                                type: "email",
                                                                placeholder: "Email"
                                                            }), (0, r.jsx)("textarea", {
                                                                name: "text",
                                                                rows: 6,
                                                                placeholder: "Message",
                                                                defaultValue: ""
                                                            }), (0, r.jsxs)("button", {
                                                                type: "submit",
                                                                className: "trm-btn",
                                                                children: ["Send ", (0, r.jsx)("i", {
                                                                    className: "fas fa-arrow-right"
                                                                })]
                                                            })]
                                                        }), (0, r.jsx)("div", {
                                                            className: "trm-text-sm trm-mt-20",
                                                            children: "* I promise the confidentiality of your personal information"
                                                        }), (0, r.jsxs)("div", {
                                                            className: "trm-success-banner",
                                                            children: [(0, r.jsx)("img", {
                                                                src: "img/success.png",
                                                                alt: "success",
                                                                className: "trm-mb-15"
                                                            }), (0, r.jsx)("h4", {
                                                                className: "trm-mb-15",
                                                                children: "Success"
                                                            }), (0, r.jsx)("div", {
                                                                className: "trm-text trm-mb-20",
                                                                children: "Your message has been sent successfully"
                                                            }), (0, r.jsx)("a", {
                                                                href: "#.",
                                                                className: "trm-btn",
                                                                "data-fancybox-close": !0,
                                                                children: "Ok"
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                }
        },
        9174: function (e, a, s) {
            s.d(a, {
                D: function () {
                    return r
                }
            });
            let r = {
                preloader() {
                    document.documentElement.classList.add("is-animating");
                    var e = document.querySelector(".trm-scroll-container");
                    e.style.opacity = "0", e.style.transition = "opacity 0.6s", setTimeout(function () {
                        document.documentElement.classList.remove("is-animating"), e.style.opacity = "1"
                    }, 1e3)
                },
                scrollAnimation() {
                    s.e(62).then(s.bind(s, 7062)).then(e => {
                        scroll = new e.default({
                            el: document.querySelector("#trm-scroll-container"),
                            smooth: !0,
                            lerp: .1
                        })
                    })
                }
            }
        },
        3090: function (e, a, s) {
            s.d(a, {
                b: function () {
                    return t
                }
            });
            var r = s(8020),
                l = s(5264);
            r.Z.use([l.tl, l.W_, l.xW, l.pt, l.rj, l.VS]);
            let t = {
                testimonials: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                    parallax: !0,
                    autoplay: !1,
                    speed: 1400,
                    navigation: {
                        nextEl: ".trm-testimonials-slider-next",
                        prevEl: ".trm-testimonials-slider-prev"
                    }
                },
                homeSlider: {
                    slidesPerView: 1,
                    effect: "fade",
                    parallax: !0,
                    autoplay: !0,
                    speed: 1400
                }
            }
        }
    }
]);