
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,50],],undefined,{path:"./pages/component/progress/progress.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/progress/progress.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      