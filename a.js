const a=document.createElement("a");a.setAttribute("onclick",`(()=>{

const doNothing = function() {},
emptyPromise = new Promise(doNothing),
string01 = "",
string02 = "http",
string03 = "://",
string04 = "/",
string05 = ".",
string06 = "www",
string07 = "src",
string08 = "pixelated",
string09 = "GET",
setImageSource = Object.getOwnPropertyDescriptor(Image.prototype, string07).set,
setScriptSource = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, string07).set,
setElementAttribute = HTMLElement.prototype.setAttribute,
_fetch = window.fetch,
_open = XMLHttpRequest.prototype.open,
_send = XMLHttpRequest.prototype.send,
noPromise = function() {
 return emptyPromise;
},
bugFixNewURL = url => {
 try {
  return new URL(url);
 } catch(error) {
  return doNothing;
 };
};

(() => {
 emptyPromise.then = emptyPromise.catch = emptyPromise.finally = noPromise;
})();

(() => {
 var a = console.log;
 for (let key in console) {
  if (typeof console[key] === "function") console[key] = doNothing;
 };
 console.log2 = a;
})();

(() => {
 Object.defineProperties(HTMLScriptElement.prototype, {
  src: {
   get: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, string07).get,
   set(url) {
    try {
     url += string01;
     /*if ((!url.startsWith(string02) && url[0] !== string04) || bugFixNewURL(url).host === location.host) {
      setScriptSource.apply(this, arguments);
     } else {
      let link = url.split(string03)[1].split(string04)[0].split(string05),
      lng = link.length;
      if (lng < 3 || (lng === 3 && link[0] === string06)) {
       setScriptSource.apply(this, arguments);
      };
     };*/
     if (!url.includes("ads")) {
      setScriptSource.apply(this, arguments);
     };
    } catch(error) {};
   },
  },
  setAttribute: {
   value: function(a, b) {
    if ((a + string01).toLowerCase() !== string07) {
     setElementAttribute.apply(this, arguments);
    } else {
     this.src = b;
    };
   },
  },
 });
})();

(() => {
 window.fetch = function(src, param) {
  let _src = (src.url || src),
  dontWork = false;
  if ((src.method || param?.method || string09) !== string09) {
   if ((!_src.startsWith(string02) && _src[0] !== string04) || bugFixNewURL(_src).host !== location.host) {
    dontWork = true;
   } else {
    let link = _src.split(string03)[1].split(string04)[0].split(string05),
    lng = link.length;
    if (lng < 3 || (lng === 3 && link[0] === string06)) {
     dontWork = true;
    };
   };
  };
  if (dontWork) {
   return emptyPromise;
  } else {
   return _fetch.apply(this, arguments);
  };
 };
 XMLHttpRequest.prototype.open = function(type, src) {
  if (type !== string09) {
   if ((!src.startsWith(string02) && src[0] !== string04) || bugFixNewURL(src).host !== location.host) {
    this.open2 = arguments;
   } else {
    let link = src.split(string03)[1].split(string04)[0].split(string05),
    lng = link.length;
    if (lng < 3 || (lng === 3 && link[0] === string06)) {
     this.open2 = arguments;
    } else {
     delete this.open2;
    };
   };
  };
  _open.apply(this, arguments);
 };
 XMLHttpRequest.prototype.send = function() {
  if (this.open2) {
   delete this.open2;
   _send.apply(this, arguments);
  };
 };
})();

(() => {
 Object.defineProperty(Image.prototype, string07, {
  get: Object.getOwnPropertyDescriptor(Image.prototype, string07).get,
  set: function(url) {
   this.style.imageRendering = string08;
   setImageSource.apply(this, arguments);
  },
 });
 window.addEventListener("load", () => {
  let element = document.createElement("style");
  element.innerText = "img{image-rendering:pixelated}";
  document.documentElement.appendChild(element);
 }, { once: true });
})();

(() => {
 window.addEventListener("load", () => {
  document.querySelectorAll("script, meta, title, noscript").forEach(i => i.remove());
  document.querySelectorAll("link").forEach(i => {
   if (i.rel !== "stylesheet") i.remove();
  });
  let temp = item => {
   item = item.childNodes;
   let remove = [];
   item.forEach(i => {
    let f = i.nodeName;
    if (f !== "svg") {
     if ((f.startsWith("#") || f.toUpperCase() !== f) && f !== "#text") {
      remove.push(i);
     } else {
      temp(i);
     };
    };
   });
   remove.forEach(i => i.remove());
  };
  temp(document);
 }, { once: true });
})();

})()`);document.documentElement.appendChild(a);a.click();a.removeAttribute("onclick");window.addEventListener("load",()=>a.remove());