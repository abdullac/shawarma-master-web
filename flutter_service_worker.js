'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "f663359de94e9199bd7ecfcb034b4671",
"icons/Icon-maskable-192.png": "f663359de94e9199bd7ecfcb034b4671",
"icons/Icon-512.png": "f663359de94e9199bd7ecfcb034b4671",
"icons/Icon-192.png": "f663359de94e9199bd7ecfcb034b4671",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/images/shawaya_normal_color.webp": "731645c2b0f8ba84560df16127325f74",
"assets/assets/images/yellow_shawarma_half.webp": "bcd5d3dd15600b5e581c8b00cea304a0",
"assets/assets/images/whatsapp_logo.webp": "534e74aa929fb0d782ccb56fa2b2446a",
"assets/assets/images/rumali_shawarma.webp": "538018d951836706ad6d8ec94e667515",
"assets/assets/images/pothina_chatnee.webp": "3903ea264b7c92a06cad982b48e1c466",
"assets/assets/images/butter_shawarma_image.webp": "d512e3a4fd3a02416765d39a08c6ca20",
"assets/assets/images/red_shawarma.webp": "980321c73b79028731bf79c0c7555cbe",
"assets/assets/images/pita%2520%2520Shawarma_served.webp": "b94f1bef4070a545d41014d6818395ff",
"assets/assets/images/red_tomato_chutney.webp": "133b72587c79576365ffee2485930427",
"assets/assets/images/rumali_roll_served.webp": "44a2c67e2fbecbe9ca405b4068f88f62",
"assets/assets/images/red_mayonise.webp": "b21f765f99f5f5413d45d29342efe928",
"assets/assets/images/mixed_salad_bowl_image.webp": "3ef5a71a3775c8665270a0dc5dcaee84",
"assets/assets/images/addcontactlogo.webp": "90b31d1059e8758aedbcecad52ed18ba",
"assets/assets/images/aldan-shawarma.webp": "c6bb75f8623548bd0e5b19e635a7f4b0",
"assets/assets/images/mayonnaise_bowl.webp": "4f4452344130a90a34fb876186eedead",
"assets/assets/images/fries_poster_image.webp": "7f2df4ef7bdfb6807f2a305ef5024853",
"assets/assets/images/beetroot_chatnee.webp": "6a41449984c53edcfe4794bce7ae868a",
"assets/assets/images/shawarma_and_mechine.webp": "42c51889e5ac5276ffb5ac53e69b1283",
"assets/assets/images/white_mayonise.webp": "ff04d8164358965f51c58046666ddbd0",
"assets/assets/images/three_kuboos_plate.webp": "21503c0632d404af38241951cc3a69dd",
"assets/assets/images/porottaroll.webp": "bb97c11e7710e709bb21882cc806a046",
"assets/assets/images/sweet_chilly_sauce.webp": "ca7f7c307c5592011fa4a4fd467027ce",
"assets/assets/images/shawaya_masala.webp": "d7d7c5062e923d80fd600027f83b2dac",
"assets/assets/images/rumali_shawarma_stack.webp": "919f1adc62cc8108359d5182a0dfd09e",
"assets/assets/images/sp_rumali_shawarma.webp": "eca71978fb2b832eea36eba1085aabdd",
"assets/assets/images/Shawarma_hawaya_logo.webp": "d206fb2c2e687a8b03fd3bd82bf7b641",
"assets/assets/images/sp_rumali_hd.webp": "cce03acfdc1e2d56bf529e8fd1fc16ca",
"assets/assets/images/shawaya_yellow_color.webp": "93098c665c092bd660394c55d8bfaa31",
"assets/assets/images/red_shawarma_half.webp": "3f6b2a36237a7f7884691b19a99be57d",
"assets/assets/images/all_salads_image2.webp": "de6c6039867f9614c8be10aeafee214c",
"assets/assets/images/allsaladsimage2.png": "3407bf09f28e214fa898056c77a3e1c2",
"assets/assets/images/call_logo.webp": "c303c936e40e715d67f2e01ccc1a3d6b",
"assets/assets/images/fries_shawarma_image.webp": "8861a234943acb21dfd4e151dabf8fb5",
"assets/assets/images/Shawarma_hawaya_logo_512.webp": "8c1b3c4ddf165fdae8ae06929c882cfb",
"assets/assets/images/pita_chicken_shawarma.webp": "7225cba313c3807d12632b8873fc4c53",
"assets/assets/images/white_shawarma_half.webp": "3fa35149d4645408a41c2e8ab339438a",
"assets/assets/images/black_background_image.webp": "db2af899ca4a9d133ab76e9f446880d6",
"assets/assets/images/bun_shawarma.webp": "dfa32a92a3be9d25d341db747b5a90cd",
"assets/assets/images/samoon_shawarma.webp": "0799aa7b2c56fdc058a7a5f264097383",
"assets/assets/images/plate_shawarma.webp": "d5aa11dbd0a55fda977249850ce5fe9d",
"assets/assets/images/mixed_salad_bowl.webp": "5a3e918c6b9285f6659cde1b1af1e6da",
"assets/assets/images/shawaya_red_color.webp": "7f7ae6c16c15fd0f490f5d0fb42a09f3",
"assets/assets/images/beetroot_chatnee_2.webp": "6bf28ec9b02f340d77c6dc5f76863f7f",
"assets/assets/images/white_shawarma.webp": "fe79079f458526e188c4658453e3243d",
"assets/assets/images/shawarma_main_image.webp": "ea6d7b96d4609bf2080f9062cfa82c34",
"assets/assets/images/cheese_image.webp": "8eed89f6518faf65cf4ce3fe3cccb288",
"assets/assets/images/full_meet_shawarma.webp": "949666f1098e22b56f9a2126897e906f",
"assets/assets/images/pothina_chatnee_2.webp": "13dddee8b339623dbb4d9c06b20badc1",
"assets/assets/images/fries_basket.webp": "7f1e4b308709974332198ce3d1188ee0",
"assets/assets/images/mixed_salad.webp": "badbb37943703487f6af4945821240d7",
"assets/assets/images/yellow_shawarma.webp": "215358c157fdfa2ff074543227664f87",
"assets/assets/images/green_mayonnaise.webp": "252a034657b01073ae2542148d5ec8a0",
"assets/assets/images/bread_shawarma.webp": "953b738af95988620a740dd23b055967",
"assets/assets/images/cheese_shawarma_image.webp": "40cec33b8388bd68a13dfeefd6f5ecce",
"assets/assets/fonts/ML_TT_Bhavana_Normal.ttf": "51587ad5e371dbd75d62649106f98f88",
"assets/assets/fonts/urw_chancery_l_medium_italic.ttf": "53fff8a9955d246d9f8ebf1a69d6208d",
"assets/assets/fonts/FML-TT-Nandini.ttf": "961107af50d3ff3c05ca385ddbf36fda",
"assets/assets/fonts/MPLUSRounded1c-ExtraBold.ttf": "fc7e42ded9e4dd88949f2d9be3919306",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/fonts/MPLUSRounded1c-Black.ttf": "988787f5e9f48e6a950ac797c9cb5f28",
"assets/assets/fonts/MarckScript-Regular.ttf": "48d8d53dbcbec65e5464a14081efb1c4",
"assets/assets/fonts/Goodnewsj%2520Roman.ttf": "ef0900478d1713414c033239338a0e9a",
"assets/assets/fonts/Indu%2520No_1.ttf": "2e8703bb7bb6b48e02eeeda67261e277",
"assets/AssetManifest.bin": "b79411bdeee26020efd01249be70eaf9",
"assets/AssetManifest.json": "55a1518bdc23bcbb44538f2c3f15b8da",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "abe7164ecc3b24ee21b7a02aae1e0429",
"assets/FontManifest.json": "6331cdcad51dc36537d1ef8814d3ff46",
"assets/NOTICES": "8826c4107b8efc32e2c689096c328b0f",
"assets/fonts/MaterialIcons-Regular.otf": "5071d71994275502757ab989516fd223",
"index.html": "39539facf5d7f15d217712313c100d38",
"/": "39539facf5d7f15d217712313c100d38",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "fc506d1fde9bd9a4aae5b8c58949f874",
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
