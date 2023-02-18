/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

// var body = $response.body
// var obj = JSON.parse(body)

// obj['result'] = 0
const response = {
  experimentsWithoutSpace: [
    {
      experimentId: 'saml',
      experimentVersion: 0,
      group: 'control',
      groups: ['control', 'has_saml']
    },
    {
      experimentId: 'student',
      experimentVersion: 2,
      group: 'preview',
      groups: ['control', 'preview']
    },
    {
      experimentId: 'student-marketing',
      experimentVersion: 2,
      group: 'preview',
      groups: ['control', 'preview']
    },
    {
      experimentId: 'startup-landing',
      experimentVersion: 3,
      group: 'has_startup_landing',
      groups: ['control', 'has_startup_landing']
    },
    {
      experimentId: 'password',
      experimentVersion: 4,
      group: 'control',
      groups: ['control', 'has_password']
    },
    {
      experimentId: 'auth-redirect',
      experimentVersion: 6,
      group: 'browser',
      groups: ['browser', 'control']
    },
    {
      experimentId: 'inline-emojis',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'case-studies',
      experimentVersion: 5,
      group: 'has_case_studies',
      groups: ['control', 'has_case_studies']
    },
    {
      experimentId: 'remote-landing',
      experimentVersion: 1,
      group: 'has_remote_landing',
      groups: ['control', 'has_remote_landing']
    },
    {
      experimentId: 'better-mobile',
      experimentVersion: 3,
      group: 'has_better_mobile',
      groups: ['control', 'has_better_mobile']
    },
    {
      experimentId: 'inline-equations',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'always-send-email',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'content-classification-block',
      experimentVersion: 1,
      group: 'has-content-classification-block',
      groups: ['control', 'has-content-classification-block']
    },
    {
      experimentId: 'better-notification-triage',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'personal-onboarding',
      experimentVersion: 7,
      group: 'without_passsword',
      groups: ['control', 'with_password', 'without_passsword']
    },
    {
      experimentId: 'columns-full-width',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'pistachio',
      experimentVersion: 3,
      group: 'email',
      groups: ['email', 'control']
    },
    {
      experimentId: 'save-transactions-indexdb',
      experimentVersion: 7,
      group: 'use_save_api',
      groups: ['control', 'use_save_api']
    },
    {
      experimentId: 'save-transactions-legacy',
      experimentVersion: 9,
      group: 'use_save_api',
      groups: ['control', 'use_save_api']
    },
    {
      experimentId: 'save-transactions-memory',
      experimentVersion: 7,
      group: 'use_save_api',
      groups: ['control', 'use_save_api']
    },
    {
      experimentId: 'macadamia-nut',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'nested-db-filters',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'twitter-emoji-sprites',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'google-emoji-sprites',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'move-api',
      experimentVersion: 9,
      group: 'control',
      groups: ['control', 'use_move_api', 'use_move_api_v2']
    },
    {
      experimentId: 'product-page-length',
      experimentVersion: 1,
      group: 'control',
      groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
    },
    {
      experimentId: 'iterative-duplicate-block',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'rename-work-nav-item',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'desktop-team-create-page',
      experimentVersion: 1,
      group: 'new',
      groups: ['new', 'control']
    },
    {
      experimentId: 'product-h1',
      experimentVersion: 0,
      group: 'truth',
      groups: ['truth', 'control', 'operating-system']
    },
    {
      experimentId: 'hazelnut',
      experimentVersion: 5,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'sign-in-with-apple',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'tiger-tamer',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-account',
      experimentVersion: 19,
      group: 'has_multi_account',
      groups: ['control', 'has_multi_account']
    },
    {
      experimentId: 'login-signup-code-strings',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'login-signup-code-strings-v2',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'better-upsells',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'tools-and-craft',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'sharing-show-ancestors',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'new-upsell-modal',
      experimentVersion: 1,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'notion-learn',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-events',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'product-redirect-login',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-api-beta',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'inline-page-creation',
      experimentVersion: 40,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'link-hover-preview',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'backlinks',
      experimentVersion: 42,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'definitely-not-timeline',
      experimentVersion: 165,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'collect-use-case',
      experimentVersion: 5,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'enterprise-contact-us-form',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'apple-silicon',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'lucy-in-the-sky-with-tab-blocks',
      experimentVersion: 13,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'collect-use-case-new-step',
      experimentVersion: 3,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'supernatural-perfect',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'visitors',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'confluence-import',
      experimentVersion: 22,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'page-customization',
      experimentVersion: 11,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-confluence',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'button-focus-rings',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'dark-mode-settings',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'single-name',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-iap',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'use-google-webrisk-caching-server',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-static-site',
      experimentVersion: 11,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'collapse-client-operations',
      experimentVersion: 17,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'move-to-space',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'rc',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'silent-releases',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'sidebar-enhancements',
      experimentVersion: 17,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'desktop-sqlite',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-education-page',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'oauth-page-search',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'paul-mockapetris',
      experimentVersion: 11,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-action-bar',
      experimentVersion: 15,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-fixed-webview-size',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'stripe-elements',
      experimentVersion: 21,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'create-database',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'billing-interval-ui',
      experimentVersion: 1,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'recursive-sqlite-query-3',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'turbo-toggles',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'recursive-sqlite-query-2',
      experimentVersion: 4,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'invoice-limit',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'enable-report-page-button',
      experimentVersion: 11,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'recursive-sqlite-query',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-android-v2',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'teams-settings-members',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'indent-algo-v2',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-android',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-api-updates',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-contentful-nav-items',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ted-nelson',
      experimentVersion: 16,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'aloha',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'refresh-enterprise-landing-page',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'update-database',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'api-update-block',
      experimentVersion: 0,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'preceding-space-slash-menu',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'nav-refresh',
      experimentVersion: 4,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'paul-mockapetris-cta',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-ios',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'onboarding-bulk-invite',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-image-lightbox',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'onboarding-checklist',
      experimentVersion: 1,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'refresh-teams-landing-page',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'default-new-page-property-to-hide-when-empty',
      experimentVersion: 3,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'colossus',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'set-homepage',
      experimentVersion: 6,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'public-page-cta',
      experimentVersion: 1,
      group: 'control',
      groups: ['get', 'try', 'control', 'try-free']
    },
    {
      experimentId: 'temp-onboarding-app-download',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'lion-tamer',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-ios',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'message-port-based-bridge',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'homepage-refresh',
      experimentVersion: 1,
      group: 'control',
      groups: ['control', 'flexible', 'workspace']
    },
    {
      experimentId: 'media-attachment-in-comments',
      experimentVersion: 6,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-android',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'user-session-auth',
      experimentVersion: 9,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'no-cjk-selection-formatting',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-android',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'hangul-day-celebration',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'web-pinch-to-zoom',
      experimentVersion: 4,
      group: 'control',
      groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
    },
    {
      experimentId: 'ios-json-bridge',
      experimentVersion: 7,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'nav-refresh-split',
      experimentVersion: 8,
      group: 'download',
      groups: ['control', 'download', 'refreshed']
    },
    {
      experimentId: 'workspace-user-sort-and-filter',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'pied-piper-launch',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'pied-piper',
      experimentVersion: 20,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-bottom-bar',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-ios-debug-logging',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'no-cjk-selection-formatting-2',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'comments-v2',
      experimentVersion: 20,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'homepage-refresh-v2',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'refresh-security-landing-page',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'new-releases-page',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'startups-landing-page',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'migrations-android',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'native-web-error-modal',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'skip-collection-reset-sidebar',
      experimentVersion: 1,
      group: 'control',
      groups: ['control', 'disable']
    },
    {
      experimentId: 'getting-started-templates',
      experimentVersion: 1,
      group: 'control',
      groups: ['V1', 'V2', 'V3', 'V4', 'control']
    },
    {
      experimentId: 'comments-v2-unread-state',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'coupon-link',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'onboarding-background-image',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'pricing-refresh',
      experimentVersion: 3,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'android-web-managed-tab-navigation',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-eol',
      experimentVersion: 0,
      group: 'control',
      groups: ['control', 'enabled']
    },
    {
      experimentId: 'contact-sales-page',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-ios-v2',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'url-embeds',
      experimentVersion: 6,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'margin-comments',
      experimentVersion: 13,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'simple-table-drop-blocks',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-firefox',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'formatted-linked-db',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'simple-table-drop-blocks-multiple-column-insert',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'simple-tables',
      experimentVersion: 25,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-bottom-bar-android',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'nav-refresh-status',
      experimentVersion: 8,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'dbg',
      experimentVersion: 20,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'comments-v2-mobile',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'better-space-integration-settings',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'deprecate-space-level-oauthed-bots',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'public-page-cta-destination',
      experimentVersion: 3,
      group: 'signup-link',
      groups: ['control', 'signup-link', 'product-link', 'signup-modal']
    },
    {
      experimentId: 'site-first-redirect',
      experimentVersion: 7,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-native-experiment-store',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'pricing-refresh-v2',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-webview-resizing-on-selection',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-ios-v4',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'scim_bot_v2',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'migrations-android-v2',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-ios-single-connection',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'fast-and-furious',
      experimentVersion: 29,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-other',
      experimentVersion: 4,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'migrations-ios',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-eol-markers',
      experimentVersion: 1,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ux-gift-relative-time',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'dual-tab-share-menu',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-ios-v2',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-ios-v3',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-json-bridge-v2',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-ios-v3',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-android-v2',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'more-toggleable-blocks',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'eoi',
      experimentVersion: 15,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'front-user-provider',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'refresh-legacy-download-menu',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'template-gallery-live-previews',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-android-v4',
      experimentVersion: 4,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'onboarding-emails',
      experimentVersion: 3,
      group: 'control',
      groups: ['control', 'generic', 'meeting-notes-focused']
    },
    {
      experimentId: 'mobile-ads-signup',
      experimentVersion: 4,
      group: 'control',
      groups: ['control', 'email-only', 'email-password']
    },
    {
      experimentId: 'txnqueue-ios-v5',
      experimentVersion: 4,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-ios-v6',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: '2-fast-2-furious',
      experimentVersion: 39,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'snap-resizer',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'txnqueue-android-v5',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'simple-table-colors',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'space-private-pages-no-more',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'consolidate-settings',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-uxgift-2021q4',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'invoice-redesign',
      experimentVersion: 10,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mermaid',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-bottom-bar-ios',
      experimentVersion: 8,
      group: 'control',
      groups: ['0_0', 'control']
    },
    {
      experimentId: 'multi-select-ios',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'cookie-consent',
      experimentVersion: 14,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-android-v2',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select',
      experimentVersion: 51,
      group: 'control',
      groups: ['always', 'control', 'gesture']
    },
    {
      experimentId: 'deeper-dark-mode',
      experimentVersion: 7,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-electron',
      experimentVersion: 15,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-safari',
      experimentVersion: 7,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-chrome',
      experimentVersion: 18,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'android-background-bridge-message-parsing',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'newer-primus',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'content-only-editor',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'help-center-guides-migration',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'hex-deepnote-embeds',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-bottom-bar-ios-v2',
      experimentVersion: 3,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'enable-invalid-id-source-track',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'multi-select-new-page-view-block-layout',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'marketing-dark-mode',
      experimentVersion: 1,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'integration-settings',
      experimentVersion: 3,
      group: 'has-integration-settings',
      groups: ['control', 'has-integration-settings']
    },
    {
      experimentId: 'newer-mathjs',
      experimentVersion: 22,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'marketing-site-french-launch',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'vs2',
      experimentVersion: 16,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'business-plan',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'integration-approvals',
      experimentVersion: 13,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'teams-template',
      experimentVersion: 7,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'search-single-char-index',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'teams-sidebar-overflow',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'writing-granular-capabilities-on-blocks',
      experimentVersion: 11,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'granular-bot-capabilities',
      experimentVersion: 6,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'private-page-in-space-view',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'restrict',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'show-business-plan',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'data-loss-log-unsaved-transaction-errors',
      experimentVersion: 2,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'indexeddb-transaction-timeout-v2',
      experimentVersion: 5,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-android-tablet',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'chrome-99-idb-fallback-check',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'vs2b',
      experimentVersion: 14,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'emoji-apple-spritesheets',
      experimentVersion: 0,
      group: 'control',
      groups: ['control', 'enabled']
    },
    {
      experimentId: 'db-sync',
      experimentVersion: 5,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-web-managed-tab-navigation',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'teams-workspace-settings',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'connection-error-indicator',
      experimentVersion: 9,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'disable-enterprise-monthly-billing',
      experimentVersion: 3,
      group: 'treatment',
      groups: ['control', 'treatment']
    },
    {
      experimentId: 'mobile-bottom-bar-ios-v3',
      experimentVersion: 20,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'alpha-api',
      experimentVersion: 497,
      group: 'has-alpha-api',
      groups: ['control', 'has-alpha-api']
    },
    {
      experimentId: 'home-android-v2',
      experimentVersion: 11,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'inverse-relations-space',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-restore-purchases',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-bottom-bar-ios-v4',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-restore-purchases-v2',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-internal-settings',
      experimentVersion: 5,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'inverse-relations',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-ios',
      experimentVersion: 51,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'messagestore-ios-single-connection-v2',
      experimentVersion: 4,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'growth-exclusive-experiments',
      experimentVersion: 11,
      group: 'm',
      groups: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'control'
      ]
    },
    {
      experimentId: 'request-access',
      experimentVersion: 10,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-android',
      experimentVersion: 13,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'mobile-delete-account',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'enforce-root-redirect-on-root-only',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'sync-get-experiment',
      experimentVersion: 0,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'myspace',
      experimentVersion: 55,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-android-beta',
      experimentVersion: 8,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'content-reprovisioning',
      experimentVersion: 23,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-ios-beta',
      experimentVersion: 26,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'login-ntn-so',
      experimentVersion: 1,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'janus',
      experimentVersion: 5,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-ios-v2',
      experimentVersion: 16,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-reordering-ios',
      experimentVersion: 3,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'home-ipad',
      experimentVersion: 18,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'ios-web-bridge-profiling',
      experimentVersion: 2,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'csat',
      experimentVersion: 8,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'polyglot',
      experimentVersion: 87,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'user-data-consent',
      experimentVersion: 18,
      group: 'on',
      groups: ['on', 'control']
    },
    {
      experimentId: 'beta-developers-external',
      experimentVersion: 68,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'notion-mentions-to-slack',
      experimentVersion: 11,
      group: 'control',
      groups: ['on', 'control']
    },
    {
      experimentId: 'notion-to-slack',
      experimentVersion: 7,
      group: 'control',
      groups: ['on', 'control']
    }
  ],
  experimentsBySpace: {
    'ac4cb96d-c8f8-4040-9bb2-868d9fc7f526': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '5987cd0b-af4a-44e7-850b-669ba31a36a5': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '0eb41d3e-0ef6-41f6-91b6-cdadbf7309dc': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    'e12b42ac-4e54-476f-a4f5-7d6bdb1e61e2': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      }
    ],
    'd9d52f73-bbd3-47db-96fe-27b0615621ac': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    'c6b556d1-c00e-4f65-8421-c6cd040b9441': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '7cf3a733-4218-4ffe-8ff3-ed4f82c8cf9c': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    'dace5176-9ffb-4582-8db5-007b1859e806': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '1ab40408-9079-4361-8bc8-74598062e1d2': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '2bfa9433-3306-43d3-95a9-b1840c907d16': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '65ad4245-e364-4266-b363-acb7316d524b': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ],
    '24b608c2-7b2f-49d4-b72c-37c5987aae6c': [
      {
        experimentId: 'saml',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'has_saml']
      },
      {
        experimentId: 'student',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'student-marketing',
        experimentVersion: 2,
        group: 'preview',
        groups: ['control', 'preview']
      },
      {
        experimentId: 'startup-landing',
        experimentVersion: 3,
        group: 'has_startup_landing',
        groups: ['control', 'has_startup_landing']
      },
      {
        experimentId: 'password',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'has_password']
      },
      {
        experimentId: 'auth-redirect',
        experimentVersion: 6,
        group: 'browser',
        groups: ['browser', 'control']
      },
      {
        experimentId: 'inline-emojis',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'case-studies',
        experimentVersion: 5,
        group: 'has_case_studies',
        groups: ['control', 'has_case_studies']
      },
      {
        experimentId: 'remote-landing',
        experimentVersion: 1,
        group: 'has_remote_landing',
        groups: ['control', 'has_remote_landing']
      },
      {
        experimentId: 'better-mobile',
        experimentVersion: 3,
        group: 'has_better_mobile',
        groups: ['control', 'has_better_mobile']
      },
      {
        experimentId: 'inline-equations',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'always-send-email',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-classification-block',
        experimentVersion: 1,
        group: 'has-content-classification-block',
        groups: ['control', 'has-content-classification-block']
      },
      {
        experimentId: 'better-notification-triage',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'personal-onboarding',
        experimentVersion: 7,
        group: 'without_passsword',
        groups: ['control', 'with_password', 'without_passsword']
      },
      {
        experimentId: 'columns-full-width',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pistachio',
        experimentVersion: 3,
        group: 'email',
        groups: ['email', 'control']
      },
      {
        experimentId: 'save-transactions-indexdb',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-legacy',
        experimentVersion: 9,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'save-transactions-memory',
        experimentVersion: 7,
        group: 'use_save_api',
        groups: ['control', 'use_save_api']
      },
      {
        experimentId: 'macadamia-nut',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nested-db-filters',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'twitter-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'google-emoji-sprites',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-api',
        experimentVersion: 9,
        group: 'control',
        groups: ['control', 'use_move_api', 'use_move_api_v2']
      },
      {
        experimentId: 'product-page-length',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'no-demo', 'short-scroll', 'shortest-scroll']
      },
      {
        experimentId: 'iterative-duplicate-block',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rename-work-nav-item',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-team-create-page',
        experimentVersion: 1,
        group: 'new',
        groups: ['new', 'control']
      },
      {
        experimentId: 'product-h1',
        experimentVersion: 0,
        group: 'truth',
        groups: ['truth', 'control', 'operating-system']
      },
      {
        experimentId: 'hazelnut',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sign-in-with-apple',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tiger-tamer',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-account',
        experimentVersion: 19,
        group: 'has_multi_account',
        groups: ['control', 'has_multi_account']
      },
      {
        experimentId: 'login-signup-code-strings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-signup-code-strings-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-upsells',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'tools-and-craft',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sharing-show-ancestors',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-upsell-modal',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-learn',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-events',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'product-redirect-login',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-beta',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inline-page-creation',
        experimentVersion: 40,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'link-hover-preview',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'backlinks',
        experimentVersion: 42,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'definitely-not-timeline',
        experimentVersion: 165,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enterprise-contact-us-form',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'apple-silicon',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lucy-in-the-sky-with-tab-blocks',
        experimentVersion: 13,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collect-use-case-new-step',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'supernatural-perfect',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'visitors',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'confluence-import',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'page-customization',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-confluence',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'button-focus-rings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dark-mode-settings',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'single-name',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-iap',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'use-google-webrisk-caching-server',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-static-site',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'collapse-client-operations',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'move-to-space',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'rc',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'silent-releases',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sidebar-enhancements',
        experimentVersion: 17,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'desktop-sqlite',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-education-page',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'oauth-page-search',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-action-bar',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-fixed-webview-size',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'stripe-elements',
        experimentVersion: 21,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'create-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'billing-interval-ui',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-3',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'turbo-toggles',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query-2',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-limit',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-report-page-button',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'recursive-sqlite-query',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android-v2',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-settings-members',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indent-algo-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-api-updates',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-contentful-nav-items',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ted-nelson',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'aloha',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-enterprise-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'update-database',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'api-update-block',
        experimentVersion: 0,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'preceding-space-slash-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'paul-mockapetris-cta',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-bulk-invite',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-image-lightbox',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-checklist',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-teams-landing-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'default-new-page-property-to-hide-when-empty',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'colossus',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'set-homepage',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta',
        experimentVersion: 1,
        group: 'control',
        groups: ['get', 'try', 'control', 'try-free']
      },
      {
        experimentId: 'temp-onboarding-app-download',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'lion-tamer',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'message-port-based-bridge',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'flexible', 'workspace']
      },
      {
        experimentId: 'media-attachment-in-comments',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-session-auth',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hangul-day-celebration',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'web-pinch-to-zoom',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'for-desktop', 'for-desktop-and-mobile']
      },
      {
        experimentId: 'ios-json-bridge',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-split',
        experimentVersion: 8,
        group: 'download',
        groups: ['control', 'download', 'refreshed']
      },
      {
        experimentId: 'workspace-user-sort-and-filter',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper-launch',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pied-piper',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-debug-logging',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'no-cjk-selection-formatting-2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'homepage-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-security-landing-page',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'new-releases-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'startups-landing-page',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'native-web-error-modal',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'skip-collection-reset-sidebar',
        experimentVersion: 1,
        group: 'control',
        groups: ['control', 'disable']
      },
      {
        experimentId: 'getting-started-templates',
        experimentVersion: 1,
        group: 'control',
        groups: ['V1', 'V2', 'V3', 'V4', 'control']
      },
      {
        experimentId: 'comments-v2-unread-state',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'coupon-link',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-background-image',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'contact-sales-page',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'url-embeds',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'margin-comments',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-firefox',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'formatted-linked-db',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-drop-blocks-multiple-column-insert',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-tables',
        experimentVersion: 25,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-android',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'nav-refresh-status',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dbg',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'comments-v2-mobile',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'better-space-integration-settings',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'deprecate-space-level-oauthed-bots',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'public-page-cta-destination',
        experimentVersion: 3,
        group: 'signup-link',
        groups: ['control', 'signup-link', 'product-link', 'signup-modal']
      },
      {
        experimentId: 'site-first-redirect',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-native-experiment-store',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'pricing-refresh-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-webview-resizing-on-selection',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v4',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'scim_bot_v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-android-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'fast-and-furious',
        experimentVersion: 29,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-other',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'migrations-ios',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-eol-markers',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ux-gift-relative-time',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'dual-tab-share-menu',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v2',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v3',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-json-bridge-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-v3',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v2',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'more-toggleable-blocks',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'eoi',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'front-user-provider',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'refresh-legacy-download-menu',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'template-gallery-live-previews',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v4',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'onboarding-emails',
        experimentVersion: 3,
        group: 'control',
        groups: ['control', 'generic', 'meeting-notes-focused']
      },
      {
        experimentId: 'mobile-ads-signup',
        experimentVersion: 4,
        group: 'control',
        groups: ['control', 'email-only', 'email-password']
      },
      {
        experimentId: 'txnqueue-ios-v5',
        experimentVersion: 4,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-ios-v6',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: '2-fast-2-furious',
        experimentVersion: 39,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'snap-resizer',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'txnqueue-android-v5',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'simple-table-colors',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'space-private-pages-no-more',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'consolidate-settings',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-uxgift-2021q4',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'invoice-redesign',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mermaid',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios',
        experimentVersion: 8,
        group: 'control',
        groups: ['0_0', 'control']
      },
      {
        experimentId: 'multi-select-ios',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'cookie-consent',
        experimentVersion: 14,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-android-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select',
        experimentVersion: 51,
        group: 'control',
        groups: ['always', 'control', 'gesture']
      },
      {
        experimentId: 'deeper-dark-mode',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-electron',
        experimentVersion: 15,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-safari',
        experimentVersion: 7,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-chrome',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'android-background-bridge-message-parsing',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'newer-primus',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-only-editor',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'help-center-guides-migration',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'hex-deepnote-embeds',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v2',
        experimentVersion: 3,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enable-invalid-id-source-track',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'multi-select-new-page-view-block-layout',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-dark-mode',
        experimentVersion: 1,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-settings',
        experimentVersion: 3,
        group: 'has-integration-settings',
        groups: ['control', 'has-integration-settings']
      },
      {
        experimentId: 'newer-mathjs',
        experimentVersion: 22,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'marketing-site-french-launch',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2',
        experimentVersion: 16,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'integration-approvals',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-template',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'search-single-char-index',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-sidebar-overflow',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'writing-granular-capabilities-on-blocks',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'granular-bot-capabilities',
        experimentVersion: 6,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'private-page-in-space-view',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'restrict',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'show-business-plan',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'data-loss-log-unsaved-transaction-errors',
        experimentVersion: 2,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'indexeddb-transaction-timeout-v2',
        experimentVersion: 5,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-tablet',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'chrome-99-idb-fallback-check',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'vs2b',
        experimentVersion: 14,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'emoji-apple-spritesheets',
        experimentVersion: 0,
        group: 'control',
        groups: ['control', 'enabled']
      },
      {
        experimentId: 'db-sync',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-managed-tab-navigation',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'teams-workspace-settings',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'connection-error-indicator',
        experimentVersion: 9,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'disable-enterprise-monthly-billing',
        experimentVersion: 3,
        group: 'treatment',
        groups: ['control', 'treatment']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v3',
        experimentVersion: 20,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'alpha-api',
        experimentVersion: 497,
        group: 'has-alpha-api',
        groups: ['control', 'has-alpha-api']
      },
      {
        experimentId: 'home-android-v2',
        experimentVersion: 11,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations-space',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-bottom-bar-ios-v4',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-restore-purchases-v2',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-internal-settings',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'inverse-relations',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios',
        experimentVersion: 51,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'messagestore-ios-single-connection-v2',
        experimentVersion: 4,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'growth-exclusive-experiments',
        experimentVersion: 11,
        group: 'm',
        groups: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'control'
        ]
      },
      {
        experimentId: 'request-access',
        experimentVersion: 10,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android',
        experimentVersion: 13,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'mobile-delete-account',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'enforce-root-redirect-on-root-only',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'sync-get-experiment',
        experimentVersion: 0,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'myspace',
        experimentVersion: 55,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-android-beta',
        experimentVersion: 8,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'content-reprovisioning',
        experimentVersion: 23,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-beta',
        experimentVersion: 26,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'login-ntn-so',
        experimentVersion: 1,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'janus',
        experimentVersion: 5,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ios-v2',
        experimentVersion: 16,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-reordering-ios',
        experimentVersion: 3,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'home-ipad',
        experimentVersion: 18,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'ios-web-bridge-profiling',
        experimentVersion: 2,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'csat',
        experimentVersion: 8,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'polyglot',
        experimentVersion: 87,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'user-data-consent',
        experimentVersion: 18,
        group: 'on',
        groups: ['on', 'control']
      },
      {
        experimentId: 'beta-developers-external',
        experimentVersion: 68,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-mentions-to-slack',
        experimentVersion: 11,
        group: 'control',
        groups: ['on', 'control']
      },
      {
        experimentId: 'notion-to-slack',
        experimentVersion: 7,
        group: 'control',
        groups: ['on', 'control']
      }
    ]
  },
  isLoaded: true,
  userId: '2c0e0b01-f59e-4e03-b7b6-7d706eecada3',
  deviceId: '6e3c265d-6831-4728-b86e-548335f4fec7',
  test: false,
  acceptLanguageHeader: 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
}

body = JSON.stringify(response)

// console.log(body)

$done(body)
