
;(function($){
	$(function(){

        // Begin input common focus and blur for value.
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function () {
            var inputText = $(this).attr('placeholder')
            $(this).focus(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                }
            }).blur(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                    $(this).parent().removeClass('active');
                } else if ($(this).val().length > 0) {
                    $(this).parent().addClass('active');
                }
            });
        });
        // Ends input common focus and blur for value.
        
          $(".scrollbottom").click(function() {
              //var HeroHeight = $(".commercial-content > .welcome-section").outerHeight();
            $("body, html").stop(true, true).animate({
                    scrollTop: $("#scrollFace").offset().top
            }, 800)
        });

        
        if($(".about-content").length){
            $("body").addClass('about-page');
           }
        
        if ($(".dark-footer").length){
            $("body").addClass('dark-footer');
        }

        
        
        
        if ($(".commercial-content").length){
            $("body").addClass('commercial-body');
        }
        
        
        

        // Phone nav click function
        $('.phone-nav').click(function(){
            $("body").toggleClass("navShown");
            $("#modal-wrap").fadeIn()
        });

        $('.footer-menu').click(function(){
            $("body").toggleClass("footerNav");
        })
        

        if($(window).width() < 768){
            var cardHeight = $('.ItemCard__thumb').height()+10,
                    bottomAngle = $('.bottom-angle');
            bottomAngle.css("top",cardHeight);
            $(window).on('resize', function(){
                var cardHeight = $('.ItemCard__thumb').height()+10;
                bottomAngle.css("top",cardHeight);
            });
        }

  
    
        
        if ($('.parallax-slide-info').length) {
            if ($(window).width() > 1024) {
                $('.parallax-slide-info').parally({

                    mode: 'transform',
                    xpos: '50%',
                    offset: 0
                });
            }
        };

        if ($('.parallax-fore').length) {
            if ($(window).width() > 1024) {
                $('.parallax-fore').each(function () {
                    $(this).parally({
                        speed: 0.06,
                        mode: 'transform',
                        offset: 0
                    });
                })
            }
        };
        if($('.paralax-effect').length){
            if($(window).width() > 1024){
               $('.paralax-effect').parally({
                    speed: 0.15,
                    mode: 'background',
                    xpos: '50%',
                    outer: true,
                    offset: 0

                });
            }
         };

              if ($(window).width() > 767) {
                    $(window).scroll(function () {
                        // The social div
                            var heroInfo = $('.hero-info'),
                                heroWrap = $('.link-wrap'),
                                $content = [heroInfo, heroWrap];


                        //Get scroll position of window
                        var windowScroll = $(this).scrollTop();

                        //Slow scroll of social div and fade it out
                        if(windowScroll > 50){
                            for(var i=0; i<$content.length; i++){
                                $content[i].addClass("go-top");
                            }
                        }else{
                            for(var i=0; i<$content.length; i++){
                                $content[i].removeClass("go-top");
                            }
                        }
                    });
              }

        if($("#carousel").length){
            $('#carousel').slick({
               dots: true,
                infinite: false,
                arrows:false,
                 //autoplaySpeed: 2000,
                infinite:true,
                autoplay:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover:true,/**/

            })
        }
        
       if($("#projects-slide").length){ 
           var mySwiper = new Swiper('.swiper-container', {
               draggable:false,
               slidesPerView: '2',
               shortSwipes: false,
               spaceBetween: 0,
               loop:true,
               speed: 400,
               autoplay: {
                   delay: 4000,
               },

               breakpoints: {

                   767: {
                       slidesPerView: 1,
                       spaceBetween: 0,
                   },
                   320: {
                       slidesPerView: 1,
                       spaceBetween: 0,
                   }
               }
           });
       }
       
       
        $('#direction-wrap').on('click', function() {
             mySwiper.slideNext();
         }); 

        if($(".commercial-content").length){
            $("body").addClass("footer-black")
        }
        
        
        if ($("#trigger").length) {


            $('#trigger').magnificPopup({
                items: [

                    {
                        src: 'https://vimeo.com/326606254',
                        type: 'iframe' // this overrides default type
                },

            ],
                gallery: {
                    enabled: true
                },
                type: 'image' // this is default type
            });

        }
        
        
        
        if ($(window).width() > 767) {
            $.fn.isInViewport = function () {
                var elementTop = $(this).offset().top + 139;
                var elementBottom = elementTop + $(this).outerHeight() - 417;
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                return elementBottom > viewportTop && elementTop < viewportBottom;
            };
            $(window).on('resize scroll', function () {
                $('.blackLogo-area').each(function () {
                    if ($(this).isInViewport()) {
                        $(this).addClass('show-blackLogo')
                    } else {
                        $(this).removeClass('show-blackLogo')
                    }
                });
                $('.whitLogo-area').each(function () {
                    if ($(this).isInViewport()) {
                        $(this).addClass('show-whitLogo')
                    } else {
                        $(this).removeClass('show-whitLogo')
                    }
                });
            });
        }  
        
        /*if ($(window).width() > 767) {
            $.fn.onInViewport = function () {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                return elementBottom > viewportTop && elementTop < viewportBottom;
            };
            $(window).on('resize scroll', function () {
                
                $('.blackNav-area').each(function () {
                    if ($(this).onInViewport()) {
                        $(this).addClass('show-blackNav')
                    } else {
                        $(this).removeClass('show-blackNav')
                    }
                });
                
              
            });
        }*/
        

        
      if ($(".animate").length) {
      var $animation_elements = $('.animate');
      var $window = $(window);

      function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);

          //check to see if this current container is within viewport
          if (element_top_position <= window_bottom_position) {
            $element.addClass('in-view');
          } /*else {
            $element.removeClass('in-view');
          }*/
        });
      }

      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll');
    }




	})// End ready function.


})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
