
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,30],],undefined,{path:"./pages/API/storage/storage.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/storage/storage.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      