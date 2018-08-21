
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,6],],undefined,{path:"./pages/API/canvas/canvas.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/canvas/canvas.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      