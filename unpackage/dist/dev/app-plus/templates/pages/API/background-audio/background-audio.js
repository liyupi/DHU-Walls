
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,5],],undefined,{path:"./pages/API/background-audio/background-audio.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/background-audio/background-audio.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      