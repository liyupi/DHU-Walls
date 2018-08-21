
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,25],],undefined,{path:"./pages/API/request-payment/request-payment.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/request-payment/request-payment.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      