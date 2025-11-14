module.exports = [
"[project]/src/hooks/use-router.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
function useRouter() {
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            refresh: ()=>navigate.refresh(),
            push: (href)=>navigate.push(href),
            replace: (href)=>navigate.replace(href)
        }), [
        navigate
    ]);
    return router;
}
}),
"[project]/src/hooks/use-pathname.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePathname",
    ()=>usePathname
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
function usePathname() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>pathname, [
        pathname
    ]);
}
}),
"[project]/src/hooks/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$pathname$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-pathname.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/features/auth/guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminGuard",
    ()=>AdminGuard,
    "AuthGuard",
    ()=>AuthGuard,
    "GuestGuard",
    ()=>GuestGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/context.tsx [app-ssr] (ecmascript)");
;
;
;
;
const AuthGuard = ({ children })=>{
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !user) {
            router.push('/sign-in');
        }
    }, [
        user,
        loading,
        router
    ]);
    if (loading || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex items-center justify-center w-screen h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/features/auth/guard.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/features/auth/guard.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const GuestGuard = ({ children })=>{
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && user) {
            router.push('/');
        }
    }, [
        user,
        loading,
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex items-center justify-center w-screen h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/features/auth/guard.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/features/auth/guard.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const AdminGuard = ({ children })=>{
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && user?.role !== 'admin') {
            router.push('/');
        }
    }, [
        user,
        loading,
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex items-center justify-center w-screen h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/features/auth/guard.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/features/auth/guard.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
}),
"[project]/src/theme/create-classes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClasses",
    ()=>createClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/theme-config.ts [app-ssr] (ecmascript)");
;
function createClasses(className) {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].classesPrefix}__${className}`;
}
}),
"[project]/src/layouts/core/classes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutClasses",
    ()=>layoutClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/create-classes.ts [app-ssr] (ecmascript)");
;
const layoutClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__root'),
    main: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__main'),
    header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__header'),
    nav: {
        root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__root'),
        mobile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__mobile'),
        vertical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__vertical'),
        horizontal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__horizontal')
    },
    content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__main__content'),
    sidebarContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__sidebar__container')
};
}),
"[project]/src/layouts/auth/content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthContent",
    ()=>AuthContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/minimal-shared@1.1.3_react@19.1.0/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
;
;
;
;
function AuthContent({ sx, children, className, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].content,
            className
        ]),
        sx: [
            (theme)=>({
                    py: 5,
                    px: 3,
                    width: 1,
                    zIndex: 2,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 'var(--layout-auth-content-width)',
                    bgcolor: theme.vars.palette.background.default
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/layouts/auth/content.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/layouts/core/main-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainSection",
    ()=>MainSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/minimal-shared@1.1.3_react@19.1.0/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
;
;
;
;
function MainSection({ children, className, sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].main,
            className
        ]),
        sx: sx,
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/layouts/core/main-section.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
// ----------------------------------------------------------------------
const MainRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('main')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
});
}),
"[project]/src/layouts/core/css-vars.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutSectionVars",
    ()=>layoutSectionVars
]);
function layoutSectionVars(theme) {
    return {
        '--layout-nav-zIndex': theme.zIndex.drawer + 1,
        '--layout-nav-mobile-width': '288px',
        '--layout-header-blur': '8px',
        '--layout-header-zIndex': theme.zIndex.appBar + 1,
        '--layout-header-mobile-height': '64px',
        '--layout-header-desktop-height': '72px'
    };
}
}),
"[project]/src/layouts/core/layout-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutSection",
    ()=>LayoutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/minimal-shared@1.1.3_react@19.1.0/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/css-vars.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function LayoutSection({ sx, cssVars, children, footerSection, headerSection, sidebarSection, className, ...other }) {
    const inputGlobalStyles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        styles: (theme)=>({
                body: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutSectionVars"])(theme),
                    ...cssVars
                }
            })
    }, void 0, false, {
        fileName: "[project]/src/layouts/core/layout-section.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            inputGlobalStyles,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutRoot, {
                id: "root__layout",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].root,
                    className
                ]),
                sx: sx,
                ...other,
                children: sidebarSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        sidebarSection,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutSidebarContainer, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].sidebarContainer,
                            children: [
                                headerSection,
                                children,
                                footerSection
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layouts/core/layout-section.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        headerSection,
                        children,
                        footerSection
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/layouts/core/layout-section.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// ----------------------------------------------------------------------
const LayoutRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')``;
const LayoutSidebarContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column'
    }));
}),
"[project]/src/layouts/core/header-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderSection",
    ()=>HeaderSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/minimal-shared@1.1.3_react@19.1.0/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/minimal-shared@1.1.3_react@19.1.0/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/AppBar/AppBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function HeaderSection({ sx, slots, slotProps, className, disableOffset, disableElevation, layoutQuery = 'md', ...other }) {
    const { offsetTop: isOffset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollOffsetTop"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderRoot, {
        position: "sticky",
        color: "transparent",
        isOffset: isOffset,
        disableOffset: disableOffset,
        disableElevation: disableElevation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].header,
            className
        ]),
        sx: [
            (theme)=>({
                    ...isOffset && {
                        '--color': `var(--offset-color, ${theme.vars.palette.text.primary})`
                    }
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            slots?.topArea,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderContainer, {
                layoutQuery: layoutQuery,
                ...slotProps?.container,
                children: [
                    slots?.leftArea,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCenterArea, {
                        ...slotProps?.centerArea,
                        children: slots?.centerArea
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/core/header-section.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    slots?.rightArea
                ]
            }, void 0, true, {
                fileName: "[project]/src/layouts/core/header-section.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            slots?.bottomArea
        ]
    }, void 0, true, {
        fileName: "[project]/src/layouts/core/header-section.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
const HeaderRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>![
            'isOffset',
            'disableOffset',
            'disableElevation',
            'sx'
        ].includes(prop)
})(({ isOffset, disableOffset, disableElevation, theme })=>{
    const pauseZindex = {
        top: -1,
        bottom: -2
    };
    const pauseStyles = {
        opacity: 0,
        content: '""',
        visibility: 'hidden',
        position: 'absolute',
        transition: theme.transitions.create([
            'opacity',
            'visibility'
        ], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        })
    };
    const bgStyles = {
        ...pauseStyles,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: pauseZindex.top,
        backdropFilter: `blur(6px)`,
        WebkitBackdropFilter: `blur(6px)`,
        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$minimal$2d$shared$40$1$2e$1$2e$3_react$40$19$2e$1$2e$0$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.background.defaultChannel, 0.8),
        ...isOffset && {
            opacity: 1,
            visibility: 'visible'
        }
    };
    const shadowStyles = {
        ...pauseStyles,
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        margin: 'auto',
        borderRadius: '50%',
        width: `calc(100% - 48px)`,
        zIndex: pauseZindex.bottom,
        boxShadow: theme.vars.customShadows.z8,
        ...isOffset && {
            opacity: 0.48,
            visibility: 'visible'
        }
    };
    return {
        boxShadow: 'none',
        zIndex: 'var(--layout-header-zIndex)',
        ...!disableOffset && {
            '&::before': bgStyles
        },
        ...!disableElevation && {
            '&::after': shadowStyles
        }
    };
});
const HeaderContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>![
            'layoutQuery',
            'sx'
        ].includes(prop)
})(({ layoutQuery = 'md', theme })=>({
        display: 'flex',
        alignItems: 'center',
        color: 'var(--color)',
        height: 'var(--layout-header-mobile-height)',
        [theme.breakpoints.up(layoutQuery)]: {
            height: 'var(--layout-header-desktop-height)'
        }
    }));
const HeaderCenterArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center'
    }));
}),
"[project]/src/layouts/auth/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthLayout",
    ()=>AuthLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$es$2d$toolkit$40$1$2e$41$2e$0$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$object$2f$merge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/es-toolkit@1.41.0/node_modules/es-toolkit/dist/object/merge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/Link/Link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.4_@emotion+react@11.14.0_@types+react@19.2.2_react@19.1.0__@emotion+s_2bcdc9ebc7c02a79851c0e70c61ae611/node_modules/@mui/material/esm/Alert/Alert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// import { Logo } from "@/components/logo";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/auth/content.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$main$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/main-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$layout$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/layout-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$header$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/core/header-section.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function AuthLayout({ sx, cssVars, children, slotProps, layoutQuery = "md" }) {
    const renderHeader = ()=>{
        const headerSlotProps = {
            container: {
                maxWidth: false
            }
        };
        const headerSlots = {
            topArea: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                severity: "info",
                sx: {
                    display: "none",
                    borderRadius: 0
                },
                children: "This is an info Alert."
            }, void 0, false, {
                fileName: "[project]/src/layouts/auth/layout.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            leftArea: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
            rightArea: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: {
                        xs: 1,
                        sm: 1.5
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$4_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$1$2e$0_$5f40$emotion$2b$s_2bcdc9ebc7c02a79851c0e70c61ae611$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "#",
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    color: "inherit",
                    sx: {
                        typography: "subtitle2"
                    },
                    children: "Need help?"
                }, void 0, false, {
                    fileName: "[project]/src/layouts/auth/layout.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/layouts/auth/layout.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$header$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderSection"], {
            disableElevation: true,
            layoutQuery: layoutQuery,
            ...slotProps?.header,
            slots: {
                ...headerSlots,
                ...slotProps?.header?.slots
            },
            slotProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$es$2d$toolkit$40$1$2e$41$2e$0$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$object$2f$merge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(headerSlotProps, slotProps?.header?.slotProps ?? {}),
            sx: [
                {
                    position: {
                        [layoutQuery]: "fixed"
                    }
                },
                ...Array.isArray(slotProps?.header?.sx) ? slotProps?.header?.sx ?? [] : [
                    slotProps?.header?.sx
                ]
            ]
        }, void 0, false, {
            fileName: "[project]/src/layouts/auth/layout.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    };
    const renderFooter = ()=>null;
    const renderMain = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$main$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainSection"], {
            ...slotProps?.main,
            sx: [
                (theme)=>({
                        alignItems: "center",
                        p: theme.spacing(3, 2, 10, 2),
                        [theme.breakpoints.up(layoutQuery)]: {
                            justifyContent: "center",
                            p: theme.spacing(10, 0, 10, 0)
                        }
                    }),
                ...Array.isArray(slotProps?.main?.sx) ? slotProps?.main?.sx ?? [] : [
                    slotProps?.main?.sx
                ]
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthContent"], {
                ...slotProps?.content,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/layouts/auth/layout.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/layouts/auth/layout.tsx",
            lineNumber: 101,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$core$2f$layout$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutSection"], {
        /** **************************************
       * @Header
       *************************************** */ headerSection: renderHeader(),
        /** **************************************
       * @Footer
       *************************************** */ footerSection: renderFooter(),
        /** **************************************
       * @Styles
       *************************************** */ cssVars: {
            "--layout-auth-content-width": "420px",
            ...cssVars
        },
        sx: [
            {
                position: "relative",
                "&::before": backgroundStyles()
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        children: renderMain()
    }, void 0, false, {
        fileName: "[project]/src/layouts/auth/layout.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
// ----------------------------------------------------------------------
const backgroundStyles = ()=>({
        zIndex: 1,
        opacity: 0.24,
        width: "100%",
        height: "100%",
        content: "''",
        position: "absolute",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: "url(/assets/background/overlay.jpg)"
    });
}),
"[project]/src/layouts/auth/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/auth/layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/auth/content.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/app/(auth)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$guard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/guard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/layouts/auth/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/auth/layout.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Layout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$guard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GuestGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$auth$2f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/layout.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/layout.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_8c97f8a2._.js.map