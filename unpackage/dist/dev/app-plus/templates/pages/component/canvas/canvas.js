
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,37],],undefined,{path:"./pages/component/canvas/canvas.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/canvas/canvas.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      