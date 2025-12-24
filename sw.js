self.addEventListener('install', (e) => {
  e.waitUntil(
    // Dica: Mudei o nome do cache para 'echoo-store-v2' para forçar uma atualização
    caches.open('echoo-store-v2').then((cache) => cache.addAll([
      './index.html',
      './img/favicon.ico', // <--- CAMINHO ATUALIZADO AQUI
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
