<style>
	.progress-container.sticky {
	    position: fixed;
	    top: 0;
	    width: 100%;
	    background-color: #fff;
	    z-index: 6;
	    padding-bottom: 20px;
	}
	caas-offers.sticky {
		padding-top: 134px;
	}
	h2.progress-header {
	    text-align: center;
	    text-transform: uppercase;
	}
	.step-name.blue {
		color: #277f9c !important;
		background-color: transparent !important;
	}
	.blue {
	    background-color: #277f9c !important;
	}
	.progress-bar-container {
	    margin: 0 24%;
	    display: flex;
	}
	.first-step, .second-step, .third-step {
	    display: inline-block;
	    width: 35%;
	}
	.first-step .step-start {
		border-radius: 5px 0 0 5px;
	}
	.third-step .step-end {
		border-radius: 0 5px 5px 0;
	}
	.step {
	    display: inline-block;
	    width: 40px;
	    text-align: center;
	    margin-right: 5px;
	}
	.step-start, .step-end {
	    display: inline-block;
	    width: calc((100% - 50px)/2);
	    margin-top: 19px;
	    height: 2px;
	    background-color: lightgrey;
	}
	.step-start {
		margin-right: 5px
	}
	.step-digit {
	    background-color: #fff;
        color: lightgrey;
        width: 40px;
        height: 40px;
        padding: 7px;
        text-align: center;
        border-radius: 20px;
        font-size: 20px;
        margin-left: auto;
        margin-right: auto;
        border: 2px solid lightgrey;
	}
	.step-digit.blue.active {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA0NS40MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT50aWNrPC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ii0wLjcyIiB5PSIzMy4xNyIgd2lkdGg9IjMxLjgxIiBoZWlnaHQ9IjExLjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMS44NCAtNy44OSkgcm90YXRlKDQ1KSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTAuNzQiIHk9IjI1LjY0IiB3aWR0aD0iNTMuMDkiIGhlaWdodD0iMTEuMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1LjcyIDE4LjQxKSByb3RhdGUoMTM1KSIvPjwvc3ZnPg==);
		background-repeat: no-repeat;
    	background-position: 8px;
    	background-size: 20px;
		color: transparent;
        border-color: #277f9c; 
	}

    .step-digit.blue {
        color: #fff;
        border-color: #277f9c; 
    }
	.step-name {
	    text-align: center;
	    text-transform: uppercase;
	    font-weight: 800;
	    color: lightgrey;
	}
	.step-line {
		display: flex;
	}
</style>

<script>
    (function() {
        let searchParams = new URLSearchParams(window.location.search);

        var newV21 = function() {
          var path = window.location.search;
          if (!searchParams.get('v21suffix')) {
                searchParams.set('v21suffix', '49-b');
                window.location.replace(window.location.origin + window.location.pathname + '?' + searchParams.toString());
          }
        };



        // Custom mutation observer
        function waitForElement(needle, haystack, callback) {
            // Select the node that will be observed for mutations
            var targetNode = document.querySelectorAll(haystack)[0];
            // Options for the observer (which mutations to observe)
            var config = {childList: true, subtree: true};

            // Callback function to execute when mutations are observed
            var observerCallback = function(mutationsList, observer) {
                for(var mutation of mutationsList) {
                    if (document.querySelectorAll(needle).length > 0) {
                        observer.disconnect();
                        callback();
                        break;
                    }
                }
            };

            // Create an observer instance linked to the observerCallback function
            var observer = new MutationObserver(observerCallback);

            // Start observing the target node for configured mutations
            observer.observe(targetNode, config);
        };

        // Add "Progress Bar" HTML to the page
        function progressSection() {
            var newElement = document.createElement('DIV');
            var container = document.querySelectorAll('.offers-container')[0];
            newElement.className = "progress-container";
            newElement.id = "progressContainer";
            if (document.querySelectorAll('.progress-container').length < 1){
                container.prepend(newElement);
            }

            var html = '<h2 class="progress-header">Get full digital access in minutes with 3 easy steps</h2> <div class="progress-bar-container"> <div class="first-step"> <div class="step-line"> <div class="step-start blue"></div> <div class="step"> <div class="step-digit blue active">1</div> </div> <div class="step-end"></div> </div> <div class="step-name blue">Select Offer</div> </div> <div class="second-step"> <div class="step-line"> <div class="step-start"></div> <div class="step"> <div class="step-digit">2</div> </div> <div class="step-end"></div> </div> <div class="step-name">Your Details</div> </div> <div class="third-step"> <div class="step-line"> <div class="step-start"></div> <div class="step"> <div class="step-digit">3</div> </div> <div class="step-end"></div> </div> <div class="step-name">Payment</div> </div> </div>';

            document.querySelectorAll('.progress-container')[0].innerHTML = html;
        }  
        
        // Track when selected element is scrolled into view
        function isScrolledIntoView(el) {
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;
            var stickyHeight = document.getElementById('progressContainer').offsetHeight;
            var isVisible = (elemTop <= (stickyHeight+150));
            return isVisible;
        }


        // When "Customer Detail" section is scrolled into view, move progress bar to start of second step
        function commandStep() {
            var element = document.querySelector('caas-command-form');

            window.addEventListener('scroll', function() {
                if ((isScrolledIntoView(element) && !document.querySelectorAll('.second-step .step-start')[0].classList.contains('blue'))) {
                    document.querySelectorAll('.first-step .step-end')[0].classList.add('blue');
                    document.querySelectorAll('.second-step .step-start')[0].classList.add('blue');
                    document.querySelectorAll('.second-step .step-digit')[0].classList.add('blue');
                    document.querySelectorAll('.second-step .step-name')[0].classList.add('blue');
                    detailStep();
                } else if (isScrolledIntoView(element)) {
                    detailStep();
                }
            })
        }
        // Track if user is known user or not
        function detailStep() {
            var textInput = document.querySelectorAll('caas-create-customer-form input:not([type="checkbox"]):not(.caas-auto-address-base)');
            
            // If "Create User" form is not visible, they are a known user
            if (textInput.length < 1) {
                completedCustomer();
            } else {
                unknownUser(textInput);
            }
        }



        // Track when user selects new contract
        function contractChange() {
            var textInput = document.querySelectorAll('caas-create-customer-form input:not([type="checkbox"]):not(.caas-auto-address-base)');
            var options = document.querySelectorAll('.btn.caas-offer-base, .offerClickArea');
            for(var l = 0; l < options.length; l++) {
                options[l].addEventListener('click', function() {
                    unknownUser();
                })
            } 
        }

        // If user is unknown, validate that all info has been entered, on every change to the form
        function unknownUser() {
            var textInput = document.querySelectorAll('caas-create-customer-form input:not([type="checkbox"]):not(.caas-auto-address-base)');

            for (var i = 0; i < textInput.length; i++) {
                textInput[i].addEventListener('change', function() {
                    var result = true;
                    for (var j = 0; j < textInput.length; j++) {
                        if ((textInput[j].value == '') || (textInput[j].value == 'false')) {
                            document.querySelectorAll('.second-step .step-digit.blue')[0].classList.remove('active');
                            result = false;
                            break;
                        } else {
                            result = true;
                        }
                        
                    }

                    // If all details have been entered, move the progress bar to the next step
                    if (result) {
                        completedCustomer();
                    }   
                })  
            }
        }

        // Track when the user clicks on the submit button, and move the progress bar to the next step
        function completedCustomer() {
            document.querySelectorAll('.second-step .step-digit.blue')[0].classList.add('active');
            userDetailSubmit()
        }

        // When user submits personal details move to verify mobile number
        function userDetailSubmit() {
            // Unknown user   
            if (document.querySelectorAll('#caas-create-customer-button-input').length > 0) {
                document.getElementById('caas-create-customer-button-input').addEventListener('click', function(){
                    verifyMobile();
                })
            // Known user   
            } else if (document.querySelectorAll('#caas-update-customer-button-input').length > 0) {
                document.getElementById('caas-update-customer-button-input').addEventListener('click', function(){
                    verifyMobile();
                })
            }
        }


        // Wait for mobile verification button to exist
        function deferMobile(method) {
            if (document.querySelectorAll('.caas-sms-form a.payment').length > 0) {
                method();
            } else {
                setTimeout(function() { deferElement(method); }, 50);
            }
        }

        
        function verifyMobile() {
            // If mobile verification is needed
            if (document.querySelector('.offer-tncs .caas-offer-selection').textContent.includes('12 month')) {
                deferMobile(function() {
                    //Wait for user to click submit button before moving to payment step
                    document.querySelector('caas-sms-form a.payment').addEventListener('click', function() {
                        startPayment();
                    })
                });
            // Mobile verification is not needed
            } else {
                startPayment();
            }
        };

        // Move progress bar to payment step
        function startPayment() {
            document.querySelectorAll('.second-step .step-end')[0].classList.add('blue');
            document.querySelectorAll('.third-step .step-start')[0].classList.add('blue');
            document.querySelectorAll('.third-step .step-digit')[0].classList.add('blue');
            document.querySelectorAll('.third-step .step-name')[0].classList.add('blue');
        }

        // Add functionality to make progress bar sticky to top of page, when scrolled below it
        function makeSticky() {
            var progress = document.querySelector('.progress-container');
            var rect = document.querySelectorAll('caas-hero-offer-base')[0].getBoundingClientRect()
            var posTop = rect.bottom + progress.offsetHeight + window.scrollY;

            window.addEventListener('scroll', function() {
                var yPos = window.scrollY;

                if ((yPos > posTop) && !progress.classList.contains('sticky')) {
                    progress.classList.add('sticky');
                    document.getElementsByTagName('caas-offers')[0].classList.add('sticky');
                } else if (yPos <= posTop) {
                    progress.classList.remove('sticky');
                    document.getElementsByTagName('caas-offers')[0].classList.remove('sticky');
                }
            })

            window.addEventListener('hashchange', function(event) {
                event.preventDefault();
                scrollToHashUrl(window.location.hash);
            }, false);
        };

        function scrollToHashUrl(hashStr) {
            var hashValue = hashStr ? hashStr.replace('#', '') : '';          //'#offers'
            var elemName = 'caas-' + hashValue;                               //'offers'
            var cHeight = 0;                                                  //'caas-offers'
            var lockOfferElem = false;
            var elem = document.querySelector(elemName);
            var offerSelection = document.querySelector('caas-offer-selection');
            var selectionContainer = document.getElementById('selection-form-offer');
            var offerSelectionBase = document.querySelector('caas-offer-selection-base');
            if (!elem) {
                return;
            }
            var posY = elem.offsetTop - 180;
            if (window.innerWidth < 768 && offerSelection) {
                if (elem.offsetTop - (selectionContainer.offsetTop + 50) > selectionContainer.clientHeight) {
                    cHeight = selectionContainer.clientHeight;
                    lockOfferElem = true;
                }
                if (offerSelectionBase) {
                    offerSelectionBase.lockElementPosition = lockOfferElem ? 'fixed' : '';
                }
            }

            setTimeout(function() {
                if (selectionContainer && elem.offsetTop < selectionContainer.offsetTop) {
                    posY = elem.offsetTop;
                } else if (selectionContainer && window.innerWidth < 768) {
                    if (elem.offsetTop - (selectionContainer.clientHeight + 50) < selectionContainer.offsetTop) {
                        posY = selectionContainer.offsetTop - 1;
                    } else if (offerSelectionBase && offerSelectionBase.lockElementPosition === 'fixed') {
                        posY = elem.offsetTop - cHeight;
                    }
                }
                window.scroll({ top: posY, left: 0, behavior: 'smooth' });
            }, 200);
        }   

        newV21();

        //Wait for neccessary elements to load, and then run the variant
        waitForElement('caas-subscription-form-template', 'caas-subscription-form', function() {
            waitForElement('caas-offers', 'caas-subscription-form-template', function() {
                waitForElement('caas-offers-base', 'caas-offers', function() {
                    waitForElement('.offers-container', 'caas-offers-base', function() {
                        progressSection();
                        makeSticky();
                        commandStep();
                    })  
                })  
            });
        });

    })();
</script>