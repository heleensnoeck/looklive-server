// show section
(function () {
     "use strict";

     // var htmlElements = {
     //    product: document.querySelector('.product')
     // };

     // htmlElements.poduct
    var product = document.querySelector('.product');
    
    var launcher = {
        init: function() {
            productPage.show();
            lazyLoad.start();

        }
     };

     var productPage = {
            show: function() {
                var product = document.querySelectorAll('.product');

                if ( product.length ) {
                    product[0].classList.add('product-active');

                    var productIndicator = document.querySelectorAll('.product-indicator');
                    var uuid = product[0].attributes[1].nodeValue;
                    productIndicator[0].setAttribute('data-uuid', uuid);
                    productIndicator[0].classList.add('product-indicator-active');

                    Array.prototype.forEach.call(productIndicator, function(productIndicator) {

                        productIndicator.addEventListener('click', showRelatedContent, false);

                        function showRelatedContent() {

                            var id = this.attributes[2].nodeValue;
                            
                            var activeEl = document.querySelector('.product-indicator-active');
                            activeEl.classList.remove('product-indicator-active');

                            var activeProduct = document.querySelector('.product-active');
                            activeProduct.classList.remove('product-active');

                            this.classList.add('product-indicator-active');

                            var p = document.querySelector(".product[data-uuid='" + id + "']");
                            p.classList.add('product-active');

                        }

                    }); 
                }

            }
    };

    var lazyLoad = {

        start: function() {
            var currentPage = 0;
            var isLoading = false;

            window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {

                        function apiCall(url) {

                            return new Promise(function(resolve, reject) { // Resolve = .then && Reject = .catch;

                                var request = new XMLHttpRequest();

                                request.onload = function(event) {
                                    resolve(event.currentTarget.responseText);
                                }
                                
                                request.onerror = reject;

                                request.open('GET', url, true);
                                request.send();
                            });

                        }

                        if(isLoading == false) {
                            isLoading = true;
                            
                            animatie.start(); // start animatie

                            setTimeout(function() { 
                                currentPage++
                                
                                 apiCall('/api/feed/?p='+currentPage).then(function(response) {
                                    var el = document.getElementsByClassName('main')[0];
                                    el.innerHTML += response;
                                    isLoading = false;
                                    // stop de animatie
                                    animatie.stop();
                                    
                                });

                            }, 1000);    

                        }     
                }
            };
        } 
    }

    var animatie = {
        start: function() {
            document.getElementById('animation').classList.remove('hide');
            
            console.log(animation);
            
            var tl = new TimelineLite();

            tl.staggerFrom(".dust", 0.2, { //ga naar met een snelheidv an
                opacity: 0, 
                y: 20, // kom iets omhoog voor een leuk effect.
                repeat: 1,
                ease: SlowMo.ease.config(1, 1, false),
                delay:2
            },0.1); //geeft een delay mee 

              console.log('animatie gestart');
            

            tl.to("#rocket", 0.5, {
                // opacity:0,
                // transformOrigin: 50% 50%,
                y: -300,
                delay: 1
              },1.0);

            console.log('animatie stop');

            tl.staggerTo(".dust-back", 0.2, { 
                opacity: 0,
                scale: 1.5, 
                y: 10,
                 ease: SlowMo.ease.config(1, 1.2, false),
                 delay:2
            },0.1);


            tl.to("#rocket", 0.5, {
                opacity:0,
              });
            tl.timeScale(7);
        },
        stop: function() {
            document.getElementById('animation').classList.add('hide');
        }

    };

    launcher.init();              
 }());

    // nieuw
//     function ready(fn) {
//        if (document.readyState !== 'loading') {
//            fn();
//        } else {
//            document.addEventListener('DomCententLoaded', fn);
//        }
//     }

//     function appearance() {
//         var firstProduct = document.querySelector('.product');
//         var firstIndicator = document.querySelector(
//             '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
//         );
//         var indicators = document.querySelectorAll('.product-indicator');

//         firstProduct.classList.add('product-active');
//         firstIndicator.classList.add('product-indicator-active');

//         Array.prototype.forEach.call(indicators, function (el) {
//             el.addEventListener('click', function (event) {
//                 var id = event.currentTarget.getAttribute('data-uuid');

//                 document
//                     .querySelector('.product-active')
//                     .classList.remove('product-active');

//                 document
//                     .querySelector('.product-indicator-active')
//                     .classList.remove('product-indicator-active');

//                 document
//                     .querySelector('.product[data-uuid="' + id + '"]')
//                     .classList.add('product-active');

//                 event.currentTarget.classList.add('product-indicator-active');
//             });
//         });
//     }

//     ready(function () {
//         if (/appearance/.test(window.location.href)) {
//             appearance();
//         }
//     });
// }());

// ready(function() {
//     if (appearance.test) {}
// })







