
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,32],],undefined,{path:"./pages/API/upload-file/upload-file.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/upload-file/upload-file.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      