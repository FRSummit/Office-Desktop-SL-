<style>
    @media (min-width: 768px){
      .caas-offers-1 ul.offers {
          display: block;
          max-width: 980px;
      }
      .caas-offer-0 .offer-features-container .offer-features ul {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 130px;
          width: 77%;
          margin: 0;
      }

      .caas-offer-0 .offer-features-container .offer-features li {
          width: 51%;
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
      }
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
          margin-left: 22px;
          margin-bottom: 8px;
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
          margin-bottom: 0;
      }
      .caas-offer-0 .offer-features-container {
          display: block;
          width: 100%;
      }
      .caas-offer-0 .offer-costing .price-container {
          padding-top: 0;
      }
      li.offer-caas-offer.style-scope.caas-offers-base.LOR-12-accordianItem.open {
          margin-top: 1px;
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
        background: #f15b46;
        /*color: #fff;
        background: #f15b46;*/
    }
  .caas-offer-0 .offer-features-container .offer-features li:first-of-type {
    height: auto;
  }
  .caas-offer-0 .offer-features-container .offer-features li .desc p {
    margin: 0;
  }
  .caas-offer-0 .offer-features-container .offer-features li.no-desc,
  .caas-offer-0 .offer-features-container .offer-features li.learn-more,
  .caas-offer-0 .offer-tncs-container {
    display: none;
  }
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
  
  /*----------------------------Accordian Style--------------------------------------*/
  
        .LOR-12-accordianItem{
                float:left;
                display:block;
                width:100%;
                box-sizing: border-box;
                font-family:'Open-sans',Arial,sans-serif;
            }
            .LOR-12-offer-head {
                cursor:pointer;
                margin:0px 0px 10px 0px;
                padding:10px;
                background:#2980b9;
                color:#fff;
                width:100%;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                box-sizing: border-box;
            }
            .close .LOR-12-feature {
                height:0px;
                transition:height 1s ease-out;
                -webkit-transform: scaleY(0);
                -o-transform: scaleY(0);
                -ms-transform: scaleY(0);
                transform: scaleY(0);
                float:left;
                display:block;
            }
            .open .LOR-12-feature {
                padding: 10px;
                background-color: #fff;
                /*border-top: 1px solid #ddd;*/
                width: 100%;
                margin: 0px;
                display:block;
                -webkit-transform: scaleY(1);
                -o-transform: scaleY(1);
                -ms-transform: scaleY(1);
                transform: scaleY(1);
                -webkit-transform-origin: top;
                -o-transform-origin: top;
                -ms-transform-origin: top;
                transform-origin: top;
                -webkit-transition: -webkit-transform 0.4s ease-out;
                -o-transition: -o-transform 0.4s ease;
                -ms-transition: -ms-transform 0.4s ease;
                transition: transform 0.4s ease;
                box-sizing: border-box;
            }
            .open .LOR-12-offer-head {
                /*margin:0px;*/
                -webkit-border-top-left-radius: 3px;
                -webkit-border-top-right-radius: 3px;
                -moz-border-radius-topleft: 3px;
                -moz-border-radius-topright: 3px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                -webkit-border-bottom-right-radius: 0px;
                -webkit-border-bottom-left-radius: 0px;
                -moz-border-radius-bottomright: 0px;
                -moz-border-radius-bottomleft: 0px;
                border-bottom-right-radius: 0px;
                border-bottom-left-radius: 0px;
                /*background-color: #bdc3c7;
                color: #7f8c8d;*/
            }
/*-----------------------------------------------------------------------*/
/*----------------------------Box Style--------------------------------------*/
  .close .offer-button-container.caas-offer-base,
  .close .offer-details-container.caas-offer-base{
    display: none;
  }
  .caas-offer-0 .offer-head {
    overflow: hidden;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .close .caas-offer-0 .offer-head {
    margin-top: 0;
  }
  .caas-offer-0 .offer-hero-image {
    height: 66px;
  }
  .close .caas-offer-0 .offer-head {
    padding: 0px;
  }
  .caas-offer-0 .offer {
    margin: 0 auto;
  }
  .caas-offers-1 ul.offers {
    overflow: hidden;
  }
  .LOR-12-arrow {
    box-sizing: border-box;
    height: 14px;
    width: 14px;
    border-style: solid;
    border-color: #000;
    border-width: 0px 3px 3px 0px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
    position: absolute;
    right: 3.5%;
    top: 30%;
  }
  .close .LOR-12-arrow {
    transform: rotate(-45deg);
    top: 40%;
  }
/*-----------------------------------------------------------------------*/
  .caas-offer-0 .offer-button-container em.btn:first-of-type span:before,
  .caas-offer-0 .selected .offer-button-container em span:before{
    display: none;
  }
  .caas-offer-0 .offer-button-container em.btn:first-of-type span {
    text-indent: 0;
  }
  .LOR-12-hr {
    border-top: 1px solid #ddd;
    margin: 0 10px;
    margin-bottom: 14px;
  }
  .right-tick-container {
    background-color: #FFFFFF;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    top: 3px;
  }
  .right-tick {
    box-sizing: border-box;
    height: 10px;
    width: 6px;
    position: absolute;
    border-style: solid;
    left: 7px;
    top: 4px;
    border-color: #f15b46;
    border-width: 0px 2px 2px 0px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
  }
  .caas-offer-0 .selected .offer-button-container em span {
    color: #FFFFFF;
    display: inline-block;
  }
</style>

<script>
    (function(window, document) {
        let searchParams = new URLSearchParams(window.location.search);

        var newV21 = function() {
            //var path = window.location.search;//////////////////////////////////
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

        function toggleItemHandler() {
            var accItem = document.getElementsByClassName('LOR-12-accordianItem');
            var accHD = document.getElementsByClassName('LOR-12-offer-head');
            var offerSelection = document.getElementsByClassName('offer style-scope caas-offer-base');
            for (i = 0; i < accHD.length; i++) {
                accHD[i].addEventListener('click', toggleItem, false);
            }
            function toggleItem() {
                var itemClass = this.parentNode.parentNode.parentNode.parentNode.className;
                for (i = 0; i < accItem.length; i++) {
                    accItem[i].className = 'offer-caas-offer style-scope caas-offers-base LOR-12-accordianItem close';
                    offerSelection[i].className = 'offer style-scope caas-offer-base';
                }
                this.parentNode.parentNode.parentNode.parentNode.className = 'offer-caas-offer style-scope caas-offers-base LOR-12-accordianItem open';
                this.parentNode.className = 'offer selected style-scope caas-offer-base';
            }
        }

        function offerHeadClickHandler() {
            let targetUl = document.querySelector('.caas-offers-1 ul.offers');
            targetUl.classList.add('accordionWrapper');
            let targetOfferAll_Li = document.querySelectorAll('.caas-offers-1 ul.offers li.offer-caas-offer');
            let targetOfferHead = document.querySelectorAll('.caas-offer-0 .offer-head');
            let targetOfferFeature = document.querySelectorAll('.caas-offer-0 .offer-features-container');
            var defaultOffer = document.getElementsByClassName('offer style-scope caas-offer-base');
            for (var i = 0; i < targetOfferAll_Li.length; ++i) {
                targetOfferAll_Li[i].classList.add('LOR-12-accordianItem');
                targetOfferHead[i].classList.add('LOR-12-offer-head');
                targetOfferFeature[i].classList.add('LOR-12-feature');
                if(i == 0){
                    targetOfferAll_Li[i].classList.add('open');
                    defaultOffer[i].className = 'offer selected style-scope caas-offer-base';
                } else {
                    targetOfferAll_Li[i].classList.add('close');
                    defaultOffer[i].className = 'offer style-scope caas-offer-base';
                }
            }
            toggleItemHandler();
        }
      
        function offerCategoryClickHandler() {
            let offerCategory = document.getElementsByClassName('offer-category');
            for (j = 0; j < offerCategory.length; j++) {
                offerCategory[j].addEventListener('click', function() {
                    offerHeadClickHandler();
                });
            }
        }
      
        function createSeclectedTickIcon() {
            let selectedArea = document.querySelectorAll('.caas-offer-0 .offer-button-container em.btn:last-of-type span');
            selectedArea.forEach((tick) => {
                let tickSec = document.createElement('DIV');
                let rightTick = document.createElement('DIV');
                tickSec.className = "right-tick-container";
                rightTick.className = "right-tick";
                tickSec.appendChild(rightTick);
                tick.before(tickSec);
            });
        }
      
        function createDesign() {
            let offerFeatureSection = document.querySelectorAll('.caas-offer-0 .offer-features-arrow');
            let offerClickArea = document.querySelectorAll('.caas-offer-0 .offerClickArea');
            offerFeatureSection.forEach((offer) => {
                let createHr = document.createElement('DIV');
                createHr.className = "LOR-12-hr";
                offer.after(createHr);
            });
            offerClickArea.forEach((clickArea) => {
                let arrow = document.createElement('DIV');
                arrow.className = "LOR-12-arrow";
                clickArea.after(arrow);
            });
            createSeclectedTickIcon();
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('ul.caas-offer-base', 'caas-offers', function() {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', function() {
                        offerCategoryClickHandler();
                        offerHeadClickHandler();
                        createDesign();
                        console.log('init');
                    });
                });	
            });
        });
    })(window, document);
</script>