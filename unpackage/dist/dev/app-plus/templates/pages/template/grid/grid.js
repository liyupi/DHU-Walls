
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,69],],undefined,{path:"./pages/template/grid/grid.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/grid/grid.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      