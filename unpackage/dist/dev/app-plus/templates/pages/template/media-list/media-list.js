
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,75],],undefined,{path:"./pages/template/media-list/media-list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/media-list/media-list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      