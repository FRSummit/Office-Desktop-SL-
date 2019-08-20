<style>
    .limitedOffer {
        text-transform: uppercase;
        font-size: 0.85em;
        background-color: #8AC036;
        color: #fff;
        display: block;
        margin: 0;
        text-align: center;
        padding: 3px;
        font-family: "Roboto Condensed Bold", "Arial", "Helvetica", "sans-serif";
    }
    .lock-icon {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMCI+PGltYWdlIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMCIgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFlQ0FRQUFBQ2NKeFp1QUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFIZEVsTiBSUWZqQndzUEtCS2NuUUJDQUFBQkRVbEVRVlE0eSsyUnNVcENjUnlGdjc4WlNqUzFoR0JQSURqMENrMU9ObHJ2ME96Z1kvUUViaTFDIHVFWnQzVkh5QVVLa1ZRSkJJaVg5R3JUeTZpMnZRMDJkN1J6T04vek9EN1pVV0EwODRKUVRqb0FuYnJrT3p6L1FacXc3ZEZsRDYyYSsgcStkc202UzJ1V1NndVNpMHJGcTBhTlhXSW1rbTFTdXFqcTNGMHBwalZTdnJRS1JxWXkxdnFCcXR4Z1ZuYXMrZE5XREhuanF6TVBjZiBDNVFKUUJTbWE3dFBpWUJBT1E0Y0F0Qk5YS083MVBnRWRnRjRUUVFlQUhpY215eWJkY01aYitFK05SRGs2c3RsTmdOeGJRMWtBZHhiIGpIWWMvM05NSSs3Q0N3Qm03WmhHSGVjWFcwcFZWeTNOYjhpblBpRC9GeXY5QTc4RzlKbWs2azdvUXhiQ3dITXUyTjlRSDNFWkJ2QU8gNnBucEZvdFc2aFVBQUFBbGRFVllkR1JoZEdVNlkzSmxZWFJsQURJd01Ua3RNRGN0TVRGVU1qSTZOREE2TVRjdE1EYzZNRERFaWl0RyBBQUFBSlhSRldIUmtZWFJsT20xdlpHbG1lUUF5TURFNUxUQTNMVEV4VkRJeU9qUXdPakU0TFRBM09qQXdRNS9qRXdBQUFBQkpSVTVFIHJrSmdnZz09Ii8+PC9zdmc+);
        width: 13.6px;
        height: 13.6px;
        background-repeat: no-repeat;
        margin-right: 5px;
        background-size: contain;
        display: inline-block;
    }
    @media (min-width: 768px) {
        .offer .limitedOffer {
            outline: solid #8AC036 1px;
        }
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
            let limitedOfferDiv = document.createElement('DIV');
            let limitedOfferIconDiv = document.createElement('DIV');
            let limitedOfferText = document.createElement('span');
          
            limitedOfferDiv.className = "limitedOffer";
            limitedOfferIconDiv.className = "lock-icon";
            limitedOfferDiv.appendChild(limitedOfferIconDiv);
            limitedOfferText.className = "limitedOfferText";
            limitedOfferText.innerText = "NO LOCK-IN CONTRACT";
            limitedOfferDiv.appendChild(limitedOfferText);
            return limitedOfferDiv;
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
            
            if (offers.length > 0) {
                offers.forEach((offer) => {
                    if (!offer.querySelector('.limitedOffer')) {
                        let banner = createBanner();
                        offer.querySelector('.offer-head').before(banner);
                    }
                });
            }
        }

        function removeOfferBanner() {
            let limitedBanners = document.querySelectorAll('.offers-container .offers .offer .limitedOffer');
            
            if (limitedBanners.length > 0) {
                limitedBanners.forEach((banner) => {
                    banner.remove();
                });
            }
        }

        function categoriesObserve() {
            let targetNode = document.querySelector('.offers-container .offers');
            let config = {childList: true, subtree: true};
            
            let introCategory = document.querySelector('.offer-categories .offer-category caas-offer-category');

            let observerCallback = (mutations, observer) => {
                if (introCategory.classList.contains('active')) {
                    addOfferBanner();
                    test();
                } else {
                    removeOfferBanner();
                }
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