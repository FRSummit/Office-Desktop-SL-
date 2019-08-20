<script>	
    (function(window, document) {
        console.log('Here I am!!!');
        let searchParams = new URLSearchParams(window.location.search);
        const TCOGURL = 'https://a.tcog.news.com.au/component/article/story-preview-';
        const TCOGPARAM = '?esi=true&t_product=consumer-commerce&t_output=json';

        function newV21() {
            const path = window.location.search;
            if (!searchParams.get('v21suffix')) {
                searchParams.set('v21suffix', 'frs-b');
                window.location.replace(window.location.origin + window.location.pathname + '?' + searchParams.toString());
            }
        };

        newV21();

        /**
        * adds body class
        **/
        function addBodyClass() {
            document.body.classList.add('LOR56B');
        }

        /**
        * @param needle
        * @param haystack
        * @param callback
        **/
        function waitForElement(needle, haystack, callback) {
            let targetNode = document.querySelectorAll(haystack)[0];
            let config = {childList: true, subtree: true};

            let observerCallback = function(mutationsList, observer) {
                for(let mutation of mutationsList) {
                    if (document.querySelectorAll(needle).length > 0) {
                        observer.disconnect();
                        callback();
                        break;
                    }
                }
            };

            let observer = new MutationObserver(observerCallback);
            observer.observe(targetNode, config);
        }

        /**
        * @return articleId (string)
        **/
        function getArticleId() {
            const dest = searchParams.get('dest');
            
            if (dest) {
                const articleUrl = new URL(dest);
                const articleId = articleUrl.pathname.split('/').pop();

                return articleId;
            }
            
            return;
        }

        /**
        * @parameter articleId (string)
        * @return requestUrl (string)
        **/
        function buildTcogUrl(articleId) {
            let requestUrl = null;
            
            if (articleId) {
                requestUrl = encodeURI(TCOGURL + articleId + TCOGPARAM);
            }

            return requestUrl;
        }

        /**
        * function to create element without document
        * @parameter element (string)
        * @return Node
        **/
        function createNode(element) {
            return document.createElement(element);
        }

        /**
        * @parameter (string)
        * @return 
        **/
        function strip(html) {
            let tmp = document.createElement("DIV");
            tmp.innerHTML = html;

            return tmp.textContent || tmp.innerText || "";
        }

        /**
        * Sets exiting content to display none
        **/
        function hideOldContent() {
            document.querySelector('caas-hero-offer').style.display = 'none';
        }

        /**
        * Change the main article data
        * @param data
        **/
        function changeArticleData(data) {///////////////////////////////////////Not Working////////////////////////
           console.log('Small HTML design');
            const articleTitleText = data.subtitle;
            const articleDescription = strip(data.subscriptionSummary);
            let header = document.querySelector('caas-header');

            if (header && !document.getElementById('mainArticle') && articleTitleText && articleDescription) {
                let mainArticle = createNode('DIV');
                mainArticle.id = 'mainArticle';

                header.after(mainArticle);

                let articleContent = document.getElementById('mainArticle');

                if (typeof articleContent != 'undefined') {
                    const articleHTML = '<div id="articleImageHolder"></div><div id="articleTitle"><div id="innerWrapper"><h2 id="articleTitleText"></h2></div></div><p id="articleDescription"></p>';

                    articleContent.innerHTML = articleHTML;
                }

                if (document.getElementById('articleImageHolder')) {
                    let articleImage = createNode('IMG');
                    articleImage.id = 'articleImage';

                    document.getElementById('articleImageHolder').append(articleImage);
                    document.getElementById('articleTitleText').textContent = articleTitleText;
                    document.getElementById('articleDescription').textContent = articleDescription;

                    let image = document.getElementById('articleImage');

                    if (data.related.length >= 3 && data.related[2].link && typeof image !== 'undefined') {
                        image.src = data.related[2].link;
                    }

                    changeMasterOffer(); // as article correctly added we can change the offer
                }
            }
           console.log('Small HTML design-end');
        }

        /**
        * change the master offer
        **/
        function changeMasterOffer() {///////////////////////////////////////Not Working////////////////////////
           console.log('Large HTML design');
            const masthead = window.location.hostname;
            let container = document.querySelector('#mainArticle');
            let offerContainer = document.getElementById('masterOffer');

            if (!offerContainer && masthead) {
              console.log(window);
              console.log(window.location.hostname);
              console.log('Hello, this is the location: ' + window.location.hostname);
                let html = '<div class="hero-offer-content"><div class="hero-breach-message-container"><h2 class="caas-breach-message-base">There is more to this story <span>But it is a member-only story. Subscribe today to unlock it and more...</span></h2></div><div class="hero-offer-details-container"><div class="hero-offer-details"><div class="hero-offer-features-content"><div class="hero-offer-features-item hero-offer-features-item-details"><div id="fullDigital"><img class="hero-offer-device-image" src="https://myaccount.news.com.au/bizopsimages/offersets/images/heraldsun/pack-digital.png"><h3>Full Digital Access</h3></div><ul><li><p>Unlimited access to ${window.location.hostname} on desktop, tablet and mobile</p></li><li><p>Full access across our News+ Network, SuperCoach Stats and more</p></li><li><p>Exclusive <span class="premium">Rewards</span>^</p></li></ul></div></div></div><div class="hero-button-container"><button class="subscribe button">Subscribe Now</button><button class="login style-scope caas-login-button-base"><span class="style-scope caas-login-button-base">Login</span></button></div></div></div>';
                
                let masterOffer = createNode('DIV');
                masterOffer.id = 'masterOffer';
                masterOffer.innerHTML = html;
                container.after(masterOffer);
            }
           console.log('Large HTML design-end');
        }

        /**
        * @parameter articleId (string)
        * @return response (json)
        **/
        function requestArticle(articleId) {
            let requestUrl = buildTcogUrl(articleId);

            if (requestUrl) {
                fetch(requestUrl)
                .then(function(response) {
                    // wait for tcog response before we make changes
                    return response.json();
                })
                .then((article) => {
                    waitForElement('caas-subscription-form-template', 'caas-offers', () => {
                        addBodyClass();
                        changeArticleData(article.data);
                        hideOldContent();
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
        /*-------------------------test FRS--------------------------------*/
        function designFRSTest() {
            let newDiv = document.createElement('DIV');
            let appendTo = document.querySelector('.caas-breach-message-0 h2');
            newDiv.className = "limitedOffer";
            newDiv.innerText = "NO LOCK-IN CONTRACT";
            appendTo.appendChild(newDiv);
            return newDiv;
        }
        /*-------------------------test FRS--------------------------------*/

        /**
        * init function
        **/
        function init() {
            let articleId = getArticleId();
            //designFRSTest();
            
            if (articleId) {
                requestArticle(articleId);
            }
        }

        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('ul.caas-offer-base', 'caas-offers', function() {
                    waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', function() {
                        init();
                        designFRSTest(); 
                        console.log('Working');
                    });
                });	
            });
        });

        /*waitForElement('caas-subscription-form-template', 'caas-subscription-form', () => {
            waitForElement('caas-header', 'caas-subscription-form-template', () => {
                init();
                console.log('Working');
            });
        });*/
    })(window, document);
</script>