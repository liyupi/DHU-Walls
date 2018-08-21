
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,85],],undefined,{path:"./platforms/app-plus/shake/shake.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/shake/shake.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      