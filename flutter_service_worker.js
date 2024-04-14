'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "f663359de94e9199bd7ecfcb034b4671",
"icons/Icon-maskable-192.png": "f663359de94e9199bd7ecfcb034b4671",
"icons/Icon-512.png": "f663359de94e9199bd7ecfcb034b4671",
"icons/Icon-192.png": "f663359de94e9199bd7ecfcb034b4671",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/images/shawaya_normal_color.webp": "429a8362b2472f8ef73a332cfa6980e4",
"assets/assets/images/yellow_shawarma_half.webp": "8e29f2648724d6618fd99a7b5e4609ee",
"assets/assets/images/whatsapp_logo.webp": "b3bafe7320116d30c3f3cb5ced7b9d73",
"assets/assets/images/rumali_shawarma.webp": "ef0c195d95d7bd25ee61d3af4111fdbc",
"assets/assets/images/butter_shawarma_image.webp": "f8e400eb688878c713dad4dcbeedff88",
"assets/assets/images/red_shawarma.webp": "980321c73b79028731bf79c0c7555cbe",
"assets/assets/images/red_tomato_chutney.webp": "816d5d0e41c3251150bdf9666fa3e9cb",
"assets/assets/images/rumali_roll_served.webp": "44a2c67e2fbecbe9ca405b4068f88f62",
"assets/assets/images/red_mayonise.webp": "9167ed40bb5600dfd9ed0a51a61d8a2a",
"assets/assets/images/mixed_salad_bowl_image.webp": "76a9b5ac4a355f2bfb52169932b7803d",
"assets/assets/images/addcontactlogo.webp": "7ccf256df864fe03962530d985089483",
"assets/assets/images/aldan-shawarma.webp": "a5517035164226c6390cb9a17dd7c342",
"assets/assets/images/mayonnaise_bowl.webp": "709da5df213bb71cf0576c324466d158",
"assets/assets/images/fries_poster_image.webp": "7f2df4ef7bdfb6807f2a305ef5024853",
"assets/assets/images/periperi_alfam.webp": "4156cda1d9be3d7fe6be8be3a7d53359",
"assets/assets/images/shawarma_and_mechine.webp": "42c51889e5ac5276ffb5ac53e69b1283",
"assets/assets/images/white_mayonise.webp": "150420623575c210b8f0c1dd28d8a166",
"assets/assets/images/three_kuboos_plate.webp": "21503c0632d404af38241951cc3a69dd",
"assets/assets/images/pita_Shawarma_served.webp": "b94f1bef4070a545d41014d6818395ff",
"assets/assets/images/porottaroll.webp": "43c3342b9bf59a892497d84520d8f9fd",
"assets/assets/images/sweet_chilly_sauce.webp": "0271fe4969cacc692ff038869afe7a5c",
"assets/assets/images/shawaya_masala.webp": "a069b4f266e3e02155aa3c2cfa6fc288",
"assets/assets/images/rumali_shawarma_stack.webp": "919f1adc62cc8108359d5182a0dfd09e",
"assets/assets/images/sp_rumali_shawarma.webp": "7d30c7ebd9ad25b962e0e28dce73d8af",
"assets/assets/images/Shawarma_hawaya_logo.webp": "d206fb2c2e687a8b03fd3bd82bf7b641",
"assets/assets/images/kanthari_alfam.webp": "864e81d6d10a3e67ab899e13d23dabd5",
"assets/assets/images/sp_rumali_hd.webp": "cce03acfdc1e2d56bf529e8fd1fc16ca",
"assets/assets/images/shawaya_yellow_color.webp": "830226cae18b745777f8a98401899a3a",
"assets/assets/images/red_shawarma_half.webp": "ba0e45796a1f5d6c3554c792feaa1c94",
"assets/assets/images/all_salads_image2.webp": "d5f9641e9cfd5deb3db987d209cf1ddc",
"assets/assets/images/mint_peper_alfam.webp": "6d1c7e614508a16bde39560b70854bfb",
"assets/assets/images/call_logo.webp": "810f15f4b02c7fd945c9d2f894e17a70",
"assets/assets/images/fries_shawarma_image.webp": "6e6e4e096d38472a5da6f3feaa942ac5",
"assets/assets/images/Shawarma_hawaya_logo_512.webp": "8c1b3c4ddf165fdae8ae06929c882cfb",
"assets/assets/images/normal_alfam.webp": "cade9cac20d3cffd970da64ba21ac3f8",
"assets/assets/images/pita_chicken_shawarma.webp": "e63972c221f32b678b1a6b16724ca4d7",
"assets/assets/images/white_shawarma_half.webp": "466125487f13ca7893be683cf234fc3b",
"assets/assets/images/black_background_image.webp": "db2af899ca4a9d133ab76e9f446880d6",
"assets/assets/images/bun_shawarma.webp": "5f5426a290fd4be5e089d0d8f62fc1d3",
"assets/assets/images/samoon_shawarma.webp": "4d360679217b28c8b2acba1b0c9e3b5f",
"assets/assets/images/plate_shawarma.webp": "d5aa11dbd0a55fda977249850ce5fe9d",
"assets/assets/images/mixed_salad_bowl.webp": "5a3e918c6b9285f6659cde1b1af1e6da",
"assets/assets/images/shawaya_red_color.webp": "14d2bff1afc212e0bed2f3ee912293a6",
"assets/assets/images/mexican_alfam.webp": "77459e36abfc97e2c4fa753add1521f2",
"assets/assets/images/beetroot_chatnee_2.webp": "3af469a89a243f8814a5102e1fb92783",
"assets/assets/images/white_shawarma.webp": "fe79079f458526e188c4658453e3243d",
"assets/assets/images/shawarma_main_image.webp": "ea6d7b96d4609bf2080f9062cfa82c34",
"assets/assets/images/cheese_image.webp": "a391ca475811fd25f383ff342bb33d9e",
"assets/assets/images/Shawarma_shawaya_logo_dimmed.webp": "5cdc95fe77ab98ac018697d0bb6ee2a0",
"assets/assets/images/full_meet_shawarma.webp": "97d27304b262389da02ee280e1512736",
"assets/assets/images/pothina_chatnee_2.webp": "a3ea6523485f4538dca8ce659d210055",
"assets/assets/images/fries_basket.webp": "7f1e4b308709974332198ce3d1188ee0",
"assets/assets/images/mixed_salad.webp": "badbb37943703487f6af4945821240d7",
"assets/assets/images/yellow_shawarma.webp": "215358c157fdfa2ff074543227664f87",
"assets/assets/images/green_mayonnaise.webp": "96fb82c42adb5f4dc329cf9b9ac46ae0",
"assets/assets/images/bread_shawarma.webp": "cfb5861ec55b695285602cf917b4fd3d",
"assets/assets/images/cheese_shawarma_image.webp": "e3eba659767c4c2696738757829560af",
"assets/assets/fonts/ML_TT_Bhavana_Normal.ttf": "51587ad5e371dbd75d62649106f98f88",
"assets/assets/fonts/urw_chancery_l_medium_italic.ttf": "53fff8a9955d246d9f8ebf1a69d6208d",
"assets/assets/fonts/FML-TT-Nandini.ttf": "961107af50d3ff3c05ca385ddbf36fda",
"assets/assets/fonts/MPLUSRounded1c-ExtraBold.ttf": "fc7e42ded9e4dd88949f2d9be3919306",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/fonts/MPLUSRounded1c-Black.ttf": "988787f5e9f48e6a950ac797c9cb5f28",
"assets/assets/fonts/MarckScript-Regular.ttf": "48d8d53dbcbec65e5464a14081efb1c4",
"assets/assets/fonts/Goodnewsj%2520Roman.ttf": "ef0900478d1713414c033239338a0e9a",
"assets/assets/fonts/Indu%2520No_1.ttf": "2e8703bb7bb6b48e02eeeda67261e277",
"assets/AssetManifest.bin": "cd3e3e21d8dabef4eb54d927cc311c80",
"assets/AssetManifest.json": "d7433f8034356a08c1b1c2f2a93193a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a83dcf36b874a940b487f3e2d2f94f63",
"assets/FontManifest.json": "6331cdcad51dc36537d1ef8814d3ff46",
"assets/NOTICES": "6d8dce8ebbaa1d6caab7b6e134c744db",
"assets/fonts/MaterialIcons-Regular.otf": "a4ba213bf1e196d85fd25760e8518a73",
"index.html": "cf2be7e9d49d96fc76e23a64b9bae31a",
"/": "cf2be7e9d49d96fc76e23a64b9bae31a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "56ad7a06e23f8c319e81bb398f423a15",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"manifest.json": "915290aa0a34f57f290bfcf7916cd90d",
"favicon.png": "38e2531f097b0795fda5467d55ce9bba",
"version.json": "146aaebf07b609dc29a5852bb5ac5c42"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
