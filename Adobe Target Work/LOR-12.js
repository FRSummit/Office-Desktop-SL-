<style>
    @media (min-width: 768px){
      .caas-offers-1 ul.offers {
        display: block;
        max-width: 980px;
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
    width: 25%;
    right: 4%;
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
  .caas-offer-0 .offer-features-container .offer-features li {
    border-top: 0;
    height: auto;
    width: 40%;
  }
  /*-----------------Test-------------------------*/
  /*.caas-offer-0 .offer-features-container .offer-features li:nth-last-child(-n+10) {
    border-top: 0;
    display: inline-block;
    height: auto;
    position: absolute;
    top: 0;
    left: 33%;
    max-width: 360px;
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
  .caas-offer-0 .offer-features-container .offer-features li:nth-child(n+12) {
    left: 33%;
  }
</style>

<script>	
    (function(window, document) {
        let searchParams = new URLSearchParams(window.location.search);

        var newV21 = function() {
            var path = window.location.search;
            if (!searchParams.get('v21suffix')) {
                searchParams.set('v21suffix', '12-b');
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

        function myFunction() {
            return newDiv;
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('ul.caas-offer-base', 'caas-offers', function() {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', function() {
                        //myFunction();
                    });
                });	
            });
        });
    })(window, document);
</script>