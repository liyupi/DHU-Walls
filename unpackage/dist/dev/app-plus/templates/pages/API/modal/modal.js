
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,18],],undefined,{path:"./pages/API/modal/modal.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/modal/modal.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      