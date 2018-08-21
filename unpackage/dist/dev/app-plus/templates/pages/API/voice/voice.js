
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,34],],undefined,{path:"./pages/API/voice/voice.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/voice/voice.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      