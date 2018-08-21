
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,77],],undefined,{path:"./pages/template/popup/popup.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/popup/popup.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      