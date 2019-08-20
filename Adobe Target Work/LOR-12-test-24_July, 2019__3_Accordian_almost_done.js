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
  .caas-offer-0 .offer-tncs-container {
    display: none;
  }
  /*.caas-offer-0 .offer-upfront-cost.large-device,*/
  /*--------------------------------*/
  .caas-offer-0 .selected .offer-features-container {
    /*display: none;*/
  }
  /*.caas-offer-0 .offer-features-container,*/
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
                padding: 20px;
                background-color: #fff;
                border: 1px solid #ddd;
                width: 100%;
                margin: 0px 0px 10px 0px;
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
                margin:0px;
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
                background-color: #bdc3c7;
                color: #7f8c8d;
            }
  
/*-----------------------------------------------------------------------*/
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

        function toggleItemHandler() {
            var accItem = document.getElementsByClassName('LOR-12-accordianItem');
            var accHD = document.getElementsByClassName('LOR-12-offer-head');
            for (i = 0; i < accHD.length; i++) {
                accHD[i].addEventListener('click', toggleItem, false);
            }
            function toggleItem() {
                var itemClass = this.parentNode.parentNode.parentNode.parentNode.className;
                for (i = 0; i < accItem.length; i++) {
                    accItem[i].className = 'offer-caas-offer style-scope caas-offers-base LOR-12-accordianItem close';
                }
                if (itemClass == 'offer-caas-offer style-scope caas-offers-base LOR-12-accordianItem close') {
                    this.parentNode.parentNode.parentNode.parentNode.className = 'offer-caas-offer style-scope caas-offers-base LOR-12-accordianItem open';
                }
            }
        }

        function offerHeadClickHandler() {
            let targetUl = document.querySelector('.caas-offers-1 ul.offers');
            targetUl.classList.add('accordionWrapper');
            let targetOfferAll_Li = document.querySelectorAll('.caas-offers-1 ul.offers li.offer-caas-offer');
            let targetOfferHead = document.querySelectorAll('.caas-offer-0 .offer-head');
            let targetOfferFeature = document.querySelectorAll('.caas-offer-0 .offer-features-container');
            for (var i = 0; i < targetOfferAll_Li.length; ++i) {
                targetOfferAll_Li[i].classList.add('LOR-12-accordianItem');
                targetOfferHead[i].classList.add('LOR-12-offer-head');
                targetOfferFeature[i].classList.add('LOR-12-feature');
                if(i == 0){
                    targetOfferAll_Li[i].classList.add('open');
                } else {
                    targetOfferAll_Li[i].classList.add('close');
                }
            }
            toggleItemHandler();
        }
      
        function offerCategoryClickHandler() {
            var offerCategory = document.getElementsByClassName('offer-category');
            for (i = 0; i < offerCategory.length; i++) {
                console.log('offerCategoryItemClick()' + i);
                offerCategory[i].addEventListener('click', offerCategoryItemClick, false);
                console.log('offerCategoryItemClick() ' + i + ' end');
            }
            function offerCategoryItemClick() {
                console.log('offerCategoryItemClick() start');
                offerHeadClickHandler();
                console.log('offerCategoryItemClick() end');
            }
            
            /*for (i = 0; i < offerCategory.length; i++) {
                console.log('offerCategoryClickHandler()' + i);
                offerCategory[i].addEventListener('click', function() {
                    console.log('offerCategoryClickHandler()' + i);
                    offerHeadClickHandler();
                });
            }*/
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('ul.caas-offer-base', 'caas-offers', function() {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', function() {
                        console.log('Start init');
                        myFunction();
                        createBanner();
                        console.log('Stop init');
                    });
                });	
            });
        });
    })(window, document);
</script>