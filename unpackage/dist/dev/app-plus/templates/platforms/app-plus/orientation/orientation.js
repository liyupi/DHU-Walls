
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,82],],undefined,{path:"./platforms/app-plus/orientation/orientation.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/orientation/orientation.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      