javascript:(()=>{"obis"in window||("define"in window&&delete window.define,window.obis={fromBookmarklet:!0,loadScript:function(t,e){var o=document.createElement("script");o.src=t,o.type="text/javascript",console.log("Loading: "+t),e instanceof Function&&(o.onload=()=>e(t,!0),o.onerror=()=>e(t,!1)),document.head.appendChild(o)},rootPath:"https://raw.githubusercontent.com/shuckster/OBIS/master/dist/bookmarklet"},obis.loadScript(obis.rootPath+"/main.js"));})();