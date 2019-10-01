<style>
    .LOR86B .hero-offer-device-image.caas-hero-offer-details-base {
        display: none;
    }
    .LOR86B .caas-hero-offer-1 .hero-offer-container {
        background-image: url("https://newscorpau.experiencecloud.adobe.com/content/dam/mac/newscorpau/lor-86/newcastlebeach.png");
    }
    .LOR86B .hero-offer-features-item-image.caas-hero-offer-details-base {
        background-image: url("https://newscorpau.experiencecloud.adobe.com/content/dam/mac/newscorpau/lor-86/whitelogos.png");
        width: 200px !important;
    }
    .LOR86B .caas-offer-0 .offer-features-container .offer-features ul, .caas-offer-0 .offer-features-container .offer-features li {
        font-size: 13px;
    }
    .LOR86B .hero-offer-details p.hero-offer-title strong {
        font-family: "Roboto Condensed Bold", "Arial", "Helvetica", "sans-serif";
    }
    .LOR86B caas-header .header-logo img.caas-header-base {
        display: none;
    }
    @media (min-width: 768px){
        .LOR86B .caas-header-0 .header-logo img {
            width: auto;
            height: 80px;
        }
        .LOR86B .caas-header-0 .header-logo {
            padding: 10px 0;
        }
        .LOR86B .caas-breach-message-0 h2 {
            font-size: 38px;
        }
        .LOR86B .caas-breach-message-0 .breach-container h2 span {
            font-size: 19px;
            padding-top: 12px;
        }
        .LOR86B .caas-hero-offer-details-0 .hero-offer-title {
            font-size: 26px;
        }
        .LOR86B .hero-offer-features-item-image.caas-hero-offer-details-base {
            background-repeat: no-repeat;
            background-size: contain;
            margin: 20px 0;
        }
    }
    @media (max-width: 768px){
        .LOR86B .caas-breach-message-0 h2 {
            font-size: 27px;
        }
        .LOR86B .caas-breach-message-0 h2 span {
            font-size: 22px;
        }
        .LOR86B .caas-hero-offer-details-base {
            display: none;
        }
        .LOR86B .caas-offer-0 .offer-features-container .offer-features li .desc {
            color: #000;
        }
        .LOR86B ul.offers.style-scope.caas-offers-base {
            list-style-type: none;
            padding-left: 0;
        }
        .LOR86B .caas-hero-offer-1 .hero-offer-container {
            padding-bottom: 12px;
        }
        .LOR86B .caas-offers-1 .offers-container.altTheme {
            background: #000;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .LOR86B .caas-offers-1 .altTheme .offers-links a, 
        .LOR86B .caas-offers-1 .altTheme .offers-links button {
            color: #fff;
        }
        .LOR86B caas-offers h3.offers-header {
            display: none;
        }
        .LOR86B .hero-breach-message-container {
            padding-top: 0;
        }
        .LOR86B .hero-breach-container caas-breach-message {
            padding: 0;
        }
        .LOR86B .offer-heading #mobileTC {
            font-family: "Roboto", "Helvetica", "Arial", "Helvetica", "sans-serif";
            font-size: 12px;
            text-transform: none;
            margin-top: 5px;
            width: calc(100% - 90px);
        }
    }
</style>
  
<script>	
    ((window, document) => {
        function newV21() {
            const searchParams = new URLSearchParams(window.location.search);
            if (!searchParams.get('v21suffix')) {
                searchParams.set('v21suffix', '86-b');
                window.location.replace(window.location.origin + window.location.pathname + '?' + searchParams.toString());
            }
        }

        newV21();

        function waitForElement(needle, haystack, callback) {
            const targetNode = document.querySelectorAll(haystack)[0];
            const config = { childList: true, subtree: true };

            const observerCallback = (mutationsList, observer) => {
                for (let i = 0; i < mutationsList.length; i += 1) {
                    if (document.querySelectorAll(needle).length > 0) {
                        observer.disconnect();
                        callback();
                        break;
                    }
                }
            };

            const observer = new MutationObserver(observerCallback);
            observer.observe(targetNode, config);
        }

        function addBodyClass() {
            document.body.classList.add('LOR86B');
        }

        function updateLogo() {
            const header = document.querySelector('.header-logo a');
            const newLogo = document.createElement('IMG');
            newLogo.id = 'newcastleLogo';
            newLogo.src = "https://newscorpau.experiencecloud.adobe.com/content/dam/mac/newscorpau/lor-86/newcastlenewslogo.png";
            if (typeof header !== 'undefined' && header !== null ) {
                header.append(newLogo);
            }
        }

        function updateBreachHeader() {
            const oldHeader = document.querySelector('h2.caas-breach-message-base');
            const newHeader = 'There\'s more to this story at the Newcastle News <span> You don\'t have full access to read it. Subscribe today to enjoy local news, sport and entertainment from your community </span>';
            if (typeof oldHeader !== 'undefined' && oldHeader !== null) {
                oldHeader.innerHTML = newHeader;
            }
        }

        function updateBreachPoint() {
            const oldPoint = document.querySelector('.caas-hero-offer-details-base ul li');
            const newPoint = 'Unlimited Digital Access to The Newcastle News and The Daily Telegraph';
            if (typeof oldPoint !== 'undefined' && oldPoint !== null) {
                oldPoint.innerText = newPoint;
            }
        }

        function updateListPoints() {
            const newPointArray = [
                'Unlimited access to The Newcastle News, plus access to The Daily Telegraph and the News+ network on desktop, tablet and mobile',
                'The best local news, sport, entertainment and more from The Newcastle News and The Daily Telegraph',
                'Access to The Daily Telegraph mobile and tablet app',
            ];
            const offers = document.querySelectorAll('.offers .offer');

            offers.forEach((offer) => {
                const oldPoints = offer.querySelectorAll('.offer-features ul li');
                oldPoints.forEach((point, i) => {
                    if (i <= 2) { // update the first three only
                        let pointSpan = point.querySelector('span');
                        pointSpan.innerText = newPointArray[i];
                    }
                });
            });
        }

        function updateMobileConditions() {
            const newConditions = document.createElement('DIV');
            newConditions.id = 'mobileTC';
            newConditions.textContent = 'The Newcastle News Plus The Daily Telegraph';
            const refNode = document.querySelector('.offer .offer-heading .title');
            if (typeof refNode !== 'undefined' && refNode !== null) {
                refNode.nextSibling.before(newConditions);
            }
        }

        function categoriesEventHandler() {
            let categories = document.querySelector('.offer-categories');
            
            if (typeof categories !== 'undefined' && categories !== null) {
                categories.addEventListener('click', (el) => {
                    updateListPoints();
                });
            }
        }

        function mobileFeatureEventHandler() {
            let offerHeader = document.querySelector('.offers .offer .offer-heading');
            
            if (typeof offerHeader !== 'undefined' && offerHeader !== null) {
                offerHeader.addEventListener('click', (el) => {
                    updateListPoints();
                });
            }
        }

        function mobileDesign() {
            const offerSection = document.querySelector('.caas-offers-1 .offers-container .offers');
            const offerContainer = document.querySelector('.caas-hero-offer-1 .hero-offer-container');
            if (window.innerWidth <= 768) {
                offerContainer.appendChild(offerSection);
                updateMobileConditions();
                mobileFeatureEventHandler();
            }
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', () => {
            addBodyClass();
            waitForElement('caas-header', 'caas-subscription-form-template', () => {
                waitForElement('.header-logo', 'caas-header', () => {
                    updateLogo();
                });
            });

            waitForElement('caas-hero-offer', 'caas-subscription-form-template', () => {
                waitForElement('caas-hero-offer-base', 'caas-hero-offer', () => {
                    waitForElement('#container.hero-offer-container', 'caas-hero-offer', () => {
                        waitForElement('div.hero-offer-wrapper', '#container.hero-offer-container', () => {
                            waitForElement('h2.caas-breach-message-base', 'div.hero-offer-wrapper', () => {
                                updateBreachHeader();
                            });
                            updateBreachPoint();
                        });

                    });
                });
            });

            waitForElement('caas-offers', 'caas-subscription-form-template', () => {
                waitForElement('ul.caas-offer-base', 'caas-offers', () => {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', () => {
                        updateListPoints();
                        categoriesEventHandler();
                        mobileDesign();
                    });
                });
            });
        });
    })(window, document);
</script>