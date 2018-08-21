
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,81],],undefined,{path:"./platforms/app-plus/feedback/feedback.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/feedback/feedback.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      