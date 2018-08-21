
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,7],],undefined,{path:"./pages/API/choose-location/choose-location.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/choose-location/choose-location.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      