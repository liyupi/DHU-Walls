
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,9],],undefined,{path:"./pages/API/download-file/download-file.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/download-file/download-file.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      