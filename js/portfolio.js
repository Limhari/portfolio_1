;(function($){

    var portfolio = {

        btn :0,

        init:function(){
            this.scrollFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();            

        },
        



        scrollFn: function(){

            var $win      = $ (window);
            var $header   = $ ('#header');
            var scrollOld = 0;
            var scrollNew = 0;    
         
            
            
            var result  = null;
            var that    = this;
            var $logoImg   = $('#header #logo a img'); 



  
            function scrollFn(){
  
                    scrollNew = $win.scrollTop();
                   
                    var scr  = function(){                     
                        result = scrollOld-scrollNew > 0 ? 'UP' : 'DOWN';                        
                    }                    
                    scr(); 

                    
                  if( $win.scrollTop() <= 0 ){

                        $header.removeClass('addHide');
                        $header.removeClass('addWhite');
                        $header.removeClass('addWhite2');


                        if( $win.innerWidth() > 990 ){                                        
                            $logoImg.attr('src','./img/logo-white.png');  
                        }

                        else {                           
                            $logoImg.attr('src','./img/logo-gradient-tan-geraldine.png');                        
                        }
                   }


                   
                    else{
                        
                        if(result == 'UP'){
  
                          
                          if( that.btn == 1 ){
                            $header.removeClass('addHide');
                            $header.addClass('addWhite');
                            $header.addClass('addWhite2');
                          }
                          else{
                            $header.removeClass('addWhite2');
                            $header.removeClass('addHide');
                            $header.addClass('addWhite');
                            $logoImg.attr('src','./img/logo-gradient-tan-geraldine.png');
                          }
  
                        }
                        if(result == 'DOWN'){
   
                          
                          if( that.btn == 1 ){
                            $header.removeClass('addWhite');
                            $header.removeClass('addHide'); 
                            $header.addClass('addWhite2');
                            $logoImg.attr('src','./img/logo-gradient-tan-geraldine.png');
                          }
                          else{
                            $header.removeClass('addWhite2');
                            $header.removeClass('addWhite');
                            $header.addClass('addHide'); 
                              
                          }
                        }
                    }
                    scrollOld = scrollNew;
                }
  
                $win.scroll(function(){
                    scrollFn();
                });



            },








        headerFn:function(){

         


            
            var $mainBtn = $ ('.main-btn');
            var $subBtn  = $ ('.sub-btn');
            var $subSubBtn = $ ('.sub-sub-btn')
            
            var $sub     = $ ('.sub');
            var $subSub  = $ ('.sub-sub');
            var $subSubsub = $ ('.sub-sub-sub');

            var $navUlLi = $ ('#nav > ul > li');

            //햄버거 버튼
            var $hamBtn = $('.ham-btn');
            var $bar    = $('.bar');
            var $nav    = $('#nav');

            var $window = $(window);
            var pc = 0;
            var mobile = 0
            var that = this;
            var $logoImg   = $('#header #logo a img');

            






            function pcEventFn(){

                $nav.stop().show();
                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubsub.stop().hide();
                $nav.css({display:'inline-block'});
                
                $logoImg.attr('src','./img/logo-white.png');


                // 메인버튼
                $mainBtn.on({
                    mouseenter:function(){
                        $(this).next().stop().show();
                    }
                });

                $navUlLi.on({
                    mouseleave:function(){
                        $sub.stop().hide();
                    }
                });

                //서브-서브 버튼
                $subBtn.on({
                    mouseenter:function(){
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });

                $navUlLi.on({
                    mouseleave:function(){
                        $subSub.stop().hide();
                    }
                });



                //서브-서브-서브-버튼
                $subSubBtn.on({
                    mouseenter:function(){
                        $subSubsub.stop().hide();
                        $(this).next().stop().show();
                    }
                });

                $subSub.on({
                    mouseleave:function(){
                        $subSubsub.stop().hide();  
                    }
                });
             
                
                 
            }


            function mobileEventFn(){

                
                $sub.stop().hide();
                $subSub.stop().show();
                $subSubsub.stop().show();
                $bar.removeClass('addHam'); 
                $nav.stop().slideUp(0);


                
                $logoImg.attr('src','./img/logo-gradient-tan-geraldine.png');

        


                $mainBtn.off('mouseenter');
                $navUlLi.off('mouseleave');
                $subBtn.off('mouseenter');
                $subSubBtn.off('mouseenter');
                $subSub.off('mouseleave');


            }


            //피씨모바일 함수
            function pcMobileFn(){
                if( $window.innerWidth() > 990 ){
                    pc = 1;
                    mobile = 0; 
                    pcEventFn();
                    that.btn = 0;
                }                
                else {
                    pc = 0;
                    mobile = 1;
                    mobileEventFn();
                }
            }setTimeout(pcMobileFn,100);



            //리사이즈
            $window.resize(function(){
                pcMobileFn(); 
            });

            
            mobileEventFn();


            //햄버거 버튼
            $hamBtn.on({
                click:function(){
                    $bar.toggleClass('addHam'); 
                    $nav.stop().slideToggle(300);  

                    that.btn == 0 ? that.btn = 1 : that.btn = 0;

                }
            });

            // 메인버튼
            $mainBtn.on({
                click:function(){
                    if(mobile==1){
                        $sub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });


                
        },



        section1Fn:function(){

            var $window      = $(window);
            var $winW        = $(window).width();
            var $winH        = $(window).height();
           
            var $section1    = $ ('#section1');
            var $slide       = $ ('#section1 .slide');
            var $slideWrap   = $ ('#section1 .slide-wrap');
            var $slideView   = $ ('#section1 .slide-view');
            var $nextBtn     = $ ('#section1 .next-btn');
            var $prevBtn     = $ ('#section1 .prev-btn');   
            var $pageBtn     = $ ('#section1 .page-btn');   
            var cnt = 0;

            var setId = null;

            
            
            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                if(window.orientationchange == 0 || window.orientationchange == 180 ){
                    $winH = $(window).height();
                }
                else if(window.orientationchange == 90 || window.orientationchange == -90){
                    $winH = 600;
                }                  
                $section1.css({width:$winW, height:$winH});
                $slide.css({width:$winW});
                mainSlideFn();
            }
            resizeFn();

            $window.resize(function(){
                resizeFn();
            });

          


            // 슬라이드함수
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$winW*cnt},600,function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    $slideWrap.stop().animate({left:-$winW*cnt},0);                    
                });               
                pageColorBtnFn();
            }
            

            function nextSlideFn(){
                cnt++;
                mainSlideFn();
            }

            function prevSlideFn(){
                cnt--;
                mainSlideFn();
            }

            $nextBtn.on({
                click:function(){
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideFn();
                    }                    
                }
            });

            $prevBtn.on({
                click:function(){
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideFn();   
                    }                    
                }
            });

            function pageColorBtnFn(){
                if(cnt>2){cnt=0;}
                $pageBtn.removeClass('addpage');
                $pageBtn.eq(cnt).addClass('addpage');
            }
            pageColorBtnFn();

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        stopTimerFn();
                        cnt=idx;
                        mainSlideFn();
                    }
                });
            });


            $slideView.swipe({
                swipeLeft:function(event){
                    event.preventDefault();
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideFn();
                    }
                    

                },
                swipeRight:function(event){
                    event.preventDefault();
                    stopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideFn();
                    }
                   
                }

            });


            function autoTimerFn(){
                setId = setInterval(nextSlideFn,5000);
            }
            autoTimerFn();


            var t = 0;
            var setId2 = null;

            function stopTimerFn(){                
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>=5){
                        t = 0;
                        clearInterval(setId2);
                        clearInterval(setId);
                        nextSlideFn();
                        autoTimerFn();
                    }
                },1000);

            }



           




        },

        section2Fn:function(){

        },

        section3Fn:function(){

        },
        section4Fn:function(){

        },


        section5Fn:function(){


            var $slideWrap = $ ('#section5 .slide-wrap');            
            var cnt        = 0;
            var n          = $ ('#section5 .slide').length-6-1;
            var $prevBtn   = $ ('#section5 .prev-btn');
            var $nextBtn   = $ ('#section5 .next-btn');
            var $slideView = $ ('#section5 .slide-view');

            var $window    = $ (window);
            var $slideW    = $ ('#section5 .slide').innerWidth();

                               
            

            

            function responseFn(){
                $slideW    = $ ('#section5 .slide').innerWidth();
                boxSlideFn();
            }
            setTimeout(responseFn,100);
            

            $window.resize(function(){
                responseFn();
            });


            

            function boxSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600,function(){
                    if(cnt>n){cnt=0}
                    if(cnt<0){cnt=n}
                    $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });              
            }


            function nextCountFn(){
                cnt++;
                boxSlideFn();              
            }

            function prevCountFn(){
                cnt--;
                boxSlideFn();              
            }



            $nextBtn.on({
                click:function(){                    
                    autoStopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                    }
                }
            });

            $prevBtn.on({
                click:function(){
                    autoStopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                    }              
                }
            });


            $slideView.swipe({
                swipeLeft:function(){
                     autoStopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                    }
                    
                },
                swipeRight:function(){
                   autoStopTimerFn();
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                    }
                   
                },
            });

            
    

            function autoPlayFn(){        
                setId = setInterval(nextCountFn,4000);        
            }
            autoPlayFn();            
          

            var t2 = 0;  
            var setId  = null;  
            var setId2 = null;
        



            function autoStopTimerFn(){                              
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){ 
                    t2 = 0;
                    t2++;                    
                    if(t2>=4){                                                                          
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextCountFn();
                        autoPlayFn();                                            
                    }
                },1000);

            }







        },

        section6Fn:function(){

            var $playModal    = $ ('#playModal');
            var $youtubeBtn   = $ ('#section6 .youtube-btn');
            var $contentPlay  = $ ('#playModal .content-play');

            //var $leafImg      = $ ('#section6 img');

            $youtubeBtn.each(function(index){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        $playModal.stop().fadeIn(600);
                        $contentPlay.css({'background-image': 'url(./img/spa-image-13' + '.jpg)'});  
                    }
                });
            });

            $playModal.on({
                click:function(event){
                    event.preventDefault();
                    $playModal.stop().fadeOut(300);
                }
            });

            $contentPlay.on({
                click:function(event){
                    event.stopPropagation();
                }
            });


            //$leafImg.attr('src','./img/form-bg.jpg');







        },

        section7Fn:function(){

        },

        section8Fn:function(){

        var $window     = $(window);
        var $slideWrap  = $ ('#section8 .right-slide-wrap');
        var $slideW     = $ ('#section8 .slide').innerWidth(); 
        var $slideView  = $ ('#section8 .right-slide-view');
        var $container  = $ ('#section8 .container').innerWidth();


        var $nextBtn    = $ ('#section8 .next-btn');
        var $prevBtn    = $ ('#section8 .prev-btn');
        var cnt         = 0;



        
       
        function responseFn(){
            $slideW    = $ ('#section8 .slide').innerWidth();           
            halfSlideFn();
        }
        responseFn();
        

        $window.resize(function(){
            responseFn();
        });



        function halfSlideFn(){
            $slideWrap.stop().animate({ left:-$slideW*cnt }, 600,function(){
                if(cnt>2){cnt=0}
                if(cnt<0){cnt=2}
                $slideWrap.stop().animate({ left:-$slideW*cnt },0);
     
            });             
        }

        function nextBoxSlideFn(){
            cnt++;
            halfSlideFn();
        }

        function prevBoxSlideFn(){
            cnt--;
            halfSlideFn();
        }

        $nextBtn.on({
            click:function(){
                timerFn();
                if(!$slideWrap.is(':animated')){
                    nextBoxSlideFn();
                }              
               
            }
            
        });


        $prevBtn.on({
            click:function(){
                timerFn();
                if(!$slideWrap.is(':animated')){
                    prevBoxSlideFn();
                } 
            }
            
        });

        $slideView.swipe({
            swipeLeft:function(){
                timerFn();
                nextBoxSlideFn();
            },
            swipeRight:function(){
                timerFn();
                prevBoxSlideFn();
            }
        });


        function autoPlayFn(){
            setId = setInterval(nextBoxSlideFn,4000);
        }
        autoPlayFn();

        var t3 = 0;
        var setId = null;
        var setId2 = null;


        function timerFn(){        
            clearInterval(setId);  
            clearInterval(setId2);  
            setId2 = setInterval(function(){
                t3 = 0;
                t3++;
                if(t3>=4){
                  clearInterval(setId);  
                  clearInterval(setId2);  
                  nextBoxSlideFn(); 
                  autoPlayFn();
                }
            },1000);
        }






        },

        section9Fn:function(){

           var $ul     = $('#section9 .container > ul > li ul');
           var column0 = $('#section9 .container > ul > li').eq(0);
           var column1 = $('#section9 .container > ul > li').eq(1);
           var column2 = $('#section9 .container > ul > li').eq(2);
           var column3 = $('#section9 .container > ul > li').eq(3);
           
           var cnt1 = [0,0,0,0];
           var cnt2 = [0,0,0,0];
           var cnt3 = [0,0,0,0];
           var cnt4 = [0,0,0,0];

           var setId1 = [null,null,null,null];
           var setId2 = [null,null,null,null];
           var setId3 = [null,null,null,null];
           var setId4 = [null,null,null,null];
          
           var num1   = [];
           var num2   = [];
           var num3   = [];
           var num4   = [];


           var timer  = 2;
           var t = 0;


               
               column0.find('.col').each(function(idx){
                num1[idx] =  $(this).data('number');
               }); 
               column1.find('.col').each(function(idx){
                num2[idx] =  $(this).data('number');
               }); 
               column2.find('.col').each(function(idx){
                num3[idx] =  $(this).data('number');
               }); 
               column3.find('.col').each(function(idx){
                num4[idx] =  $(this).data('number');
               }); 

               setTimeout(countFn,500);
 
          



          $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section9').offset().top-700  ){
              if(t==0){
                t=1;               
                $('#section9 .wrap .gap .container > ul').addClass('addCounter');                
                // setTimeout(formatFn,100);              
                // setTimeout(countFn,500); 
                setTimeout(function(){
                    formatFn();
                    setTimeout(countFn,500);
                },100);
              }                
            }




            if( $(window).scrollTop() === 0 ){
              t=0;
              cnt1 = [0,0,0,0];
              cnt2 = [0,0,0,0];
              cnt3 = [0,0,0,0];
              cnt4 = [0,0,0,0];         
              $('#section9 .wrap .gap .container > ul').removeClass('addCounter');         
            }

          });    




          function formatFn(){
            $ul.css({top:0});
          }
        //   setTimeout(formatFn,100);
        //   setTimeout(countFn,1500);
        


          function countFn(){
              //1열
              setId1.forEach(function(el,idx){
                setId1[idx] = setInterval(function(){
                  cnt1[idx]++;
                  if( cnt1[idx] > 65*num1[idx] ){
                    clearInterval(setId1[idx]);
                  }
                  else{
                    column0.find('ul').eq(idx).css({ top: -cnt1[idx] });
                  }
                },timer);
              });
              


              //2열               
                setId2.forEach(function(el,idx){

                  setId2[idx] = setInterval(function(){
                    cnt2[idx]+=1;
                    if( cnt2[idx] > 65*num2[idx] ){
                      clearInterval(setId2[idx]);
                    }
                    else{
                      column1.find('ul').eq(idx).css({ top: -cnt2[idx] });
                    }
                  },timer);
               
                });
              
              

              //3열                        
                setId3.forEach(function(el,idx){
                  setId3[idx] = setInterval(function(){
                    cnt3[idx]+=1;
                    if( cnt3[idx] > 65*num3[idx] ){
                      clearInterval(setId3[idx]);
                    }
                    else{
                      column2.find('ul').eq(idx).css({ top: -cnt3[idx] });
                    }
                  },timer);               
                });


              //4열                       
              setId4.forEach(function(el,idx){
                setId4[idx] = setInterval(function(){
                  cnt4[idx]+=1;
                  if( cnt4[idx] > 65*num4[idx] ){
                    clearInterval(setId4[idx]);
                  }
                  else{
                    column3.find('ul').eq(idx).css({ top: -cnt4[idx] });
                  }
                },timer);
              });
            }

            // setTimeout(function(){
            //     formatFn();
            //     setTimeout(countFn,500)
            // },100);



        },

        section10Fn:function(){

        },



    }

    portfolio.init();

})(jQuery);