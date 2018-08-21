
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,62],],undefined,{path:"./pages/template/accordion/accordion.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/accordion/accordion.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      