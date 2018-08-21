
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,20],],undefined,{path:"./pages/API/navigator/navigator.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/navigator/navigator.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      