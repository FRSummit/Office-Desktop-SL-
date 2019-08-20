<style>
    .limitedOffer {
        text-transform: uppercase;
        font-size: 0.85em;
        background-color: #ED821C;
        color: #fff;
        display: block;
        margin: 0;
        text-align: center;
        padding: 3px;
        font-family: "Roboto Condensed Bold", "Arial", "Helvetica", "sans-serif";
    }
    @media (min-width: 768px) {
        .offer .limitedOffer {
            outline: solid #ED821C 1px;
        }
    }
</style>

<script>	
    (function(window, document) {
        let searchParams = new URLSearchParams(window.location.search);

        var newV21 = function() {
            var path = window.location.search;
            if (!searchParams.get('v21suffix')) {
                searchParams.set('v21suffix', '48-b');
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
            let newDiv = document.createElement('DIV');

            newDiv.className = "limitedOffer";
            newDiv.innerText = "Limited time only";

            return newDiv;
        }

        function addHeroBanner() {
            let hero = document.querySelector('.hero-offer-details-container .hero-offer-details');

            if (hero && !hero.querySelector('.limitedOffer')) {
                let banner = createBanner();
                hero.before(banner);
            }
        }

        function addOfferBanner() {
            let offers = document.querySelectorAll('.offers-container .offers .offer');
            
            if (offers) {
                offers.forEach((offer) => {
                    if (!offer.querySelector('.limitedOffer')) {
                        let banner = createBanner();
                        offer.querySelector('.offer-head').before(banner);
                    }
                });
            }
        }

        function categoriesObserve() {
            let targetNode = document.querySelector('.offers-container .offers');
            let config = {childList: true, subtree: true};

            let observerCallback = (mutations, observer) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach((v, i) => {
                            if (typeof mutation.addedNodes[i].classList !== 'undefined' &&
                                mutation.addedNodes[i].classList.contains('offer-caas-offer')) {
                                addOfferBanner();
                            }
                        });
                    }
                });
            };

            let observer = new MutationObserver(observerCallback);

            observer.observe(targetNode, config);
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('ul.caas-offer-base', 'caas-offers', function() {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', function() {
                        addHeroBanner();
                        addOfferBanner();
                        categoriesObserve();
                    });
                });	
            });
        });
    })(window, document);
</script>