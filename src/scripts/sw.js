/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

const assetsToCache = [
  './',
  './images/heros/hero-image_4_72x72.png',
  './images/heros/hero-image_4_96x96.png',
  './images/heros/hero-image_4_128x128.png',
  './images/heros/hero-image_4_144x144.png',
  './images/heros/hero-image_4_152x152.png',
  './images/heros/hero-image_4_192x192.png',
  './images/heros/hero-image_4_384x384.png',
  './images/heros/hero-image_4_512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
