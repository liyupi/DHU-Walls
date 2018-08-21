
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,4],],undefined,{path:"./pages/API/animation/animation.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/animation/animation.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      