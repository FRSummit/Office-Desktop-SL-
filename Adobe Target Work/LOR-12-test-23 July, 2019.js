<style>
    @media (min-width: 768px){
      .caas-offers-1 ul.offers {
        display: block;
        max-width: 980px;
      }
	  /*.caas-offer-0 .offer-features-container .offer-features ul {
        width: 70%;
        column-count: 2;
        column-gap: 0;
        text-align: start;
        height: 200px;
	  }*/
      .caas-offer-0 .offer-features-container .offer-features ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 130px;
    width: 76%;
    margin: 0;
}

.caas-offer-0 .offer-features-container .offer-features li {
    width: 51%;
    /*height: 45px;*/
    height: auto;
    border-top: 0;
    padding: 0;
}
      .caas-offers-1 ul.offers li {
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
      .caas-offer-0 .offer {
        max-width: 100%;
      }/*
      .caas-offer-0 .selected.offer {
        max-width: 100%;
      }*/
      .caas-offer-0 .offer-head {
        min-height: auto;
        margin-top: 44px;
        display: block;
      }
      .caas-offer-0 .offer-hero-image.offer-hero-image-position-1 {
        max-width: 23%;
        display: inline-block;
        float: left;
        margin: 10px;
      }
      .caas-offer-0 .offer-heading.large-device {
        width: auto;
        display: inline-block;
        float: left;
        margin: 10px;
      }
      .caas-offer-0 .offer-details-container {
        display: inline-block;
        float: right;
        width: 33%;
        margin: 10px;
      }
      .caas-offer-0 .offer-features-container {
        display: block;
        width: 100%;
      }
      .caas-offer-0 .offer-costing .price-container {
        padding-top: 0;
      }
    }
  .caas-offer-0 .offer-heading h3 span {
    text-align: left;
  }
  .caas-offer-0 .offer-button-container em.btn:first-of-type {
    position: absolute;
    width: 20%;
    right: 2%;
    top: 70%;
    display: block;
    z-index: 999;
  }
  .caas-offer-0 .selected .offer-button-container em.select,
  .caas-offer-0 .offer-button-container .btn {
    display: block;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    top: 0;
  }
  .caas-offer-0 .offer-features-container .offer-features li:first-of-type {
    height: auto;
  }
  /*.caas-offer-0 .offer-features-container .offer-features li {
    border-top: 0;
    height: auto;
    width: 35%;
  }*/
  /*-----------------Test-------------------------*/
  /*.caas-offer-0 .offer-features-container .offer-features li:nth-child(n+5) {
    border-top: 0;
    display: inline-block;
    height: auto;
    position: absolute;
    top: 0;
    left: 33%;
    max-width: 360px;
  }*/
  /*.caas-offer-0 .offer-features-container .offer-features li {
    border-top: 0;
    width: 100%;
    display: inline;
}*/
  /*------------------------------------------*/
  .caas-offer-0 .offer-features-container .offer-features li .desc p {
    margin: 0;
  }
  .caas-offer-0 .offer-features-container .offer-features li.no-desc,
  .caas-offer-0 .offer-features-container .offer-features li.learn-more,
  .caas-offer-0 .offer-upfront-cost.large-device,
  .caas-offer-0 .offer-tncs-container {
    display: none;
  }
  /*--------------------------------*/
  .caas-offer-0 .selected .offer-features-container {
    /*display: none;*/
  }
  .caas-offer-0 .offer-features-container,
  .caas-offer-0 .offer-button-container {
    display: none;
  }
  .LOR-12-show {
    display: block !important;
  }
  .LOR-12-hide {
    display: none !important;
  }
  .feature-margin-bottom {
    margin-bottom: 10%;
  }
  .caas-offer-0 .offer-head {
    margin-bottom: 10%;
  }
</style>

<script>
    (function(window, document) {
        let searchParams = new URLSearchParams(window.location.search);

        var newV21 = function() {
            var path = window.location.search;
            if (!searchParams.get('v21suffix')) {
                searchParams.set('v21suffix', '45-b');
                window.location.replace(window.location.origin + window.location.pathname + '?' + searchParams.toString());
            }
        };

        newV21();

        function waitForElement(needle, haystack, callback) {
            var targetNode = document.querySelectorAll(haystack)[0];
            var config = {childList: true, subtree: true};

            var observerCallback = (mutationsList, observer) => {
                for(var mutation of mutationsList) {
                    if (document.querySelectorAll(needle).length > 0) {
                        observer.disconnect();
                        callback();
                        break;
                    }
                }
            };
            var observer = new MutationObserver(observerCallback);
            observer.observe(targetNode, config);
        }

        function createBanner() {
            console.log('Here');
            //var targetOfferDiv = document.querySelector('.caas-offer-0 .offer-head');
            var targetOfferDiv = document.querySelector('.caas-offers-1 ul.offers li');
            targetOfferDiv.classList.add('myClass');
          
            let offerBtns = document.querySelector('.caas-offer-0 .offer-button-container.large-device');
            offerBtns.classList.remove('large-device');
          
            targetOfferDiv.addEventListener("click", myFunction);
            //myFunction();
            console.log('banner');
        }
      
        function myFunction() {
            let offerFeatureDetail = document.querySelector('.caas-offer-0 .offer-features-container');
            let offerBtns = document.querySelector('.caas-offer-0 .offer-button-container');
            let offerHead = document.querySelector('.caas-offer-0 .offer-head');
          
            let offerBtnsRR = document.querySelectorAll('.caas-offer-0 .offer-button-container');
            console.log('Length : ' + offerBtnsRR.length);
          
            if(offerFeatureDetail.classList.contains('LOR-12-show')){
                offerFeatureDetail.classList.remove('LOR-12-show');
                offerBtns.classList.remove('LOR-12-show');
                offerHead.classList.add('feature-margin-bottom');
                for (var i = 0; i < offerBtnsRR.length; ++i) {
                    offerBtnsRR[i].classList.remove('large-device');
                }
            }else {
                offerFeatureDetail.classList.add('LOR-12-show');
                offerBtns.classList.add('LOR-12-show');
                offerHead.classList.remove('feature-margin-bottom');
                for (var i = 0; i < offerBtnsRR.length; ++i) {
                    offerBtnsRR[i].classList.add('large-device');
                }
            }
          
            /*let offerSubscribeBtn = document.querySelector('.caas-offer-0 .offer-button-container.large-device');
            //let firstChildBtn = offerSubscribeBtn.firstElementChild;
            let offerFeatureContainer = document.querySelector('.caas-offer-0 .selected .offer-features-container');
            let offerHeadMargin = document.querySelector('.caas-offer-0 .offer-head');
          
            console.log('MyFunc');
            offerSubscribeBtn.classList.add('LOR-12-hide');
            //firstChildBtn.classList.add('LOR-12-hide');
            offerFeatureContainer.classList.add('LOR-12-hide');
            offerHeadMargin.classList.add('feature-margin-bottom');
            console.log('MyFunc 2');*/
                
                
            /*let offerHeader = document.querySelector('.caas-offer-0 .offer-head');
            let offerSubscribeBtn = document.querySelector('.caas-offer-0 .offer-button-container em.btn:first-of-type');
            let offerFeatureContainer = document.querySelector('.caas-offer-0 .selected.offer-features-container');
          
            console.log('MyFunc');
            offerSubscribeBtn.classList.add('LOR-12-hide');
            //offerFeatureContainer.classList.add('LOR-12-hide');
            console.log('MyFunc2');*/
          
          
          /*
            alert("Hello World!");
            var targetOfferFeatureCont = document.querySelector('.caas-offer-0 .selected.offer-features-container');
            var subscribeBtn = document.querySelector('.caas-offer-0 .offer-button-container em.btn:first-of-type');
            var offerSection = document.querySelector('.caas-offer-0 .selected.offer');
            
            targetOfferFeatureCont.classList.add('LOR-12-hide');
            subscribeBtn.classList.add('LOR-12-hide');
            offerSection.classList.add('feature-margin-bottom');
            if(!targetOfferFeatureCont.classList.contains('LOR-12-hide')) {
                alert('if');
                targetOfferFeatureCont.classList.add('LOR-12-hide');
                subscribeBtn.classList.add('LOR-12-hide');
                offerSection.classList.add('feature-margin-bottom');
            } else if(targetOfferFeatureCont.classList.contains('LOR-12-hide')) {
                alert('else if');
                targetOfferFeatureCont.classList.remove('LOR-12-hide');
                subscribeBtn.classList.remove('LOR-12-hide');
                offerSection.classList.remove('feature-margin-bottom');
            } else 
                alert('none');*/
        }
      
        function myFunction2() {
            console.log('Click happen');
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('ul.caas-offer-base', 'caas-offers', function() {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', function() {
                        createBanner();
                        console.log('working');
                    });
                });	
            });
        });
    })(window, document);
</script>