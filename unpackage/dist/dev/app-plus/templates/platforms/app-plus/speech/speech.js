
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,86],],undefined,{path:"./platforms/app-plus/speech/speech.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/speech/speech.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      