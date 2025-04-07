// 错误事件监听器
self.addEventListener("error", function(e) {
    self.clients.matchAll().then(function(t) {
      if (t && t.length) {
        t[0].postMessage({
          type: "ERROR",
          msg: e.message || null,
          stack: e.error ? e.error.stack : null
        });
      }
    });
  });
  
  // 未处理的Promise拒绝事件监听器
  self.addEventListener("unhandledrejection", function(e) {
    self.clients.matchAll().then(function(t) {
      if (t && t.length) {
        t[0].postMessage({
          type: "REJECTION",
          msg: e.reason ? e.reason.message : null,
          stack: e.reason ? e.reason.stack : null
        });
      }
    });
  });
  
  // 导入Workbox库
  importScripts("https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js");
  
  // 配置Workbox
  workbox.setConfig({
    debug: false,
    modulePathPrefix: "https://g.alicdn.com/kg/workbox/3.3.0/"
  });
  
  // 立即激活Service Worker
  workbox.skipWaiting();
  workbox.clientsClaim();
  
  // 预缓存列表
  var cacheList = ["/", "/index.html"];
  
  // 注册HTML文件的路由策略（网络优先）
  workbox.routing.registerRoute(
    new RegExp(/\.(?:html|css)$/),
    workbox.strategies.networkFirst({
      cacheName: "ql:html",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 10
        })
      ]
    })
  );
  
  // 注册JS/CSS文件的路由策略（陈旧-重新验证）
  workbox.routing.registerRoute(
    new RegExp(/\.(?:js|css)$/),
    workbox.strategies.staleWhileRevalidate({
      cacheName: "ql:static",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20
        })
      ]
    })
  );
  
  // 注册静态资源的路由策略（缓存优先）
  workbox.routing.registerRoute(
    new RegExp(/\.(?:png|gif|jpg|jpeg|webp|svg|cur|ttf|woff2|woff)$/),
    workbox.strategies.cacheFirst({
      cacheName: "ql:img",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 43200
        })
      ]
    })
  );