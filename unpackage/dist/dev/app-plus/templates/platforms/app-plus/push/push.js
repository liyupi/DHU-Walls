
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,84],],undefined,{path:"./platforms/app-plus/push/push.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/push/push.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      