// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1D0jQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8ZNvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wildberriesSvg = require("./assets/img/Wildberries.svg");
var _wildberriesSvgDefault = parcelHelpers.interopDefault(_wildberriesSvg);
var _loupeSvgSvg = require("./assets/img/loupe-svg.svg");
var _loupeSvgSvgDefault = parcelHelpers.interopDefault(_loupeSvgSvg);
var _basketSvg = require("./assets/img/basket.svg");
var _basketSvgDefault = parcelHelpers.interopDefault(_basketSvg);
//------------------------------------------------------------------------------Header---------------------------------------------------------------------------------//
//2. ---------------------------------------------------------------------------Slider---------------------------------------------------------------------------------//
var _sliderWebp = require("./assets/img/slider.webp");
var _sliderWebpDefault = parcelHelpers.interopDefault(_sliderWebp);
var _slider2Webp = require("./assets/img/slider2.webp");
var _slider2WebpDefault = parcelHelpers.interopDefault(_slider2Webp);
var _slider3Webp = require("./assets/img/slider3.webp");
var _slider3WebpDefault = parcelHelpers.interopDefault(_slider3Webp);
const root = document.querySelector("#root");
const wrapper = document.createElement("main");
wrapper.className = "wrapper";
//1. ----------------------------------------------------------------------------Header---------------------------------------------------------------------------------//
// Header
const header = document.createElement("header");
header.className = "header";
// Header Logo
const headerLogoLink = document.createElement("a");
headerLogoLink.href = "http://localhost:1234/";
const headerLogo = document.createElement("img");
headerLogo.className = "header__logo";
headerLogo.type = "button";
headerLogo.src = (0, _wildberriesSvgDefault.default);
headerLogo.alt = "Wildberries";
// Header Input
const headerInput = document.createElement("input");
headerInput.className = "header__input";
headerInput.type = "text";
headerInput.placeholder = "Find on Wildberries";
headerInput.value = "";
// Обработчик события input для фильтрации карточек по введенному тексту
headerInput.addEventListener("input", (event)=>{
    const searchValue = event.target.value.toLowerCase(); // Получаем введенный текст и приводим к нижнему регистру
    const shoppingCards = document.querySelectorAll(".shopping__card"); // Выбираем все карточки
    // Проходимся по каждой карточке и скрываем те, которые не соответствуют введенному тексту
    shoppingCards.forEach((card)=>{
        const cardName = card.querySelector(".shopping__card-name").textContent.toLowerCase(); // Получаем текстовое содержимое карточки и приводим к нижнему регистру
        if (cardName.includes(searchValue)) card.style.display = "block"; // Если текст карточки содержит введенный текст, показываем карточку
        else card.style.display = "none"; // Иначе скрываем карточку
    });
});
const loupeImageInInput = document.createElement("img");
loupeImageInInput.className = "loupe__image";
loupeImageInInput.src = (0, _loupeSvgSvgDefault.default);
loupeImageInInput.alt = "Loupe";
// Header Basket
const basketContainer = document.createElement("div");
basketContainer.className = "header__basket";
const basketImage = document.createElement("img");
basketImage.className = "header__basket-image";
basketImage.src = (0, _basketSvgDefault.default);
basketImage.alt = "Basket";
const basketText = document.createElement("span");
basketText.className = "header__basket-text";
basketText.textContent = "\u041A\u043E\u0440\u0437\u0438\u043D\u0430";
// Создаем элемент для счетчика товаров в корзине
const basketCounter = document.createElement("div");
basketCounter.className = "header__basket-counter";
basketCounter.textContent = "0";
// Создаем контейнер для слайдера
const sliderContainer = document.createElement("div");
sliderContainer.id = "slider";
sliderContainer.className = "slider";
// Данные о слайдах
const slidesData = [
    {
        content: (0, _sliderWebpDefault.default)
    },
    {
        content: (0, _slider2WebpDefault.default)
    },
    {
        content: (0, _slider3WebpDefault.default)
    }
];
// Создаем контейнер для слайдов
const slidesContainer = document.createElement("div");
slidesContainer.id = "slides";
slidesContainer.className = "slider__slides";
// Создаем кнопки "назад" и "вперед"
const prevButton = document.createElement("button");
prevButton.id = "prev";
prevButton.className = "slider__prev";
prevButton.textContent = "\u2039";
const nextButton = document.createElement("button");
nextButton.id = "next";
nextButton.className = "slider__next";
nextButton.textContent = "\u203A";
// Создаем контейнер для точек (индикаторов слайдов)
const dotsContainer = document.createElement("div");
dotsContainer.id = "dots";
dotsContainer.className = "slider__dots";
// Проходимся по каждому слайду и добавляем его в слайдер
slidesData.forEach((slide, index)=>{
    const slideElement = document.createElement("div");
    slideElement.className = "slide";
    // Если контент слайда - изображение, создаем элемент img и добавляем его в слайд
    if (slide.content.includes(".jpg") || slide.content.includes(".png") || slide.content.includes(".webp")) {
        const image = document.createElement("img");
        image.src = slide.content;
        image.alt = "Slide";
        slideElement.appendChild(image);
    } else slideElement.textContent = slide.content; // Иначе добавляем текстовый контент в слайд
    slidesContainer.appendChild(slideElement); // Добавляем слайд в контейнер слайдов
    // Создаем точку (индикатор) для этого слайда
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.dataset.slideIndex = index; // Устанавливаем индекс слайда для дальнейшего обновления
    dotsContainer.appendChild(dot); // Добавляем точку в контейнер точек
});
let currentIndex = 0; // Индекс текущего слайда (по умолчанию - первый)
// Добавляем обработчики событий для кнопок "назад" и "вперед"
prevButton.addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    updateSlide(); // Обновляем отображение слайдов
});
nextButton.addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % slidesData.length;
    updateSlide(); // Обновляем отображение слайдов
});
// Добавляем обработчик события для точек (индикаторов слайдов)
dotsContainer.addEventListener("click", (event)=>{
    const dot = event.target.closest(".dot");
    if (dot) {
        currentIndex = parseInt(dot.dataset.slideIndex);
        updateSlide(); // Обновляем отображение слайдов
    }
});
// Функция для автоматического переключения слайдов
const startSlideShow = ()=>{
    setInterval(()=>{
        currentIndex = (currentIndex + 1) % slidesData.length;
        updateSlide();
    }, 3000);
};
// Функция для обновления отображения слайдов
const updateSlide = ()=>{
    const slides = document.querySelectorAll(".slide"); // Выбираем все слайды
    const dots = document.querySelectorAll(".dot"); // Выбираем все точки
    // Проходимся по каждому слайду и скрываем или показываем его в зависимости от текущего индекса
    slides.forEach((slide, index)=>{
        slide.style.display = index === currentIndex ? "block" : "none";
    });
    // Подсвечиваем текущую точку, убирая подсветку у остальных
    dots.forEach((dot, index)=>{
        dot.classList.toggle("active", index === currentIndex);
    });
};
document.addEventListener("DOMContentLoaded", function() {
    updateSlide(); // Вызываем функцию updateSlide() после загрузки контента страницы
    startSlideShow(); // Запускаем автоматическое переключение слайдов
});
// Добавляем стрелки и точки внутрь слайдера
sliderContainer.append(prevButton, slidesContainer, nextButton, dotsContainer);
//--------------------------------------------------------------------------------Slider---------------------------------------------------------------------------------//
// 3. ----------------------------------------------------------------------------Shopping Cards------------------------------------------------------------------------ //
const allShoppingCards = document.createElement("div");
allShoppingCards.className = "shopping__cards";
// Объявляем переменную totalPrice для хранения общей суммы всех товаров в корзине
let totalPrice = 0;
// Получаем данные с сервера
fetch("https://65ca55fb3b05d29307e02af2.mockapi.io/users").then((response)=>response.json()).then((data)=>{
    // Создаем карточки на основе полученных данных
    data.forEach((item)=>{
        const shoppingCard = document.createElement("div");
        shoppingCard.className = "shopping__card";
        // Создаем изображение
        const image = document.createElement("img");
        image.className = "shopping__card-image";
        image.src = item.image + "?random=" + Math.random();
        image.alt = "Product Image";
        // Создаем элементы для отображения информации о товаре
        const price = document.createElement("h3");
        price.className = "shopping__card-price";
        price.textContent = `${item.price} \u{440}.`;
        const date = document.createElement("p");
        date.className = "shopping__card-date";
        date.textContent = `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{437}\u{430}\u{432}\u{442}\u{440}\u{430}`;
        const name = document.createElement("p");
        name.className = "shopping__card-name";
        name.textContent = item.name;
        const rate = document.createElement("p");
        rate.className = "shopping__card-rate";
        rate.textContent = `\u{2605} ${item.rate}`;
        const reviews = document.createElement("p");
        reviews.className = "shopping__card-reviews";
        reviews.textContent = `${item.reviews} \u{43E}\u{442}\u{437}\u{44B}\u{432}\u{43E}\u{432}`;
        // Создаем кнопку "В корзину"
        const shoppingCardAddBtn = document.createElement("input");
        shoppingCardAddBtn.className = "shopping__card-addbtn";
        shoppingCardAddBtn.type = "button";
        shoppingCardAddBtn.value = "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
        // Добавляем все созданные элементы в карточку
        shoppingCard.appendChild(image);
        shoppingCard.appendChild(price);
        shoppingCard.appendChild(date);
        shoppingCard.appendChild(name);
        shoppingCard.appendChild(rate);
        shoppingCard.appendChild(reviews);
        shoppingCard.appendChild(shoppingCardAddBtn);
        // Добавляем карточку в контейнер всех карточек
        allShoppingCards.appendChild(shoppingCard);
        // Обработчик клика на кнопку "В корзину"
        shoppingCardAddBtn.addEventListener("click", ()=>{
            const cardItemInBasket = document.createElement("div");
            cardItemInBasket.className = "card__item";
            const itemName = document.createElement("div");
            itemName.className = "modal__window-item";
            itemName.textContent = item.name;
            const itemPrice = document.createElement("div");
            itemPrice.className = "modal__window-price";
            itemPrice.textContent = `${item.price} \u{440}.`;
            cardItemInBasket.appendChild(itemName);
            cardItemInBasket.appendChild(itemPrice);
            // Увеличиваем значение счетчика товаров в корзине при добавлении нового товара
            let count = parseInt(basketCounter.textContent);
            count++;
            basketCounter.textContent = count; // Обновляем текст счетчика
            // Проверяем, если счетчик равен 0, то показываем его, иначе скрываем
            basketCounter.style.display = count === 0 ? "none" : "block";
            modalWindow.appendChild(cardItemInBasket);
            // Обновляем значение суммы цен всех товаров в корзине
            totalPrice += parseFloat(item.price);
            // Создаем элемент для отображения общей суммы цен всех товаров в корзине
            const itemPriceAll = document.querySelector(".modal__window-priceall");
            if (itemPriceAll) itemPriceAll.textContent = `\u{418}\u{442}\u{43E}\u{433}\u{43E}: ${totalPrice.toFixed(2)} \u{440}.`;
            else {
                const newItemPriceAll = document.createElement("div");
                newItemPriceAll.textContent = `\u{418}\u{442}\u{43E}\u{433}\u{43E}: ${totalPrice.toFixed(2)} \u{440}.`;
                newItemPriceAll.className = "modal__window-priceall";
                modalWindow.appendChild(newItemPriceAll);
            }
        });
    });
}).catch((error)=>{
    console.error("Error fetching data:", error);
});
//-------------------------------------------------------------------------------Shopping Cards------------------------------------------------------------------------ //
// 4. ----------------------------------------------------------------------------Basket Model Window------------------------------------------------------------------- //
const modalWindow = document.createElement("div");
modalWindow.className = "modal__window";
const modalWindowHeader = document.createElement("header");
modalWindowHeader.className = "modal__window_header";
const modalWindowHeaderTitle = document.createElement("h1");
modalWindowHeaderTitle.className = "modal__window_header-title";
modalWindowHeaderTitle.innerText = "\u041A\u043E\u0440\u0437\u0438\u043D\u0430";
const modalWindowHeaderBtn = document.createElement("input");
modalWindowHeaderBtn.className = "modal__window_header-btn";
modalWindowHeaderBtn.type = "button";
modalWindowHeaderBtn.value = "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
// Добавляем переменную для отслеживания состояния модального окна
let isModalOpen = false;
// Обработчик клика на корзину
basketContainer.addEventListener("click", (event)=>{
    // Проверяем, открыто ли модальное окно
    if (!isModalOpen) {
        modalWindow.style.display = "block";
        isModalOpen = true; // Устанавливаем флаг, что модальное окно открыто
    }
    // Предотвращаем распространение события, чтобы оно не дошло до document.addEventListener
    event.stopPropagation();
});
// Обработчик клика вне модального окна
document.addEventListener("click", (event)=>{
    // Проверяем, был ли клик сделан вне модального окна
    if (!modalWindow.contains(event.target) && event.target !== basketContainer) {
        modalWindow.style.display = "none"; // Закрываем модальное окно
        isModalOpen = false; // Сбрасываем флаг состояния модального окна
    }
});
// Обработчик клика на кнопку "Очистить корзину"
modalWindowHeaderBtn.addEventListener("click", ()=>{
    // Удаляем только элементы, представляющие товары в корзине
    const cardItems = modalWindow.querySelectorAll(".card__item");
    cardItems.forEach((cardItem)=>{
        modalWindow.removeChild(cardItem);
    });
    const itemPriceAll = modalWindow.querySelectorAll(".modal__window-priceall");
    itemPriceAll.forEach((itemPriceAll)=>{
        modalWindow.removeChild(itemPriceAll);
    });
    // Обновляем счетчик товаров в корзине
    basketCounter.textContent = "0";
    if (parseInt(basketCounter.textContent) === 0) basketCounter.style.display = "none";
    else basketCounter.style.display = "block";
});
// --------------------------------------------------------------------------------Basket Model Window------------------------------------------------------------------ //
root.append(wrapper);
wrapper.append(header, sliderContainer, allShoppingCards, modalWindow);
header.append(headerLogoLink, headerInput, basketContainer);
headerLogoLink.appendChild(headerLogo);
headerInput.appendChild(loupeImageInInput);
basketContainer.appendChild(basketImage);
basketContainer.appendChild(basketText);
basketContainer.appendChild(basketCounter);
modalWindow.appendChild(modalWindowHeader);
modalWindowHeader.appendChild(modalWindowHeaderTitle);
modalWindowHeader.appendChild(modalWindowHeaderBtn);

},{"./assets/img/Wildberries.svg":"lU1KH","./assets/img/loupe-svg.svg":"3aRqc","./assets/img/basket.svg":"5wh3k","./assets/img/slider.webp":"jRYYa","./assets/img/slider2.webp":"hV4x8","./assets/img/slider3.webp":"bu2ds","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lU1KH":[function(require,module,exports) {
module.exports = require("c6803bf2a06711a2").getBundleURL("lORN7") + "Wildberries.b362218e.svg" + "?" + Date.now();

},{"c6803bf2a06711a2":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3aRqc":[function(require,module,exports) {
module.exports = require("fb273bc2113cb364").getBundleURL("lORN7") + "loupe-svg.8de442dc.svg" + "?" + Date.now();

},{"fb273bc2113cb364":"lgJ39"}],"5wh3k":[function(require,module,exports) {
module.exports = require("14b862f5dfb5e8c1").getBundleURL("lORN7") + "basket.ce6a9089.svg" + "?" + Date.now();

},{"14b862f5dfb5e8c1":"lgJ39"}],"jRYYa":[function(require,module,exports) {
module.exports = require("6cea3170c954b3b5").getBundleURL("lORN7") + "slider.430ba9d9.webp" + "?" + Date.now();

},{"6cea3170c954b3b5":"lgJ39"}],"hV4x8":[function(require,module,exports) {
module.exports = require("3bf1d798ee9d0468").getBundleURL("lORN7") + "slider2.a75a7cff.webp" + "?" + Date.now();

},{"3bf1d798ee9d0468":"lgJ39"}],"bu2ds":[function(require,module,exports) {
module.exports = require("9437f896952773fc").getBundleURL("lORN7") + "slider3.abc44af9.webp" + "?" + Date.now();

},{"9437f896952773fc":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1D0jQ","8ZNvh"], "8ZNvh", "parcelRequired58f")

//# sourceMappingURL=index.f5c48570.js.map
