self.addEventListener('install', (e) => {
  e.waitUntil(
    // Mudei a versão para v3 para forçar atualização
    caches.open('echoo-store-v3').then((cache) => cache.addAll([
      './index.html',
      './img/favicon.ico',
      './img/icon-192.png', // Adicionado
      './img/icon-512.png'  // Adicionado
    ]))
  );
});
