$(document).ready(function() {

    var classList = document.body.classList;
    var move_left = document.getElementById('arrow-left');
    var move_right = document.getElementById('arrow-right');
    var tape = document.getElementById('tape');
    var slides = document.getElementsByClassName('slider-content');
    
    if($(window).width()<866){
        console.log('lox');
        $('.down-header').insertAfter($('#dest'));
    }
    
//    if($(window).width()<866){
//        for(var i=0; i<4; i++)
//            { 
//                ($('.box-img')[i]).insertBefore($('.description')[i]);
//            }
//       
//    }
    
    
//    if ($(window).width()>1024 && $(window).width()<1241 ){
//        calculateCols();
//        calculateSlides();
//    }
//
//    function calculateCols(){
//        var newPercentage = $('.wrapper').width() - 80;
//        $('#content').css('width', newPercentage*0.66666 + 'px');
//        $('.col2').css('width', newPercentage*0.333333 + 'px');
//        console.log('Curr width = '+ newPercentage);
//    }
//    
//    function calculateSlides(){
//        var newOverflowPercetage = $('.slider').width() - 46;
//         var newTapePercentage = newOverflowPercetage*2.3596 - 294;
//        $('.slider-content').css('width', newTapePercentage*0.142485 + 'px');
//    }
//
//    $(window).resize(function(){
//        if (($(window).width()>1024 && $(window).width()<1241) || $(window).width() == 1600){
//            calculateCols();
//            calculateSlides();
//        }   
//    });
//    
    
    
    

    var position = 0;
    $(".arrow-right").click( function(e){
        var delta = 42;
        if($(window).width()<769)
            delta = 65;
       position -= ($('.slider-content').width() + delta);
       e.preventDefault();
       if(position < -($('.slider-content').width() + delta)*4){
           position = 0;
       }
       tape.style.left = position + 'px';

    //           }        
    })
    $(".arrow-left").click( function(e){
        var delta = 42;
        if($(window).width()<769)
            delta = 65;
       e.preventDefault();
      if(position < 0){
          position += ($('.slider-content').width() + delta)
          tape.style.left = position + 'px';
       }
        else{
            position = -($('.slider-content').width() + delta)*4;
          tape.style.left = position + 'px';
        }

    })

    var timerId = setInterval(move2Slide, 3000);
    function move2Slide(){
        var delta = 42;
        if($(window).width()<769)
            delta = 65;
       position -= ($('.slider-content').width() + delta)*2;
       if(position < -($('.slider-content').width() + delta)*4){
           position = 0;
       }
       tape.style.left = position + 'px';
        }

    $(".slider").hover(handlerIn, handlerOut);
    function handlerIn(){
    clearInterval(timerId);
    console.log("net");
    }
    function handlerOut(){
    timerId = window.setInterval(move2Slide, 3000);
    }

    
    
    
    
    var mtime = 800;

    $("#sendButton").click(function(e){
    var size = $('#popup-wrapper').width()*1.25;
    var mrgLeft = size/2;
    var mrgBot = size*0.083;
    e.preventDefault();
    $("#popup-wrapper").fadeIn(mtime);
    $("#popup-box").fadeIn(mtime, function(){
    //            $('#popup-wrapper').animate({marginLeft: -375+'px'},1000);
        $('#popup-wrapper').animate({width: size + 'px', marginLeft: -mrgLeft + 'px'},700);
        $('.input-form').animate({marginBottom: mrgBot + 'px'}, mtime);
        $('.mark').animate({marginBottom: mrgBot/2 + 'px'}, mtime);
    });
    });


    $(".popup-position").click(function(){
    var size = $('#popup-wrapper').width()*0.8;
    var mrgLeft = size/2;
    $('#popup-wrapper').animate({width: size + 'px', marginLeft: -mrgLeft + 'px'},1000);
    $('.input-form').animate({marginBottom: 0+'px'}, mtime);
    $('.mark').animate({marginBottom: 0+'px'}, mtime);
    $("#popup-box").fadeOut(mtime);
    $("#popup-wrapper").fadeOut(mtime); 

    });
    
    

    $("#menubutton").click(function(e){
        e.preventDefault();
        console.log('lox');
        $('.language').fadeIn(200);
                           
    });
    
})

$(document).mouseup(function (e) {
    if($(window).width() < 866){
        var container = $(".language");
    if (container.has(e.target).length === 0){
        container.fadeOut(200);
    }
    }
    
});
    
                 