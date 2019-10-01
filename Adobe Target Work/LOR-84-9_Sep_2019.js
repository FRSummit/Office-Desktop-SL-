<style>
  .LOR84B #loginButton {
      display: inline-block;
      margin-left: 10px;
  }
  .LOR84B #loginButton .caas-login-button-0 .login {
      border: solid 2px #fff;
      text-decoration: none;
      font-size: 1em;
      background: transparent;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-offer-features-item ul li:before {
      top: -2px;
      font-weight: bold;
      font-size: 20px;
  }
  .LOR84B .caas-hero-offer-0 .hero-offer-article-preview-container.small-device {
      display: none;
  }
  
  .LOR84B .caas-hero-offer-0 .hero-offer-article-preview-container.large-device {
      display: none;
  }
  .LOR84B .caas-hero-offer-0 .hero-offer-content .hero-button-container {
      display: block;
      margin: 0 auto;
      width: 100%;
      text-align: center;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-button-container .button {
      letter-spacing: 0.1rem;
      outline: none;
      border-radius: 0;
      text-transform: capitalize;
      font-size: 15px;
      padding: 11px 27px;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-button-container .login {
      margin-right: 20px;
      background: #237d9b;
      line-height: 1;
      outline: none;
      border-radius: 0;
      font-size: 15px;
      padding: 11px 27px;
      min-width: 126px;
      position: relative;
      border: 0;
      color: #fff;
      letter-spacing: 2px;
      font-family: "Times Classic Display", Arial, Helvetica, sans-serif;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-button-container .button.subscribe {
      background: #f15b46;
      line-height: 1;
      outline: none;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-button-container .button.other {
      display: none;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-offer-title {
      color: #fff;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-offer-conditions {
      color: #fff;
  }
  .LOR84B .caas-hero-offer-details-0 .hero-offer-details {
      background: transparent;
      border: 1px solid red;
  }
  .LOR84B .caas-breach-message-0 .breach-container h2 span {
      display: none;
  }

  /***************************/

  @media (max-width: 767px){
      .LOR84B .caas-hero-offer-0 .hero-offer-container {
          padding: 24px 10px 30px;
      }
      .LOR84B .caas-hero-offer-0 .article .hero-breach-message-container {
          padding-bottom: 20px;
      }
      .LOR84B .caas-hero-offer-0 .article .hero-breach-message-container h2 {
          text-align: center;
          font-size: 16px;
      }
      .LOR84B .caas-hero-offer-details-0 .hero-offer-features-item ul li {
          font-size: 12px;
          color: #DEE6EA;
          padding-left: 28px;
          margin-bottom: 13px;
          letter-spacing: 1px;
      }
      .LOR84B .caas-hero-offer-details-0 .hero-offer-features-item ul li em {
          font-style: normal;
      }
      .LOR84B .caas-hero-offer-details-0 .hero-offer-features-item ul li p {
          font-size: 12px;
      }  
  }
  
</style>

<script>	
  ((window, document) => {
      const searchParams = new URLSearchParams(window.location.search);

      function newV21() {
          if (!searchParams.get('v21suffix')) {
              searchParams.set('v21suffix', '84-b');
              window.location.replace(window.location.origin + window.location.pathname + '?' + searchParams.toString());
          }
      }

      newV21();

      /*
      * adds body class
      */
      function addBodyClass() {
        document.body.classList.add('LOR84B');
      }

      /*
      * @param needle
      * @param haystack
      * @param callback
      */
      function waitForElement(needle, haystack, callback) {
          const targetNode = document.querySelectorAll(haystack)[0];
          const config = { childList: true, subtree: true };

          const observerCallback = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
              if (mutation.type === 'childList' && document.querySelectorAll(needle).length > 0) {
                observer.disconnect();
                callback();
                break;
              }
            }
          };

          const observer = new MutationObserver(observerCallback);

          observer.observe(targetNode, config);
      }

      /*
      * change the master offer
      */
      function changeMasterOffer() {
        const masthead = window.location.hostname;

        if (masthead) {
          const btnSecton = document.querySelector('.caas-hero-offer-0 .hero-offer-content .hero-offer-features-item .hero-button-container');
          const offer = document.querySelector('.caas-hero-offer-0 .hero-offer-content .hero-offer-features-content');
          offer.appendChild(btnSecton);

          const subscribeBtn = document.querySelector('button.subscribe');
          const loginBtn = document.querySelector('.hero-offer-links button.login');
          const btnContainer = document.querySelector('.hero-button-container');

          if (loginBtn) {
            loginBtn.textContent = 'Log in';
            btnContainer.append(loginBtn);
            loginBtn.after(subscribeBtn);
          }
        }
      }

      waitForElement('caas-subscription-form-template', 'caas-subscription-form', () => {
        waitForElement('caas-offers', 'caas-subscription-form-template', () => {
          waitForElement('ul.caas-offer-base', 'caas-offers', () => {
            waitForElement('li.offer-caas-offer', 'ul.caas-offer-base', () => {
              addBodyClass();
              changeMasterOffer();
            });
          });
        });
      });
    })(window, document);
</script>