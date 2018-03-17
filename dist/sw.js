importScripts('workbox-sw.prod.v2.1.2.js');

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
    "url": "contact.html",
    "revision": "6361d8ae949fe22a4c84b32541383bf2"
  },
  {
    "url": "css/styles.css",
    "revision": "64eb797311c8fd0d309cb27524254008"
  },
  {
    "url": "faq.html",
    "revision": "db84019039f701e1cd9e61ccb86d0dfa"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "760bd83ee04dff470e0277f3eb7deebe"
  },
  {
    "url": "img/example.jpg",
    "revision": "6d476552bab9f4d03dea9766635b7ae5"
  },
  {
    "url": "img/logo-filter-espn.jpg",
    "revision": "7fd6526ccbd0101a5698bdb6d2ef45de"
  },
  {
    "url": "img/logo.png",
    "revision": "6394342d1c1f91dc53cbdc4b2cdab777"
  },
  {
    "url": "img/memebership-bronze.jpg",
    "revision": "d329b98000d2be170e0c329944ea4b9e"
  },
  {
    "url": "img/memebership-gold.jpg",
    "revision": "5d3609286a81034d09dae50d587444ff"
  },
  {
    "url": "img/memebership-silver.jpg",
    "revision": "4a4fe78b4e559db497e675279e879bc9"
  },
  {
    "url": "img/sidebar-about-us.jpg",
    "revision": "d7e3f574a5590256b877345ff09a2f27"
  },
  {
    "url": "img/sing-up-slider.jpg",
    "revision": "3c91209312d0a81b5cf81f08b54fdff6"
  },
  {
    "url": "index.html",
    "revision": "db454df3451e59386276c81bc18e8bbe"
  },
  {
    "url": "js/script.js",
    "revision": "c74595753fdfa2668f65dcc8de25ac3c"
  },
  {
    "url": "vendor/css/easy-autocomplete.min.css",
    "revision": "2fc47373a364c7428abbecc06d334aea"
  },
  {
    "url": "vendor/css/easy-autocomplete.themes.min.css",
    "revision": "d6a18c0e8baf7869769c1d0bcfd10f47"
  },
  {
    "url": "vendor/js/owl.carousel.min.js",
    "revision": "b7b9c97cd68ec336d01a79d5be48c58d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
