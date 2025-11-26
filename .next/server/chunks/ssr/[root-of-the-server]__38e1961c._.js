module.exports = [
"[project]/OneDrive/Desktop/making it together/igacmun/src/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://vhqlhehuteqsxvhkmnps.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocWxoZWh1dGVxc3h2aGttbnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3Nzk3MTQsImV4cCI6MjA3ODM1NTcxNH0.kqKo2CrTpiAoIJJbcuazmsqz8H7Y_IEbPS5LnbqgNNo"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40cf8a7719431842ca949efb9c5937b95b6e3e1865":"searchCertificate"},"",""] */ __turbopack_context__.s([
    "searchCertificate",
    ()=>searchCertificate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function searchCertificate(query) {
    if (!query) {
        return {
            success: false,
            error: 'Please enter a certificate ID'
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    try {
        // Search ONLY by certificate_id (exact match)
        const { data: certificate, error } = await supabase.from('certificates').select(`
        *,
        events (*),
        certificate_metadata (*)
      `).eq('certificate_id', query).single();
        if (error || !certificate) {
            return {
                success: false,
                error: 'Certificate not found. Please check the ID and try again.'
            };
        }
        // Format the response similar to the API
        const metadata = (certificate.certificate_metadata || []).reduce((acc, meta)=>{
            acc[meta.field_name] = meta.field_type === 'json' || meta.field_type === 'array' ? JSON.parse(meta.field_value) : meta.field_value;
            return acc;
        }, {});
        const formattedCertificate = {
            ...certificate,
            event: certificate.events?.event_name || null,
            event_code: certificate.events?.event_code || null,
            pdf_download_url: certificate.pdf_storage_path || null,
            ...metadata
        };
        // Log verification (optional for search, but good for consistency)
        // We can skip logging for simple search if we want to avoid side effects on every keystroke/search
        // But since this is a "Verify" action, we probably should log it.
        // However, headers() might not be available easily in server actions called from client in the same way.
        // Let's skip logging for now to keep it simple and fast.
        return {
            success: true,
            data: [
                formattedCertificate
            ]
        };
    } catch (error) {
        console.error('Search error:', error);
        return {
            success: false,
            error: 'An unexpected error occurred'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    searchCertificate
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchCertificate, "40cf8a7719431842ca949efb9c5937b95b6e3e1865", null);
}),
"[project]/OneDrive/Desktop/making it together/igacmun/.next-internal/server/app/certificate-portal/page/actions.js { ACTIONS_MODULE0 => \"[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$app$2f$certificate$2d$portal$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/OneDrive/Desktop/making it together/igacmun/.next-internal/server/app/certificate-portal/page/actions.js { ACTIONS_MODULE0 => \"[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40cf8a7719431842ca949efb9c5937b95b6e3e1865",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$app$2f$certificate$2d$portal$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchCertificate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f2e$next$2d$internal$2f$server$2f$app$2f$certificate$2d$portal$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$app$2f$certificate$2d$portal$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/OneDrive/Desktop/making it together/igacmun/.next-internal/server/app/certificate-portal/page/actions.js { ACTIONS_MODULE0 => "[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$app$2f$certificate$2d$portal$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CertificatePortalClient",
    ()=>CertificatePortalClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CertificatePortalClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CertificatePortalClient() from the server but CertificatePortalClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx <module evaluation>", "CertificatePortalClient");
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CertificatePortalClient",
    ()=>CertificatePortalClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CertificatePortalClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CertificatePortalClient() from the server but CertificatePortalClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx", "CertificatePortalClient");
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$components$2f$certificate$2d$portal$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$components$2f$certificate$2d$portal$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$components$2f$certificate$2d$portal$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificatePortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$components$2f$certificate$2d$portal$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/components/certificate-portal-client.tsx [app-rsc] (ecmascript)");
;
;
function CertificatePortal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$making__it__together$2f$igacmun$2f$src$2f$components$2f$certificate$2d$portal$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CertificatePortalClient"], {}, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/making it together/igacmun/src/app/certificate-portal/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__38e1961c._.js.map