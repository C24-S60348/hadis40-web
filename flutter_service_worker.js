'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ac9b2f1dbe110486422e5ecff472bf07",
"version.json": "c8a7f09b8f70141ceb3d301afc26152f",
"index.html": "679cfecc14786af340d0c641303ca378",
"/": "679cfecc14786af340d0c641303ca378",
"main.dart.js": "316b8b503b7e4e5f01d0e01f9139187b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "e483f23c7495fd503e356020e3048e24",
"icons/Icon-192.png": "e483f23c7495fd503e356020e3048e24",
"icons/Icon-maskable-192.png": "e483f23c7495fd503e356020e3048e24",
"icons/Icon-maskable-512.png": "e483f23c7495fd503e356020e3048e24",
"icons/Icon-512.png": "e483f23c7495fd503e356020e3048e24",
"manifest.json": "fdbf900500618117cf02763079d894b8",
"assets/AssetManifest.json": "c772c536048bfd4a35b4baa22d07109b",
"assets/NOTICES": "178072a55c09a3b2358a27d9d9c34641",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "35921b932300399e003451abd1ea020f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9318684605680c019b4cd00199ee355e",
"assets/fonts/MaterialIcons-Regular.otf": "35a0f36b146090292266dcac70bdd275",
"assets/assets/images/hadith29_2.png": "212e12414421b305fba5a84138440f1f",
"assets/assets/images/hadith2_2.png": "31f069ae030058d51321a57c81335d62",
"assets/assets/images/hadith40.png": "49c7087fae5f1094bebfd332f2b14dd7",
"assets/assets/images/hadith41.png": "eacac11a45a2265efe8bbe2e7b0f322d",
"assets/assets/images/lightgraybg.jpg": "920269bfb22a12678e4100759e9571d9",
"assets/assets/images/hadith42.png": "a84b06fddc6dad425afaf5754df96586",
"assets/assets/images/h13.jpg": "854d01e3a89292052d47c0188a7637d1",
"assets/assets/images/hadith31.png": "02296313271d1b865e22df6d2a627a10",
"assets/assets/images/hadith25.png": "19a9838f94565658bf749977ca65885b",
"assets/assets/images/hadith19.png": "ff7032b28b63884661638fb94f32a3eb",
"assets/assets/images/hadith18.png": "a55c7b91d4f2ef82793b75a3f4bf8ba6",
"assets/assets/images/hadith24.png": "7bef118c66006df678152ce4cb0381e4",
"assets/assets/images/hadith30.png": "9402530a200cc98d7fa9bf893554b5ba",
"assets/assets/images/h12.jpg": "767475f22c0da3868cfa3a6190d57936",
"assets/assets/images/29.jpg": "7f221cea6680060f0c41cd358ea408db",
"assets/assets/images/h38.jpg": "4088370795070041537f784640f1597e",
"assets/assets/images/h10.jpg": "d26b12c6fd93959772481e52e777544c",
"assets/assets/images/hadith9.png": "7a10f1af6078fd49617cb880bf9ef898",
"assets/assets/images/hadith26.png": "b999b8404ea9a6aee04d1043cbcce2f2",
"assets/assets/images/hadith32.png": "83567913708cc5c2cca7e09659858563",
"assets/assets/images/hadith33.png": "4c2e1633c256c8d7ec0054b793cc1fe3",
"assets/assets/images/hadith27.png": "bb2a6e0feb91c27b33683f3e4f12860e",
"assets/assets/images/hadith8.png": "bb5e09b408ce37b354c799854d2134ee",
"assets/assets/images/download(1).png": "2ad85f828fb195b912a709a036856189",
"assets/assets/images/ambercolorbg.jpg": "20dd52507e9288618ebb32d2e2cb81f2",
"assets/assets/images/h11.jpg": "791feb53351ebea0e085582c09fcfb01",
"assets/assets/images/h39.jpg": "1082f62df0f3740c3eb5a73601f32659",
"assets/assets/images/h15.jpg": "c054b4352f25660f498c47eed7774822",
"assets/assets/images/h29.jpg": "5e38375bf2aa8638cb4a60dea6116074",
"assets/assets/images/graybg.png": "b3860de218482a9cc03b4fc702111bb2",
"assets/assets/images/hadith23.png": "157eedf1f022e302ce6c7788bda5989f",
"assets/assets/images/hadith37.png": "bf56c36fbeffdf110ac166a6e989bbef",
"assets/assets/images/hadith36.png": "b7facc9afefe3617f38a9716ba61af49",
"assets/assets/images/hadith22.png": "fea131cd3bcc2a52d3fa1d29e18f74ba",
"assets/assets/images/h28.jpg": "4b7cfb561c82ef9454d779c210a8782d",
"assets/assets/images/h14.jpg": "4e3067e736e33c2e07e6427e9450802f",
"assets/assets/images/SplashScreenHadis40.png": "22dbf01ce747bb36b5ce6ad77504748e",
"assets/assets/images/h16.jpg": "c56c09f9649cade9ed4f2c9e8aa95b89",
"assets/assets/images/h9.jpg": "5c36d34cf499e9ea7ae1ece68e1abdc0",
"assets/assets/images/hadith37_2.png": "efb9f2262b79ecdb190be5985bcae052",
"assets/assets/images/pinkbgcolor.jpg": "b42a80aa486eae6330a49790d5e21576",
"assets/assets/images/masjidmalaysia.jpg": "9ed5f886c63769e5f915684ed4295525",
"assets/assets/images/hadith34.png": "a3767d013f41634ab5ab842e5157f1af",
"assets/assets/images/hadith20.png": "8cc23e7a49821099ee0f230374b99e8f",
"assets/assets/images/hadith21.png": "132450eea2554a7d964ac1a70b18b8f8",
"assets/assets/images/hadith35.png": "3f937c923b09943354b468201d4627a8",
"assets/assets/images/bismillah.png": "cbd6030109c86acb66683fae911fa252",
"assets/assets/images/h8.jpg": "d22c504a0a270d848d383d814dd6175a",
"assets/assets/images/h17.jpg": "186c626c8ee34b463c1618cad8bc4301",
"assets/assets/images/h5.jpg": "81a28b487ece6cc5c027915bb7e6c124",
"assets/assets/images/h26.jpg": "169d40afb888f9642aa9b40263887614",
"assets/assets/images/h32.jpg": "84eef10c01e09b859240085cb8bfc1f9",
"assets/assets/images/hadith3.png": "331b27a07d15360eb1e4f58305c578f0",
"assets/assets/images/hadith10.png": "0f425384004b2597b0bfab9d065e4d3b",
"assets/assets/images/hadith38.png": "5f9d6b7ca547f1079d16efb7b2aed047",
"assets/assets/images/hadith39.png": "e136512419d076d518bff4bf48ffdb6e",
"assets/assets/images/hadith11.png": "58f6f31863d68cde018eb2feb4df5ca1",
"assets/assets/images/hadith2.png": "5e6364056fcd412575084767463adfb7",
"assets/assets/images/h33.jpg": "e4fde4362a330fc19b2199070bb20bc7",
"assets/assets/images/h27.jpg": "de20583fa051c4b54254b4107a076192",
"assets/assets/images/h4.jpg": "7343b4594e4bda870e935f8a02047557",
"assets/assets/images/h19.jpg": "7450d9fd06bb45942da0bc71b4ea4962",
"assets/assets/images/h31.jpg": "25c9895188a48cad12b29207381871b8",
"assets/assets/images/h6.jpg": "299816dd3305aa4dcfa1a72c162f9645",
"assets/assets/images/h25.jpg": "62a1948e496c6a03150f2dcf613d36df",
"assets/assets/images/hadith13.png": "5a3f75837c3defe04f3cbfeedf5b9ec4",
"assets/assets/images/suraujumaat.csv": "e0f464339bfa21cf08b8ac106d8114b7",
"assets/assets/images/hadith12.png": "4a8a756ae336d231647f53bc5f23a7b7",
"assets/assets/images/hadith1.png": "789ec189ac53b1e4dc41c27768a7e557",
"assets/assets/images/h24.jpg": "18636bd891876a50a4aebbf1e58513bf",
"assets/assets/images/h7.jpg": "7ed7adbad6b36651569d5a6800dc608c",
"assets/assets/images/h30.jpg": "c37ec9b3316d421d485a7d1a32e0da42",
"assets/assets/images/h18.jpg": "dac09884b3a841045df1395336d640a1",
"assets/assets/images/logo.png": "e483f23c7495fd503e356020e3048e24",
"assets/assets/images/darkblue_bg.jpg": "d2a07611e8a1106f939124209352eb10",
"assets/assets/images/h34.jpg": "6cc6297d2887232ca86a3661f1c89d8f",
"assets/assets/images/hadith24_2.png": "a682e1a9b1e8e1be2751e7506d8e2eb7",
"assets/assets/images/h3.jpg": "6159cc9dffb3f9bd4d3e07389ca305c1",
"assets/assets/images/h20.jpg": "af41f37bb61bfccee978420a48015182",
"assets/assets/images/limebgcolor.jpg": "316e22c9c2a9c3a8b1ec89aa2f65f977",
"assets/assets/images/hadith5.png": "426dbd6a76c038a989572a4cb5ffbc6e",
"assets/assets/images/hadith16.png": "63b260b0bca60beae23f27ebae59ba34",
"assets/assets/images/hadith17.png": "1393b1e5bcf787bbd5f80aedc63d1bf1",
"assets/assets/images/hadith4.png": "5458024e6f68c25ec198b44ce703ef41",
"assets/assets/images/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/images/h21.jpg": "307febb6a314659c656816116fe2e6de",
"assets/assets/images/h2.jpg": "10fb3227e27e901a7ebc72124b9ca253",
"assets/assets/images/h35.jpg": "af6a8482335f8ff357b7e8483dc93569",
"assets/assets/images/h23.jpg": "903a3692d4efcaf640ffc8339142541a",
"assets/assets/images/h37.jpg": "eacbf69cf679670a3ad4fdab83e9d0aa",
"assets/assets/images/hadith6.png": "9476ef9feb2b8f46cf0a388176f67499",
"assets/assets/images/hadith29.png": "489de8cbcb193893d2ed96e89e883804",
"assets/assets/images/hadith15.png": "983be34800c3ea6940d6e21583358f6d",
"assets/assets/images/hadith14.png": "4bfbedab58339d285f210278455ff845",
"assets/assets/images/hadith28.png": "f3a50c61122caa5cb8750eca9860b590",
"assets/assets/images/hadith7.png": "dcf5984b1568efb3a446a3ab9788a8c5",
"assets/assets/images/h36.jpg": "eb4bee7f1af0896dcbfcf3f4ec7b7691",
"assets/assets/images/h22.jpg": "81757f0d8582d6669543a1179389fe35",
"assets/assets/images/h1.jpg": "bdc060ad733cd6ed53de264ea66d3165",
"assets/assets/images/Tahoma.ttf": "23e3188ae40a54f81e4747fe3f5c2d1d",
"assets/assets/images/blue-polygonal-shapes-background_1053-434.jpg": "0afd84ad4784e4c53e0754482181d5b5",
"assets/assets/images/darkgraybg.jpg": "4f92e03e49edfc0a0393ee1bfeb30a04",
"assets/assets/images/buttonbrown.png": "33da7a8902745d9645ec190f77cd0ecb",
"assets/assets/images/dark-gloss-buttons-black.png": "8b74adffaccec232e598a396f2b4e442",
"assets/assets/images/lightbluebg.jpg": "f9a216e6812b0c4dec5c14f7d7389736",
"assets/assets/images/h42.jpg": "c5b8ebc83bb9c4b2127b43fcf90a73df",
"assets/assets/images/h40.jpg": "56617ab8f5c9f428a987f277a79c56b7",
"assets/assets/images/bismillah2.png": "efe5b74c2cdbfa2279bbf763ae25ce3b",
"assets/assets/images/button.png": "fc6ffa500fcc37863d02c56a5a03eb0a",
"assets/assets/images/h41.jpg": "393bab840ed38cc7fa5e836fc2a7f89a",
"assets/assets/images/bg.jpg": "8f31625289d3e59a0866cc690c87d77d",
"assets/assets/documents/fulldescription.txt": "740ddba77948ee995474e824ae16107a",
"assets/assets/documents/privacypolicy.html": "155bcdf4dfcf2667d847efdc6b2eb20f",
"assets/assets/data/surahcalculator.json": "25dcc554d643846f79ed79d583a0be72",
"assets/assets/data/katakatahikmah.json": "0317ca6e4b680a9ca80b8f06b01fdfda",
"assets/assets/data/hadis40.json": "8ff1cce198ca7d235fba5194ab208e50",
"assets/assets/data/Hadis%25201%2520-%2520Hadis%252026.docx": "834f4b7ce6d20db296314991789d5120",
"assets/assets/data/pagekatakata.json": "ab27b9c0576c24141cdfff0b68838d46",
"assets/assets/data/surau_jumaat.db": "707d673b7c398f37eb3a046c0575c13f",
"assets/assets/data/solatsunat.json": "ec83dc33d9dc09c9f7bb0f3ccc0e3037",
"assets/assets/data/Hadis%252027%2520-%2520Hadis%252042.docx": "57f26aec754ef12ab399ac47303e9151",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
