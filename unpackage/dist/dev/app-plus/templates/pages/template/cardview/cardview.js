
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,64],],undefined,{path:"./pages/template/cardview/cardview.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/cardview/cardview.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      