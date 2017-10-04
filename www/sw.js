importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.global.js",
    "revision": "905896db4c96c2ffe4285cd63c098ca5"
  },
  {
    "url": "build/app.js",
    "revision": "cc06b96154ca236cc2512b79f3bddeb4"
  },
  {
    "url": "build/app.registry.json",
    "revision": "97e25528af310f42ef794fdb047bd515"
  },
  {
    "url": "build/app/5bgf49g1.js",
    "revision": "ed214397330bc0203714abc1991e5dbc"
  },
  {
    "url": "build/app/5w8x4dqu.css",
    "revision": "4f3e4f78f7d249c63ee62fc9b4a3c86a"
  },
  {
    "url": "build/app/6tyoiqua.js",
    "revision": "0084e2ee720e0554f61e069b70db8b6d"
  },
  {
    "url": "build/app/app.8stzpc0l.pf.js",
    "revision": "643f72053d491f013b1e08650045b0f9"
  },
  {
    "url": "build/app/app.y9oyqqjf.js",
    "revision": "99985d7581711d278be9a6098fe08a3d"
  },
  {
    "url": "build/app/devrsmdk.js",
    "revision": "0b840c0fcdd60f14962f6cc55f731b46"
  },
  {
    "url": "build/app/kzngcu9x.js",
    "revision": "b461f64a72b4975ddd7147349abd4534"
  },
  {
    "url": "build/app/rqo8yc6y.js",
    "revision": "e0aea8060eaa456b8e8f35e6f2908710"
  },
  {
    "url": "build/app/zfuwmiyv.js",
    "revision": "be59daa8dd5bd606706d23db12d62059"
  },
  {
    "url": "index.html",
    "revision": "19b4d5d25b6e14f264224e4f0451d6a7"
  },
  {
    "url": "manifest.json",
    "revision": "efb1570971d90f5e01df27f0e1a34df5"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
