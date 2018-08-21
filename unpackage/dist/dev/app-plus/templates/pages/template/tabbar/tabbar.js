
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,79],],undefined,{path:"./pages/template/tabbar/tabbar.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/tabbar/tabbar.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      