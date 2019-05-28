svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

    /** слайдер уровня владения js */

    var exponentialslider = document.querySelector(".level__input");    

    var func =  function () {
        var exp = document.querySelector(".level__block");
        exp.style.width = exponentialslider.value * 10 + "%";
    };

    func();

    exponentialslider.oninput = function () {
        func();
    };

    exponentialslider.onchange = function () {
        func();
    };

    
   
   
   /** перенос строк */ 
    
   var spanInserted = $('.about-text__block').html().split(" ").join(" </span><span>");
   var wrapped = ("<span>").concat(spanInserted, "</span>");
   $('.about-text__block').html(wrapped);
   var refPos = $('.about-text__block span:first-child').position().top;
   var newPos;
   $('.about-text__block span').each(function(index) {
       newPos = $(this).position().top   
       if (index == 0){
          return;
       }
       if (newPos == refPos){
           $(this).prepend($(this).prev().text() + " ");
           $(this).prev().remove();
       } 
       refPos = newPos;
   });

   $('.about-text__block span').addClass('about-text--db');

 

});


