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
            // productPage.change();
            lazyLoad.start();

        }
     };
  
     // nieuw klaar
    // var productPage = {
    //       change: function(e) {
    //          var cur = e.currentTarget;
    //          document.querySelector('.product-indicator-active').classList.remove('product-indicator-active');
    //          cur.classList.add('product-indicator-active');
    //          document.querySelector('.product-active').classList.remove('product-active');
    //          document.querySelector('.product[data-uuid="' + cur.getAttribute('data-uuid') + '"]').classList.add('product-active');
    //      },
         
    //       init: function() {
    //          var productAttr = product.getAttribute('data-uuid'), //verwijst dit nu naar product?
    //              indicator = document.querySelector('.product-indicator[data-uuid="' + productAttr + '"]'),
    //              indicators = document.getElementsByClassName('product-indicator');
     
    //          product.classList.add('product-active');
    //          indicator.classList.add('product-indicator-active');
     
    //          [].forEach.call(indicators, function (elem) {
    //              elem.addEventListener('click', change, false);
    //          });
    //      },
         
    //      if (document.querySelector && window.addEventListener) {
    //          if (product) {
    //              init();
    //          }
    //      }
    // }; // sluit productpage

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
                                    
                                });

                            }, 1000);    

                        }     
                }
            };
        } 
    }

    var animatie = {
        start: function() {
            console.log('hoi');
            
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







