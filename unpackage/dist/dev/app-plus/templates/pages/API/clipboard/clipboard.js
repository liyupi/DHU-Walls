
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,8],],undefined,{path:"./pages/API/clipboard/clipboard.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/clipboard/clipboard.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      