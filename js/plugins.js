$(document).ready(function(){
/// time slide go to slide  two 
	$('.carousel').carousel({
		interval:3000
	});
// end time out  to Slide Show 




	
	/*$('div.collapse  ul.nav li').mouseleave(function(){
		$('div.collapse  ul.nav li a').removeClass("active");
		$('li:first-child').toggleClass("active");*/

	});

/* Start Loading */
    $(window).on("load", function(){

  $(".loading-overlay .spinner").fadeOut(2000 , 
    function(){
      $(this).parent().fadeOut(2000 , 
        function(){
          $("body").css("overflow" , "auto");
          $(this).remove();

        });
  });
});





