(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/home/executive-team.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExecutiveTeam",
    ()=>ExecutiveTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ExecutiveTeamCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s((param)=>{
    let { leader, index } = param;
    _s();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleImageLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExecutiveTeamCard.useCallback[handleImageLoad]": ()=>{
            setImageLoaded(true);
        }
    }["ExecutiveTeamCard.useCallback[handleImageLoad]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        className: "flex-shrink-0 w-64 sm:w-72 md:w-80 snap-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group cursor-pointer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-96 rounded-2xl overflow-hidden bg-forest-800/50",
                children: [
                    !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-accent-gold"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/executive-team.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: leader.image,
                        alt: leader.name,
                        fill: true,
                        sizes: "(max-width: 768px) 280px, 320px",
                        className: "object-cover transition-all duration-500 group-hover:scale-110 ".concat(imageLoaded ? 'opacity-100' : 'opacity-0'),
                        onLoad: handleImageLoad,
                        ...index < 2 ? {
                            priority: true
                        } : {
                            loading: "lazy"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-4 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "backdrop-blur-md bg-forest-900/60 rounded-lg p-3 sm:p-4 border border-accent-gold/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-lg sm:text-xl font-bold text-white mb-2",
                                    children: leader.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/executive-team.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-accent-gold font-medium text-xs sm:text-sm",
                                    children: leader.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/executive-team.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/executive-team.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/executive-team.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/home/executive-team.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/home/executive-team.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "2ibw0Z3MUsaM3oiftI5VvmpuIO0="));
_c = ExecutiveTeamCard;
ExecutiveTeamCard.displayName = 'ExecutiveTeamCard';
function ExecutiveTeam() {
    _s1();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ExecutiveTeam.useEffect": ()=>{
            const onResize = {
                "ExecutiveTeam.useEffect.onResize": ()=>setIsMobile(window.innerWidth <= 768)
            }["ExecutiveTeam.useEffect.onResize"];
            onResize();
            window.addEventListener('resize', onResize);
            return ({
                "ExecutiveTeam.useEffect": ()=>window.removeEventListener('resize', onResize)
            })["ExecutiveTeam.useEffect"];
        }
    }["ExecutiveTeam.useEffect"], []);
    // Memoized Executive Team Data for Performance
    const executiveTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExecutiveTeam.useMemo[executiveTeam]": ()=>[
                {
                    name: "ABID FAHAD KHAN",
                    title: "GENERAL SECRETARY",
                    image: "/Joint secretaries/GENERAL SECRETARY _ ABID FAHAD KHAN.jpg"
                },
                {
                    name: "HUZAIFA ABRAR SAHAL",
                    title: "ADDITIONAL GENERAL SECRETARY",
                    image: "/Joint secretaries/joint secretary HUZAIFA ABRAR SAHAL.jpg"
                },
                {
                    name: "AREEB FAROOQUI",
                    title: "ADDITIONAL GENERAL SECRETARY",
                    image: "/Joint secretaries/areeb farooqui.jpg ADDITIONAL GENERAL SECRETARY.JPG"
                },
                {
                    name: "FARHAT LAMISHA",
                    title: "JOINT SECRETARY",
                    image: "/Joint secretaries/joint secretar Farhat lamisha.jpg"
                },
                {
                    name: "NUSRAT JAHAN",
                    title: "JOINT SECRETARY",
                    image: "/Joint secretaries/joint secretary NUSRAT JAHAN.jpg"
                },
                {
                    name: "RAIYAN ABDULLAH",
                    title: "ORGANIZING SECRETARY",
                    image: "/Joint secretaries/ORGANIZING SECRETARY RAIYAN ABDULLAH.jpg"
                },
                {
                    name: "MIFTAHUL JANNAT MUNTAHA",
                    title: "ORGANIZING SECRETARY",
                    image: "/Joint secretaries/ORGANIZING SECRETARY _ miftahul Jannat muntaha.jpg"
                },
                {
                    name: "AREFIN ABIR SAAD",
                    title: "ORGANIZING SECRETARY",
                    image: "/Joint secretaries/ORGANIZING SECRETARY arefin abir saad.jpg"
                },
                {
                    name: "AFSAN TALUKDER",
                    title: "ORGANIZING SECRETARY",
                    image: "/Joint secretaries/afsan talukder  ORGANIZING SECRETARY.jpg"
                }
            ]
    }["ExecutiveTeam.useMemo[executiveTeam]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        viewport: {
            once: true
        },
        className: "mt-20 md:mt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group cursor-default",
                        children: [
                            "The ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transition-colors duration-300 group-hover:text-accent-gold",
                                children: "Core"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/executive-team.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            " of IGAC"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 141,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 144,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-muted-foreground max-w-2xl mx-auto",
                        children: "The dedicated leadership team at the heart of our mission"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/executive-team.tsx",
                        lineNumber: 145,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/executive-team.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this),
            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 will-change-transform",
                    children: executiveTeam.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutiveTeamCard, {
                            leader: leader,
                            index: index
                        }, "mobile-".concat(leader.name), false, {
                            fileName: "[project]/src/components/home/executive-team.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/executive-team.tsx",
                    lineNumber: 153,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/executive-team.tsx",
                lineNumber: 152,
                columnNumber: 15
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: carouselRef,
                    className: "flex gap-4 sm:gap-6 pb-6 will-change-transform",
                    animate: {
                        x: [
                            -(280 * executiveTeam.length),
                            0
                        ]
                    },
                    transition: {
                        duration: executiveTeam.length * 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    },
                    style: {
                        width: "".concat(executiveTeam.length * 3 * 280, "px")
                    },
                    children: [
                        executiveTeam.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutiveTeamCard, {
                                leader: leader,
                                index: index
                            }, "first-".concat(leader.name), false, {
                                fileName: "[project]/src/components/home/executive-team.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this)),
                        executiveTeam.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutiveTeamCard, {
                                leader: leader,
                                index: index
                            }, "second-".concat(leader.name), false, {
                                fileName: "[project]/src/components/home/executive-team.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this)),
                        executiveTeam.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExecutiveTeamCard, {
                                leader: leader,
                                index: index
                            }, "third-".concat(leader.name), false, {
                                fileName: "[project]/src/components/home/executive-team.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/executive-team.tsx",
                    lineNumber: 161,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/executive-team.tsx",
                lineNumber: 160,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/executive-team.tsx",
        lineNumber: 132,
        columnNumber: 9
    }, this);
}
_s1(ExecutiveTeam, "sQ5az3pz9rmScA+6uPK1rE//LRc=");
_c1 = ExecutiveTeam;
var _c, _c1;
__turbopack_context__.k.register(_c, "ExecutiveTeamCard");
__turbopack_context__.k.register(_c1, "ExecutiveTeam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/executive-team.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/home/executive-team.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_home_executive-team_tsx_90c8f28b._.js.map